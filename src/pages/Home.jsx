import React from 'react'
import HomeLayout from '../Components/HomeLayout'
import About from './About';
import CallForPaper from './CallForPaper';
import Committee from './Commitee'


const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HomeLayout />
        <About/>
        <CallForPaper/>
        <Committee/>
        
      </div>
    </>
  );
}

export default Home