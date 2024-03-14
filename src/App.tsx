import "./App.css";
import PostList from "./react-query/PostList";
import RoyaltyForm from "./react-query/RoyaltyForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      {/* <TodoList /> */}
      <RoyaltyForm onAdd={(data) => console.log(data.publisher_name)} />
      <PostList />
    </>
  );
}

export default App;
