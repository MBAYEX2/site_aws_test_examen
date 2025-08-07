import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import awsBackground from "../assets/aws_orange.png"; // ✅ Fond d'écran

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const res = await api.post("/auth/register", { email, password });
      setSuccess("Compte créé avec succès !");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${awsBackground})` }}
    >
      {/* Contenu du formulaire centré */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>

          {error && (
            <div className="mb-4 text-sm text-red-700 bg-red-100 p-2 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 text-sm text-green-700 bg-green-100 p-2 rounded">
              {success}
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
              <label className="block mb-1 font-medium">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Confirmer le mot de passe</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Confirmez votre mot de passe"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              S'inscrire
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Déjà un compte ?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Se connecter
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-white text-sm py-4">
        &copy; {new Date().getFullYear()} Mbaye | Tous droits réservés.
      </footer>
    </div>
  );
}
