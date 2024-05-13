type typeLogin = {
  type: "login";
  userName: string;
};
type typeLogout = {
  type: "logout";
};
export type actionType = typeLogin | typeLogout;

const authReducer = (user: string, action: actionType) => {
  switch (action.type) {
    case "login":
      return action.userName;
    case "logout":
      return "";
    default:
      return user;
  }
};

export default authReducer;
