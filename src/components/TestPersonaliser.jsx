import { useNavigate } from "react-router-dom";
import { useState } from "react";
import questionsData from "../awsquestion.js";

function TestPersonaliser() {
  const navigate = useNavigate();

  const [selectedCount, setSelectedCount] = useState(15);
  const [selectedDuration, setSelectedDuration] = useState(15); // en minutes

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Fonction générique pour démarrer le test
  const handleStart = (overrides = {}) => {
    const count = overrides.count ?? selectedCount;
    const durationMinutes = overrides.duration ?? selectedDuration;
    const durationInSeconds = durationMinutes * 60;

    const questions = shuffleArray([...questionsData]).slice(0, count);

    navigate("/Practitionner", {
      state: {
        questions,
        duration: durationInSeconds,
      },
    });
  };

  // Test rapide 65 questions / 90 minutes
  const start65x90 = () => handleStart({ count: 65, duration: 90 });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      {/* Conteneur central */}
      <div className="w-full max-w-3xl space-y-8">

        {/* 1er bloc : Test standard AWS */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-3">Test standard AWS</h2>
          <button
            onClick={start65x90}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base"
            title="Démarrer un test de 65 questions — 90 minutes"
          >
            ⚡ Test 65 questions — 90 min
          </button>
        </div>

        {/* 2e bloc : Test personnalisé */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">📚 AWS Cloud Practitioner Quiz</h1>

          <div className="flex flex-col sm:flex-row gap-6 mb-6 justify-center">
            {/* Sélection nombre de questions */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Nombre de questions</label>
              <select
                value={selectedCount}
                onChange={(e) => setSelectedCount(parseInt(e.target.value))}
                className="px-4 py-2 rounded-md border"
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
              <label className="mb-2 font-medium">Durée du test (minutes)</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
                className="px-4 py-2 rounded-md border"
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

          {/* Bouton démarrer le test personnalisé */}
          <div className="flex justify-center">
            <button
              onClick={() => handleStart()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              🚀 Démarrer le test personnalisé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPersonaliser;
