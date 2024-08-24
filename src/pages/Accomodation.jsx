// import React from 'react'
// import img1 from "16256-114063-f63653267_3xl.avif"

// const data = [
//    {
//     image:img1 ,
//     Address:"Rajiv Chowk station",
//     Tel:"+91 120 4300000",
//     Website:"https://www.radissonhotels.com/en-us/hotels/radisson-blu-noida";
//    }
// ]

// const Accomodation = () => {
//   return (
//     <section className="py-10">
//       <div className="">
//         <img></img>
//         <p>Address:</p>
//         <p>Tel:</p>
//         <p>Website</p>
//       </div>
//     </section>
//   )
// }

// export default Accomodation

import React from 'react';
import img1 from "/16256-114063-f63653267_3xl.avif";
import img2 from "/leela.webp";
import img3 from "/16256-114467-f65029563_4k.avif"
import img4 from "/hayat.webp";
import img5 from "/oberoi.webp";
import img6 from "/itc.png";

const data = [
  {
    image: img1,
    Address: "Radisson Blu MBD Hotel, Noida  ",
    Tel: "+91 120 4300000",
    Website: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-noida",
  },

  {
    image: img2,
    Address: "The Leela Palace, New Delhi  ",
    Tel: "1800 1031 444",
    Website: "https://www.theleela.com/the-leela-palace-new-delhi",
  },

 
  {
    image: img4,
    Address: "Hayatt Regency, Delhi",
    Tel: "+91 22 7101 1234",
    Website: "https://www.hyatt.com/hyatt-regency/en-US/delrd-hyatt-regency-delhi",
  },
  {
    image: img5,
    Address: "The Oberoi, New Delhi   ",
    Tel: "1800-108-0606",
    Website: "https://www.oberoihotels.com/",
  },
  {
    image: img6,
    Address: "ITC Maurya, New Delhi   ",
    Tel: "+91 0124 6718000",
    Website: "https://www.itchotels.com/in/en/itcmaurya-new-delhi",
  }
];

const Accomodation = () => {
  return (
    <section className="py-10">
       <p className='text-center text-4xl md:text-5xl mb-7 font-bold '> Accomodation</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
        {data.map((item, index) => (
          <div key={index} className=" bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt="Accommodation" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <p className="text-lg  mb-2"><span className='font-semibold'>Address: </span>{item.Address}</p>
              <p className="text-lg mb-2"><span className="font-semibold">Tel: </span>{item.Tel}</p>
              <p className="text-lg">
                <span className="font-semibold">Website:</span> <a href={item.Website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{item.Website}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accomodation;

