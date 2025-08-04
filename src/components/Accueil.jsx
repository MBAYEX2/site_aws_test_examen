import { useNavigate } from "react-router-dom";
import questionsData from "../awsquestion.js";

function Accueil() {
  const navigate = useNavigate();

  // Fonction pour mélanger les questions
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const handlePractitionerClick = () => {
    // Mélanger et prendre 25 questions
    const randomQuestions = shuffleArray([...questionsData]).slice(0, 25);

    navigate("/practitionner", { state: { questions: randomQuestions } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold">📚 Choisir un niveau</h1>

      <button
        onClick={handlePractitionerClick}
        className="px-6 py-3 bg-blue-500 text-white rounded text-lg"
      >
        🎓 Niveau Practitioner (25 Questions)
      </button>

      <button
        onClick={() => navigate("/associate")}
        className="px-6 py-3 bg-green-500 text-white rounded text-lg"
      >
        🎓 Niveau Associate (à définir)
      </button>
    </div>
  );
}

export default Accueil;
