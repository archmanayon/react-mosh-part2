import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errors = useRouteError();
  const errorMessage = isRouteErrorResponse(errors)
    ? "invalid route"
    : "unexpected error";
  console.log(errors);
  return (
    <>
      <h1>Oops...</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <p>{errorMessage}</p>
    </>
  );
};

export default ErrorPage;
