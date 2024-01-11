// import React from 'react'

// function CallForPaper() {
//   return (
//     <div>
//       <p className='font-bold text-base mx-40 my-4'>The paper submission link is:</p>
//       <a href="https://easychair.org/conferences/?conf=icaibe2024" className='text-blue-500 underline mx-40 my-12 '>https://easychair.org/conferences/?conf=icaibe2024</a>
//       <p className='font-bold mx-40 text-lg my-7'>All papers will go for blind peer-review and plagiarism check and may be considered for publication in (Scopus, WOS, ADBC or UGC-care Indexed Journals) All presented papers during ICAIBE - 2014 will be sent for SCOPUS publications.</p>
//       <p className='font-bold text-3xl mx-40 my-7'>Conference Track</p>
//       <ol type="1">
//         <p className='mx-40 my-7' >1. Applications of Artificial Intelligence</p>
//         <p className='mx-40 my-7' >2. Machine and Deep Learning applications</p>
//         <p className='mx-40 my-7' >3. Big Data Science</p>
//         <p className='mx-40 my-7' >4. Cloud Computing analytics</p>
//         <p className='mx-40 my-7' >5. Data Sciences</p>
//         <p className='mx-40 my-7' >6. Blockchain Computing</p>
//         <p className='mx-40 my-7' >7. Business Automation</p>
//         <p className='mx-40 my-7' >8. Soft Computing</p>
//       </ol>
//     </div>
//   )
// }

// export default CallForPaper

import React from 'react';

function CallForPaper() {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      {/* Content */}
      <p className='font-bold text-base mb-4 sm:mb-8'>The paper submission link is:</p>
      <a href="https://easychair.org/conferences/?conf=icaibe2024" className='text-blue-500 underline mb-12 sm:mb-16'>https://easychair.org/conferences/?conf=icaibe2024</a>
      <p className='font-bold text-lg mb-7 sm:mb-10'>All papers will go for blind peer-review and plagiarism check and may be considered for publication in (Scopus, WOS, ADBC or UGC-care Indexed Journals) All presented papers during ICAIBE - 2014 will be sent for SCOPUS publications.</p>
      <p className='font-bold text-3xl mb-7 sm:mb-10'>Conference Track</p>
      <ol type="1" className="space-y-4 sm:space-y-6">
        <li className='mb-7 sm:mb-8'>Applications of Artificial Intelligence</li>
        <li className='mb-7 sm:mb-8'>Machine and Deep Learning applications</li>
        <li className='mb-7 sm:mb-8'>Big Data Science</li>
        <li className='mb-7 sm:mb-8'>Cloud Computing analytics</li>
        <li className='mb-7 sm:mb-8'>Data Sciences</li>
        <li className='mb-7 sm:mb-8'>Blockchain Computing</li>
        <li className='mb-7 sm:mb-8'>Business Automation</li>
        <li className='mb-7 sm:mb-8'>Soft Computing</li>
      </ol>
    </div>
  );
}

export default CallForPaper;

