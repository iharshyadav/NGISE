import React from 'react';
// import img1 from "/16256-114063-f63653267_3xl.avif";
// import img2 from "/leela.webp";
// import img3 from "/16256-114467-f65029563_4k.avif"
// import img4 from "/hayat.webp";
// import img5 from "/oberoi.webp";
// import img6 from "/itc.png";

const data = [
  {
    image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fx88TXZVYAT3gwy0fp4u1OkcCm5QY9SjloDeK",
    Address: "Radisson Blu MBD Hotel, Noida  ",
    Tel: "+91 120 4300000",
    Website: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-noida",
  },

  {
    image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fIVuYE70cvmR4DQckiguAzGjFbKwS9apfVHl8",
    Address: "The Leela Palace, New Delhi  ",
    Tel: "1800 1031 444",
    Website: "https://www.theleela.com/the-leela-palace-new-delhi",
  },
   {
    image:"https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fPWK00O794m6f0gZQDr5ONMbpeVu9hGJtAqz1",
    Address:"Country Inn & Suites by Radisson, Sahibabad, Distt Ghaziabad",
    Tel:"1800 1080 333 (IN)",
    Website:"https://www.radissonhotels.com/en-us/hotels/country-inn-sahibabad",
   },
   {
    image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4f25l98TFBRXzHobGwrxsuUZ59SiDvAFKnOEjk",
    Address: "Hayatt Regency, Delhi",
    Tel: "+91 22 7101 1234",
    Website: "https://www.hyatt.com/hyatt-regency/en-US/delrd-hyatt-regency-delhi",
  },
  {
    image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fecXMTHOcqdY9kazXEx16onwIuLrfsvmG70yP",
    Address: "The Oberoi, New Delhi   ",
    Tel: "1800-108-0606",
    Website: "https://www.oberoihotels.com/",
  },
  {
    image: "https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4f5obFsxwSlgEmvjDYx8LZ1BIqCtVfnoAzyP2O",
    Address: "ITC Maurya, New Delhi   ",
    Tel: "+91 0124 6718000",
    Website: "https://www.itchotels.com/in/en/itcmaurya-new-delhi",
  }
];

const Accomodation = () => {
  return (
    <div className="py-10">
       <div className='flex justify-center'>
       <h1 className='text-4xl md:text-5xl mb-7 font-bold pb-2'> Nearby Hotels</h1>
       </div>
       <div className="max-w-4xl mx-auto text-center px-4 mb-6">
        <p className="text-base md:text-lg">
          There are several nearby good hotels and accommodations conveniently located near the conference venue. 
          A few of the most popular and close by hotels are listed below for your reference.
        </p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-4 lg:px-10">
       
        {data.map((item, index) => (
          <div key={index} className=" bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt="Accommodation" className="w-full h-64 object-cover"/>
            <div className="p-4">
              <p className="text-lg  mb-2"><span className='font-semibold'>Address: </span>{item.Address}</p>
              <p className="text-lg mb-2"><span className="font-semibold">Tel: </span>{item.Tel}</p>
              <p className="text-lg">
                <span className="font-semibold ">Website:</span> <a href={item.Website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{item.Website}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accomodation;

