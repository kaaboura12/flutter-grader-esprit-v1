interface FeedbackCardProps {
  feedback: string;
}

export default function FeedbackCard({ feedback }: FeedbackCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 shadow-sm">
      <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900">Feedback</h2>
        <p className="mt-1 text-sm text-gray-500">
          Detailed evaluation and recommendations
        </p>
      </div>
      <div className="px-6 py-6">
        <div className="rounded-lg bg-white p-4">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
            {feedback}
          </p>
        </div>
      </div>
    </div>
  );
}

