import "./App.css";
import Tailwindcss from "./Tailwindcss";
import PostList from "./react-query/PostList";
import RoyaltyForm from "./react-query/RoyaltyForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <Tailwindcss />
      {/* <TodoList /> */}
      <RoyaltyForm onAdd={(data) => console.log(data.publisher_name)} />
      <PostList />
    </>
  );
}

export default App;
