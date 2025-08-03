// 📂 src/components/Timer.jsx
function Timer({ minutes, seconds, radius, circumference, progress }) {
  return (
    <div className="flex flex-col items-center">
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
          fontSize="20"
          fontWeight="bold"
          fill="#333"
        >
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </text>
      </svg>
    </div>
  );
}

export default Timer;
