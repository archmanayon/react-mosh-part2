import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_POST } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Post>("/mosh");

export interface Post {
  id: number;
  publisher_number: string;
  title: string;
  author: string;
}

interface pageType {
  limit: number;
  pageCount: number;
}

const usePosts = (paginate: pageType) => {
  return useQuery<Post[], Error>({
    queryKey: CACHE_KEY_POST,
    queryFn: apiClient.get,
  });
};

export default usePosts;
