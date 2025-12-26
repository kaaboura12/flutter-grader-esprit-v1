"use client";

import { useState } from "react";

interface GitRepositoryInputProps {
  onSubmit?: (urls: string[]) => void;
  isLoading?: boolean;
  error?: string | null;
}

export default function GitRepositoryInput({
  onSubmit,
  isLoading = false,
  error,
}: GitRepositoryInputProps) {
  const [urls, setUrls] = useState<string[]>([""]);
  const [errors, setErrors] = useState<string[]>([""]);

  const validateGitUrl = (url: string): boolean => {
    if (!url.trim()) return false;
    const gitUrlPattern =
      /^(https?:\/\/)?(www\.)?(github|gitlab|bitbucket)\.com\/[\w\-\.]+\/[\w\-\.]+(\.git)?$/i;
    return gitUrlPattern.test(url.trim());
  };

  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);

    const newErrors = [...errors];
    if (value && !validateGitUrl(value)) {
      newErrors[index] = "Please enter a valid Git repository URL";
    } else {
      newErrors[index] = "";
    }
    setErrors(newErrors);
  };

  const handleAddUrl = () => {
    setUrls([...urls, ""]);
    setErrors([...errors, ""]);
  };

  const handleRemoveUrl = (index: number) => {
    if (urls.length > 1) {
      const newUrls = urls.filter((_, i) => i !== index);
      const newErrors = errors.filter((_, i) => i !== index);
      setUrls(newUrls);
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validUrls = urls.filter((url) => url.trim() && validateGitUrl(url));
    const invalidIndices: number[] = [];

    urls.forEach((url, index) => {
      if (url.trim() && !validateGitUrl(url)) {
        invalidIndices.push(index);
      }
    });

    if (invalidIndices.length > 0) {
      const newErrors = [...errors];
      invalidIndices.forEach((index) => {
        newErrors[index] = "Please enter a valid Git repository URL";
      });
      setErrors(newErrors);
      return;
    }

    if (validUrls.length === 0) {
      return;
    }

    onSubmit?.(validUrls);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-red-50 shadow-sm">
      <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Git Repository URLs
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Enter the Git repository URLs for your assignment submissions
        </p>
      </div>
      <form onSubmit={handleSubmit} className="px-6 py-6">
        {error && (
          <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-4">
            <div className="flex items-start">
              <svg
                className="mr-2 h-5 w-5 flex-shrink-0 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}
        <div className="space-y-4">
          {urls.map((url, index) => (
            <div key={index} className="space-y-2">
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => handleUrlChange(index, e.target.value)}
                    placeholder="https://github.com/username/repository"
                    className={`w-full rounded-md border bg-white ${
                      errors[index]
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-red-600 focus:ring-red-600"
                    } px-4 py-3 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                  />
                  {errors[index] && (
                    <p className="mt-1 text-xs text-red-600">{errors[index]}</p>
                  )}
                </div>
                {urls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveUrl(index)}
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-gray-500 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                    aria-label="Remove URL"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={handleAddUrl}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Another Repository
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </>
            ) : (
              <>
                Submit for Grading
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

