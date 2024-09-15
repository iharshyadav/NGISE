import React from 'react'
import Navbar from './Navbar';
import "./CSS/HomeLayout.css"
import { useState, useEffect } from 'react';
import Timer from './Timer';


const HomeLayout = () => {
  // const [targetDate] = useState(() => {
  //   const newTargetDate = new Date();
  //   newTargetDate.setDate(newTargetDate.getDate() + 42);
  //   return newTargetDate;
  // });
  
  // const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(new Date(), targetDate));
  // const [apiCalled, setApiCalled] = useState(false);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=India');
  //       const data = await response.json();
  
  //       // Ensure the API response contains the expected date information
  //       if (data.dateString) {
  //         const currentTime = new Date(data.dateString);
  //         setTimeRemaining(calculateTimeRemaining(currentTime, targetDate));
  //       } else {
  //         console.error('Invalid API response:', data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   if (!apiCalled) {
  //     fetchData();
  //     setApiCalled(true);
  //   }
  
  //   const updateTimer = setInterval(() => {
  //     fetchData();
  //   }, 1000);
  
  //   return () => {
  //     clearInterval(updateTimer);
  //   };
  // }, [apiCalled, targetDate]);
  
  // function calculateTimeRemaining(currentTime, targetDate) {
  //   const difference = targetDate - currentTime;
  //   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  //   return {
  //     days,
  //     hours,
  //     minutes,
  //     seconds,
  //   };
  // }
  return (
    <>
   <div className="relative h-screen w-screen flex items-center justify-center" style={{
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div className="absolute inset-0" style={{
      backgroundImage: 'url("bg.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      objectFit: 'cover',
      backgroundAttachment: 'fixed',
      filter: 'blur(3px)',
    }}></div>


    <div className="absolute flex flex-col bg- bg-black bg-opacity-65 px-16 py-10 mt-20 items-center justify-center text-white z-10">
    <h4 className="text-white uppercase text-xl sm:text-2xl font-[650] tracking-wide mb-2">
      welcome to The
    </h4>
     <h1 className="text-[#46ce9c] uppercase text-center text-4xl sm:text-6xl w-full font-bold">
       IEEE International Conference
     </h1>
     <h5 className="mt-2 mb-2 text-xl sm:text-3xl font-[600] tracking-wide">on</h5>
     <h4 className="text-white uppercase text-center w-full sm:text-3xl font-[650] tracking-wide">
       Next Generation Information System Engineering
     </h4>
     <h5 className="text-white mt-2 text-center w-full text-xl sm:text-3xl font-[600] tracking-wide">
       Ajay Kumar Garg Engineering College, Ghaziabad, India
     </h5>
     <div className="wrapper">
       <div className="typing-demo sm:text-3xl font-[600] tracking-wide text-[#46ce9c]">
         NGISE (28th – 29th March, 2025) 
       </div>
     </div>
     <Timer/>
   </div>

    <div className="absolute inset-0" style={{
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      filter: 'blur(3px)', // Adjust the blur intensity as needed
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      backgroundImage: 'url("bg.jpg")',
    }}></div>
    
  </div>
  
  </>
    // <div>
    //   <div className="w-full relative font-sans">
    //     <img
    //       className="w-full h-[94vh] blur-[1.5px]  sm:block hidden object-cover"
    //       src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //       alt=""
    //     />
    //     <img  className="w-full h-[94vh] blur-[1.5px] sm:hidden block object-cover" src="https://images.pexels.com/photos/8728223/pexels-photo-8728223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    //     <div className="absolute w-full h-[94vh] z-1 bg- bg-black opacity-45 top-0"></div>
    //     <div className="absolute w-full h-[94vh] z-1 top-0 z-20 flex flex-col items-center justify-start mt-20 text-white">
    //       <h4 className="text-white uppercase text-3xl sm:text-3xl font-[650] tracking-wide mb-5">
    //         welcome to
    //       </h4>
    //       <h1 className="text-white uppercase text-center text-2xl sm:text-7xl w-full font-bold">
    //         International Conference
    //       </h1>
    //       <h5 className="mt-4 mb-4 text-xl sm:text-3xl font-[600] tracking-wide">on</h5>
    //       <h4 className="text-white uppercase text-center w-full sm:text-3xl font-[650] tracking-wide">
    //         Next Generation Information System Engineering
    //       </h4>
    //       <div className="wrapper">
    //         <div className="typing-demo sm:text-3xl font-[600] tracking-wide">
    //           NGISE-2024
    //         </div>
    //       </div>
    //       <Timer/>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HomeLayout
