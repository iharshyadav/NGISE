import React from "react";

const Speaker = () => {
  return (
    <div className="w-full flex p-4 flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl  sm:text-4xl font-bold mb-8 text-center">
        Speaker
      </h1>

      <div className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-300 shadow-lg bg-white">
        <img
          src="https://ucarecdn.com/3473b0ea-d09a-4641-a15c-c848cbe17bc3/-/preview/398x304/" // Replace with actual image path
          alt="Salvatore Sinno"
          className="w-48 h-32 object-cover mb-4"
        />
        <div className="font-semibold text-lg text-center">
          Salvatore Sinno
        </div>
        <div className="text-gray-600 text-center text-sm">
          Unisys Enterprise Computing Solutions
        </div>
      </div>
    </div>
  );
};

export default Speaker;