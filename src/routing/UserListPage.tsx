import { Link, Outlet, useNavigate } from "react-router-dom";

const UserListPage = () => {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <div style={{ backgroundColor: "#300", color: "white" }}>
      <div
        style={{ backgroundColor: "#333", color: "white", maxWidth: "10vh" }}
      >
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              <Link
                to={`/users/${user.id}/${user.name}?userName=${user.name}&owner=archie`}
              >
                {user.name}
              </Link>
              {/* <a href="#">{user.name}</a> */}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          backgroundColor: "#354",
          color: "white",
          maxWidth: "50vh",
          minHeight: "15vh",
        }}
      >
        details here
        <Outlet />
      </div>
      <div>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default UserListPage;
