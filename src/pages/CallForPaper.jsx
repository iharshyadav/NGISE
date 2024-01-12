import React from 'react';
import '../App.css'

function CallForPaper() {
  return (
   <>
   <div className='mx-16 md:mx-28 mt-10 text-justify text-base sm:text-lg font-serif '>
   <p>We are delighted to inform you that Department of 
    Information Technology, Ajay Kumar Garg Engineering College,
     Ghaziabad is hosting an International Conference on Artificial
      Intelligence and Big Data Engineering-2014 (ICAIBE-2024). on 
      February 9-,10, 2024.
      </p>
      <p className='pt-4'>
      The conference will be organized in offline mode only. Only in case of 
      genuine reason, we can allow for online presentation. Although the theme 
      of this conference is Artificial Intelligence & Big Data Engineering, but
       we have various tracks to present or share your ideas/research approach on 
       different areas.</p>

       <div className='w-full flex justify-center items-center mt-10'>
        <div className='bg-slate-200 px-8 py-4 rounded-lg'>
           <p className='font-bold'>The paper submission link is:</p>
           <a className='text-indigo-600 underline hover:text-indigo-800' href="https://easychair.org/conferences/?conf=icaibe2024">https://easychair.org/conferences/?conf=icaibe2024</a>
        </div>
       </div>

       <div className='bg-red-300 my-8 p-4 rounded-lg font-bold'>
        <p>All papers will go for blind peer-review and plagiarism 
          check and may be considered for publication in (Scopus, WOS,
           ADBC or UGC-care Indexed Journals) All presented papers during 
           ICAIBE - 2014 will be sent for SCOPUS publications.</p>
       </div>

       <div className='py-2 '>
        <h1 className='font-bold text-3xl mb-4'>Conference Track</h1>
           <p className='' >1. Applications of Artificial Intelligence</p>
        <p className='' >2. Machine and Deep Learning applications</p>
        <p className='' >3. Big Data Science</p>
        <p className='' >4. Cloud Computing analytics</p> 
       <p className='' >5. Data Sciences</p>
        <p className='' >6. Blockchain Computing</p>
       <p className='' >7. Business Automation</p>
         <p className='' >8. Soft Computing</p>
       </div>

       <div className='my-6 '>
       <h1 className='font-bold text-3xl mb-4'>Important Dates</h1>
        <table>
          <tr>
            <td>Invitation for Papers</td>
            <td>	1st March 2023</td>
          </tr>
          <tr>
            <td>Paper Submission Date</td>
            <td>	17th September 2023</td>
          </tr>
          <tr>
            <td>Notification to Authors</td>
            <td>14th October 2023</td>
          </tr>
          <tr>
            <td>Final Version of Camera Ready Paper</td>
            <td>30th November 2023</td>
          </tr>
          <tr>
            <td>Registration Deadline</td>
            <td>31st December 2023</td>
          </tr>
          <tr>
            <td>Conference Date</td>
            <td>	9-10th February 2024</td>
          </tr>
        </table>
       </div>
       </div>
   </>
  );
}

export default CallForPaper;

