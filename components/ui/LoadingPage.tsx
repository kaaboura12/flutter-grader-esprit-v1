"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingPageProps {
  message?: string;
  repositoryUrl?: string;
}

export default function LoadingPage({
  message = "Evaluating your repository...",
  repositoryUrl,
}: LoadingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Cloning repository...", completed: false },
    { label: "Validating files...", completed: false },
    { label: "Running Flutter checks...", completed: false },
    { label: "Evaluating code quality...", completed: false },
  ];

  useEffect(() => {
    // Simulate progress through steps
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, [steps.length]);
  return (
    <div className="relative min-h-screen bg-white">
      {/* Floating Triangles Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Fixed Triangles - Red Border, Empty Inside - ESPRIT Signature */}
        <div className="absolute top-20 left-16 w-10 h-10 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-32 left-1/4 w-12 h-12 opacity-28">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-24 right-20 w-11 h-11 opacity-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 left-12 w-9 h-9 opacity-29">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-2/5 left-1/2 w-10 h-10 opacity-27">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 right-16 w-12 h-12 opacity-31">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 w-11 h-11 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-24 left-1/3 w-9 h-9 opacity-28">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-28 right-1/3 w-10 h-10 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-12 w-11 h-11 opacity-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="ESPRIT University Logo"
            width={200}
            height={100}
            priority
            className="h-auto w-auto object-contain"
          />
        </div>

        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-600"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="mb-2 text-lg font-semibold text-gray-900">
            {message}
          </p>
          <p className="text-sm text-gray-600">
            This may take a few minutes...
          </p>
        </div>

        {/* Repository URL */}
        {repositoryUrl && (
          <div className="mt-4 max-w-md truncate rounded-lg bg-gray-50 px-4 py-2">
            <p className="text-xs text-gray-500">Repository:</p>
            <p className="text-sm font-medium text-gray-700">{repositoryUrl}</p>
          </div>
        )}

        {/* Progress Steps */}
        <div className="mt-8 w-full max-w-md space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-sm transition-colors ${
                index <= currentStep ? "text-gray-700" : "text-gray-400"
              }`}
            >
              {index < currentStep ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-3 w-3 text-green-600"
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
              ) : index === currentStep ? (
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-600"></div>
              ) : (
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              )}
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

