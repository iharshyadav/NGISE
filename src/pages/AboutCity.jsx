import React from 'react';

const AboutCity = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-32 py-8">
      <div className="flex w-full items-center justify-center">
      <h1 className='text-4xl md:text-5xl mb-7 font-bold border-b-4 inline-block border-[#46ce9c] pb-2'> About City</h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-justify text-base md:text-lg leading-relaxed">
          Ajay Kumar Garg Engineering College is located on Delhi - Meerut Expressway, Ghaziabad, Uttar Pradesh, India. 
          Ghaziabad district is one of the six districts in Meerut Mandal and is a key industrial hub in Uttar Pradesh. 
          Ghaziabad is also a part of Delhi NCR, which encompasses the area surrounding the National Capital Territory of Delhi 
          and includes cities such as Faridabad, Gurgaon, Noida, and Ghaziabad.
          <br /><br />
          Delhi, considered the heart of India, is the capital city and is rich in history. Its ancient structures serve as reminders 
          of our glorious past. Visitors flock to Delhi to explore historic landmarks such as Qutub Minar, Red Fort, Jama Masjid, 
          Parliament House, the National Museum, Gurudwara Sis Ganj, India Gate, and the Zoo.
        </p>
      </div>
    </div>
  );
}

export default AboutCity;
