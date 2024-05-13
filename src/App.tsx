import "./App.css";
import ChangePWForm from "./react-query/ChangePWForm";
import PostList from "./react-query/PostList";
import RequestResetForm from "./react-query/RequestResetForm";
import RoyaltyForm from "./react-query/RoyaltyForm";
import AuthProvider from "./state-management/AuthProvider";
import LoginStatus from "./state-management/LoginStatus";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {/* <Tailwindcss /> */}
        {/* <TodoList /> */}
        <div className="bg-gray-400 w-auto">
          <RequestResetForm
            onAdd={(data) => console.log(data.requested_email)}
          />
        </div>
        <AuthProvider>
          <div className="bg-gray-400 w-auto">
            <ChangePWForm
              onAdd={(data) => console.log(data.email)}
              token="aXXz18ReYks9QasLTbBrnjIHlAUt51J11mdsCWHssKtGh8Nco0SGtYAr2OJospit"
            />
          </div>
          <div className="bg-gray-400 w-auto">
            {" "}
            <LoginStatus />{" "}
          </div>
          <div className="bg-gray-400 w-auto">
            <RoyaltyForm
              onAdd={(submittedName) => console.log(submittedName)}
            />
            <PostList />
          </div>
        </AuthProvider>

        <div className="bg-gray-400 w-auto">Taller mamoth</div>

        <div className="bg-gray-400 w-auto">{}</div>
      </div>
    </>
  );
}

export default App;
