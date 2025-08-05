import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import questionsData from "../awsquestion.js";

function AnswersReview() {
  const location = useLocation();
  const navigate = useNavigate();

  // Récupère les données (score/total/timeUp peuvent être absentes)
  const {
    questions = [],
    selectedAnswers = {},
    score = 0,
    total = questions.length || 0,
    timeUp = false,
  } = location.state || {};

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour mélanger un tableau
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Sélectionner uniquement les questions mal répondues
  const wrongQuestions = questions.filter((q, index) => {
    const correctAnswers = q.correctAnswers;
    const userAnswers = selectedAnswers[index] || [];

    const correctAsText = [...correctAnswers].sort().toString();
    const userAsText = q.options
      .map((opt, idx) => (userAnswers.includes(opt) ? idx : null))
      .filter((v) => v !== null)
      .sort()
      .toString();

    return correctAsText !== userAsText;
  });

  const q = wrongQuestions[currentIndex] || {};

  // Recommencer (nouvelles questions)
  const handleRetry = () => {
    navigate("/practitionner", {
      state: { questions: shuffleArray([...questionsData]).slice(0, questions.length || 25) },
    });
  };

  // Revenir au score — envoie les données disponibles vers /score
  const handleReturnToScore = () => {
    navigate("/score", {
      state: {
        score,
        total,
        timeUp,
        questions,
        selectedAnswers,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">📄 Correction des mauvaises réponses</h1>

      {q && (
        <div className="max-w-3xl w-full border p-4 rounded bg-white shadow">
          <h2 className="text-lg font-bold mb-4">
            {currentIndex + 1}. {q.question}
          </h2>

          <div className="space-y-2">
            {q.options.map((option, idx) => {
              const isCorrect = q.correctAnswers.includes(idx);
              const isSelected = selectedAnswers[questions.indexOf(q)]?.includes(option);

              let style = "bg-gray-50 border";
              let label = "";

              if (isCorrect) {
                style = "bg-green-100 border-green-500";
                label = "✅ Bonne réponse";
              }

              if (isSelected && !isCorrect) {
                style = "bg-red-100 border-red-500";
                label = "❌ Mauvaise réponse choisie";
              }

              return (
                <label key={idx} className={`flex items-center p-2 rounded border ${style}`}>
                  <input type="checkbox" checked={!!isSelected} readOnly className="mr-2" />
                  <span>{option}</span>
                  {label && <span className="ml-2 font-bold">{label}</span>}
                </label>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          ⬅ Précédent
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, wrongQuestions.length - 1))}
          disabled={currentIndex === wrongQuestions.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Suivant ➡
        </button>
      </div>

      <div className="flex flex-col items-center">
        <button
          onClick={handleRetry}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          🔄 Recommencer (Nouvelles questions)
        </button>

        {/* Nouveau bouton : revenir au score */}
        <button
          onClick={handleReturnToScore}
          className="mt-3 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          ⬅ Revenir au score
        </button>
      </div>
    </div>
  );
}

export default AnswersReview;
