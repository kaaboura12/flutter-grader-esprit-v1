"use client";

import { useState } from "react";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
          duration={3000}
        />
      )}
      {!showSplash && (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-zinc-50">
              Welcome to Flutter Grader
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              ESPRIT University - Automated Grading System
            </p>
          </main>
        </div>
      )}
    </>
  );
}
