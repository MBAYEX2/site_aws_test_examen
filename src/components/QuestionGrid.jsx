function QuestionGrid({ questions, selectedAnswers, flaggedQuestions, onSelectQuestion }) {
  return (
    <div
      className="absolute top-0 right-4 p-0 border rounded bg-white shadow"
      style={{ display: "grid", gridTemplateColumns: "repeat(22, 18px)", gap: "3px" }}
    >
      {questions.map((_, index) => {
        const answered = selectedAnswers[index] && selectedAnswers[index].length > 0;
        const flagged = flaggedQuestions[index];

        return (
          <button
            key={index}
            onClick={() => onSelectQuestion(index)}
            className={`w-5 h-5 flex items-center justify-center border rounded-full text-[12px] font-bold transition duration-215
              ${answered ? "bg-green-500 text-white" : "bg-orange-400 text-white"}
              hover:scale-110 hover:shadow-md`}
          >
            {flagged ? "🚩" : answered ? "✅" : index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default QuestionGrid;
