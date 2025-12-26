"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export default function SplashScreen({
  onComplete,
  duration = 3000,
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start fade-out animation before completion
    const fadeOutTimer = setTimeout(() => {
      setIsAnimating(true);
    }, duration - 500);

    // Complete splash screen
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 transition-opacity duration-500 overflow-hidden ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* ESPRIT Signature Floating Triangles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Prominent Floating Triangles - ESPRIT Signature */}
        <div className="absolute top-12 left-12 w-16 h-16 opacity-25 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute top-24 right-20 w-14 h-14 opacity-22 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute top-40 left-20 w-18 h-18 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute bottom-32 left-16 w-20 h-20 opacity-24 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-12 w-16 h-16 opacity-23 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-18 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/3 w-14 h-14 opacity-21 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-15 h-15 opacity-19 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute top-20 right-1/3 w-13 h-13 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/4 w-17 h-17 opacity-22 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <polygon
              points="50,10 90,90 10,90"
              fill="#f8b4cb"
              className="animate-rotate-slow"
            />
          </svg>
        </div>

        {/* Light Pink Circles - Subtle accent */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 opacity-8 animate-float">
          <div className="w-full h-full rounded-full bg-pink-200 blur-md" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 opacity-10 animate-float-delayed">
          <div className="w-full h-full rounded-full bg-pink-200 blur-md" />
        </div>
        <div className="absolute top-1/2 left-16 w-14 h-14 opacity-7 animate-float">
          <div className="w-full h-full rounded-full bg-pink-200 blur-md" />
        </div>
        <div className="absolute bottom-36 right-1/3 w-10 h-10 opacity-9 animate-float-delayed">
          <div className="w-full h-full rounded-full bg-pink-200 blur-md" />
        </div>
      </div>

      {/* Main Content - Professional Card Container */}
      <div className="relative z-10 w-full max-w-md px-6 sm:px-8">
        <div
          className={`relative rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl border border-gray-100/50 p-8 sm:p-10 transition-all duration-1000 ${
            isAnimating
              ? "scale-95 opacity-0 translate-y-4"
              : "scale-100 opacity-100 translate-y-0"
          }`}
        >
          {/* Logo Container with Animation */}
          <div
            className={`mb-6 flex justify-center transition-all duration-1000 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="ESPRIT University Logo"
                width={200}
                height={100}
                priority
                className="h-auto w-auto max-w-[180px] sm:max-w-[200px] object-contain"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="mb-6 flex items-center justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          {/* App Title with Animation */}
          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              isAnimating
                ? "translate-y-4 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Flutter Grader App
            </h1>
            <p className="text-sm font-medium text-gray-600 sm:text-base">
              ESPRIT University
            </p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Automated Grading System
            </p>
          </div>

          {/* Loading Indicator */}
          <div
            className={`mt-8 flex flex-col items-center transition-opacity duration-1000 delay-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="h-1 w-40 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-full animate-loading bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            </div>
            <p className="mt-3 text-xs text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

