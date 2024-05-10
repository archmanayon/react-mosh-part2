import "./App.css";
import Tailwindcss from "./Tailwindcss";
import ChangePWForm from "./react-query/ChangePWForm";
import PostList from "./react-query/PostList";
import RequestResetForm from "./react-query/RequestResetForm";
import RoyaltyForm from "./react-query/RoyaltyForm";
import TodoList from "./react-query/TodoList";

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
        <div className="bg-gray-400 w-auto">
          <ChangePWForm
            onAdd={(data) => console.log(data.email)}
            token="aXXz18ReYks9QasLTbBrnjIHlAUt51J11mdsCWHssKtGh8Nco0SGtYAr2OJospit"
          />
        </div>
        <div className="bg-gray-400 w-auto"></div>
        <div className="bg-gray-400 w-auto"></div>
        <div className="bg-gray-400 w-auto">
          <RoyaltyForm onAdd={(data) => console.log(data.publisher_name)} />
          <PostList />
        </div>
      </div>
    </>
  );
}

export default App;
