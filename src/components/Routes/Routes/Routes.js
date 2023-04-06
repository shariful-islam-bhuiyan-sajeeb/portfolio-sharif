import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home/Home";
import Loader from "../../Animation/Loader";
import ErrorPage from "../../Error page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // <ParticlesBackgroun />,
  // { path: "/loader", element: <Loader /> },
  // { path: "/errorPage", element: <ErrorPage /> },
]);
