import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const RegistrationAndFeeSubmission = () => {
  // const [nationality, setNationality] = useState('');
  const navigate = useNavigate(); 


  const registrationInfo1 = [
    { data: "Academician/Industry Participant/Others", fee1: "6000", fee2: "7000" },
    { data: "Research Scholar/ UG/PG Student", fee1: "5000", fee2: "6000" },
    { data: "Attendee", fee1: "4000", fee2: "5000" },
    { data: "Non Presenting Author", fee1: "1000", fee2: "1500" },
  ];

  const registrationInfo2 = [
    { data: "Academician/Industry Participant/Others", fee1: "350", fee2: "400" },
  ];

  const feeDetails = [
    { data: "Name of Beneficiary", value: "Ajay Kumar Garg Engineering College" },
    { data: "Name of the Bank", value: "Kotak Mahindra Bank Ltd." },
    { data: "Address of the Bank", value: "30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (U.P.) - INDIA" },
    { data: "Branch Code", value: "5295" },
    { data: "Bank Account No.", value: "508010250461" },
    { data: "Type of Bank Account", value: "Savings Bank Accounts" },
    { data: "RTGS/NEFT/IFSC Code", value: "KKBK0005295" },
    { data: "Contact No.", value: "0120-2790969" },
  ];

  const authorFeeInfo = [
    { category: "Regular Author", indiaFee: "INR 8,100.00", foreignFee: "USD 300.00" },
    { category: "Regular Authors (IEEE Members)", indiaFee: "INR 7,200.00", foreignFee: "USD 240.00" },
    { category: "Student Authors - UG & PG", indiaFee: "INR 6,300.00", foreignFee: "USD 150.00" },
    { category: "Student Author - UG & PG (IEEE Member)", indiaFee: "INR 5,400.00", foreignFee: "USD 120.00" },
    { category: "Invited Presentation", indiaFee: "INR 4,500.00", foreignFee: "USD 90.00" },
  ];

  
  const handleRegistersNow = () => {
    navigate('/registrationform'); 
  };

  return (
    <div className="px-4 sm:px-40 py-7">
      {/* Registration Fee Section */}
      <div id="registration-fee">
        <h1 className="text-3xl flex justify-center font-bold mt-4">Registration Fee</h1>
        <table className="text-sm sm:text-lg w-full mt-10 mb-10 border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300 bg-stone-300">
              <th className="text-left p-2 border-r border-gray-300">Indian Authors</th>
              <th className="text-left p-2 border-r border-gray-300">IEEE Members(INR)</th>
              <th className="text-left p-2">Non-IEEE Members(INR)</th>
            </tr>
          </thead>
          <tbody>
            {registrationInfo1.map((e, index) => (
              <tr key={index} className="even:bg-stone-100 odd:bg-white border-b border-gray-300">
                <td className="p-2 border-r border-gray-300">{e.data}</td>
                <td className="p-2 border-r border-gray-300">{e.fee1}</td>
                <td className="p-2">{e.fee2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>*Additional per page charges INR 1000</p>

        <table className="registervalue text-sm sm:text-lg w-full mt-10 mb-10 border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300 bg-stone-300">
              <th className="text-left p-2 border-r border-gray-300">Foreign Authors</th>
              <th className="text-left p-2 border-r border-gray-300">IEEE Members(USD)</th>
              <th className="text-left p-2">Non-IEEE Members(USD)</th>
            </tr>
          </thead>
          <tbody>
            {registrationInfo2.map((e, index) => (
              <tr key={index} className="even:bg-stone-100 odd:bg-white border-b border-gray-300">
                <td className="p-2 border-r border-gray-300">{e.data}</td>
                <td className="p-2 border-r border-gray-300">{e.fee1}</td>
                <td className="p-2">{e.fee2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>*Additional per page charges USD 50</p>
      </div>

     
      {/* <div className="mt-10 bg-yellow-300">
  <div className="overflow-hidden">
    <div className="whitespace-nowrap animate-marquee-forward flex">
      <p className="text-red-600 text-lg font-semibold inline-block mr-32">
        After registration, please fill out the Google form: 
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHh4NZD4xjlet-cRtAvMqONx8rlsIMC_6Nt2RwWei-n-ds9w/viewform?usp=dialog" 
          className="text-blue-600 hover:underline ml-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>
      <p className="text-red-600 text-lg font-semibold inline-block mr-32">
        After registration, please fill out the Google form: 
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHh4NZD4xjlet-cRtAvMqONx8rlsIMC_6Nt2RwWei-n-ds9w/viewform?usp=dialog" 
          className="text-blue-600 hover:underline ml-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>
      <p className="text-red-600 text-lg font-semibold inline-block mr-32">
        After registration, please fill out the Google form: 
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHh4NZD4xjlet-cRtAvMqONx8rlsIMC_6Nt2RwWei-n-ds9w/viewform?usp=dialog" 
          className="text-blue-600 hover:underline ml-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>
    </div>
  </div>
</div> */}



        <div className="flex justify-center mt-8">
          <button
            onClick={handleRegistersNow} 
            className="px-8 py-3 bg-blue-600 text-xl text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Register Now
          </button>
        </div>
      {/* Fee Submission Details Section 
      <div id="fee-submission" className="mt-10">
        <h1 className="text-3xl flex justify-center font-bold mt-4">Fee Submission Details</h1>
        <h3 className="text-lg mt-4">Details of IMPS/UPI/RTGS/NEFT:</h3>
        <table className="registervalue text-lg w-full mt-8">
          <tbody className="border-gray-300 border">
            {feeDetails.map((e, index) => (
              <tr key={index} className="odd:bg-stone-100 even:bg-white border-b border-gray-300">
                <td className="p-2 border-r border-gray-300" style={{ width: "30%" }}>{e.data}</td>
                <td className="p-2">{e.value}</td>
              </tr>
            ))}
          </tbody>
        </table> */}


    </div>
  );
};

export default RegistrationAndFeeSubmission;
