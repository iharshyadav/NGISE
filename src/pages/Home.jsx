import React from 'react'
import About from './About'
import HomeLayout from '../Components/HomeLayout'

const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HomeLayout />
        <About />
      </div>
    </>
  );
}

export default Home