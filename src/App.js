import { useEffect } from "react";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Loader from "./components/Animation/Loader";
import { router } from "./components/Routes/Routes/Routes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="">
      {/* <ParticlesBackgroun /> */}
      {/* <RouterProvider router={router}> </RouterProvider> */}
      {loading ? (
        <Loader />
      ) : (
        <RouterProvider router={router}> </RouterProvider>
      )}
    </div>
  );
}

export default App;
