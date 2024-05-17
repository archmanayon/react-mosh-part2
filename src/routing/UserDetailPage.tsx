import { Link, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const parameters = useParams();
  console.log(parameters.id);
  console.log(searchParams.get("userName"));
  console.log(searchParams.get("owner"));
  console.log(searchParams.toString());
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>userName</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/users">{parameters.id}.-----------------</Link>
            </td>
            <td>
              <Link to="/users">{parameters.name}</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserDetailPage;
