interface FeedbackCardProps {
  feedback: string;
}

export default function FeedbackCard({ feedback }: FeedbackCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 shadow-sm">
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-900">Feedback</h2>
      </div>
      <div className="p-4">
        <div className="rounded-lg bg-white p-3">
          <p className="max-h-48 overflow-y-auto whitespace-pre-wrap text-xs leading-relaxed text-gray-700">
            {feedback}
          </p>
        </div>
      </div>
    </div>
  );
}

