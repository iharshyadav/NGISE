// import React from 'react';
import img1 from "/indiagate.jpg";
import img2 from "/akshadham.jpg";
import img3 from "/jamamasjid.jpg";
import img4 from "/lotus_temple.jpg";
import img5 from "/Gandhi_museum.jpg";
import img6 from "/redfort.jpg";
import img7 from "/humanyu_tomb.jpg";
import img8 from "/lodhi_garden.jpg";
import img9 from "/gurudwara.jpg";
import img10 from "/chandni _chowk.jpg";
import img11 from "/national_museum.jpg";

const data = [
  {
    image: img1,
    name: "The India Gate",
    desc: "The India Gate is a war memorial located near the Rajpath on the eastern edge of the ceremonial axis of New Delhi.",
    website: "https://www.britannica.com/topic/India-Gate",
  },
  {
    image: img2,
    name: "Akshardham Temple",
    desc: "Akshardham means the divine abode of God. It is hailed as an eternal place of devotion, purity, and peace.",
    website: "https://akshardham.com/",
  },
  {
    image: img3,
    name: "Jama Masjid",
    desc: "Jama Masjid of Delhi, is one of the largest mosques in India. Its builder is the Mughal emperor Shah Jahan.",
    website: "https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi",
  },
  {
    image: img4,
    name: "Lotus Temple",
    desc: "The Lotus Temple is notable for its lotus-like shape, it has become a prominent attraction in the city.",
    website: "https://en.wikipedia.org/wiki/Lotus_Temple",
  },
  {
    image: img5,
    name: "Mahatma Gandhi Museum",
    desc: "The National Gandhi Museum has a very rich collection of original relics, books and other memorabilia closely connected with Mahatma Gandhi",
    website: "https://www.gandhimuseum.org/museum/",
  },
  {
    image: img6,
    name: "Red Fort",
    desc: "The Red Fort, also known as Lal Qila, is a historic fort in Delhi, India, that historically served as the main residence of the Mughal emperors.",
    website: "https://whc.unesco.org/en/list/231/",
  },
  {
    image: img7,
    name: "Humayun's Tomb",
    desc: "Humayun's Tomb was built in the 1560s, with the patronage of Humayun's son, the great Emperor Akbar.",
    website: "https://whc.unesco.org/en/list/232/",
  },
  {
    image: img8,
    name: "Lodhi Garden",
    desc: "Lodi Garden is a city park situated in New Delhi, India, spread over 90 acres.",
    website: "https://en.wikipedia.org/wiki/Lodi_Gardens",
  },
  {
    image: img9,
    name: "Gurudwara Bangla Sahib",
    desc: "Gurudwara Bangla Sahib is one of the most prominent Sikh houses of worship, known for its association with the eighth Sikh Guru.",
    website: "https://en.wikipedia.org/wiki/Gurdwara_Bangla_Sahib",
  },
  {
    image: img10,
    name: "Chandni Chowk",
    desc: "The Chandni Chowk (meaning Moonlight Square) is one of the oldest and busiest markets in Old Delhi, India. ",
    website: "https://en.wikipedia.org/wiki/Chandni_Chowk",
  },
  {
    image: img11,
    name: "National Museum",
    desc: "The National Museum in Delhi is one of India's largest museums. It's in New Delhi, amid the spacious boulevards that are full of government institutions.  ",
    website: "https://www.nationalmuseumindia.gov.in/en",
  }
];

const PlaceToVisit = () => {
  return (
    <div className="py-10">
       <div className="w-full px-6 md:px-16 lg:px-32 py-8">
      <div className="flex w-full items-center justify-center">
      <h1 className='text-4xl md:text-5xl mb-7 font-bold pb-2'> About The City</h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-justify text-base md:text-lg leading-relaxed">
          Ajay Kumar Garg Engineering College is located on Delhi - Meerut Expressway, Ghaziabad, Uttar Pradesh, India. 
          Ghaziabad district is one of the six districts in Meerut Mandal and is a key industrial hub in Uttar Pradesh. 
          Ghaziabad is also a part of Delhi NCR, which encompasses the area surrounding the National Capital Territory of Delhi 
          and includes cities such as Faridabad, Gurgaon, Noida, and Ghaziabad.
          Delhi, considered the heart of India, is the capital city and is rich in history. Its ancient structures serve as reminders 
          of our glorious past. 
        </p>
      </div>
    </div>
      <div className='flex justify-center'>
        <h1 className='text-4xl md:text-5xl mb-4 font-bold pb-2'>Places To Visit</h1>
      </div>
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-32 mb-4">
        <p className="text-justify text-base md:text-lg leading-relaxed">
        Delhi, the current capital of India, is a city that has witnessed various forms of government and rulers throughout history, consistently drawing attention from around the world. . There are plenty of tourist attractions in nearby areas. Some popular names are Jantar Mantar, Qutub Minar, Lotus Temple, Akshardham temple, India Gate, Red Fort, etc.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-4 lg:px-10">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover"/>
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{item.name}</p>
              <p className="text-sm mb-4">{item.desc}<span> <a href={item.website} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                More info
              </a></span></p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceToVisit;

