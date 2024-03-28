import APIClient from "./apiClient";

export interface Password {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default new APIClient<Password>("/reset-password");
