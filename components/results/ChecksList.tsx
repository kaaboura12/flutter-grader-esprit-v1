import type { EvaluationCheck } from "@/network/types";

interface ChecksListProps {
  checks: EvaluationCheck[];
}

export default function ChecksList({ checks }: ChecksListProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 shadow-sm">
      <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Evaluation Checks
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Detailed breakdown of all checks performed
        </p>
      </div>
      <div className="px-6 py-6">
        <div className="space-y-4">
          {checks.map((check, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4"
            >
              <div className="flex-shrink-0">
                {check.passed ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-5 w-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">
                    {check.name}
                  </h3>
                  {check.score > 0 && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                      +{check.score} pts
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">{check.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

