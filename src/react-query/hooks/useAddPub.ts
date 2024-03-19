import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_POST } from "../constants";
import postService from "../services/postService";

const useAddPub = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postService.post,
    onSuccess: (savedPost, newPost) => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_POST,
      });
      console.log("frm DB: " + savedPost + "frm FORM: " + newPost.author);
    },
  });
};

export default useAddPub;
