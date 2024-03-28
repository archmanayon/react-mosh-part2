import { FieldValues, useForm } from "react-hook-form";
import useChangePW from "./hooks/useChangePW";

interface Forms {
  token: string;
  onAdd: ({}: FieldValues) => void;
}

const ChangePWForm = ({ token, onAdd }: Forms) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();

  // Define the mutation function
  const changePass = useChangePW();

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
            Update Your Password Now
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              onSubmit={handleSubmit((data) => {
                onAdd(data);
                if (data?.email) {
                  changePass.mutate({
                    token: token,
                    email: data.email,
                    password: data.new_password,
                    password_confirmation: data.confirm_new_password,
                  });
                }
                reset();
              })}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", {
                      required: true,
                      minLength: 3,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && <>{errors.email.message}</>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="new_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    {...register("new_password", {
                      required: "Required",
                      minLength: {
                        value: 6,
                        message: "New password must be at least 6 characters",
                      },
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                  {errors.new_password && <>{errors.new_password.message}</>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm_new_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm New Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    {...register("confirm_new_password", {
                      required: "Required",
                      minLength: {
                        value: 6,
                        message: "New password must be at least 6 characters",
                      },
                      validate: (value) =>
                        value === watch("new_password") ||
                        "Passwords do not match",
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />{" "}
                  {errors.confirm_new_password && (
                    <>{errors.confirm_new_password.message}</>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between"></div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePWForm;
