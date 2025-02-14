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
            className="w-full h-56 object-cover mb-6 rounded-lg "
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">Salvatore Sinno</h3>
            <p className="text-sm">VP of ECS Solution</p>
            <p className="text-sm">Innovation at Unisys</p>
          </div>
        </div>

        {/* Second Speaker */}
        <div className="flex flex-col items-center w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-xl">
          <img
            src="https://ucarecdn.com/8423d646-9fe7-44cb-b9e9-54e526f587e3/-/preview/457x305/"
            alt="Prof. Chuan-Yu Chang"
            className="w-full h-56 object-cover mb-6 rounded-lg "
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">Prof. Chuan-Yu Chang</h3>
            <p className="text-sm ">Distinguished Professor</p>
            <p className="text-sm">IET Fellow, IEEE Senior Member</p>
            <p className="text-sm">Department of Computer Science and Information Engineering</p>
            <p className="text-sm">National Yunlin University of Science and Technology (YunTech), Taiwan</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Speaker;
