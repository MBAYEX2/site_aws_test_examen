import { useNavigate } from "react-router-dom";
import { useState } from "react";
import questionsData from "../awsquestion.js";

function Accueil() {
  const navigate = useNavigate();

  const [selectedCount, setSelectedCount] = useState(15);
  const [selectedDuration, setSelectedDuration] = useState(15); // en minutes

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const handleStart = () => {
    const durationInSeconds = selectedDuration * 60;
    const questions = shuffleArray([...questionsData]).slice(0, selectedCount);

    navigate("/practitionner", {
      state: {
        questions,
        duration: durationInSeconds,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 AWS Cloud Practitioner Quiz</h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        {/* Sélection nombre de questions */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Nombre de questions</label>
          <select
            value={selectedCount}
            onChange={(e) => setSelectedCount(parseInt(e.target.value))}
            className="px-4 py-2 rounded border"
          >
            <option value={15}>15 questions</option>
            <option value={25}>25 questions</option>
            <option value={50}>50 questions</option>
            <option value={65}>65 questions</option>
            <option value={75}>75 questions</option>
            <option value={90}>90 questions</option>
            <option value={105}>105 questions</option>
          </select>
        </div>

        {/* Sélection durée */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Durée du test (minutes)</label>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
            className="px-4 py-2 rounded border"
          >
            <option value={15}>15 minutes</option>
            <option value={25}>25 minutes</option>
            <option value={35}>35 minutes</option>
            <option value={60}>60 minutes</option>
            <option value={65}>65 minutes</option>
            <option value={90}>90 minutes</option>
            <option value={115}>115 minutes</option>
            <option value={130}>130 minutes</option>
          </select>
        </div>
      </div>

      {/* Bouton démarrer */}
      <button
        onClick={handleStart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg"
      >
        🚀 Démarrer le test
      </button>
    </div>
  );
}

export default Accueil;
