import { useEffect } from "react";
import { useState } from "react";
import { Link, RouterProvider } from "react-router-dom";
import "./App.css";
import Loader from "./components/Animation/Loader";
import { router } from "./components/Routes/Routes/Routes";
import message from "../src/asset/Message.gif";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="relative max-w-[1900px] mx-auto">
      <div className="app ">
        {loading ? (
          <Loader />
        ) : (
          // <PreLoader />
          <RouterProvider router={router}> </RouterProvider>
        )}
      </div>
      <div className="absolute 2xl:right-8 xl:right-6 lg:right-5 md:right-4 sm:right-3 right-2  xl:bottom-52 lg:bottom-48 bottom-40 hidden md:flex">
        <label>
          <a href="#contact" className=" flex flex-col items-center space-y-2">
            <img
              className="lg:w-20 sm:w-16 w-10 text-5xl"
              src={message}
              alt=""
            />
            <p className="xl:text-md text-sm">contact me</p>
          </a>
        </label>
      </div>
    </div>
  );
}

export default App;
