export const API_ENDPOINTS = {
  // Health check
  HEALTH: "/",
  
  // Assignment endpoints
  ASSIGNMENTS: "/assignments",
  ASSIGNMENT_BY_ID: (id: string) => `/assignments/${id}`,
  
  // Submission endpoints
  SUBMISSIONS: "/submissions",
  SUBMISSION_BY_ID: (id: string) => `/submissions/${id}`,
  SUBMIT_ASSIGNMENT: "/submissions/submit",
  
  // Grading endpoints
  GRADES: "/grades",
  GRADE_BY_ID: (id: string) => `/grades/${id}`,
  
  // Repository endpoints
  REPOSITORIES: "/repositories",
  VALIDATE_REPOSITORY: "/repositories/validate",
  
  // Evaluation endpoints
  EVALUATE: "/evaluate",
} as const;

