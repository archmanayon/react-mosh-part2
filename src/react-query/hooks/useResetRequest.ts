import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_EMAIL, CACHE_KEY_POST } from "../constants";
import requestResetService from "../services/requestResetService";

const useResetRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: requestResetService.post,
    onSuccess: (savedPost, newPost) => {
      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_EMAIL,
      });
      console.log("frm DB: " + savedPost + "frm FORM: " + newPost);
    },
  });
};

export default useResetRequest;
