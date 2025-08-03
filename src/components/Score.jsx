import { useLocation, useNavigate } from "react-router-dom";

function Score() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total, timeUp, questions, selectedAnswers } = location.state || {
    score: 0,
    total: 0,
    timeUp: false,
    questions: [],
    selectedAnswers: {},
  };

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {timeUp && <p className="text-red-600 text-2xl mb-4">⏳ Temps épuisé !</p>}

      <h1 className="text-3xl font-bold mb-4">🎯 Résultat du Test</h1>
      <p className="text-xl mb-2">✅ Votre score : {score} / {total}</p>

      {/* ✅ Barre de progression */}
      <div className="w-72 bg-gray-300 rounded-full h-6 overflow-hidden mb-4">
        <div
          className={`h-6 rounded-full transition-all duration-500 ${
            percentage >= 70 ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-lg font-semibold">{percentage}%</p>

      <p className="text-lg text-gray-600 mt-2">
        {percentage >= 70 ? "🎉 Bravo, vous avez réussi !" : "😅 Continuez à réviser et réessayez."}
      </p>

      {/* 🔙 Retour à l'accueil */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        🔙 Retour à l'accueil
      </button>

      {/* 📄 Voir les réponses */}
      <button
        onClick={() =>
          navigate("/answers", {
            state: { questions, selectedAnswers },
          })
        }
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
      >
        📄 Voir les réponses
      </button>
    </div>
  );
}

export default Score;
