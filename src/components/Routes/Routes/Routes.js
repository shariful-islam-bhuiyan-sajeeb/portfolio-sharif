import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import PhoneStoreDetails from "../../Home/PhoneStoreDetails/PhoneStoreDetails";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            
        }
       ]
    }
])