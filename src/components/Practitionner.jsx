import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import questionsData from "../awsquestion.js";

function Practitionner() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Récupérer les questions envoyées depuis l'accueil (ou toutes par défaut)
  const questions = location.state?.questions || questionsData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(120);
  const [timeUp, setTimeUp] = useState(false);

  // ⏳ Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit(true);
      setTimeUp(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // ✅ Vérifier la réponse correcte
  const isAnswerCorrect = (question, userAnswers) => {
    const correct = question.correctAnswers.map((id) => question.options[id]).sort().toString();
    const user = [...(userAnswers || [])].sort().toString();
    return correct === user;
  };

  // ✅ Soumettre et calculer le score
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

  // ✅ Gestion du choix de réponse
  const handleAnswerChange = (answer) => {
    const current = selectedAnswers[currentIndex] || [];
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
  };

  // ✅ Flag
  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  // ✅ Timer Visuel
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const totalTime = 120;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = ((totalTime - timeLeft) / totalTime) * circumference;

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* ✅ Grille des questions */}
      <div
        className="absolute top-0 right-4 p-0 border rounded bg-white shadow"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 24px)",
          gap: "4px",
        }}
      >
        {questions.map((_, index) => {
          const answered = selectedAnswers[index] && selectedAnswers[index].length > 0;
          const flagged = flaggedQuestions[index];

          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-6 flex items-center justify-center border rounded-full text-[10px] font-bold transition duration-200
                ${answered ? "bg-green-500 text-white" : "bg-orange-400 text-white"}
                hover:scale-110 hover:shadow-md`}
            >
              {flagged ? "🚩" : index + 1}
            </button>
          );
        })}
      </div>

      {/* ✅ Bloc Questions */}
      <div className="mt-20 relative border p-7 rounded bg-white shadow">
        {/* 🚩 Timer + Flag */}
        <div className="absolute top-4 right-2 flex items-center gap-5">
          <div className="flex items-center">
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
          </div>

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

        {/* ✅ Liste des options */}
        <div className="mb-4">
          {questions[currentIndex].options.map((opt, idx) => (
            <label
              key={idx}
              className="block p-2 mb-2 border rounded cursor-pointer hover:bg-gray-100"
            >
              <input
                type={questions[currentIndex].correctAnswers.length > 1 ? "checkbox" : "radio"}
                checked={selectedAnswers[currentIndex]?.includes(opt) || false}
                onChange={() => handleAnswerChange(opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>

        {/* ✅ Navigation */}
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
