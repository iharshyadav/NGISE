import React from 'react'

const About = () => {
  return (
    <>
    <div className= ' flex flex-col mb-10 items-center' >
  <h1 className='sm:text-3xl text-xl mt-10  font-semibold'>Ajay Kumar Garg Engineering College</h1>
</div> 

<div className='sm:mx-20 mx-4 mb-10 flex flex-wrap'>
<div className='lg:w-[35%] sm:m-10 m-4 lg:m-0  '>
<img src="img2.webp" className='w-full h-full' alt="" />
</div>

        <div className=" lg:w-[65%] w-full ">
          <p className=" mx-6 text-justify">
          Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Uttar Pradesh is 
          approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University,
           Lucknow. The college, established in 1998, has six Engineering Departments 
           offering B.Tech programs in twelve disciplines. The college also offers postgraduate 
           programs in Computer Application (MCA) and M.Tech. in four disciplines. All
            five major B.Tech. programs are accredited by NBA. The college strives for 
            excellence and has been consistently maintaining excellent academic results 
            and placements. The college has the distinction of being the first and only
             college in UP to receive the Academic Excellence Award for the Best Engineering 
             College in UPTU (now AKTU) from H.E. the Governor of UP for two successive years. 
             The college has been consistently having a large number of students in university
              merit lists. The College students have the honor of being awarded the Chancellor's 
              Medal for highest marks across all B.Tech. programs for five consecutive 
              years since the inception of this Award in 2016. The college places special
               emphasis on collaboration with industries to groom the students for meeting 
               the industry standards. The college has established a number of Centres of
                Excellence in collaboration with eminent multinational industries. The primary 
                objective of these centres is to provide industry relevant training in inter-disciplinary 
                state-of-art technologies as well as to promote applied research and industrial consultancy.
          </p>
        </div>
      </div>

      <div className="flex flex-col pb-10 items-center bg-slate-300">
        <h1 className="sm:text-3xl text-xl mt-10  font-semibold ">
        About the Information Technology Department
                </h1>
      </div>

      <div className="sm:px-20 px-4 pb-10 flex flex-wrap bg-slate-300 ">
        <div className="lg:w-[70%] w-full ">
          <p className=" mx-6 text-justify">
          IT has changed the way of our life and the pace of change 
          is very fast. This scenario is giving us new opportunity 
          as well as new challenges. IT has enhanced the efficiency
           and effectiveness of business processes dramatically. ERP 
           solutions have further empowered the organizations to do 
           multi-location, multilingual and multicurrency operation in 
           the global business environment. New ways of marketing, making 
           friends, communication and socialization have come up in the form 
           of blogs, forums, chats, emails etc.
           </p>
       <p className='mx-6 text-justify mt-4'>
       IT is working as a hub to drive the businesses to new heights. IT jobs are more 
       paying as well as more demanding. To continuously learn and grasp new technologies
        is a real challenge for IT professionals. Creating such professionals to take this
        challenge and rise to the apex of IT profession is our goal. At AKGEC excellence 
        is the way of life. We are committed to give students an environment to nurture their
         talent in to its fullest potential. This is achieved by learned faculty members, 
         year round conduction of numerous seminars, guest lectures, and industry academia 
         interaction, co-curricular & extracurricular activities. We strive to transform the 
         students not only into good professionals but a good human being and a dutiful citizen.
          </p>
        </div>

        <div className="lg:w-[30%] sm:m-10 m-4 lg:m-0   ">
          <img src="img1.jpg" className='w-full h-full' alt="" />
        </div>
      </div>

      <div className=" flex flex-col mb-10 items-center">
        <h1 className="sm:text-3xl text-xl mt-10  font-semibold">AKGEC Conference</h1>
      </div>

      <div className="sm:mx-20 mx-4 mb-10 flex flex-wrap items-center justify-center">
        <div className="lg:w-[30%] sm:m-10 m-4   lg:m-0 ">
          <img src="img3.jpg" className='w-full h-full' alt="" />
        </div>
        <div className="lg:w-[70%] w-full ">
          <p className=" mx-6 text-justify">
          This conference will provide an excellent international forum for 
          sharing knowledge, results, methodology and applications of Artificial
           Intelligence and Big Data Engineering. The aim of the conference is 
           to provide a platform to the researchers and practitioners from both
            academia as well as industry to meet and share cutting-edge development in the field.
            </p>
                    
            <p className=" mx-6 text-justify mt-4">
       Authors are solicited to contribute to the conference by submitting articles that 
        illustrate research results, projects, surveying works and industrial experiences
         that describe significant advances in the areas of Artificial Intelligence and Big
          Data Engineering. This conference will feature a high-quality technical & experiential 
          program dealing with a mix of traditional and contemporary hot topics in paper presentations
           and high-profile keynotes.
          </p>
        </div>
      </div>
      </>
  )
}

export default About