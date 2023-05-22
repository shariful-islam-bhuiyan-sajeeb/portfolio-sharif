import React from "react";
// import "./Error.css";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full sm:p-16 w-full mx-auto">
      <div className=" flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className=" text-center">
          <h2 className="sm:mb-8 mb-3 font-extrabold sm:text-9xl text-6xl animate-bounce ">
            404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl font-serif">
            Oops... Page not found!
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
