// src/components/Score.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { jsPDF } from "jspdf";
//import awsLogo from "./src/assets/aws_orange.png"; // Assurez-vous que le chemin est correct

function Score() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    score = 0,
    total = 0,
    timeUp = false,
    questions = [],
    selectedAnswers = {},
  } = location.state || {};

  const percentage = useMemo(() => {
    if (!total || total === 0) return 0;
    return Math.round((score / total) * 100);
  }, [score, total]);

  const allCorrect = useMemo(() => {
    if (!questions || questions.length === 0) return false;
    return score === total;
  }, [score, total, questions]);

  const canViewAnswers =
    Array.isArray(questions) && questions.length > 0 && !allCorrect;

  // ✅ Générer un rapport PDF avec logo AWS
  const downloadPdfReport = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const marginLeft = 40;
    let y = 60;

    // Charger le logo AWS
    const logo = new Image();
    logo.src = awsLogo;
    logo.onload = () => {
      doc.addImage(logo, "PNG", marginLeft, y, 100, 60);
      y += 80;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.text("Rapport de Résultat - Nafar App", marginLeft, y);
      y += 30;

      const now = new Date();
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(`Date du test : ${now.toLocaleString()}`, marginLeft, y);
      y += 20;
      doc.text(`Score : ${score} / ${total}`, marginLeft, y);
      y += 20;
      doc.text(`Pourcentage : ${percentage}%`, marginLeft, y);
      y += 20;

      if (timeUp) {
        doc.setTextColor(200, 0, 0);
        doc.text("⏳ Temps épuisé pendant le test", marginLeft, y);
        doc.setTextColor(0, 0, 0);
        y += 20;
      }

      doc.setDrawColor(180, 180, 180);
      doc.line(marginLeft, y, doc.internal.pageSize.getWidth() - marginLeft, y);
      y += 20;

      doc.setFontSize(10);
      doc.setTextColor(120, 120, 120);
      doc.text(
        "Généré automatiquement par AWS Nafar App",
        marginLeft,
        doc.internal.pageSize.getHeight() - 30
      );

      doc.save(
        `rapport_test_${now
          .toISOString()
          .slice(0, 19)
          .replace(/[:T]/g, "-")}.pdf`
      );
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {timeUp && (
        <p className="text-red-600 text-2xl mb-4 animate-pulse">
          ⏳ Temps épuisé !
        </p>
      )}

      <h1 className="text-3xl font-bold mb-4">🎯 Résultat du Test</h1>

      <p className="text-xl mb-2">
        ✅ Votre score :{" "}
        <span className="font-semibold">{score}</span> /{" "}
        <span className="font-semibold">{total}</span>
      </p>

      <div className="w-72 bg-gray-300 rounded-full h-6 overflow-hidden mb-4">
        <div
          className={`h-6 rounded-full transition-all duration-700 ${
            percentage >= 70 ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-lg font-semibold mb-1">{percentage}%</p>

      <p className="text-lg text-gray-600 mb-6">
        {percentage >= 70
          ? "🎉 Bravo, vous avez réussi !"
          : "😅 Continuez à réviser et réessayez."}
      </p>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={() => navigate("/roles")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          🔙 Retour à l'accueil
        </button>

        <button
          onClick={() =>
            navigate("/answers", {
              state: { questions, selectedAnswers },
            })
          }
          className={`px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition ${
            !canViewAnswers ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!canViewAnswers}
        >
          📄 Voir les réponses
        </button>

        <button
          onClick={downloadPdfReport}
          className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
        >
          ⬇️ Télécharger le rapport (PDF)
        </button>
      </div>
    </div>
  );
}

export default Score;
