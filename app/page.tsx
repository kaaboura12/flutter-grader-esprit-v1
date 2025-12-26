"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/ui/SplashScreen";
import Header from "@/components/layout/Header";
import WelcomeSection from "@/components/ui/WelcomeSection";
import AssignmentCard from "@/components/assignment/AssignmentCard";
import GitRepositoryInput from "@/components/git/GitRepositoryInput";
import FloatingTriangles from "@/components/ui/FloatingTriangles";
import { evaluationService } from "@/network";
import type { ApiError, EvaluationResult } from "@/network";

export default function Home() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const assignmentRequirements = [
    "Add todo",
    "Delete todo",
    "Mark todo as complete",
  ];

  const handleGitSubmit = async (urls: string[]) => {
    if (urls.length === 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Evaluate the first repository (you can extend this to handle multiple)
      const result = await evaluationService.evaluate(urls[0]);

      // Navigate to results page with the evaluation result
      const resultData = encodeURIComponent(JSON.stringify(result));
      router.push(`/results?result=${resultData}`);
    } catch (err) {
      const error = err as ApiError;
      setSubmitError(
        error.message || "Failed to evaluate repository. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  const handleViewSampleResults = () => {
    // Sample evaluation result data for visualization
    const sampleResult: EvaluationResult = {
      totalScore: 18,
      maxScore: 20,
      checks: [
        {
          name: "Clone Repository",
          passed: true,
          message: "Repository cloned successfully",
          score: 0,
        },
        {
          name: "Required Files Check",
          passed: true,
          message: "pubspec.yaml and lib/main.dart exist",
          score: 0,
        },
        {
          name: "Flutter Pub Get",
          passed: true,
          message: "Dependencies installed successfully",
          score: 0,
        },
        {
          name: "Build Check",
          passed: true,
          message: "App compiles successfully",
          score: 0,
        },
        {
          name: "Flutter Test",
          passed: true,
          message: "All tests passed",
          score: 5,
        },
        {
          name: "Groq Code Evaluation",
          passed: true,
          message: "Code evaluated by Groq",
          score: 13,
        },
      ],
      feedback:
        "Excellent work! Your Todo app implementation demonstrates strong understanding of Flutter development principles.\n\n**Strengths:**\n- Clean code structure with proper separation of concerns\n- Well-implemented state management\n- Good use of Flutter widgets and best practices\n- All three requirements (Add, Delete, Mark as complete) are fully functional\n- Proper error handling and user feedback\n\n**Areas for Improvement:**\n- Consider adding input validation for better user experience\n- Could benefit from more comprehensive error messages\n- Some code could be further modularized for better maintainability\n\nOverall, this is a solid implementation that meets all the assignment requirements.",
      details: {
        cloneSuccessful: true,
        filesValid: true,
        pubGetSuccessful: true,
        buildSuccessful: true,
        testsPassed: true,
        groqEvaluation: {
          score: 13,
          feedback:
            "The code demonstrates good Flutter practices with proper widget structure and state management.",
        },
      },
    };

    const resultData = encodeURIComponent(JSON.stringify(sampleResult));
    router.push(`/results?result=${resultData}`);
  };

  return (
    <>
      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
          duration={3000}
        />
      )}
      {!showSplash && (
        <div className="relative min-h-screen bg-white">
          <FloatingTriangles />
          <Header />
          <main className="relative z-10 mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <WelcomeSection />
            <div className="space-y-6">
              {/* Assignment Section */}
              <AssignmentCard
                title="Assignment"
                requirements={assignmentRequirements}
              />

              {/* Git Repository Input Section */}
              <GitRepositoryInput
                onSubmit={handleGitSubmit}
                isLoading={isSubmitting}
                error={submitError}
              />

              {/* View Sample Results Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleViewSampleResults}
                  className="inline-flex items-center justify-center rounded-md border-2 border-red-600 bg-white px-6 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  View Sample Results
                </button>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
