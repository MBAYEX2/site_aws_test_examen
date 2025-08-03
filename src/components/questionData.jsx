import { useState } from "react";

// ⚠️ Plus tard, tu remplaceras ce tableau par l'import depuis awsquestion.js
// import questions from "../awsquestion.js";
import questions from "../awsquestion.js";

function QuestionData() {
  // ✅ TEMPORAIRE : tableau de test
  const getQuestions = () => questions;

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const questionsList = getQuestions();

  const handleAnswerChange = (qIndex, optionIndex, isMultiple) => {
    if (isMultiple) {
      const current = selectedAnswers[qIndex] || [];
      if (current.includes(optionIndex)) {
        setSelectedAnswers({
          ...selectedAnswers,
          [qIndex]: current.filter((i) => i !== optionIndex),
        });
      } else {
        setSelectedAnswers({
          ...selectedAnswers,
          [qIndex]: [...current, optionIndex],
        });
      }
    } else {
      setSelectedAnswers({ ...selectedAnswers, [qIndex]: [optionIndex] });
    }
  };

  const handleSubmit = () => {
    let total = 0;
    questionsList.forEach((q, i) => {
      const correct = [...q.correctAnswers].sort().toString();
      const user = [...(selectedAnswers[i] || [])].sort().toString();
      if (correct === user) total++;
    });
    setScore(total);
  };

  if (questionsList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold">Aucune question pour l’instant</h2>
      </div>
    );
  }

  const currentQuestion = questionsList[currentIndex];
  const isMultiple = currentQuestion.correctAnswers.length > 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">
        Question {currentIndex + 1} / {questionsList.length}
      </h2>

      <div className="w-full max-w-xl bg-white shadow p-4 rounded-lg">
        <p className="mb-4 font-semibold">{currentQuestion.question}</p>

        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((option, optionIndex) => (
            <label key={optionIndex} className="flex items-center gap-2">
              <input
                type={isMultiple ? "checkbox" : "radio"}
                name={`question-${currentIndex}`}
                checked={
                  selectedAnswers[currentIndex]?.includes(optionIndex) || false
                }
                onChange={() =>
                  handleAnswerChange(currentIndex, optionIndex, isMultiple)
                }
                className={isMultiple ? "checkbox" : "radio"}
              />
              {option}
            </label>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="bg-gray-400 hover:bg-gray-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg"
          >
            ◀ Précédent
          </button>

          {currentIndex < questionsList.length - 1 ? (
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(prev + 1, questionsList.length - 1)
                )
              }
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
            >
              Suivant ▶
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              ✅ Terminer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionData;
