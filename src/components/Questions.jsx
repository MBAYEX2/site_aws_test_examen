import { useState, useEffect } from "react";

function Questions({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Charger l'index sauvegardé au montage
  useEffect(() => {
    const savedIndex = localStorage.getItem("currentQuestionIndex");
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
  }, []);

  // 🔹 Sauvegarder l'index à chaque changement
  useEffect(() => {
    localStorage.setItem("currentQuestionIndex", currentIndex);
  }, [currentIndex]);

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">
        Question {currentIndex + 1} / {questions.length}
      </h2>

      <div className="w-full max-w-xl bg-white shadow p-4 rounded-lg">
        <p className="mb-5 font-semibold">{currentQuestion.question}</p>

        <ul className="space-y-3 mb-2">
          {currentQuestion.options.map((option, i) => (
            <li key={i} className="p-1 border rounded">
              {option}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="bg-gray-400 hover:bg-gray-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg"
          >
            ◀ Précédent
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(prev + 1, questions.length - 1)
                )
              }
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
            >
              Suivant ▶
            </button>
          ) : (
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              ✅ Terminer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questions;
