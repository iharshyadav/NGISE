import React from "react";

const Committee = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center mt-12 mb-10">
        <h1 className="text-center text-4xl font-bold inline-block  pb-2 ">
         TECHNICAL PROGRAM COMMITTEE
        </h1>
      </div>

      <div className='w-full flex  justify-center px-8 mb-6'>
        <div className='flex flex-col my-4 w-full max-w-3xl'>
      {/* <div className='flex flex-col sm:flex-row my-4'>
       <div className='w-full h-[70px] sm:w-1/5 mx-2 sm:mx-4 mb-2 sm:mb-4 p-2 linearGradient rounded-md shadow-lg'>
        <p className='font-bold text-base lg:text-lg  text-white'>Program Committee</p>
      </div>*/}
      <div className='w-full text-base lg:text-lg   sm:w-4/5 ml-4'>
        <p>Dr. Punam Kumari, Amity University, Bangalore</p>
        <p>Dr. Megha Jain, JSS Academy of Technical Education, Noida</p>
        <p>Dr. Rashmi Kushwah, Jaypee Institute of Information Technology, Noida</p>
        <p>Dr. Ramveer Singh, GCET, Gr. Noida</p>
        <p>Dr. Arvind Kushwah, GCET, Gr. Noida</p>
        <p>Dr. Shobha Tyagi, Manav Rachna International Institute of Research and Studies, Faridabad</p>
        <p>Dr. Pushpa Singh, G.L Bajaj Institute of Technology, Grater Noida</p>
        <p>Dr. Sandeep Gupta, Sunder Deep Group of Institution, Ghaziabad</p>
        <p>Dr. Jitendra Kumar, ABES Engineering College, Ghaziabad</p>
        <p>Dr. Nidhi Gupta, Sharda University, Gr. Noida</p>
        <p>Dr. Anupama Kaushik, Maharaja Surajmal Institute of Technology, Delhi</p>
        <p>Dr. Ajay Kumar Singh, Jain University, Bangalore</p>
        <p>Dr. Navin Prakash	, IIMT, Greater Noida</p>
        <p>Dr. Vimal Kumar,	School of Computing Science and Engineering, Galgotias University, Greater Noida</p>
        <p>Dr. Aanjey Mani Tripathi	School of Computing Science and Engineering, Galgotias University, Greater Noida</p>
        <p>Dr. Rakesh Kumar Yadav,	Maharishi University of Information Technology, Lucknow</p>
        <p>Dr. S N Rajan, IMSEC, Ghaziabad</p>
        <p>Dr. Sheelesh Kumar Sharma, ABESIT, Ghaziabad</p>
        <p>Dr. Arun Pratap Srivastava, Lloyd Institute of Engineering and Technology, Gr Noida</p>
        <p>Dr. Manish Bharadwaj, KIET, Ghaziabad</p>
        <p>Dr. Anuj Kumar, SRMSCET, Bareilly</p>
        <p>Dr. Sapna Juneja, KIET, Ghaziabad</p>
        <p>Dr. Upasana Pandey, ABESIT, Ghaziabad</p>
        <p>Dr. Sachi Gupta, GCET, Greater Noida</p>
        <p>Dr. Abhilasha Singh, SRM IST Delhi-NCR Campus, Modinagar</p>
        <p>Dr. Kalpana Sharma, Sikkim Manipal University, Gangtok</p>
        <p>Dr. Harsh Khatter, KIET, Ghaziabad </p>
        <p>Dr. Payal Garg, G.L Bajaj Institute of Technology, Grater Noida</p>
        <p>Dr. Suchi Mala, Amity University, Noida</p>
        <p>Dr. Ragini Karwayun, IPEC, Ghaziabad</p>
        <p>Dr. Sushruta Mishra, KIIT, Bhubaneshwar</p>
        <p>Dr. Asha Mishra, G.L Bajaj Institute of Technology, Grater Noida</p>
        <p>Dr. Sajai Vir Singh, JIIT, Noida</p>
        <p>Dr. Jayeeta Chanda, B P Poddar Insitute of Management and Technology, Kolkata</p>
        <p>Dr. Divya Mishra, ABES Engineering College, Ghaziabad</p>
        <p>Dr. Deepak Rai, Bennet University, Gr. Noida</p>
        <p>Dr. Navin Tyagi, MIT, Bulandshahr</p>
        <p>Ms. Shruti Keshri, ABES Engineering College, Ghaziabad</p>
        <p>Dr. Sushil Kumar, KIET, Ghaziabad</p>
        <p>Dr. Vivek Jangra, Amity University Uttar Pradesh, Noida</p>
        <p>Ms. Anjali Kapoor, Galgotias University, Gr. Noida</p>
        <p>Dr. Nidhi Mishra, Amity University Uttar Pradesh, NoidaDr. Sushil Kumar, KIET, Ghaziabad</p>
        <p>Dr. BB Sagar, HBTU, Kanpur</p>
        <p>Dr. Dimple Tiwari, Bennet University, Gr. Noida</p>
        <p>Dr. Manoj Kumar, Guru Ghasidas University, Bilaspur</p>
        <p>Dr. Ajitesh Kumar, GLA University, Mathura</p>
        <p>Dr. Chandra Shekhar Yadav, NIET, Greater Noida</p>
        <p>Dr. Aditya Saxena, GLA University, Mathura</p>
        <p>Dr. Veena Bharti, RKGIT, Ghaziabad</p>
        <p>Dr. Yashveer Singh, Haridwar University, Roorkee</p>
        <p>Ms. Chitra, RKGIT, Ghaziabad</p>
        <p>Mr. Ram Krishan Singh, IMS, Ghaziabad</p>
        <p>Mr. Santosh Ray, Delhi Technical University, Delhi</p>
        <p>Dr. Sandeep Gupta, ABESIT, Ghaziabad</p>
        <p>Dr. Manju, Jaypee Institute of Information Technology, Noida</p>
        <p>Dr. Avinash Dwivedi, Galgotias University, Greater Noida</p>
        <p>Ms. Sumita Lamba	, DIT University, Dehradun</p>
        <p>Dr. Madan Singh, Christ University, Delhi NCR Campus</p>
        <p>Dr. Sujata Chauhan, Dronacharya Govt. College, Gurgaon</p>
        <p>Mr. Ishaan Dawar, DIT University, Dehradun</p>
        <p>Dr. Abhilasha Chauhan, DIT University, Dehradun</p>
        <p>Dr. Gaurav Mishra, Amity University, Greater Noida</p>
        <p>Dr. N.U Khan, IMSEC, Ghaziabad</p>
        <p>Mrs. Ritu Agarwal, RKGIT, Ghaziabad</p>
        <p>Dr. Amit Singhal, RKGIT, Ghaziabad</p>
        <p>Mohd. Vakil, RD Engineering College, Ghaziabad</p>
        <p>Dr. Harsh Khatter, KIET, Ghaziabad</p>
        <p>Dr. Kanika Taneja, ABESIT, Ghaziabad</p>
        <p>Dr. Aatif Jamshed, ABES Engineering College, Ghaziabad</p>
        <p>Ms. Anjali Jain, KIET, Ghaziabad</p>
        <p>Dr. Bhart Sharma, DIT, Dehradun</p>
        <p>Dr. O.P. Singh, SRM, Modinagar</p>
        <p>Dr. Kuldeep Kumar Yogi, Banasthali Vidhyapith, Rajasthan</p>
        <p>Dr. Shailza Kanwar, Bennett University, Gr. Noida</p>
        <p>Ms. Ambika Gupta, Galgotias University, Gr. Noida</p>
        <p>Dr. Gagandeep Arora, Vardhaman College of Engineering, Hyderabad</p>
        <p>Dr. Hoshiyar Singh Kanyal, ABES Institute of Technology, Ghaziabad</p>
        <p>Dr. Manoj Kumar Singh, IMS Engineering College, Ghaziabad</p>
        <p>Dr. Vinish Kumar,	RKGIT, Ghaziabad</p>
        <p>Dr. J. Naga Padmaja, Vardhaman College of Engineering, Hyderabad</p>
        <p>Mr. Anand Prakash Srivastava, NITRA Technical Campus, Ghaziabad</p>
        <p>Dr. Prabhat Kumar Srivastava, IMS Engineering College, Ghaziabad</p>
        <p>Mr. Manish Chhabra, Vardhaman College of Engineering, Hyderabad</p>
        <p>Dr. Neeraj Kumar Singh, RKGIT, Ghaziabad</p>
        </div>

      {/* 
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
          </div> */}
      
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
    </>
  );
};

export default Committee;
