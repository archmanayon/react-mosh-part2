import React from "react";
import { actionType } from "../../reducers/authReducer";

type authType = {
  user: string;
  dispatch: React.Dispatch<actionType>;
};

const AuthContext = React.createContext<authType>({} as authType);

export default AuthContext;
