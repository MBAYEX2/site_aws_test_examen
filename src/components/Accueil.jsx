import { useNavigate } from "react-router-dom";
import awsLogo from "../assets/aws_orange.png";
import "./Accueil.css"; // On crée un fichier CSS séparé pour l'animation

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover text-white relative"
      style={{
        backgroundImage: `url(${awsLogo})`,
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      <div className="relative z-10 text-center px-5">
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          Bienvenue sur A
          <span className="shiny-w">W</span>
          S Nafar App
        </h1>
        <p className="mb-5 text-3xl">
          Teste tes connaissances A
          <span className="shiny-w">W</span>
          S Cloud Practitioner & Associate
        </p>

        <button
          onClick={() => navigate("/RoleSelector")}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-black font-semibold rounded-lg shadow-lg transition-all duration-250"
        >
          Commencer
        </button>
      </div>
    </div>
  );
}
