import React from "react";

const Committee = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center mt-12 mb-10">
        <h1 className="text-center text-4xl font-bold inline-block  pb-2 ">
          PROGRAM COMMITTEE
        </h1>
      </div>

      <div className="w-full flex justify-center p-4 sm:p-8 mb-6">
        <div className="flex flex-col my-4 w-full max-w-3xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Chief Patron</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. R. K. Agarwal, Director General, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India {" "}
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Patron</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Hemant Ahuja, Director, Ajay Kumar Garg Engineering College,
                Ghaziabad, UP, India
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">General Chair</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Rahul Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, UP,
                India{" "}
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Conference Chair</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Rahul Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, UP,
                India{" "}
              </li>
              <li>
                Dr. Anupama Sharma, Ajay Kumar Garg Engineering College,
                Ghaziabad, UP, India
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Convener</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Anupama Sharma, Ajay Kumar Garg Engineering College,
                Ghaziabad, UP, India
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Co-convener</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Ruchi Gupta, Ajay Kumar Garg Engineering College, Ghaziabad, UP,
                India
              </li>
            </ul>
          </div>
          {/* <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Treasurer</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Ruchi Gupta Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
              <li>
                Dr. Rashmi Sharma Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Program Chair</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Sunil Kumar Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
              <li>
                Dr. Nandita Goyal Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Publication Chair</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Rahul Sharma Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
              <li>Dr. Markus Bertl Tallinn University, Estonia</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Track Chairs/ Technical Program Committee
            </h2>
            <ul className="list-disc list-inside">
              <li>Dr. Silvia Lips, Tallinn University, Estonia</li>
              <li>Dr. Prayag Tiwari, Halmstad University, Sweden</li>
              <li>Dr. Colin Atkinson, University of Mannheim, Germany</li>
              <li>
                Dr. Shobha Tyagi, Manav Rachna International Institute of
                Research and Studies, India
              </li>
              <li>
                Dr. Pushpa Singh, GL Bajaj Institute of Technology & Management,
                Greater Noida, India
              </li>
              <li>Dr. Umesh Gupta, Bennett University, India</li>
              <li>Dr. Amrita Jyoti, ABES Engineering College, India</li>
              <li>
                Dr. Rashmi Sharma, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Dr. Shivani Agrawal, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Dr. Nandita Goyal, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Dr. Anju Mishra, Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
              <li>
                Dr. Nitin Sharma, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Ms. Tahira Mazumder, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Mr. Sumit Sharma, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Mr. Birendra Tiwari, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Mr. Pancham Singh, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Mr. Santosh Verma, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Mr. Pradeep Tripathi, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Mr. Achintya Pandey, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Mr. Anil Singh Chauhan, Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Publicity Chair</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Shivani Agrawal Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Dr. Avdhesh Gupta Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Local Organizing Chair</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. Anju Mishra Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Conference Secretary</h2>
            <ul className="list-disc list-inside">
              <li>
                Mr. Sumit Sharma Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
              <li>
                Mr Santosh Verma Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
              <li>
                Mr. Madhup AgarwalAjay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Ms. Tanu Gupta Ajay Kumar Garg Engineering College, Ghaziabad,
                India
              </li>
              <li>
                Ms. Shikha Agarwal Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
              <li>
                Ms. Sheradha Jauhari Ajay Kumar Garg Engineering College,
                Ghaziabad, India
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Committee;
