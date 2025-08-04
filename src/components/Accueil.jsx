import { useNavigate } from "react-router-dom";

function Accueil() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenue au Quiz AWS</h1>
      <p className="text-lg text-gray-700 mb-8">Choisissez votre niveau :</p>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/practitionner")}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Niveau Practitionner
        </button>

        <button
          onClick={() => navigate("/associate")}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
        >
          Niveau Associate
        </button>
      </div>
    </div>
  );
}

export default Accueil;
