import React from 'react'

const PaperSubmission = () => {
  return (
    <div className='mx-7 sm:mx-4 lg:mx-40 overflow-x-hidden '>
    <div className='shadow-xl rounded-2xl bg-yellow-300 p-2 box-border my-2 '>
      <p className='my-4 font-bold text-xs sm:text-lg ' >The paper submission link is:</p>
      <a href="https://easychair.org/conferences/?conf=icaibe2024" className='text-blue-500 underline text-xs sm:text-lg my-12 font-semibold'>https://easychair.org/conferences/?conf=icaibe2024</a>
      <p className='my-4 text-xs sm:text-lg  '>All papers will go for blind peer-review and plagiarism check and may be considered for publication in (Scopus, WOS, ADBC or UGC-care Indexed Journals) All presented papers during ICAIBE - 2014 will be sent for SCOPUS publications.</p>

    </div>
    <div className='bg-orange-200 box-border rounded-2xl p-2 my-4'>
    <p className='my-4 sm:text-3xl hover:underline text-xl font-bold '>Conference Track</p>
      <ol type="1" className=''>
        <p className='my-4 text-xs sm:text-lg' >1. Applications of Artificial Intelligence</p>
        <p className='my-4 text-xs sm:text-lg' >2. Machine and Deep Learning applications</p>
        <p className='my-4 text-xs sm:text-lg' >3. Big Data Science</p>
        <p className='my-4 text-xs sm:text-lg' >4. Cloud Computing analytics</p>
        <p className='my-4 text-xs sm:text-lg'>5. Data Sciences</p>
        <p className='my-4 text-xs sm:text-lg' >6. Blockchain Computing</p>
        <p className='my-4 text-xs sm:text-lg' >7. Business Automation</p>
        <p className='my-4 text-xs sm:text-lg' >8. Soft Context</p>
        </ol>

    </div>
    </div>
  )
  
}

export default PaperSubmission