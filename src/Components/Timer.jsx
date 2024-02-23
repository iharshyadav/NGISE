import React, { useEffect, useState } from 'react'

const Timer = () => {

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [mins, setMinutes] = useState("");
  const [secs, setSeconds] = useState("");
  const deadline = "February, 23, 2024";
  const getTime = () => {
     const time = Date.parse(deadline) - Date.now();
     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
     setMinutes(Math.floor((time / 1000 / 60) % 60));
     setSeconds(Math.floor((time / 1000) % 60));

    if (setDays == 0 && setDays == 0 && setMinutes == 0 && setSeconds==0){
      setDays(0);
     setHours(0);
     setMinutes(0);
     setSeconds(0);
 };

 useEffect (()=>{
    const interval = setInterval(()=>getTime(deadline), 1000)
    return ()=> clearInterval(interval)
    }, [])
  return (
    <div>
        <div className="flex sm:mt-0 mt-10 sm:gap-20 gap-7 w-full items-center justify-center">
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{days<10 ? "0"+days: days}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Days</h3>
            </div>
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{hours <10 ? "0"+hours: hours}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Hours</h3>
            </div>
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{mins<10 ? "0"+mins: mins}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Minutes</h3>
            </div>
            <div className='sm:w-16'>
              <h1 className='sm:text-[4vw] text-[8vw] font-sans font-semibold'>{secs<10 ? "0"+secs: secs}</h1>
              <h3 className='text-center sm:text-xl font-sans font-semibold'>Seconds</h3>
            </div>
          </div>
    </div>
  )
}

export default Timer
