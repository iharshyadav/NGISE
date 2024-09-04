import { useState } from 'react';
// import '../App.css'
import { ChevronUp, ChevronDown } from 'lucide-react'
import Tracks from './Tracks';

const Dates = [
  { data: "25th Nov, 2024", value: "Paper Submission Deadline" },
  { data: "10th Jan, 2025", value: "Acceptance Notification" },
  { data: "20th Jan, 2025", value: "Early Bird Registration" },
  { data: "22nd Jan, 2025", value: "Final Paper Submission" },
  
];



function CallForPaper() {
 
  return (
    <>
  <p className='mt-8 sm:px-28'>The International Conference on Next Generation Information System
     Engineering (NGISE) provides an engaging platform for researchers, 
     industry experts, and scholars to explore cutting-edge technological 
     advancements across various fields. This conference seeks to drive progress
      in next-generation information systems and foster the development of technology-driven 
      solutions in today's fast-changing digital world through a diverse array of presentations, 
      workshops, and discussions.</p>
    
<div className=" w-full flex flex-col items-center justify-center sm:px-20 ">
  <div className='flex w-full items-center justify-center mt-8 '>
        <h1 className='text-center text-2xl sm:text-4xl font-bold  inline-block '>Important Dates</h1>
      </div>      
      <div className="bg-white shadow-xl mt-10 mb-10  w-[87%] sm:[80%] md:w-[55%] lg:w-[50%] border border-gray-300">
      <table className="registervalue text-lg w-full  ">
          <tbody>
            {Dates.map((e, index) => (
              <tr key={index} className="odd:bg-stone-100 even:bg-white border-b border-gray-300">
                <td className="p-2 border-r border-gray-300" style={{ width: "30%" }}>{e.data}</td>
                <td className="p-2">{e.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
 
      </div>
    </div>

  <Tracks/>

      <div className=" flex w-full items-center justify-center mt-10 ">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
      Paper Submission 
          </h2>
      </div>

      <div className="mx-16 md:mx-28 mb-8 mt-10 text-justify text-base sm:text-lg flex flex-col ">
        <p>
        Papers must be submitted in English and will undergo a double-blind 
        review by the Program Committee based on criteria such as technical 
        quality, relevance to NGISE-2025, originality, significance, and clarity.
         All submissions must be made electronically, and papers that do not meet
          the length, file type, or formatting guidelines will be rejected without
           review. Each paper must have an abstract of up to 200 words and be no longer
            than 6 pages, including references and appendices, following the IEEE format.
             Authors are encouraged to comprehensively cite related work, including the
              extended journal versions of conference papers where applicable. Submissions
           must be in PDF format and submitted through the designated paper submission system.         </p>

        <p className="pt-4">
Papers submitted must not have been previously published or be under consideration for 
publication in any other refereed journal or conference during the NGISE review process. 
If a paper is accepted, at least one author must register for the conference, attend, and
 present the paper. Papers without a presenting author will not be included in the proceedings.
  All accepted, registered and presented papers will be included in the conference proceedings
   and will be included in IEEE Xplore, indexed by EI, SCOPUS etc. Authors to ensure the originality 
   of their manuscript and strictly follow the IEEE guidelines in this regard. Refer to the following
    link for these guidelines:  <a href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
     target="_blank" 
     rel="noopener noreferrer" 
     className="text-blue-600 hover:underline">
    https://www.ieee.org/publications/rights/plagiarism/plagiarism.html</a>
                
             </p>


        {/* <ul className="list-disc mt-12 pl-5 space-y-4 text-lg">
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
          </ul> */}
      </div>


      <div className=" flex w-full items-center justify-center mt-20 ">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
      Double-Blind Review
          </h2>
      </div>

      <div className="mx-16 md:mx-28 mb-8 mt-10 text-justify text-base sm:text-lg flex flex-col ">
        <p>
      NGISE-2025 will use a double-blind review process, 
      meaning that the Program Committee members and reviewers 
      will not be aware of the authors' identities. To maintain 
      anonymity, authors must prepare their manuscripts according 
      to the following guidelines:   </p>

    <ul className='list-disc mt-6 ml-10 space-y-2'>
      <li>The names and affiliations of the authors must not be included on the title page or anywhere else in the paper.</li>
      <li>Funding acknowledgments should be omitted from both the title page and other sections of the paper.</li>
      <li>Acknowledgments of research group members, colleagues, or collaborators should not be present in the paper.</li>
      <li>Care should be taken when naming source files to prevent revealing the authors' identities through metadata. 
          All information that could identify the author(s) must be
         removed from the manuscript and any supplementary files. Additionally, author(s) should refer to their previous work 
         in the third person and ensure all relevant citations are included.</li>
        <li>Submissions that have been previously uploaded as unrefereed preprints (such as on arXiv) are allowed.
           Authors must ensure their work is fully anonymized and must avoid citing their own arXiv submissions.</li>
    </ul>

       
      </div>


      <div className=" flex w-full items-center justify-center mt-20 ">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
      Formatting Template
          </h2>
      </div>

      <div className="mx-16 md:mx-28 mb-8 mt-10  text-base sm:text-lg flex flex-col text-center ">
        <p>
        To download the template for paper submission, click on the link :
        <br/> 
            <a 
              href="https://www.ieee.org/conferences/publishing/templates.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
               https://www.ieee.org/conferences/publishing/templates.html
            </a></p>
      </div>

      <div className=" flex w-full items-center justify-center mt-20 ">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
      Submission Website          </h2>
      </div>

      <div className="mx-16 md:mx-28 mt-10  text-base sm:text-lg flex flex-col text-center mb-20">
        <p>
        To submit the paper, click on the link: 
        <br/> 
            <a 
              href="https://cmt3.research.microsoft.com/NGISE2025" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
             https://cmt3.research.microsoft.com/NGISE2025
            </a>
            </p>
      </div>




    {/* <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl ml-4 font-bold mb-4">Guidelines for Authors</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p>
          The conference is being organized in Hybrid mode. Authors are required
          to submit their original work related to the themes and the sub-themes
          (specified under tracks and sub-tracks) and are solicited for
          presentation in the conference. Authors need to ensure that only the
          original papers (not submitted elsewhere) must be submitted to the
          conference. All papers that conform to submission guidelines will be
          peer reviewed and evaluated based on originality, technical strength,
          and scientific contribution. Acceptance notification will be
          communicated to the authors by email. <br />
          <br />
          After receiving the reviews, the authors must incorporate the
          suggestions in accordance with the review comments and submit the
          final camera-ready papers within the final submission deadline. The
          total length of the paper must not exceed ‘six’ A4 size pages
          including bibliography and appendices. All the papers will be
          submitted through on-line paper submission process using Microsoft CMT
          submission system. Authors are requested to upload the paper by
          clicking the paper submission link:  <a 
              href="https://cmt3.research.microsoft.com/NGISE2025 " 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              Submit Here
            </a>
          <br />
          <br />
          All accepted, registered and presented papers will be included in the
          conference proceedings and will be included in IEEE Xplore, indexed by
          EI, SCOPUS etc. All papers must follow strict formatting instructions.
          For detailed instructions, kindly visit the following link: <a 
              href="https://www.ieee.org/conferences/publishing/templates.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              Click Here
            </a>
        </p>
      </div>
    </div>
      
      */}
    </>
  );

}

export default CallForPaper



