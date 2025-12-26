// Assignment Types
export interface Assignment {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  createdAt: string;
  updatedAt: string;
}

// Submission Types
export interface Submission {
  id: string;
  assignmentId: string;
  repositoryUrls: string[];
  status: SubmissionStatus;
  grade?: number;
  feedback?: string;
  createdAt: string;
  updatedAt: string;
}

export type SubmissionStatus = "pending" | "processing" | "completed" | "failed";

export interface SubmitAssignmentRequest {
  assignmentId: string;
  repositoryUrls: string[];
}

// Repository Types
export interface RepositoryValidation {
  isValid: boolean;
  url: string;
  message?: string;
}

// Grade Types
export interface Grade {
  id: string;
  submissionId: string;
  score: number;
  maxScore: number;
  feedback: string;
  details: GradeDetail[];
  createdAt: string;
}

export interface GradeDetail {
  requirement: string;
  passed: boolean;
  score: number;
  feedback?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

