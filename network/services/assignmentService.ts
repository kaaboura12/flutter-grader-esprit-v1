import { apiClient } from "../apiClient";
import { API_ENDPOINTS } from "../endpoints";
import type { Assignment } from "../types";

export const assignmentService = {
  /**
   * Get all assignments
   */
  async getAssignments(): Promise<Assignment[]> {
    return apiClient.get<Assignment[]>(API_ENDPOINTS.ASSIGNMENTS);
  },

  /**
   * Get an assignment by ID
   */
  async getAssignmentById(id: string): Promise<Assignment> {
    return apiClient.get<Assignment>(API_ENDPOINTS.ASSIGNMENT_BY_ID(id));
  },
};

