import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Mousewheel,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'


const Carousel = () => {


  return (
    <>
      <div className='w-full linearGradient flex h-[65vh]'>

      <div className='w-[35%] flex items-center justify-center h-[65vh]'>
        <div className='pl-10 text-white'>
          <h1 className='font-bold md:text-4xl lg:text-5xl text-center'>WELCOME TO</h1>
          <h1 className='font-bold md:text-4xl lg:text-5xl text-center mb-4'>NGISE-2025</h1>
          <p className='text-md font-semibold text-center '>1st International Conference on Next Generation Information System Engineering
             in Ajay Kumar Garg Engineering College, 28th-29th Mar, 2025</p>
        </div>
      </div> 

      <div className="w-[65%] -z-1 flex items-center justify-center h-[65vh]  ">
        <div className='w-[70%] h-[80%] '>
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
            <div className=' flex justify-center items-center'>
            <img src="/image2.jpg" className='rounded-lg' alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' flex justify-center items-center'>
              <img src="/image3.jpg" className='w-full h-full' alt="" />
                
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className=' flex w-full justify-center items-center'>
            <img src="/image4.jpg" className='w-full h-full' alt="" />
            </div>
          </SwiperSlide>
         <SwiperSlide>
            <div className='flex w-full  justify-center items-center'>
            <img src="/image.jpg" className='w-full h-full' alt="" />
                    
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className='flex w-full justify-center items-center'>
            <img src="/image5.jpg" className='w-full h-full' alt="" />
                    
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex w-full justify-center items-center'>
            <img src="/image6.jpg" className='w-full h-full' alt="" />
                    
            </div>
          </SwiperSlide>
        
      </Swiper>
      </div>
      </div>

      </div>
    </>
  );
}

export default Carousel