import { FieldValues, useForm } from "react-hook-form";
import useAddPub from "./hooks/useAddPub";

interface Forms {
  // onAdd: ({}: FieldValues) => void;
  onAdd: (s: string) => void;
}
const RoyaltyForm = ({ onAdd }: Forms) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  // Define the mutation function
  const addPub = useAddPub();

  return (
    <>
      <form
        className="flex items-center space-x-2 rounded-md bg-gray-50 p-2"
        onSubmit={handleSubmit((data) => {
          if (data.publisher_name) {
            addPub.mutate({
              id: 0,
              market: "112",
              title: "Philosophy by: " + data.publisher_name,
              author: data.publisher_name,
            });
            onAdd("submitted: " + data.publisher_name);
          }
          reset();
        })}
      >
        <label htmlFor="publisher_name"> Publisher </label>
        <input
          className="border-none bg-transparent text-lg text-gray-900 focus:outline-none"
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

      <div> {addPub.error?.message ? addPub.error.message : ""}</div>
    </>
  );
};

export default RoyaltyForm;
