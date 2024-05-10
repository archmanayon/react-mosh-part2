import APIClient from "./apiClient";

export interface Post {
  id: number;
  market: string;
  title: string;
  author: string;
}

export default new APIClient<Post>("/mosh");
