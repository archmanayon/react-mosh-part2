import "./App.css";
import Tailwindcss from "./Tailwindcss";
import PostList from "./react-query/PostList";
import RequestResetForm from "./react-query/RequestResetForm";
import RoyaltyForm from "./react-query/RoyaltyForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <RequestResetForm onAdd={(data) => console.log(data.email)} />
      {/* <Tailwindcss /> */}
      {/* <TodoList /> */}
      <RoyaltyForm onAdd={(data) => console.log(data.publisher_name)} />
      <PostList />
    </>
  );
}

export default App;
