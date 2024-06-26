import { ReactNode, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import AuthContext from "./Contexts/AuthContext";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
