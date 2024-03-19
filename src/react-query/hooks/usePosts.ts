import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_POST } from "../constants";
import postService, { Post } from "../services/postService";

interface pageType {
  limit: number;
  pageCount: number;
}

const usePosts = (paginate: pageType) => {
  return useQuery<Post[], Error>({
    queryKey: CACHE_KEY_POST,
    queryFn: postService.get,
  });
};

export default usePosts;
