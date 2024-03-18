import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_POST } from "../constants";
import APIClient from "../services/apiClient";
import { Post } from "./usePosts";

const apiClient = new APIClient<Post>("/mosh");
const useAddPub = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiClient.post,
    onSuccess: (savedPost, newPost) => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_POST,
      });
      console.log("frm DB: " + savedPost + "frm FORM: " + newPost.author);
    },
  });
};

export default useAddPub;
