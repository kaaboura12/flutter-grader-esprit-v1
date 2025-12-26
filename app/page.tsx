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
import type { ApiError } from "@/network";

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
            </div>
          </main>
        </div>
      )}
    </>
  );
}
