import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "./usePosts";

const useAddPub = () => {
 const queryClient = useQueryClient();
  const addPub = useMutation({
    mutationFn: (publisher: Post) =>
      axios
        .post("http://localhost/api/mosh", publisher)
        .then((res) => res.data),
    
    onSuccess: (savedPost, newPost) => {
     Setscss(true);
     queryClient.invalidateQueries({
       queryKey: ["post"],
     });     
     console.log(savedPost, newPost),
   },
  });
  return <div>useAddPub</div>;
};

export default useAddPub;
