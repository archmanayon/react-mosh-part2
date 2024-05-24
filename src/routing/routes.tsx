import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route>

  //   </Route>
  // ));
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "users/",
          element: <UserListPage />,

          children: [{ path: ":id/:name", element: <UserDetailPage /> }],
        },
      ],
    },
    {
      element: <PrivateRoutes />,
      errorElement: <ErrorPage />,
      children: [{ path: "contact", element: <ContactPage /> }],
    },
    { path: "login", element: <LoginPage /> },
  ]
);

export default router;
