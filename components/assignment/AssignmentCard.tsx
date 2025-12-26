interface AssignmentCardProps {
  title?: string;
  requirements: string[];
}

export default function AssignmentCard({
  title = "Assignment",
  requirements,
}: AssignmentCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 shadow-sm">
      <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="px-6 py-6">
        <p className="mb-4 text-base font-medium text-gray-700">
          Create a Todo app with:
        </p>
        <ul className="space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 mt-1 flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-base text-gray-700">{requirement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

