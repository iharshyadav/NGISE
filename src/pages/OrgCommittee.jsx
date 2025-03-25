import React from 'react';

const Committee = () => {
  return (
    <>
      <div className='flex w-full items-center justify-center mt-12 mb-10'>
        <h1 className='text-center text-4xl font-bold inline-block pb-2'>ORGANIZING COMMITTEE</h1>
      </div>

      <div className='w-full flex justify-center px-8 mb-6'>
        <div className='flex flex-col my-4 w-full'>
          
          <div className="mb-10">
            <h2 className="text-2xl flex justify-center font-bold mb-4">Honorary General Chair</h2>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/8420b9cb-de66-421a-9c0c-32411c1bc508/-/preview/356x363/" 
                  alt="Dr. R. K. Agarwal"
                  className="w-full h-84 object-cover mb-4"
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Dr. R. K. Agarwal</h3>
                  <p>Director General</p>
                  <p>Ajay Kumar Garg Engineering College</p>
                  <p>Ghaziabad, India</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
  <h2 className="text-2xl flex justify-center font-bold mb-4 ">Honorary Advisory Chair</h2>
  
  <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-10">
    {/* Card 1 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/21f7b439-a4e1-4baa-9b73-1faf2c6dc9e2/-/preview/252x324/"
        alt="Person 1"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Prof. Sri Niwas Singh</h3>
        <p>Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM) Gwalior, India</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/34d23b2d-5834-4017-816f-911a88cc719e/-/preview/190x191/"
        alt="Person 2"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr Yogesh Singh Chauhan</h3>
        <p>Indian Institute of Technology (IIT), Kanpur</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/b4b1e588-b43c-45b8-9ad2-bef10ecbc053/-/preview/328x327/"
        alt="Person 3"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Prof. Satish Kumar Singh</h3>
        <p>Indian Institute of Information Technology Allahabad, India</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/1c2b115d-7fcb-44dd-b0e7-d434866b65a2/-/preview/365x475/"
        alt="Person 4"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr Asheesh Singh</h3>
        <p>Motilal Nehru National Institute of Technology (MNNIT), Allahabad</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/010113ba-aa70-46a1-8b43-18d0168653fb/-/preview/312x312/"
        alt="Person 5"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Prof. J. Ramkumar</h3>
        <p>Indian Institute of Technology Kanpur, India</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/1611a4ed-edd3-4c41-a994-4075c26138b0/-/preview/400x400/"
        alt="Person 6"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr. Mohd. Rihan</h3>
        <p>National Institute of Solar Energy, New Delhi</p>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-10">
    {/* Card 7 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/85131930-dae8-412c-84fa-7a17170cafba/-/preview/124x128/"
        alt="Person 7"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr Avadesh Kumar</h3>
        <p>Galgotia University, UP</p>
      </div>
    </div>

    {/* Card 8 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/3ee5f7fd-572e-4b1d-9bfc-1df01d7c9957/-/preview/434x444/"
        alt="Person 8"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Mr. Varun Kakkar</h3>
        <p>B. T. Kumaon Institute of Technology, Dwarahat, India</p>
      </div>
    </div>

    {/* Card 9 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/ed57c107-03b8-45d5-abce-c137b425a375/-/preview/124x128/"
        alt="Person 9"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr. Prabhakar Tiwari</h3>
        <p>MMM University of Technology, Gorakpur, UP</p>
      </div>
    </div>

    {/* Card 10 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/6e8dfea6-d9dc-43be-a5d3-bd0b428a42d9/-/preview/128x98/"
        alt="Person 10"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr. Akhikesh Tiwari</h3>
        <p>Indian Institute of Information Technology (IIIT), Allahabad</p>
      </div>
    </div>

    {/* Card 11 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/a246a4b0-1390-4f95-9251-2bc4a7936b48/-/preview/103x128/"
        alt="Person 11"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr Arun Singh</h3>
        <p>Rajkiya Engineering College, Kannauj, U.P</p>
      </div>
    </div>

    {/* Card 12 */}
    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/22570c1f-7a7e-483b-8447-d18784b2bca9/-/preview/93x128/"
        alt="Person 12"
        className="w-full h-60 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr Smita</h3>
        <p>National Institute of Electronics & Information Technology, Noida</p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="mb-10">
  <h2 className="text-2xl flex justify-center font-bold mb-4">General Chair</h2>
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-6 md:space-y-0 mb-10">

    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/e381736c-b70b-4c3d-93f6-837d9829705c/-/preview/284x284/"
        alt="Prof. (Dr.) Dirk Draheim"
        className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Prof. (Dr.) Dirk Draheim</h3>
        <p>Tallinn University of Technology</p>
        <p>Estonia</p>
      </div>
    </div>

    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/faba9ab7-fe92-467a-ad0c-abad3ced3c7b/-/preview/291x291/"
        alt="Prof. (Dr.) Rahul Sharma"
        className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Prof. (Dr.) Rahul Sharma</h3>
        <p>Ajay Kumar Garg Engineering College</p>
        <p>Ghaziabad, UP, India</p>
      </div>
    </div>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-2xl flex justify-center font-bold mb-4">International Organizing Chair</h2>
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-6 md:space-y-0 mb-10">

    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/ac230815-d543-44f6-9fc1-9779440531ce/-/preview/301x301/"
        alt="Dr. Markus Bertl"
        className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr. Markus Bertl</h3>
        <p>Vienna University of Economics and Business</p>
        <p>Austria</p>
      </div>
    </div>

    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/44c941b2-2d59-4f6e-81f3-b8dc3bd169d1/-/preview/257x171/"
        alt="Dr. Silvia Lips"
        className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr. Silvia Lips</h3>
        <p>eID expert at the Estonian Information System Authority</p>
        <p>Estonia</p>
      </div>
    </div>

    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/059cb7e0-ca41-4c75-bd2c-86847665495e/-/preview/237x312/"
        alt="Dr. Rozha Kamal Ahmed"
        className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Dr. Rozha Kamal Ahmed</h3>
        <p>Computer Science Institute, Sulaimani Polytechnic University</p>
        <p>Sulaymaniyah, Iraq</p>
      </div>
    </div>
  </div>
</div>

<div className="mb-10">
  <h2 className="text-2xl flex justify-center font-bold mb-4">Local Organizing Chair</h2>
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-6 md:space-y-0 mb-10">

    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/50019d99-b51d-4001-b967-a73be301aaa7/-/preview/712x999/"
        alt="Prof. (Dr.) Anupama Sharma"
        className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Prof. (Dr.) Anupama Sharma</h3>
        <p>Ajay Kumar Garg Engineering College</p>
        <p>Ghaziabad, UP, India</p>
      </div>
    </div>

    <div className="flex flex-col items-center w-48">
      <img
        src="https://ucarecdn.com/8b9db0cf-f743-4ace-89ca-6aa3c7fd59c4/-/preview/280x350/"
        alt="Prof. (Dr.) Ruchi Gupta"
        className="w-full h-60 sm:h-48 md:h-48 lg:h-48 object-cover mb-4"
      />
      <div className="text-center w-full">
        <h3 className="text-xl font-bold">Prof. (Dr.) Ruchi Gupta</h3>
        <p>Ajay Kumar Garg Engineering College</p>
        <p>Ghaziabad, UP, India</p>
      </div>
    </div>
  </div>
</div>

<div style={{ display: "flex", justifyContent: "center", padding: "20px"}}>
      <div style={{ textAlign: "left", maxWidth: "800px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Finance Chair</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Mr. Santosh Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Mr. Pradeep Tripathi, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
        </ul>

        <h2 style={{ fontWeight: "bold",marginTop: "20px", fontSize: "20px" }}>Publicity & Web Chair</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Dr. Shivani Agarwal, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Dr. Anju Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Ms. Tahira Mazumder, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
        </ul>

        <h2 style={{ fontWeight: "bold",marginTop: "20px", fontSize: "20px" }}>Organizing Committee Members</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Mr. Sarvachan Verma, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Akanksha Shukla, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Birendra Kumar, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Mili Srivastava, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Achintya Pandey, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Shikha Agarwal, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Aarti Chaudhary, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Pankaj Singh, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Madhup Agarwal, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Chelsi Sen, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Priti Choudhary, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Shraddha Jauhari, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Tanu Gupta, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Amit Kumar, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr Nikhil Kumar, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Anushka Tyagi, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Sudhakar Dwivedi, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Ms. Rinki Tyagi, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Rupak Kumar, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
          <li>Mr. Anupam Kumar Saini, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India</li>
        </ul>
        <hr />

        {/*<hr />

        <h2 style={{ fontWeight: "bold",marginTop: "20px", fontSize: "20px" }}>TECHNICAL PROGRAM COMMITTEE CHAIR</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Dr. Arun Kumar Sangaiah, National Yunlin University of Science and Technology, Taiwan</li>
          <li>Dr. Anastasija Nikiforova, University of Tartu, Estonia</li>
          <li>Dr. Tania Cerquitelli, Politecnico di Torino, Italy</li>
          <li>Dr. Innar Liiv, Tallinn University of Technology, Tallinn, Estonia</li>
          <li>Dr. Elli Valla, Tallinn University of Technology, Tallinn, Estonia</li>
          <li>Dr. Sunil Kumar, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Dr. Aditya Pratap Singh, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Dr. Rashmi Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Dr. Anju Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Dr. Shivani Aggarwal, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Dr. Nandita Goyal, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
        </ul>

        <h2 style={{ fontWeight: "bold" ,marginTop: "20px", fontSize: "20px"}}>TECHNICAL PROGRAM COMMITTEE CO-CHAIR</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Dr. Nitin Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Ms. Tahira Mazumder, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Mr. Sumit Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Mr. Santosh Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
          <li>Mr. Pancham Singh, Ajay Kumar Garg Engineering College, Ghaziabad, India</li>
        </ul>*/}
      </div>
    </div>        </div>
      </div>
    </>
  );
}

export default Committee;
