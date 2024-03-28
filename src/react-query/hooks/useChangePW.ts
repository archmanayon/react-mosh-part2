import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_PW } from "../constants";
import changePWService from "../services/changePWService";

const useChangePW = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changePWService.post,
    onSuccess: (savedPost, newPost) => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_PW,
      });
      console.log("frm DB: " + savedPost + "frm FORM: " + newPost);
    },
  });
};

export default useChangePW;
