import { useNavigate } from "react-router-dom";
import { useState } from "react";
import questionsData from "../awsquestion.js";
import  awsLogo from "./src/assets/aws.png";

function TestPersonaliser() {
  const navigate = useNavigate();

  const [selectedCount, setSelectedCount] = useState(15);
  const [selectedDuration, setSelectedDuration] = useState(15);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const handleStart = (overrides = {}) => {
    const count = overrides.count ?? selectedCount;
    const durationMinutes = overrides.duration ?? selectedDuration;
    const durationInSeconds = durationMinutes * 60;

    const questions = shuffleArray([...questionsData]).slice(0, count);

    navigate("/Practitionner", {
      state: { questions, duration: durationInSeconds },
    });
  };

  const start65x90 = () => handleStart({ count: 65, duration: 90 });

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-end bg-center bg-cover px-6 py-6 relative"
      style={{ backgroundImage: `url(${awsBg})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      {/* Conteneur central */}
      <div className="w-full max-w-3xl space-y-6 relative z-10 mb-8 animate-slide-up">
        {/* Bloc Test standard AWS (glass) */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white shadow-lg p-9 flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-9 text-neutral-50">Test standard AWS</h2>

          <button
            onClick={start65x90}
            className="btn-gradient w-auto px-6 py-2 rounded-lg text-white font-medium shadow-md transform transition-all duration-200 hover:scale-105"
            title="Démarrer un test de 65 questions — 90 minutes"
          >
            ⚡ 65 Question
             90 min
          </button>
        </div>

        {/* Bloc Test personnalisé (glass) */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center text-neutral-50">
            📚 Test AWS personnalisé
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 mb-6 justify-center">
            {/* Sélection nombre de questions */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-neutral-50">Nombre de questions</label>
              <select
                value={selectedCount}
                onChange={(e) => setSelectedCount(parseInt(e.target.value))}
                className="px-4 py-2 rounded-md border border-white/30 bg-white/40 backdrop-blur-sm text-black"
              >
                <option value={15}>15 questions</option>
                <option value={25}>25 questions</option>
                <option value={50}>50 questions</option>
                <option value={75}>75 questions</option>
                <option value={90}>90 questions</option>
                <option value={105}>105 questions</option>
              </select>
            </div>

            {/* Sélection durée */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-neutral-50">Durée du test (minutes)</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
                className="px-4 py-2 rounded-md border border-white/30 bg-white/40 backdrop-blur-sm text-black"
              >
                <option value={15}>15 minutes</option>
                <option value={25}>25 minutes</option>
                <option value={35}>35 minutes</option>
                <option value={60}>60 minutes</option>
                <option value={90}>90 minutes</option>
                <option value={115}>115 minutes</option>
                <option value={130}>130 minutes</option>
              </select>
            </div>
          </div>

          {/* Bouton démarrer */}
          <div className="flex justify-center">
            <button
              onClick={() => handleStart()}
              className="btn-gradient w-full sm:w-auto px-6 py-3 rounded-lg text-white font-semibold shadow-md transform transition-all duration-200 hover:scale-105"
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
