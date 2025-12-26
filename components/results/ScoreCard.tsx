interface ScoreCardProps {
  score: number;
  maxScore: number;
}

export default function ScoreCard({ score, maxScore }: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;
  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = () => {
    if (percentage >= 80) return "bg-green-50 border-green-200";
    if (percentage >= 60) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <div
      className={`rounded-lg border-2 ${getScoreBgColor()} bg-gradient-to-br from-gray-50 to-red-50 shadow-sm p-8`}
    >
      <div className="text-center">
        <p className="mb-2 text-sm font-medium text-gray-600">Final Score</p>
        <div className="mb-4 flex items-baseline justify-center gap-2">
          <span className={`text-6xl font-bold ${getScoreColor()}`}>
            {score}
          </span>
          <span className="text-2xl font-semibold text-gray-500">
            / {maxScore}
          </span>
        </div>
        <div className="mx-auto h-3 w-full max-w-xs overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-full transition-all duration-500 ${
              percentage >= 80
                ? "bg-green-600"
                : percentage >= 60
                ? "bg-yellow-600"
                : "bg-red-600"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          {percentage.toFixed(1)}% Complete
        </p>
      </div>
    </div>
  );
}

