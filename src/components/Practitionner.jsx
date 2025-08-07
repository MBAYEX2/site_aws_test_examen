import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import questionsData from "../awsquestion.js";

function sanitizeQuestionText(text) {
  if (!text) return "";
  return text
    .replace(/\(Choisissez[^)]*\)/gi, "")
    .replace(/\s+[A-E]\.\s.+$/i, "")
    .trim();
}

export default function Practitionner() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    questions: routeQuestions,
    duration: routeDuration = 35 * 60,
  } = location.state || {};

  const questions =
    Array.isArray(routeQuestions) && routeQuestions.length > 0
      ? routeQuestions
      : questionsData || [];

  const duration = Number(routeDuration) || 35 * 60;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(duration);
  const [timeUp, setTimeUp] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const intervalRef = useRef(null);
  const finishedRef = useRef(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    setTimeLeft(duration);
    setTimeUp(false);
    finishedRef.current = false;

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          finishedRef.current = true;
          setTimeUp(true);
          setTimeout(() => handleSubmit(true), 150);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [duration]);

  useEffect(() => {
    const onBeforeUnload = (e) => {
      if (finishedRef.current) return undefined;
      e.preventDefault();
      e.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  useEffect(() => {
    if (!mountedRef.current) {
      try {
        window.history.pushState({ pract: true }, "");
        mountedRef.current = true;
      } catch (err) {}
    }

    const onPopState = () => {
      if (finishedRef.current) return;
      const confirmLeave = window.confirm(
        "Vous êtes sur le point de quitter le test. Vos réponses seront perdues si vous quittez. Voulez-vous vraiment partir ?"
      );
      if (!confirmLeave) {
        try {
          window.history.pushState({ pract: true }, "");
        } catch (err) {}
      } else {
        finishedRef.current = true;
        window.removeEventListener("beforeunload", () => {});
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const isAnswerCorrect = (question, userAnswers = []) => {
    if (!question) return false;
    const correctArr = (question.correctAnswers || []).map(
      (id) => question.options[id]
    );
    const correct = [...correctArr].sort().toString();
    const user = [...(userAnswers || [])].sort().toString();
    return correct === user;
  };

  const handleSubmit = (timeExpired = false) => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    let totalCorrect = 0;
    questions.forEach((q, i) => {
      const userAns = selectedAnswers[i] || [];
      if (isAnswerCorrect(q, userAns)) totalCorrect++;
    });

    navigate("/score", {
      state: {
        score: totalCorrect,
        total: questions.length,
        timeUp: !!timeExpired,
        questions,
        selectedAnswers,
      },
    });
  };

  const handleAnswerChange = (answer) => {
    const current = selectedAnswers[currentIndex]
      ? [...selectedAnswers[currentIndex]]
      : [];
    const isMulti =
      (questions[currentIndex]?.correctAnswers?.length || 0) > 1;

    if (isMulti) {
      if (current.includes(answer)) {
        const updated = current.filter((a) => a !== answer);
        setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: updated }));
      } else {
        setSelectedAnswers((prev) => ({
          ...prev,
          [currentIndex]: [...current, answer],
        }));
      }
    } else {
      setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: [answer] }));
    }
  };

  const deselectAll = () => {
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: [] }));
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = Math.max(
    0,
    Math.min(1, (duration - timeLeft) / Math.max(1, duration))
  );
  const progress = progressRatio * circumference;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Aucune question disponible
          </h2>
          <p className="text-gray-600 mb-4">
            Vérifie ta configuration ou recharge la page.
          </p>
          <button
            onClick={() => navigate("/roles")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const isMultiCurrent = (q.correctAnswers?.length || 0) > 1;

  return (
    <div className="min-h-screen bg-gray-100 p-6 border-amber-45s">
      {/* Barre de progression horizontale du temps */}
<div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative mb-4">
  <div
    className="h-full bg-orange-500 transition-all duration-500 ease-linear"
    style={{ width: `${progressRatio * 100}%` }}
  ></div>
  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-700">
    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
  </div>
</div>

      {/* Grille en haut */}
      <div className="max-w-2xl mx-auto mb-0 p-3 bg-white rounded shadow">
        <div
          className="grid gap-0 justify-center"
          style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
        >
          {questions.map((_, index) => {
            const answered = (selectedAnswers[index] || []).length > 0;
            const flagged = !!flaggedQuestions[index];
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                title={`Question ${index + 1}`}
                className={`w-4 h-4 flex items-center justify-center text-xs font-semibold rounded ${
                  answered ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
                } ${flagged ? "ring-2 ring-yellow-300" : ""}`}
              >
                {flagged ? "🚩" : index + 1}
              </button>
            );
          })}
        </div>
      </div>
      

      {/* Question principale */}
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center mt-4">
  <div className="w-full h-full max-w-7xl bg-white p-6 rounded-lg shadow overflow-y-auto">
          {/* Timer + Flag */}
          <div className="absolute top-0 right-0 flex items-center gap-3">
            

            <button
              onClick={toggleFlag}
              className="p-1 rounded hover:bg-gray-100"
              aria-pressed={!!flaggedQuestions[currentIndex]}
            >
              🚩
            </button>
          </div>

          <h2 className="text-xl font-bold mb-3 text-amber-400">
            Question {currentIndex + 1} / {questions.length}
          </h2>

          <p className="text-lg font-medium mb-4">
            {sanitizeQuestionText(q.question)}
            {isMultiCurrent && (
              <span className="ml-2 text-sm text-gray-600">
                (Choisissez plusieurs options)
              </span>
            )}
          </p>

          <div className="mb-4">
            {isMultiCurrent && (
              <button
                onClick={deselectAll}
                className="mb-3 text-sm text-red-600 underline"
              >
                ❌ Tout désélectionner
              </button>
            )}
            {q.options?.map((opt, idx) => {
              const isChecked = (selectedAnswers[currentIndex] || []).includes(
                opt
              );
              const inputType = isMultiCurrent ? "checkbox" : "radio";
              return (
                <label
                  key={idx}
                  className={`block p-3 mb-2 border rounded cursor-pointer hover:bg-gray-50 ${
                    isChecked ? "bg-gray-50" : ""
                  }`}
                >
                  <input
                    type={inputType}
                    name={`question-${currentIndex}`}
                    checked={isChecked}
                    onChange={() => handleAnswerChange(opt)}
                    className="mr-3"
                  />
                  {opt}
                </label>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                ⬅ Précédent
              </button>
              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      Math.min(prev + 1, questions.length - 1)
                    )
                  }
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Suivant ➡
                </button>
              ) : (
                <button
                  onClick={() => setShowConfirmModal(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  ✅ Terminer
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowConfirmModal(false)}
          />
          <div className="relative bg-white rounded-lg p-6 z-10 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">
              Confirmer la soumission
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Êtes-vous sûr(e) de vouloir terminer le test ? Vos réponses seront envoyées et vous ne pourrez plus revenir.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  handleSubmit(false);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Oui, terminer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
