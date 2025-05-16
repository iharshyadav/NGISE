import { useState } from 'react';
import '../App.css';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Tracks from './Tracks';

const CallForPaper = () => {
  const Dates = [
    {
      oldDate: "31st Dec, 2024",
      newDate: "15th Jan, 2025",
      value: "Extended Paper Submission Deadline",
    },
    {
      oldDate: "31st Jan, 2025",
      newDate: "8th Feb, 2025",
      value: "Acceptance Notification",
    },
    {
      oldDate: "10th Feb, 2025",
      newDate: "15th Feb, 2025",
      value: "Last Date of Registration",
    },
    {
      oldDate: "15th Feb, 2025",
      newDate: "20th Feb, 2025",
      value: "Final Paper Submission",
    },
  ];

  return (
    <>
      <p className="mt-8 px-10 text-justify sm:px-28">
        The International Conference on Next Generation Information System
        Engineering (NGISE) provides an engaging platform for researchers,
        industry experts, and scholars to explore cutting-edge technological
        advancements across various fields. This conference seeks to drive
        progress in next-generation information systems and foster the
        development of technology-driven solutions in today&apos;s fast-changing
        digital world through a diverse array of presentations, workshops, and
        discussions. The Conference will be conducted in <b>Hybrid-Mode</b>.
        <b>
          All accepted, registered and presented papers will be included in the
          conference proceedings and will be included in IEEE Xplore, indexed by
          EI, SCOPUS etc.
        </b>
      </p>

      <div className="w-full flex flex-col items-center justify-center sm:px-20">
        <div className="flex w-full items-center justify-center mt-8">
          <h1 className="text-center text-2xl sm:text-4xl font-bold inline-block">
            Important Dates
          </h1>
        </div>
        <div className="bg-white shadow-xl mt-10 mb-10 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[65%] border border-gray-300">
          <table className="registervalue text-lg w-full">
            <tbody>
              {Dates.map((e, index) => (
                <tr
                  key={index}
                  className="odd:bg-stone-100 even:bg-white border-b border-gray-300"
                >
                  <td
                    className="p-2 border-r border-gray-300"
                    style={{ width: "45%" }}
                  >
                    <span
                      className="mr-2"
                      style={{
                        textDecoration: "line-through",
                        textDecorationColor: "red",
                        textDecorationThickness: "2px",
                        color: "gray",
                      }}
                    >
                      {e.oldDate}
                    </span>
                    <span className="text-black"> {e.newDate}</span>
                  </td>

                  <td className="p-2">{e.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Tracks />

      <div className="flex w-full items-center justify-center mt-10">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Paper Submission
        </h2>
      </div>

      <div className="mx-10 md:mx-28 mb-8 mt-10 text-justify text-base sm:text-lg flex flex-col">
        <p>
          Papers must be submitted in English and will undergo a double-blind
          review by the Program Committee based on criteria such as technical
          quality, relevance to NGISE-2025, originality, significance, and
          clarity. All submissions must be made electronically, and papers that
          do not meet the length, file type, or formatting guidelines will be
          rejected without review. Each paper must have an abstract of up to 200
          words and be no longer than 6 pages, including references and
          appendices, following the IEEE format. Authors are encouraged to
          comprehensively cite related work, including the extended journal
          versions of conference papers where applicable. Submissions must be in
          PDF format and submitted through the designated paper submission
          system.{" "}
        </p>

        <p className="pt-4">
          Papers submitted must not have been previously published or be under
          consideration for publication in any other refereed journal or
          conference during the NGISE review process. If a paper is accepted, at
          least one author must register for the conference, attend, and present
          the paper. Papers without a presenting author will not be included in
          the proceedings.{" "}
          <b>
            All accepted, registered and presented papers will be included in
            the conference proceedings and will be included in IEEE Xplore,
            indexed by EI, SCOPUS etc.
          </b>{" "}
          Authors to ensure the originality of their manuscript and strictly
          follow the IEEE guidelines in this regard. Refer to the following link
          for these guidelines:{" "}
        </p>
        <div className="w-full mt-4 break-words">
          <a
            href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.ieee.org/publications/rights/plagiarism/plagiarism.html
          </a>
        </div>
      </div>

      <div className="flex w-full items-center justify-center mt-20">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Policy on Plagiarism
        </h2>
      </div>

      <div className="mx-12 md:mx-28 mb-8 mt-10 text-justify text-base sm:text-lg flex flex-col">
        <p>
        Our plagiarism policy upholds the highest standards of academic integrity, ensuring all submissions are original and properly cited. Any detected plagiarism will result in rejection or necessary corrective actions.
        </p>
        <br />
        <p className='font-semibold underline text-2xl'>Guidelines:</p>

        <ul className="list-disc mt-6 ml-10 space-y-2">
          <li>
          Authors must ensure their submissions are original, unpublished, and
          not under review elsewhere.
          </li>
          <li>
          Papers will be checked for plagiarism as per IEEE guidelines and plagarized papers will be rejected at any
          stage of review.
          </li>
           <li>
          As per IEEE guidelines a paper must have less than 10% plagiarism without refrences and less then 30% with refrences. 
          The same criteria will be applicable for AI plagiarism.
          </li>
          {/* <li>
            Acknowledgments of research group members, colleagues, or
            collaborators should not be present in the paper.
          </li> */}
          <li>
          As per the copyright transfer agreement, authors are
          individually and collectively responsible for their published content.
          </li>
          <li>
          Every author must uphold the highest ethical standards to
          prevent plagiarism.
          </li>
        </ul>
      </div>

      <div className="flex w-full items-center justify-center mt-20">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Double-Blind Review
        </h2>
      </div>

      <div className="mx-12 md:mx-28 mb-8 mt-10 text-justify text-base sm:text-lg flex flex-col">
        <p>
          NGISE-2025 will use a double-blind review process, meaning that the
          Program Committee members and reviewers will not be aware of the
          authors&apos; identities. To maintain anonymity, authors must prepare
          their manuscripts according to the following guidelines:{" "}
        </p>

        <ul className="list-disc mt-6 ml-10 space-y-2">
          <li>
            The names and affiliations of the authors must not be included on
            the title page or anywhere else in the paper.
          </li>
          <li>
            Funding acknowledgments should be omitted from both the title page
            and other sections of the paper.
          </li>
          <li>
            Acknowledgments of research group members, colleagues, or
            collaborators should not be present in the paper.
          </li>
          <li>
            Care should be taken when naming source files to prevent revealing
            the authors&apos; identities through metadata. All information that
            could identify the author(s) must be removed from the manuscript and
            any supplementary files. Additionally, author(s) should refer to
            their previous work in the third person and ensure all relevant
            citations are included.
          </li>
          <li>
            Submissions that have been previously uploaded as unrefereed
            preprints (such as on arXiv) are allowed. Authors must ensure their
            work is fully anonymized and must avoid citing their own arXiv
            submissions.
          </li>
        </ul>
      </div>

      <div className="flex w-full items-center justify-center mt-20">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Formatting Template
        </h2>
      </div>

      <div className="mx-16 break-words md:mx-28 mb-8 mt-10 text-base sm:text-lg flex flex-col text-center">
        <p>
          To download the template for paper submission, click on the link :
          <br />
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.ieee.org/conferences/publishing/templates.html
          </a>
        </p>
      </div>

      <div className="flex w-full items-center justify-center mt-20">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Submission Website{" "}
        </h2>
      </div>

      <div className="mx-16 break-words md:mx-28 mt-10 text-base sm:text-lg flex flex-col text-center mb-20">
        <p>
          To submit the paper, click on the link:
          <br />
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
    </>
  );
};

export default CallForPaper;
