import React from "react";

const Timeline = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-x-4  lg:my-10  my-8 2xl:px-0 px-6 ">
      {/* ==================Education Section here ===========  */}
      <section className="">
        <header
          style={{ fontFamily: "Castoro Titling", fontWeight: "900" }}
          className=" md:text-3xl text-2xl md:my-4 sm:my-3 my-2 xl:ml-12 lg:ml-10 sm:ml-3 ml-2 px-2 text-[#1f79d8] font-serif"
        >
          <h2>Education</h2>
        </header>
        <div className="relative sm:mt-0 mt-6">
          <div className="text-left  border-l-4 border-gray-300  ">
            <div className="sm:w-11/12 mx-auto">
              {/* ====================Box -1  */}
              <div>
                <div className="absolute -top-2 -left-2.5 bg-blue-600 rounded-full px-3 py-3"></div>
                <div className=" xl:h-[220px] lg:h-[250px] md:h-[265px] h-full md:space-y-2 space-y-1 sm:ml-3 ml-6  md:px-4 px-2 lg:py-6 md:py-4 sm:py-2 py-2   hover:bg-blue-300 duration-500 rounded-lg bg-slate-100 shadow-md">
                  <h3 className="lg:text-2xl font-semibold text-[#2978CB]">
                    2011 - 2017
                  </h3>
                  <h1
                    style={{
                      fontFamily: "Poppins",
                    }}
                    className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-serif font-semibold "
                  >
                    Hight School
                  </h1>
                  <p
                    style={{ fontFamily: "Poppins", fontWeight: "400" }}
                    className="text-lg text-justify font-sans font-medium "
                  >
                    Shibpur Union High School I studied from sixth to tenth
                    standard, and my group was selected humanities, I completed
                    the school through humanities.
                  </p>
                </div>
              </div>
              {/* ===================box -2  */}
              <div className="lg:mt-8 md:mt-6 mt-4 ">
                <div className="absolute  -left-2.5 bg-blue-600 rounded-full px-3 py-3"></div>
                <div className="  xl:h-[220px] lg:h-[250px] md:h-[265px] h-full md:space-y-2 space-y-1  sm:ml-3 ml-6  md:px-4 px-2 lg:py-6 md:py-4 sm:py-2 py-2 bg-slate-100 hover:bg-blue-300 duration-500 rounded-lg shadow-md ">
                  <h3 className="lg:text-2xl font-semibold text-[#2978CB]">
                    2017 - 2018
                  </h3>
                  <h1
                    style={{ fontFamily: "Poppins", fontWeight: "800" }}
                    className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-serif font-semibold"
                  >
                    Intermediate College
                  </h1>
                  <p className="text-lg text-justify font-sans font-medium">
                    Nabinagar govt college was my higher secondary college, from
                    2017-2018 batch I took part in higher secondary examination,
                    Alhamdulillah I got a good result from higher secondary.
                  </p>
                </div>
              </div>
              {/* ==================box -3 */}
              <div className="lg:mt-8 md:mt-6 mt-4 ">
                <div className="absolute  -left-2.5 bg-blue-600 rounded-full px-3 py-3"></div>
                <div className="  xl:h-[220px] lg:h-[250px] md:h-[265px] h-full md:space-y-2 space-y-1  sm:ml-3 ml-6  md:px-4 px-2 lg:py-6 md:py-4 sm:py-2 py-2 bg-slate-100 hover:bg-blue-300 duration-500 rounded-lg shadow-md ">
                  <h3 className="lg:text-2xl font-semibold text-[#2978CB]">
                    2019 - 2024
                  </h3>
                  <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-serif font-semibold">
                    University
                  </h1>
                  <p
                    style={{ fontFamily: "Poppins", fontWeight: "400" }}
                    className="text-lg text-justify font-sans font-medium "
                  >
                    Am doing honors from dhaka tejgaon college Department is
                    Economics, completed three years out of four years Hons.I
                    will try to do masters as soon as honors is over.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*==================== Education section ends  */}

      {/* ====================Experience Section is here  */}

      <section className="sm:mt-0 mt-10">
        <header
          style={{ fontFamily: "Castoro Titling", fontWeight: "900" }}
          className=" md:text-3xl text-2xl  xl:ml-14 lg:ml-10 md:ml-6 sm:ml-4 ml-6 px-2   sm:text-left text-[#1f79d8] text-center"
        >
          <h2>Experience</h2>
        </header>
        <div className="relative ">
          <div className="text-left  border-l-4 border-gray-400  ">
            <div className="w-11/12 mx-auto">
              {/* ====================Box -1  */}
              <div>
                <div className="absolute -top-2 -left-2.5 bg-blue-600 rounded-full px-3 py-3"></div>
                <div className=" xl:h-[220px] lg:h-[250px] md:h-[265px] h-full md:space-y-2 space-y-1   ml-3 xl:mt-2 mt-0  md:px-4 px-2 lg:py-6 md:py-4 sm:py-2 py-2 bg-slate-100  hover:bg-blue-300 duration-500 rounded-lg shadow-md  ">
                  <h3 className="lg:text-2xl font-semibold text-[#2978CB]">
                    2017 - 2018
                  </h3>
                  <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-serif font-semibold">
                    Office Application
                  </h1>
                  <p
                    style={{ fontFamily: "Poppins", fontWeight: "400" }}
                    className="text-lg text-justify font-sans font-medium "
                  >
                    From childhood I wanted to do something with computers, then
                    as soon as I finished high school, I enrolled in a basic
                    computer course, from there I completed computer office
                    applications.
                  </p>
                </div>
              </div>
              {/* ===================box -2  */}
              <div className="lg:mt-8 md:mt-6 mt-4">
                <div className="absolute  -left-2.5 bg-blue-600 rounded-full px-3 py-3"></div>
                <div className=" xl:h-[220px] lg:h-[250px] md:h-[265px] h-full md:space-y-2 space-y-1 sm:ml-3 ml-2  md:px-4 px-2 lg:py-6 md:py-4 sm:py-2 py-2 bg-slate-100 hover:bg-blue-300 duration-500 rounded-lg shadow-md ">
                  <h3 className="lg:text-2xl font-semibold text-[#2978CB]">
                    2021 - full life
                  </h3>
                  <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-serif sm:font-semibold font-medium">
                    Full Stack Developer
                  </h1>
                  <p
                    style={{ fontFamily: "Poppins", fontWeight: "400" }}
                    className="text-lg text-justify font-sans font-medium "
                  >
                    Today I am proud to be a programmer, vowing to build my life
                    as a professional web developer, and build myself stronger
                    with Fullstack.
                  </p>
                </div>
              </div>
              {/* ==================box -3 */}
              <div className="lg:mt-8 md:mt-6 mt-4 ">
                <div className="absolute  -left-2.5 bg-blue-600 rounded-full px-3 py-3"></div>
                <div className=" xl:h-[220px] lg:h-[250px] md:h-[265px] h-full md:space-y-2 space-y-1  sm:ml-3 ml-2  md:px-4 px-2 lg:py-6 md:py-4 sm:py-2 py-2 bg-slate-100 hover:bg-blue-300 duration-500 rounded-lg shadow-md ">
                  <h3 className="lg:text-2xl font-semibold text-[#2978CB]">
                    2021 - full life
                  </h3>
                  <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-serif sm:font-semibold font-medium">
                    Frontend Developer
                  </h1>
                  <p
                    style={{ fontFamily: "Poppins", fontWeight: "400" }}
                    className="text-lg text-justify font-sans font-medium "
                  >
                    Today I am proud to be a programmer, vowing to build my life
                    as a professional web developer, and build myself stronger
                    with Fullstack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
