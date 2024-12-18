import React from "react";

const FAQ = () => {
  return (
    <div className=" px-[5%] md:ml-[25%]  md:mr-[19%] ">
      <div>
        <h2 class="text-4xl font-bold text-black sm:text-4xl mb-12 underline text-center mt-5">
          FAQ
        </h2>
      </div>
      <div className="flex flex-col gap-y-7 mb-5">
        <div className="flex flex-col gap-y-1">
          <div className="font-bold">
            Q. I need a visa to enter India, how can I get the invitation
            letter?
          </div>
          <div>
            <div className="text-gray-700">
              <span className="font-bold text-black">A.</span>Please visit the
              page:
              <a
                className="text-blue-700 pr-8 sm:text-md text-sm"
                href="https://www.mha.gov.in/MHA1/TourVisa.html"
              >
                https://mha.gov.in/MHA1/TourVisa.html
              </a>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="font-bold">
            Q. I have not received an invitation letter yet. When will it
            arrive?
          </div>
          <div>
            {" "}
            <div className="text-gray-700 ">
              {" "}
              <span className="font-bold text-black">A.</span> Please contact
              JTB using the following email address, and they will assist you in
              obtaining a visa.
            </div>
          </div>
          <div className="text-gray-700 ">
            Email Address for contact:{" "}
            <a className="text-blue-700" href="ngise@akgec.ac.in">
              ngise@akgec.ac.in
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="font-bold">
            Q. I am the author of the paper and a student. Do I register as a
            student?
          </div>
          <div>
            {" "}
            <div className="text-gray-700 ">
              <span className="font-bold text-black">A.</span> Author
              Registration is required for all authors, whether or not they are
              students.
            </div>
          </div>
        </div>
        {/* <div  className='flex flex-col gap-y-1'>
            <div className='font-bold'>Q. I would like to register as an author, but there is no field to enter my paper ID.</div>
            <div ><div className='text-gray-700 '><span className='font-bold text-black'>A.</span> We are sorry. The paper ID field was missing. For the time being, please finish to Author Registration without the paper II - we will check your registration using the accepted paper list. The paper ID field will be added soon.</div> </div>
        </div> */}
        <div className="flex flex-col gap-y-1">
          <div className="font-bold">
            Q. I am the author of two papers. Do I need to register for each
            paper?
          </div>
          <div>
            <div className="text-gray-700">
              <span className="font-bold text-black">A.</span> Yes. The policy
              of NGISE 2025 is “one registration per paper”. Since there is no
              field for entering the paper ID yet, it would be helpful if you
              could report your paper IDs to the “NGISE Contact” when you have
              finished the registration.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
