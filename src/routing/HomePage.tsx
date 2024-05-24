import { Link } from "react-router-dom";

const HomePage = () => {
  // throwing sample error
  // throw new Error("Something went wrong");
  return (
    <div
    // style={{ backgroundColor: "#333", color: "white", minHeight: "100vh" }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            throw new Error("Something went wrong");
          }}
        >
          Throw New Error
        </button>
      </div>

      <div></div>
      {/* <a href="/users">Users</a> */}
    </div>
  );
};

export default HomePage;
