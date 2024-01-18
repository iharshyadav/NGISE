import React from 'react'
import HomeLayout from '../Components/HomeLayout'
import About from './About';
import CallForPaper from './CallForPaper';
import Committee from './Commitee'
import Registration from './Registration'


const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HomeLayout />
        <About/>
        <CallForPaper/>
        <Committee/>
        <Registration/>
        
      </div>
    </>
  );
}

export default Home