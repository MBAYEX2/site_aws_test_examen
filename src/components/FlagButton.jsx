// 📂 src/components/FlagButton.jsx
function FlagButton({ onToggle, isFlagged }) {
  return (
    <button
      onClick={onToggle}
      className="text-xl hover:scale-110 transition-transform"
      title={isFlagged ? "Retirer le flag" : "Flagger cette question"}
    >
      {isFlagged ? "🚩" : "🚩"}
    </button>
  );
}

export default FlagButton;
