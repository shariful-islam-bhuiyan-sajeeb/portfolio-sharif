import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import PhoneStoreDetails from "../../Home/PhoneStoreDetails/PhoneStoreDetails";
import Skill from "../../Home/ProfessionalSkill/Skill";
import Resume from "../../Home/Resume/Resume";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      //   {
      //     path: "/skill",
      //     element: <Skill />,
      //   },
    ],
  },
]);
