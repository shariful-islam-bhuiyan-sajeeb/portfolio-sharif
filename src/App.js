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
      <div className="absolute 2xl:right-5 xl:right-8 lg:right-5 md:right-4 sm:right-3 right-2  xl:bottom-12 lg:bottom-10 bottom-8 hidden md:flex">
        <div className=" flex justify-end pr-4 w-full sticky bottom-10 ">
          <a
            className=""
            href="https://wa.me/01791514345?text=Hi..."
            target="_blank"
          >
            <img
              className="lg:w-16 w-10 rounded-full"
              src="https://i.ibb.co/PDFPPGt/137642-whatsapp-hh.gif"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
