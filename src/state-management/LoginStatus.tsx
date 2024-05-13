import { useContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import AuthContext from "./Contexts/AuthContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);
  // const [user, dispatch] = useReducer(authReducer, "");
  if (user)
    return (
      <>
        {" "}
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => {
          dispatch({ type: "login", userName: "Archie" });
        }}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
