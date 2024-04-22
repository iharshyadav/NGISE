import React from 'react';
import '../App.css'

function CallForPaper() {
  return (
    <>
      <div className="font flex w-full items-center justify-center mt-10 mb-16">
        <h1 className="text-center text-4xl  font-bold border-b-4 inline-block border-[#46ce9c]">
          Call for Paper
        </h1>
      </div>

      <div className="font mx-16 md:mx-28 mb-8 mt-10 text-justify text-base sm:text-lg flex flex-col ">
        <p>
          We are delighted to inform you that Department of Information
          Technology, Ajay Kumar Garg Engineering College, Ghaziabad is hosting
          an Next Generation Information System Engineering (NGISE) on December 13-,14, 2024.
        </p>
        <p className="pt-4">
          The conference will be organized in offline mode only. Only in case of
          genuine reason, we can allow for online presentation. Although the
          theme of this conference is Artificial Intelligence & Big Data
          Engineering, but we have various tracks to present or share your
          ideas/research approach on different areas.
        </p>

        {/* <div className='w-full flex justify-center items-center mt-10'>
        <div className='linearGradient px-8 py-4 rounded-lg'>
           <p className='font-bold text-white'>The paper submission link is:</p>
           <a className='text-white underline hover:text-indigo-300' href="https://easychair.org/conferences/?conf=icaibe2024">https://easychair.org/conferences/?conf=icaibe2024</a>
        </div>
       </div>

       <div className='bg-red-400 my-8 p-4 rounded-lg font-bold'>
        <p>All papers will go for blind peer-review and plagiarism 
          check and may be considered for publication in (Scopus, WOS,
           ADBC or UGC-care Indexed Journals) All presented papers during 
           ICAIBE - 2014 will be sent for SCOPUS publications.</p>
       </div> */}
      </div>

      <div className="font lg:px-52 px-8 justify-center items-center flex flex-wrap text-white linearGradient pb-6 pt-10">
        <div className="lg:w-[40%] flex justify-center items-center sm:m-10 m-4 lg:m-0   ">
          <img src="track.jpg" className="w-[400px] h-[250px]" alt="" />
        </div>
        <div className="lg:w-[60%] flex justify-center items-center w-full ">
          <div className="py-6 px-10 self-center rounded-xl text-white">
            <h1 className="font-bold text-3xl mb-6 text-center underline mt-4">
              Conference Track
            </h1>
            <p className="text-lg">1. Information System Engineering</p>
            <p className="text-lg">2. Machine Learning and Deep Learning</p>
            <p className="text-lg">3. Big Data Analytics and Processing</p>
            <p className="text-lg">4. Data Mining and Knowledge Discovery</p>
            <p className="text-lg">5. Artificial Intelligence in Big Data Engineering</p>
            <p className="text-lg">6. Cloud Computing for Big Data</p>
            <p className="text-lg">7. Advanced-Data Storage and Retrieval</p>
            <p className="text-lg">8. Ethics in Artificial Intelligence and Big Data</p>
            <p className="text-lg">9. Industry Applications and Case Studies</p>
            <p className="text-lg">10. Emerging Trends and Technologies</p>
          </div>
        </div>

        <hr class="border-t-[1.5px]  mt-6 border-white w-[80%] mx-auto  " />
      </div>

      <div className="font lg:px-52 px-8 justify-center items-center flex flex-wrap text-white linearGradient pb-4 ">
        <div className="lg:w-[60%] flex justify-center items-center w-full ">
          <div className="py-6 px-10 self-center rounded-xl text-white">
            <h1 className="font-bold text-3xl mb-8 text-center underline">
              Important Dates
            </h1>
            <table className="text-center">
              <tr>
                <td>Invitation for Papers</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Paper Submission Date</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Notification to Authors</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Final Version of Camera Ready Paper</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Registration Deadline</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Conference Date</td>
                <td>13-14 December 2024</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="lg:w-[40%] flex justify-center items-center sm:m-10 m-4 lg:m-0   ">
          <img src="date.jpg" className="w-[400px] h-[250px]" alt="" />
        </div>
      </div>
    </>
  );

}

export default CallForPaper



