import { useNavigate } from "react-router-dom";
import questionsData from "../awsquestion.js";

function Accueil() {
  const navigate = useNavigate();

  // Fonction pour mélanger les questions
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">📚 Sélectionnez votre niveau</h1>

      <div className="flex gap-4">
        {/* ✅ Niveau Practitioner : 25 questions */}
        <button
          onClick={() =>
            navigate("/practitionner", {
              state: { questions: shuffleArray([...questionsData]).slice(0, 25) },
            })
          }
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600"
        >
          🎯 Niveau Practitioner
        </button>

        {/* ✅ Niveau Associate : 65 questions */}
        <button
          onClick={() =>
            navigate("/practitionner", {
              state: { questions: shuffleArray([...questionsData]).slice(0, 65) },
            })
          }
          className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600"
        >
          🎓 Niveau Associate
        </button>
      </div>
    </div>
  );
}

export default Accueil;
