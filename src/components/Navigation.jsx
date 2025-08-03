function Navigation({ currentIndex, totalQuestions, onPrev, onNext, onSubmit }) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        ⬅ Précédent
      </button>

      {currentIndex < totalQuestions - 1 ? (
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Suivant ➡
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          ✅ Terminer
        </button>
      )}
    </div>
  );
}

export default Navigation;
