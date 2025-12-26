import type { EvaluationCheck } from "@/network/types";

interface ChecksListProps {
  checks: EvaluationCheck[];
}

export default function ChecksList({ checks }: ChecksListProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 shadow-sm">
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-900">
          Evaluation Checks
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {checks.map((check, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3"
            >
              <div className="flex-shrink-0">
                {check.passed ? (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-4 w-4 text-green-600"
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
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-4 w-4 text-red-600"
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
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {check.name}
                  </h3>
                  {check.score > 0 && (
                    <span className="flex-shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                      +{check.score}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-gray-600 line-clamp-2">
                  {check.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

