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
      <div className='w-full linearGradient flex md:flex-row flex-col md:h-[65vh]'>


      <div className="relative md:w-[39%] flex items-center justify-center md:h-[65vh] text-white">
  <div
    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/bg.png')",
      opacity: 0.2, // Adjust background opacity here
    }}
  ></div>
  <div className="relative md:pl-10 pt-10 md:pt-0 m-1 md:m-0 z-10">
    <h1 className="font-bold text-4xl md:text-3xl lg:text-5xl text-center">WELCOME TO</h1>
    <h1 className="font-bold text-4xl md:text-3xl lg:text-5xl text-center mb-4">NGISE-2025</h1>
    <p className="sm:text-xl font-bold text-center">1st International Conference on</p>
    <p className="sm:text-xl font-bold text-center">Next Generation Information System Engineering</p>
    <p className="sm:text-xl font-bold text-center">being held on 28th-29th March, 2025</p>
    <p className="sm:text-xl font-bold text-center">
      at Ajay Kumar Garg Engineering College, Ghaziabad, Uttar Pradesh, India
    </p>
  </div>
</div>
      

      <div className="md:w-[61%] -z-1 flex items-center justify-center md:h-[65vh] mt-6 md-mt-0 mb-8 mb:mb-0 ">
        <div className='lg:w-[70%] lg:h-[80%] w-[90%] h-[85%]'>
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
      </div>

      </div>
    </>
  );
}

export default Carousel