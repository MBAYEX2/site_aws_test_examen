import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../awsquestion.js";

import Timer from "../components/Timer";
import FlagButton from "../components/FlagButton";
import QuestionGrid from "../components/QuestionGrid";
import Navigation from "../components/Navigation";

function Practitionner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(120);
  const [timeUp, setTimeUp] = useState(false);

  const navigate = useNavigate();
  const questions = questionsData;

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit(true);
      setTimeUp(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const isAnswerCorrect = (question, userAnswers) => {
    const correct = question.correctAnswers.map((id) => question.options[id]).sort().toString();
    const user = [...(userAnswers || [])].sort().toString();
    return correct === user;
  };

  const handleSubmit = (timeExpired = false) => {
    let totalCorrect = 0;

    questions.forEach((q, i) => {
      if (isAnswerCorrect(q, selectedAnswers[i])) {
        totalCorrect++;
      }
    });

    navigate("/score", {
      state: { score: totalCorrect, total: questions.length, timeUp: timeExpired, questions, selectedAnswers },
    });
  };

  const handleAnswerChange = (answer) => {
    const current = selectedAnswers[currentIndex] || [];
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: current.includes(answer)
        ? current.filter((a) => a !== answer)
        : [...current, answer],
    });
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const totalTime = 120;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = ((totalTime - timeLeft) / totalTime) * circumference;

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* ✅ Grille des questions */}
      <QuestionGrid
        questions={questions}
        selectedAnswers={selectedAnswers}
        flaggedQuestions={flaggedQuestions}
        onSelectQuestion={setCurrentIndex}
      />

      {/* ✅ Bloc Questions */}
      <div className="mt-20 relative border p-7 rounded bg-white shadow">
        {/* 🚩 Timer + Flag */}
        <div className="absolute top-4 right-2 flex items-center gap-5">
          <Timer
            minutes={minutes}
            seconds={seconds}
            radius={radius}
            circumference={circumference}
            progress={progress}
          />
          <FlagButton
            onToggle={toggleFlag}
            isFlagged={!!flaggedQuestions[currentIndex]}
          />
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

        {/* ✅ Navigation (composant séparé) */}
        <Navigation
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          onPrev={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          onNext={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
          onSubmit={() => handleSubmit(false)}
        />
      </div>
    </div>
  );
}

export default Practitionner;
