import { useMutation } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";
import { Post } from "./hooks/usePosts";
import axios from "axios";

interface Forms {
  onAdd: ({}: FieldValues) => void;
}
const RoyaltyForm = ({ onAdd }: Forms) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  // Define the mutation function
  const addPublisher = useMutation({
    mutationFn: (publisher: Post) => {
      return axios
        .post("http://localhost/api/mosh", publisher)
        .then((res) => res.data);
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onAdd(data);
        addPublisher.mutate({
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
  );
};

export default RoyaltyForm;
