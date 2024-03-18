import { FieldValues, useForm } from "react-hook-form";
import useAddPub from "./hooks/useAddPub";

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
  const addPub = useAddPub();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onAdd(data);
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

      <div> {addPub.error?.message ? addPub.error.message : ""}</div>
    </>
  );
};

export default RoyaltyForm;
