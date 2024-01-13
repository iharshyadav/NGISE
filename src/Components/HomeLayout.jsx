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
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
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

    if (!apiCalled) {
      fetchData();
      setApiCalled(true); 
    }


    const updateTimer = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(updateTimer);
    };
  }, [apiCalled,targetDate]);

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
          className="w-full h-[94vh] blur-[1.5px]"
          src="https://www.shrm.org/topics-tools/tools/hr-answers/artificial-intelligence-how-used-workplace/_jcr_content/_cq_featuredimage.coreimg.jpeg/1703611633308/istock-1435014643-iowage.jpeg"
          alt=""
        />
        <div className="absolute w-full h-[94vh] z-1 bg- bg-black opacity-45 top-0"></div>
        <div className="absolute w-full h-[94vh] z-1 top-0 z-20 flex flex-col items-center justify-start mt-20 text-white">
          <h4 className="text-white uppercase text-3xl font-[650] tracking-wide mb-5">
            welcome to
          </h4>
          <h1 className="text-white uppercase text-7xl font-bold">
            International Conference
          </h1>
          <h5 className="mt-4 mb-4 text-3xl font-[600] tracking-wide">on</h5>
          <h4 className="text-white uppercase text-3xl font-[650] tracking-wide">
            Next Generation Information System Engineering
          </h4>
          <div className="wrapper">
            <div className="typing-demo text-3xl font-[600] tracking-wide">
              NGISE-2024
            </div>
          </div>
          <div className="flex gap-20">
            <div className='w-16'>
              <h1 className='text-[4vw]  font-sans font-semibold'>{`${timeRemaining.days}`}</h1>
              <h3 className='text-center text-xl font-sans font-semibold'>Days</h3>
            </div>
            <div className='w-16'>
              <h1 className='text-[4vw]  font-sans font-semibold'>{`${timeRemaining.hours}`}</h1>
              <h3 className='text-center text-xl font-sans font-semibold'>Hours</h3>
            </div>
            <div className='w-16'>
              <h1 className='text-[4vw]  font-sans font-semibold'>{`${timeRemaining.minutes}`}</h1>
              <h3 className='text-center text-xl font-sans font-semibold'>Minutes</h3>
            </div>
            <div className='w-16'>
              <h1 className='text-[4vw]  font-sans font-semibold'>{`${timeRemaining.seconds}`}</h1>
              <h3 className='text-center text-xl font-sans font-semibold'>Seconds</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout