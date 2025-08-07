import { useState } from "react";
import axios from "../api/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resetLink, setResetLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/forgot-password", { email });
      setMessage(res.data.message);
      setResetLink(res.data.resetLink); // 💡 simule le lien reçu par mail
    } catch (err) {
      setMessage(err.response?.data?.message || "Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Mot de passe oublié</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Envoyer lien de réinitialisation
        </button>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
        {resetLink && (
          <p className="mt-2 text-center text-xs text-green-600 break-all">
            🔗 <strong>Lien :</strong> {resetLink}
          </p>
        )}
      </form>
    </div>
  );
}
