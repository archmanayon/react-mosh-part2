import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";
import { Post } from "./hooks/usePosts";
import axios from "axios";
import { useState } from "react";

interface Forms {
  onAdd: ({}: FieldValues) => void;
}
const RoyaltyForm = ({ onAdd }: Forms) => {
  const [scss, Setscss] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  // queryClient
  const queryClient = useQueryClient();
  // Define the mutation function
  const addPub = useMutation({
    mutationFn: (publisher: Post) => {
      return axios
        .post("http://localhost/api/mosh", publisher)
        .then((res) => res.data);
    },
    onSuccess: (savedPost, newPost) => {
      Setscss(true);
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
      console.log("frm DB: " + savedPost + "frm FORM: " + newPost.author);
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          // onAdd(data);
          addPub.mutate({
            id: 0,
            publisher_number: "112",
            title: "Archie Philosophy",
            author: data.publisher_name,
          });
          reset();
        })}
      >
        <label htmlFor="publisher_name"> Publisher </label>
        <input
          {...register("publisher_name", { required: true, minLength: 3 })}
        />
        {/* display errors */}
        {errors.publisher_name?.type == "required"
          ? "Can't Be Blank"
          : errors.publisher_name?.type == "minLength"
          ? "Must be more than 3 characters"
          : null}

        <br />
      </form>

      <div> {scss ? "saved to DB" : addPub.error?.message}</div>
    </>
  );
};

export default RoyaltyForm;
