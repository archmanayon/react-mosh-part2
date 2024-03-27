import APIClient from "./apiClient";

export interface Email {
  email: string;
}

export default new APIClient<Email>("/forgot-password");
