import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import questionsData from "../awsquestion.js";

function Practitionner() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    questions = [],
    duration = 2100, // en secondes (35 min par défaut)
  } = location.state || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(duration);
  const [timeUp, setTimeUp] = useState(false);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit(true);
      setTimeUp(true);
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Vérifie si réponse correcte
  const isAnswerCorrect = (question, userAnswers) => {
    const correct = question.correctAnswers.map((id) => question.options[id]).sort().toString();
    const user = [...(userAnswers || [])].sort().toString();
    return correct === user;
  };

  // Soumettre les réponses
  const handleSubmit = (timeExpired = false) => {
    let totalCorrect = 0;
    questions.forEach((q, i) => {
      if (isAnswerCorrect(q, selectedAnswers[i])) {
        totalCorrect++;
      }
    });

    navigate("/score", {
      state: {
        score: totalCorrect,
        total: questions.length,
        timeUp: timeExpired,
        questions,
        selectedAnswers,
      },
    });
  };

  // Gérer les changements de réponses
  const handleAnswerChange = (answer) => {
    const current = selectedAnswers[currentIndex] || [];

    // Si réponse multiple
    if (questions[currentIndex].correctAnswers.length > 1) {
      if (current.includes(answer)) {
        setSelectedAnswers({
          ...selectedAnswers,
          [currentIndex]: current.filter((a) => a !== answer),
        });
      } else {
        setSelectedAnswers({
          ...selectedAnswers,
          [currentIndex]: [...current, answer],
        });
      }
    } else {
      // Si réponse unique
      setSelectedAnswers({
        ...selectedAnswers,
        [currentIndex]: [answer],
      });
    }
  };

  // Désélectionner toutes les réponses
  const deselectAll = () => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: [],
    });
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  // Timer visuel
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = ((duration - timeLeft) / duration) * circumference;

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* Grille des questions */}
      <div
        className="absolute top-0 right-4 p-1 border rounded bg-gray-900 shadow"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(22, 18px)",
          gap: "3.5px",
        }}
      >
        {questions.map((_, index) => {
          const answered = selectedAnswers[index]?.length > 0;
          const flagged = flaggedQuestions[index];

          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-5.1 h-5.2 flex items-center justify-center border rounded-2xl text-[12px] font-bold transition duration-215
                ${answered ? "bg-green-500 text-amber-950" : "bg-fuchsia-600 text-white"}
                hover:scale-110 hover:shadow-md`}
              title={`Question ${index + 1}`}
            >
              {flagged ? "🚩" : index + 1}
            </button>
          );
        })}
      </div>

      {/* Bloc question */}
      <div className="mt-27 border p-6 rounded bg-white shadow relative">
        {/* Timer et Flag */}
        <div className="absolute top-1 right-3 flex items-center gap-7">
          <svg width="60" height="60">
            <circle cx="30" cy="30" r={radius - 15} stroke="#ddd" strokeWidth="5" fill="none" />
            <circle
              cx="30"
              cy="30"
              r={radius - 15}
              stroke="#f97316"
              strokeWidth="5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              strokeLinecap="round"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#333"
            >
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </text>
          </svg>

          <button onClick={toggleFlag} className="text-xl" title="Flagger cette question">
            🚩
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">Question {currentIndex + 1}</h2>

        <p className="text-lg font-medium mb-2">
          {questions[currentIndex].question.replace(/\s+[A-E]\.\s.+$/, "")}
          {questions[currentIndex].correctAnswers.length > 1 && (
            <span className="text-sm font-semibold text-gray-600">
              (Choisissez plusieurs options)
            </span>
          )}
        </p>

        {/* Options avec checkbox ou radio */}
        <div className="mb-4">
          {questions[currentIndex].correctAnswers.length > 1 && (
            <button
              onClick={deselectAll}
              className="mb-3 text-sm text-red-600 underline"
            >
              ❌ Tout désélectionner
            </button>
          )}

          {questions[currentIndex].options.map((opt, idx) => (
            <label
              key={idx}
              className="block p-2 mb-2 border rounded cursor-pointer hover:bg-gray-100"
            >
              <input
                type={
                  questions[currentIndex].correctAnswers.length > 1 ? "checkbox" : "radio"
                }
                name={`question-${currentIndex}`}
                checked={selectedAnswers[currentIndex]?.includes(opt) || false}
                onChange={() => handleAnswerChange(opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            ⬅ Précédent
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Suivant ➡
            </button>
          ) : (
            <button
              onClick={() => handleSubmit(false)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              ✅ Terminer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Practitionner;
