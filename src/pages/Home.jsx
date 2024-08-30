import React from 'react'
import HomeLayout from '../Components/HomeLayout'
import About from './About';
import Carousel from '../Components/Carousel';
import ImportantDates from '../pages/ImpDates'
// import CallForPaper from './CallForPaper';
// import Committee from './Commitee'
// import Registration from './Registration'
import Tracks from './Tracks';


const Home = () => {
  return (
    <>
      <div className='w-full'>
        <Carousel/>
        <ImportantDates/>
        {/* <HomeLayout /> */}
        
      <div className="flex flex-col mb-6 items-center">
        <h1 className="sm:text-4xl sm:mb-8 text-xl sm:mt-10  font-bold  inline-block   pb-2">
          About The Conference
        </h1>
      </div>

      <div className=" sm:mx-20 mx-4  flex flex-wrap items-center justify-center sm:text-[1.05rem]">
        <div className="lg:w-[35%] sm:m-10 m-4   lg:m-0 ">
          <img src="img3.jpg" className="w-full h-full" alt="" />
        </div>
        <div className="lg:w-[65%] w-full ">
          <p className=" mx-6 text-base text-justify">
            The International Conference on Next Generation Information System
            Engineering (NGISE) offers a dynamic platform for researchers,
            industry practitioners, and academicians to delve into the forefront
            of technological innovation across a diverse spectrum of domains.
            With tracks covering pivotal areas such as Information System
            Engineering, Artificial Intelligence, Green and Sustainable IT Systems and Algorithms, Data Mining and Knowledge Discovery, Big Data Engineering,
            Next Gen Cloud Computing, GenAI Data Storage and Retrieval Techniques, Security and Privacy Issues in Next Gen Computing, Industry Applications and Case Studies,
            and Emerging Trends and Technologies, the conference serves as a nexus for
            exchanging groundbreaking ideas, sharing practical insights, and
            fostering collaborative endeavors. Through a rich tapestry of
            presentations, workshops, and discussions, this conference aims to catalyze
            advancements in next-generation information systems and propel the
            evolution of technology-driven solutions in today&rsquo;s rapidly evolving
            digital landscape.
          </p>
        </div>
      </div>
       <Tracks/>
      </div>
    </>
  );
}

export default Home