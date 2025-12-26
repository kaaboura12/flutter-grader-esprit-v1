import { apiClient } from "../apiClient";
import { API_ENDPOINTS } from "../endpoints";
import type { EvaluationResult } from "../types";

export interface EvaluateRequest {
  repoUrl: string;
}

export const evaluationService = {
  /**
   * Evaluate a Flutter repository
   */
  async evaluate(repoUrl: string): Promise<EvaluationResult> {
    return apiClient.post<EvaluationResult>(API_ENDPOINTS.EVALUATE, {
      repoUrl,
    });
  },
};

