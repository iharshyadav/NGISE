import React from "react";

const Speaker = () => {
  return (
    <div className="w-full flex flex-col items-center sm:px-20 min-h-screen">
      <div className="flex w-full items-center justify-center mt-8">
        <h1 className="text-center mb-10 text-2xl sm:text-4xl font-bold inline-block">
          Speakers
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:space-x-20 space-y-6 md:space-y-0 mb-10">

        {/* First Speaker */}
        <div className="flex flex-col w-48">
          <img
            src="https://ucarecdn.com/3473b0ea-d09a-4641-a15c-c848cbe17bc3/-/preview/398x304/"
            alt="Salvatore Sinno"
            className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
          />
          <div className="text-center w-full">
            <h3 className="text-xl font-bold">Salvatore Sinno</h3>
            <p>VP of ECS Solution</p>
            <p>Innovation at Unisys</p>
          </div>
        </div>

        {/* Second Speaker */}
        <div className="flex flex-col w-48">
          <img
            src="https://ucarecdn.com/8423d646-9fe7-44cb-b9e9-54e526f587e3/-/preview/457x305/"
            alt="Prof. Chuan-Yu Chang"
            className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
          />
          <div className="text-center w-full">
            <h3 className="text-xl font-bold">Prof. Chuan-Yu Chang</h3>
            <p>Distinguished Professor</p>
            <p>IET Fellow, IEEE Senior Member</p>
            <p>Department of Computer Science and Information Engineering</p>
            <p>National Yunlin University of Science and Technology (YunTech), Taiwan</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Speaker;
