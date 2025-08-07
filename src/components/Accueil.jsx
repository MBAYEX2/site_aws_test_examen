// src/components/Accueil.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import awsOrange from "../assets/aws_orange.png"; // Import de l'image

export default function Accueil() {
  const navigate = useNavigate();

  const goToRoleSelector = () => {
    navigate("/roles", { replace: false });
  };

  const gradientStyle = {
    background: "linear-gradient(45deg, #FFB84D, #FF9900, #CC7A00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-center bg-cover text-white relative"
      style={{ backgroundImage: `url(${awsOrange})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto mt-32">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
          Bienvenue sur A
          <span style={gradientStyle} className="mx-1">
            W
          </span>
          S Nafar App
        </h1>

        <p className="mb-6 text-lg md:text-3xl leading-snug">
          Teste tes connaissances A
          <span style={gradientStyle} className="mx-1">
            W
          </span>
          S Cloud Practitioner &amp; Associate
        </p>

        <div>
          <button
            onClick={goToRoleSelector}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-lg shadow-lg transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Commencer le test"
          >
            Commencer
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4">
        <p className="text-white text-sm">&copy; 2025 AWS Nafar App. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
