import { useNavigate } from "react-router-dom";

function Accueil() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Choisissez votre niveau AWS</h1>

      <button
        onClick={() => navigate("/practitioner")} // ✅ redirection
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg mb-4"
      >
        AWS Practitioner
      </button>

      <button
        onClick={() => alert("Pas encore disponible")}
        className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
      >
        AWS Associate
      </button>
    </div>
  );
}

export default Accueil;
