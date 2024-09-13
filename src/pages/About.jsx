import { useLocation } from 'react-router-dom';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Mousewheel,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Components/Carousel.css'


const About = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path)
  
  return (
    <>
      <div className=" flex w-full text-center items-center justify-center mt-10 flex-col ">
        <h2 className="text-4xl font-bold text-black sm:text-4xl mb-4 ">
          Conference Venue
        </h2>
        <p className='mb-8 px-4 text-lg font-semibold'>AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD, INDIA </p>
      </div>

      {path === "/about" && (
        <>
          {/* <div className="mt-14 flex flex-col mb-12 items-center">
            <h1 className="sm:text-3xl text-xl  font-semibold ">
              Ajay Kumar Garg Engineering College
            </h1>
          </div> */}

          <div className="sm:mx-32 mx-4 mb-10 flex flex-wrap flex-col items-center sm:text-[1.05rem] ">
           
            {/* <div className="lg:w-[80%] sm:m-10 m-4 lg:m-0  ">
              <img src="/lt.jpg" className="w-[100%] " alt="" />
            </div> */}

      <div className='h-[32vh] sm:h-[45vh] md:h-[70vh] w-[70vw] sm:w-[60vw] md:w-[60vw]'>
            <Swiper 
        
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable:true,
        }}
        loop={true}
        // cssMode={true}
        sticky={false}
        // freeMode={{ enable: true }}
        // mousewheel={{
        //   mousewheel: true,
        // }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[ Pagination, Navigation, Mousewheel,Autoplay]}
      >
        <SwiperSlide>
            <div className=' flex  justify-center items-center'>
            <img src="/image2.jpg" className='rounded-lg w-full h-full' alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' flex justify-center items-center'>
              <img src="/image3.jpg" className='rounded-lg w-full h-full' alt="" />
                
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className=' flex justify-center items-center'>
            <img src="/image4.jpg" className='rounded-lg w-full h-full' alt="" />
            </div>
          </SwiperSlide>
         <SwiperSlide>
            <div className='flex  justify-center items-center'>
            <img src="/image.jpg" className='rounded-lg w-full h-full' alt="" />
                    
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className='flex justify-center items-center'>
            <img src="/image5.jpg" className='rounded-lg w-full h-full' alt="" />
                    
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center items-center'>
            <img src="/image6.jpg" className='rounded-lg w-full h-full' alt="" />
                    
            </div>
          </SwiperSlide>
        
      </Swiper>
      </div>

            <div className=" lg:w-full mt-12 w-full ">
              <p className=" mx-6 text-justify">
                
NGISE-2025 is being organized by the Department of Information Technology,
 Ajay Kumar Garg Engineering College, Ghaziabad. The Department of Information
  Technology was founded in 1999 and expanded in 2019 with the addition of the
   CSIT branch.

                <br />
                <br />
                Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, 
                Uttar Pradesh is approved by AICTE and affiliated to Dr.
                A.P.J. Abdul Kalam Technical University, Lucknow. The college,
                 established in 1998, has six Engineering Departments offering B.Tech.
                  programs in twelve disciplines. The college also offers postgraduate
                   programs in Computer Applications (MCA) and Mater of Technology (M.Tech.) 
                   in four disciplines. The college has the distinction of being the first
                    and only college in UP to receive the Academic Excellence Award for the
                     Best Engineering College in UPTU (now AKTU) from H.E. the Governor of UP
                      for two successive years. The College has the honor of being awarded the 
                      Chancellor's Medal for the highest marks across all B.Tech. programs for 
                      five consecutive years since the inception of this Award in 2016.
              </p>
            </div>
          </div>

          {/* <div className=" flex flex-col pb-10 items-center linearGradient text-white">
            <h1 className="sm:text-3xl w-full text-center text-xl mt-10  font-semibold ">
              About the Department
            </h1>
          </div>

          <div className=" sm:px-24 px-4 pb-10 flex items-center flex-wrap text-white linearGradient sm:text-[1.05rem]">
            <div className="lg:w-[50%] w-full ">
              <p className=" mx-6 text-justify">
                The Department of Information Technology was founded in 1999 and
                expanded in 2019 with the addition of the CSIT branch.
                Presently, the department has a total intake of 300 students,
                with 180 enrolled in the IT branch and 120 in the CSIT branch.
                The department&apos; vision is to produce highly competent and
                socially sensitive IT professionals and innovators, capable of
                excelling in the multicultural and challenging industry
                scenario. The department has excellent laboratories with the
                latest equipment and relevant licensed software as well as high
                computing facilities such as Big Data Centre of Excellence,
                Software Development Centre, Cloud Computing Cell, Metaverse
                Lab, Google Developer Lab, etc. These centers are run and
                managed entirely by the students to promote software development
                for the college as well as external clients, conduct training
                programs in various technologies and host competitions. The
                department is having excellent campus placements with our alumni
                being placed in PSUs and reputed organizations like Infosys, HCL
                Technologies, L&T, L&T Infotech, Wipro Technologies, NTPC, IBM,
                Indian Air Force, the Indian Army and many more.
              </p>
            </div> */}

            {/* <div className="lg:w-[50%] sm:m-10 m-4 lg:m-0   ">
              <img src="img1.jpg" className="w-full " alt="" />
            </div>
          </div> */}
        </>
      )}

      {path === "/" && (
        <>
          <div className="font flex flex-col mb-10 items-center">
            <h1 className="sm:text-3xl text-xl mt-10  font-semibold">
              About The Conference
            </h1>
          </div>

          <div className="font sm:mx-20 mx-4 mb-14 flex flex-wrap items-center justify-center sm:text-[1.05rem]">
            <div className="lg:w-[30%] sm:m-10 m-4   lg:m-0 ">
              <img src="img3.jpg" className="w-full h-full" alt="" />
            </div>
            <div className="lg:w-[70%] w-full ">
              <p className=" mx-6 text-justify">
                The International Conference on Next Generation Information
                System Engineering (NGISE) offers a dynamic platform for
                researchers, industry practitioners, and academicians to delve
                into the forefront of technological innovation across a diverse
                spectrum of domains. With tracks covering pivotal areas such as
                Information System Engineering, Artificial Intelligence, Green
                and Sustainable IT Systems and Algorithms, Data Mining and
                Knowledge Discovery, Big Data Engineering, Next Gen Cloud
                Computing, GenAI Data Storage and Retrieval Techniques, Security
                and Privacy Issues in Next Gen Computing, Industry Applications
                and Case Studies, and Emerging Trends and Technologies NGISE
                serves as a nexus for exchanging groundbreaking ideas, sharing
                practical insights, and fostering collaborative endeavors.
                Through a rich tapestry of presentations, workshops, and
                discussions, NGISE aims to catalyze advancements in
                next-generation information systems and propel the evolution of
                technology-driven solutions in today&apos; rapidly evolving digital
                landscape.
              </p>
            </div>
          </div>
        </>
      )}
      {/* <hr class="border-t-[1.5px] mb-2  border-[#46ce9c] w-[80%] mx-auto  " /> */}
    </>
  );
}

export default About
