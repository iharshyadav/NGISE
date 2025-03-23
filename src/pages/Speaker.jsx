import React from "react";

const Speaker = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-50 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold underline text-gray-900 ">
          SPEAKERS
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        {/* First Speaker */}
        <div className="flex flex-col items-center w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-xl ">
          <img
            src="https://ucarecdn.com/3473b0ea-d09a-4641-a15c-c848cbe17bc3/-/preview/398x304/"
            alt="Salvatore Sinno"
            className="w-full h-60 object-cover mb-6 rounded-lg "
          />
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-1">Salvatore Sinno</h3>
            <p className="text-sm">VP of Innovation at Unisys</p>
            <p className="text-sm">Austria</p>
          </div>
        </div>

        {/* Second Speaker */}
        <div className="flex flex-col items-center w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-xl">
          <img
            src="https://ucarecdn.com/8423d646-9fe7-44cb-b9e9-54e526f587e3/-/preview/457x305/"
            alt="Prof. Chuan-Yu Chang"
            className="w-full h-60 object-cover mb-6 rounded-lg "
          />
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-1">Prof. Chuan-Yu Chang</h3>
            <p className="text-sm ">Distinguished Professor</p>
            <p className="text-sm">IET Fellow, IEEE Senior Member</p>
            <p className="text-sm">Department of Computer Science and Information Engineering</p>
            <p className="text-sm">National Yunlin University of Science and Technology (YunTech), Taiwan</p>
          </div>
        </div>

        {/* Third Speaker */}
        <div className="flex flex-col items-center w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-xl">
          <img
            src="https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4f3AJrojnLmKwaHBYRXjZnVf8kpTecI2PGQ46S"
            alt="Pavan Kumar Adepu"
            className="w-full h-60  mb-6 rounded-lg "
          />
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-1">Pavan Kumar Adepu</h3>
            <p className="text-sm">GenAI/LLM Research Leader</p>
            <p className="text-sm">Head of Engineering</p>
            <p className="text-sm">Amazon.com LLC, United States of America</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-xl">
            <img
              src="https://ucarecdn.com/3ee5f7fd-572e-4b1d-9bfc-1df01d7c9957/-/preview/434x444/"
              alt="Dr. Varun Kakkar"
              className="w-full h-60  mb-6 rounded-lg"
            />
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-gray-800 mb-1">Mr. Varun Kakar</h3>
              <p className="text-sm">Joint Secretary, IEEE U.P. Section</p>
              <p className="text-sm">B. T. Kumaon Institute of Technology, Dwarahat,India</p>
            </div>
          </div>


      </div>
    </div>
  );
};

export default Speaker;
