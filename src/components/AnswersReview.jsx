import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function AnswersReview() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total, timeUp, questions, selectedAnswers } = location.state || {
    score: 0,
    total: 0,
    timeUp: false,
    questions: [],
    selectedAnswers: {},
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Filtrer uniquement les mauvaises réponses
  const wrongQuestions = questions.filter((q, index) => {
    const correctAnswers = q.correctAnswers;
    const userAnswers = selectedAnswers[index] || [];

    const correctAsText = correctAnswers.sort().toString();
    const userAsText = q.options
      .map((opt, idx) => (userAnswers.includes(opt) ? idx : null))
      .filter((v) => v !== null)
      .sort()
      .toString();

    return correctAsText !== userAsText;
  });

  const q = wrongQuestions[currentIndex] || {};

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">📄 Correction des mauvaises réponses</h1>

      {q && (
        <div className="max-w-3xl w-full border p-4 rounded bg-white shadow">
          <h2 className="text-lg font-bold mb-4">
            {currentIndex + 1}. {q.question}
          </h2>

          <div className="space-y-2">
            {q.options.map((option, optIndex) => {
              const isCorrect = q.correctAnswers.includes(optIndex);
              const isSelected = selectedAnswers[questions.indexOf(q)]?.includes(option);

              return (
                <label
                  key={optIndex}
                  className={`flex items-center p-2 rounded border ${
                    isCorrect
                      ? "bg-green-100 border-green-500"
                      : isSelected
                      ? "bg-red-100 border-red-500"
                      : "bg-gray-50"
                  }`}
                >
                  <input type="checkbox" checked={isCorrect || isSelected} readOnly className="mr-2" />
                  <span>{option}</span>

                  {isCorrect && <span className="ml-2 text-green-600 font-bold">✅</span>}
                  {!isCorrect && isSelected && (
                    <span className="ml-2 text-red-600 font-bold">❌</span>
                  )}
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* ✅ Navigation entre questions */}
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

      {/* ✅ Bouton Recommencer */}
      <button
        onClick={() => navigate("/practitionner")}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        🔄 Recommencer
      </button>
    </div>
  );
}

export default AnswersReview;
