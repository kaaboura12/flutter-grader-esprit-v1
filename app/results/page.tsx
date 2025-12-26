"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Header from "@/components/layout/Header";
import FloatingTriangles from "@/components/ui/FloatingTriangles";
import ScoreCard from "@/components/results/ScoreCard";
import ChecksList from "@/components/results/ChecksList";
import FeedbackCard from "@/components/results/FeedbackCard";
import type { EvaluationResult } from "@/network/types";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get result data from URL params (passed from submission)
    const resultData = searchParams.get("result");
    
    if (resultData) {
      try {
        const parsedResult = JSON.parse(decodeURIComponent(resultData));
        setResult(parsedResult);
        setLoading(false);
      } catch (err) {
        setError("Invalid result data");
        setLoading(false);
      }
    } else {
      setError("No evaluation result found");
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-white">
        <FloatingTriangles />
        <Header />
        <main className="relative z-10 mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="text-center">
              <div className="mb-3 inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-red-600 border-r-transparent"></div>
              <p className="text-sm text-gray-600">Loading results...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="relative min-h-screen bg-white">
        <FloatingTriangles />
        <Header />
        <main className="relative z-10 mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <svg
                  className="h-10 w-10 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Error Loading Results
              </h2>
              <p className="text-sm text-gray-600">{error || "No results found"}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      <FloatingTriangles />
      <Header />
      <main className="relative z-10 mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <h1 className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl">
            Evaluation Results
          </h1>
          <p className="text-sm text-gray-600">
            Detailed breakdown of your assignment evaluation
          </p>
        </div>

        <div className="space-y-4">
          {/* Score and Checks in Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Score Card - Takes 1 column */}
            <div className="lg:col-span-1">
              <ScoreCard
                score={result.totalScore}
                maxScore={result.maxScore}
              />
            </div>

            {/* Checks List - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ChecksList checks={result.checks} />
            </div>
          </div>

          {/* Feedback Card - Full Width */}
          <FeedbackCard feedback={result.feedback} />

          {/* Back Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="relative min-h-screen bg-white">
          <FloatingTriangles />
          <Header />
          <main className="relative z-10 mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex min-h-[50vh] items-center justify-center">
              <div className="text-center">
                <div className="mb-3 inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-red-600 border-r-transparent"></div>
                <p className="text-sm text-gray-600">Loading...</p>
              </div>
            </div>
          </main>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}

