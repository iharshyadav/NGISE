import React from "react";

const Speaker = () => {
  return (
    <div className="w-full flex flex-col items-center  sm:px-20 min-h-screen">
      <div className="flex w-full items-center justify-center mt-8">
        <h1 className="text-center text-2xl sm:text-4xl font-bold inline-block">
          Speaker
        </h1>
      </div>

      <div className="flex items-center justify-center mt-10 mb-10 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[65%]">
        <div className="border-4 border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-4"> 
            <img
              src="https://ucarecdn.com/3473b0ea-d09a-4641-a15c-c848cbe17bc3/-/preview/398x304/" 
              alt="Salvatore Sinno"
              className="w-48 h-32 object-cover mb-4" 
            />
            <div className="font-semibold text-lg">Salvatore Sinno</div> 
            <div className="text-gray-600">Unisys Enterprise Computing Solutions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;

