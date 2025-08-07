// src/components/Accueil.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import awsLogo from "../assets/aws_orange.PNG";

export default function Accueil() {
  const navigate = useNavigate();

  const goToRoleSelector = () => {
    // On essaye d'abord la route normalisée en minuscules (/roles)
    // puis on tente la route avec casse originale si l'autre ne marche pas.
    // (Tu peux garder uniquement la première si tu as déjà corrigé App.jsx)
    navigate("/roles", { replace: false });
    // si tu veux forcer la route ancienne, décommente la ligne suivante :
    // navigate("/RoleSelector", { replace: false });
  };

  const gradientStyle = {
    background: "linear-gradient(45deg, #FFB84D, #FF9900, #CC7A00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover text-white relative"
      style={{
        backgroundImage: `url(${awsLogo})`,
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 text-center px-5 max-w-3xl">
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
    </div>
  );
}
