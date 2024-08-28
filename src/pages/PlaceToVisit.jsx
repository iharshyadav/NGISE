import React from 'react';
import img1 from "/indiagate.jpg";
import img2 from "/hawamahal.jpg";
import img3 from "/jamamasjid.jpg";

const data = [
  {
    image: img1,
    name: "The India Gate",
    desc: "The India Gate is a war memorial located near the Rajpath on the eastern edge of the ceremonial axis of New Delhi.",
   
  },
  {
    image: img2,
    name: "Hawa Mahal ",
    desc: "The Hawa Mahal is a palace in the city of Jaipur India built from red and pink sandstone.",
   
  },
  {
    image: img3,
    name: "Jama Masjid",
    desc: "Jama Masjid of Delhi, is one of the largest mosques in India.Its builder is the Mughal emperor Shah Jahan.",
   
  },
 
];

const PlaceToVisit = () => {
  return (
    <div className="py-10">
       <div className='flex justify-center'>
       <h1 className='text-4xl md:text-5xl mb-7 font-bold border-b-4 inline-block border-[#46ce9c] pb-2'>Places To Visit</h1>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-4 lg:px-10">
       
        {data.map((item, index) => (
          <div key={index} className=" bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt="Accommodation" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <p className="text-lg  mb-2"><span className='font-semibold'> Name:</span> {item.name}</p>
              <p className="text-lg mb-2"><span className="font-semibold">Description: </span> {item.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceToVisit;

