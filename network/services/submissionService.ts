import { apiClient } from "../apiClient";
import { API_ENDPOINTS } from "../endpoints";
import type {
  Submission,
  SubmitAssignmentRequest,
  RepositoryValidation,
} from "../types";

export const submissionService = {
  /**
   * Submit an assignment with Git repository URLs
   */
  async submitAssignment(
    data: SubmitAssignmentRequest
  ): Promise<Submission> {
    return apiClient.post<Submission>(API_ENDPOINTS.SUBMIT_ASSIGNMENT, data);
  },

  /**
   * Get all submissions
   */
  async getSubmissions(): Promise<Submission[]> {
    return apiClient.get<Submission[]>(API_ENDPOINTS.SUBMISSIONS);
  },

  /**
   * Get a submission by ID
   */
  async getSubmissionById(id: string): Promise<Submission> {
    return apiClient.get<Submission>(API_ENDPOINTS.SUBMISSION_BY_ID(id));
  },

  /**
   * Validate a Git repository URL
   */
  async validateRepository(url: string): Promise<RepositoryValidation> {
    return apiClient.post<RepositoryValidation>(
      API_ENDPOINTS.VALIDATE_REPOSITORY,
      { url }
    );
  },
};

