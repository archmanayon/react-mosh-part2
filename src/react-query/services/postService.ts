import APIClient from "./apiClient";

export interface Post {
  id: number;
  publisher_number: string;
  title: string;
  author: string;
}

export default new APIClient<Post>("/mosh");
