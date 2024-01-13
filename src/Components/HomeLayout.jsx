import React from 'react'
import "./CSS/HomeLayout.css"
import { useState, useEffect } from 'react';

const HomeLayout = () => {
  const [targetDate] = useState(() => {
    const newTargetDate = new Date();
    newTargetDate.setDate(newTargetDate.getDate() + 42);
    return newTargetDate;
  });

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    const fetchData = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
        const data = await response.json();
        const currentTime = new Date(data.utc_datetime);
        setTimeRemaining(calculateTimeRemaining(currentTime, targetDate));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  function calculateTimeRemaining(currentTime, targetDate) {
    const difference = targetDate - currentTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div>
      <div className="w-full relative font-sans">
        <img
          className="w-full h-[94vh] blur-[1.5px] sm:block hidden"
          src="https://www.shrm.org/topics-tools/tools/hr-answers/artificial-intelligence-how-used-workplace/_jcr_content/_cq_featuredimage.coreimg.jpeg/1703611633308/istock-1435014643-iowage.jpeg"
          alt=""
        />
        <img  className="w-full h-[94vh] blur-[1.5px] sm:hidden block" src="https://images.pexels.com/photos/8728223/pexels-photo-8728223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="absolute w-full h-[94vh] z-1 bg- bg-black opacity-45 top-0"></div>
        <div className="absolute w-full h-[94vh] z-1 top-0 z-20 flex flex-col items-center justify-start mt-20 text-white">
          <h4 className="text-white uppercase text-3xl sm:text-3xl font-[650] tracking-wide mb-5">
            welcome to
          </h4>
          <h1 className="text-white uppercase text-center text-2xl sm:text-7xl w-full font-bold">
            International Conference
          </h1>
          <h5 className="mt-4 mb-4 text-xl sm:text-3xl font-[600] tracking-wide">on</h5>
          <h4 className="text-white uppercase text-center w-full sm:text-3xl font-[650] tracking-wide">
            Next Generation Information System Engineering
          </h4>
          <div className="wrapper">
            <div className="typing-demo sm:text-3xl font-[600] tracking-wide">
              NGISE-2024
            </div>
          </div>
          <div className="flex sm:mt-0 mt-10 sm:gap-20 gap-7 w-full items-center justify-center">
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{`${timeRemaining.days}`}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Days</h3>
            </div>
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{`${timeRemaining.hours}`}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Hours</h3>
            </div>
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{`${timeRemaining.minutes}`}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Minutes</h3>
            </div>
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{`${timeRemaining.seconds}`}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Seconds</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout