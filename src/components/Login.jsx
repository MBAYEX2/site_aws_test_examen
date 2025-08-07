// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios"; // assure-toi que le chemin est correct
//import awsLogo from "./src/assets/aws.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      // Attendu : { token, _id, email } ou similaire
      const token = res.data?.token || res.data?.accessToken;
      if (!token) throw new Error(res.data?.message || "Aucun token reçu");

      localStorage.setItem("authToken", token);
      if (res.data.email) localStorage.setItem("userEmail", res.data.email);

      // redirection vers la page protégée
      navigate("/accueil");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || err.message || "Erreur serveur";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96 mt-16 ml-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Entrez votre email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Baatu Jall</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-60"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Pas encore de compte ?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
}
