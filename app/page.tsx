"use client";

import { useState } from "react";
import SplashScreen from "@/components/ui/SplashScreen";
import Header from "@/components/layout/Header";
import WelcomeSection from "@/components/ui/WelcomeSection";
import AssignmentCard from "@/components/assignment/AssignmentCard";
import GitRepositoryInput from "@/components/git/GitRepositoryInput";
import FloatingTriangles from "@/components/ui/FloatingTriangles";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const assignmentRequirements = [
    "Add todo",
    "Delete todo",
    "Mark todo as complete",
  ];

  const handleGitSubmit = (urls: string[]) => {
    console.log("Submitted URLs:", urls);
    // TODO: Implement submission logic
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
              <GitRepositoryInput onSubmit={handleGitSubmit} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
