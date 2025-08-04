function AnswerOptions({ question, selectedAnswers, onAnswerChange }) {
  return (
    <div className="mb-4">
      {question.options.map((opt, idx) => (
        <label
          key={idx}
          className="block p-2 mb-2 border rounded cursor-pointer hover:bg-gray-100"
        >
          <input
            type={question.correctAnswers.length > 1 ? "checkbox" : "radio"}
            checked={selectedAnswers?.includes(opt) || false}
            onChange={() => onAnswerChange(opt)}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default AnswerOptions;
