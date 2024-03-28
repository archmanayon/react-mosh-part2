import { FieldValues, useForm } from "react-hook-form";
import useResetRequest from "./hooks/useResetRequest";

interface Forms {
  onAdd: ({}: FieldValues) => void;
}
const RequestResetForm = ({ onAdd }: Forms) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  // Define the mutation function
  const sendEmail = useResetRequest();

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://i.imgur.com/1W7q7Zs.png"
            alt="EC Publishing LLC"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Request Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              onSubmit={handleSubmit((data) => {
                onAdd(data);
                if (data.requested_email) {
                  sendEmail.mutate({
                    email: data.requested_email,
                  });
                }
                reset();
              })}
            >
              <div>
                <label
                  htmlFor="requested_email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="requested_email"
                    placeholder="type your registered email"
                    {...register("requested_email", {
                      required: true,
                      minLength: 3,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                  {errors.requested_email && (
                    <>{errors.requested_email.message}</>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between"></div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestResetForm;
