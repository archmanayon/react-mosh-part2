import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "./usePosts";
import axios from "axios";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Post>("/mosh");
const useAddPub = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiClient.post,
    // (publisher: Post) => {
    //   return axios
    //     .post("http://localhost/api/mosh", publisher)
    //     .then((res) => res.data);
    // }
    onSuccess: (savedPost, newPost) => {
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
      console.log("frm DB: " + savedPost + "frm FORM: " + newPost.author);
    },
  });
};

export default useAddPub;
