import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "users", element: <UserListPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "users/",
        element: <UserListPage />,
        children: [{ path: ":id/:name", element: <UserDetailPage /> }],
      },
    ],
  },
]);

export default router;
