import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center font mt-10  mb-16">
        <h1 className="text-center text-4xl  font-bold border-b-4 inline-block border-[#46ce9c]">
          About Us
        </h1>
      </div>

      <div className="font flex flex-col mb-10 items-center">
        <h1 className="sm:text-3xl text-xl  font-semibold">
          Ajay Kumar Garg Engineering College
        </h1>
      </div>

      <div className="font sm:mx-20 mx-4 mb-10 flex flex-wrap sm:text-[1.05rem] ">
        <div className="lg:w-[35%] sm:m-10 m-4 lg:m-0  ">
          <img src="img2.webp" className="w-full h-full" alt="" />
        </div>

        <div className=" lg:w-[65%] w-full ">
          <p className=" mx-6 text-justify">
            Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Uttar
            Pradesh is approved by AICTE and affiliated to Dr. A.P.J. Abdul
            Kalam Technical University, Lucknow. The college, established in
            1998, has six Engineering Departments offering B.Tech programs in
            twelve disciplines. The college also offers postgraduate programs in
            Computer Application (MCA) and M.Tech. in four disciplines. All five
            major B.Tech. programs are accredited by NBA. The college strives
            for excellence and has been consistently maintaining excellent
            academic results and placements. The college has the distinction of
            being the first and only college in UP to receive the Academic
            Excellence Award for the Best Engineering College in UPTU (now AKTU)
            from H.E. the Governor of UP for two successive years. The college
            has been consistently having a large number of students on
            university merit lists. The College students have the honor of being
            awarded the Chancellor's Medal for the highest marks across all B.Tech.
            programs for five consecutive years since the inception of this
            Award in 2016. The college places special emphasis on collaboration
            with industries to groom the students for meeting the industry
            standards. The college has established several Centres of
            Excellence in collaboration with eminent multinational industries.
            The primary objective of these centers is to provide industry
            relevant training in inter-disciplinary state-of-art technologies as
            well as to promote applied research and industrial consultancy.
          </p>
        </div>
      </div>

      <div className="font flex flex-col pb-10 items-center linearGradient text-white">
        <h1 className="sm:text-3xl w-full text-center text-xl mt-10  font-semibold ">
          About the Department
        </h1>
      </div>

      <div className="font sm:px-20 px-4 pb-10 flex flex-wrap text-white linearGradient sm:text-[1.05rem]">
        <div className="lg:w-[70%] w-full ">
          <p className=" mx-6 text-justify">
            The Department of Information Technology was founded in 1999 and
            expanded in 2019 with the addition of the CSIT sub-branch.
            Presently, the department has a total intake of 300 students, with
            180 enrolled in the IT branch and 120 in the CSIT branch. The
            department's vision is to produce highly competent and socially
            sensitive IT professionals and innovators, capable of excelling in the
            multicultural and challenging industry scenario. IT has changed the
            way of our life and the pace of change is very fast. This scenario
            is giving us new opportunities as well as new challenges. IT has
            enhanced the efficiency and effectiveness of business processes
            dramatically. ERP solutions have further empowered organizations
            to do multi-location, multilingual and multicurrency operations in
            the global business environment. New ways of marketing, making
            friends, communication and socializing have come up in the form of
            blogs, forums, chats, emails, etc. IT is working as a hub to drive
            the businesses to new heights. IT jobs are more paying as well as
            more demanding. To continuously learn and grasp new technologies is
            a real challenge for IT professionals. Creating such professionals
            to take this challenge and rise to the apex of IT profession is our
            goal. At AKGEC excellence is the way of life. We are committed to
            giving students an environment to nurture their talent to its
            fullest potential. This is achieved by learned faculty members, year
            round conduction of numerous seminars, guest lectures, and industry
            academia interaction, co-curricular & extracurricular activities. We
            strive to transform the students not only into good professionals
            but a good human being and a dutiful citizen.
          </p>
        </div>

        <div className="lg:w-[30%] sm:m-10 m-4 lg:m-0   ">
          <img src="img1.jpg" className="w-full h-full" alt="" />
        </div>
      </div>

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
            The International Conference on Next Generation Information System
            Engineering (NGISE) offers a dynamic platform for researchers,
            industry practitioners, and academicians to delve into the forefront
            of technological innovation across a diverse spectrum of domains.
            With tracks covering pivotal areas such as Information System
            Engineering, Artificial Intelligence, Green and Sustainable IT Systems and Algorithms, Data Mining and Knowledge Discovery, Big Data Engineering,
            Next Gen Cloud Computing, GenAI Data Storage and Retrieval Techniques, Security and Privacy Issues in Next Gen Computing, Industry Applications and Case Studies,
            and Emerging Trends and Technologies NGISE serves as a nexus for
            exchanging groundbreaking ideas, sharing practical insights, and
            fostering collaborative endeavors. Through a rich tapestry of
            presentations, workshops, and discussions, NGISE aims to catalyze
            advancements in next-generation information systems and propel the
            evolution of technology-driven solutions in today's rapidly evolving
            digital landscape.
          </p>
        </div>
      </div>

      <hr class="border-t-[1.5px] mb-2  border-[#46ce9c] w-[80%] mx-auto  " />
    </>
  );
}

export default About
