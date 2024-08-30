import { useState } from 'react';
// import '../App.css'
import { ChevronUp, ChevronDown } from 'lucide-react'



function CallForPaper() {
 
  return (
    <>
      <div className=" flex w-full items-center justify-center mt-10 ">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
      Paper Submission 
          </h2>
      </div>

      <div className="mx-16 md:mx-28 mb-8 mt-10 text-justify text-base sm:text-lg flex flex-col ">
        <p>
        The Conference intends to bring together Professionals, Academicians, Industry Experts, Researchers and Enthusiasts from across the globe and provides a platform to discuss various emerging trends and innovations and share research results and new directions in the field of next generation technologies. 
        </p>
        <p className="pt-4">
        Original, unpublished research papers, articles, and working papers, with a maximum length of 6 pages, are invited for presentation and publication in the conference proceedings on topics related to the conference theme. The submission guidelines include a maximum limit of six pages, inclusive of figures and references. All submissions will undergo a plagiarism check and papers with similarity scores of 15% or higher may be rejected without any further review. All the accepted and presented papers will be submitted to IEEE Xplore subject to the fulfilment of the IEEE standards.
        </p>
        <ul className="list-disc mt-12 pl-5 space-y-4 text-lg">
          <li>
            To download the template for paper submission, click on the link: 
            <a 
              href="https://www.ieee.org/conferences/publishing/templates.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              Template
            </a>
          </li>
          <li>
            To submit the paper, click on the link: 
            <a 
              href="https://cmt3.research.microsoft.com/NGISE2025" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              Submission Link
            </a>
          </li>
          <li>
          Prospective authors are invited to submit a maximum of 6 pages full paper on the following tracks (but not limited to):
          </li>
          </ul>
      </div>
      
     
    </>
  );

}

export default CallForPaper



