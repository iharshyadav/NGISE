import React from 'react'

const PaperSubmission = () => {
  return (
    <div className='mx-7 sm:mx-4 lg:mx-40 overflow-x-hidden '>
    {/* <div className='shadow-xl rounded-2xl bg-yellow-300 p-5 box-border my-7 '>
      <p className='my-4 font-bold text-xs sm:text-lg ' >The paper submission link is:</p>
      <a href="https://easychair.org/conferences/?conf=icaibe2024" className='text-blue-500 underline text-xs sm:text-lg my-12 font-semibold'>https://easychair.org/conferences/?conf=icaibe2024</a>
      <p className='my-4 text-xs sm:text-lg  '>All papers will go for blind peer-review and plagiarism check and may be considered for publication in (Scopus, WOS, ADBC or UGC-care Indexed Journals) All presented papers during ICAIBE - 2014 will be sent for SCOPUS publications.</p>

    </div> */}
    <div className='bg-orange-200 box-border rounded-2xl p-5  my-7'>
    <p className='my-4 sm:text-3xl hover:underline text-xl font-bold '>Conference Track</p>
      <ol type="1" className=''>
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
          </ol>

    </div>
    </div>
  )
  
}

export default PaperSubmission