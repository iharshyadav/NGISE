import React, { useState } from 'react';
import Form from './Form'; 

const RegistrationAndFeeSubmission = () => {
  const [nationality, setNationality] = useState('');

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

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

      {/* Fee Submission Details Section */}
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
        </table>

       
        
    </div>
    <div id="form" className="mt-10">
        <h1 className="text-3xl flex justify-center font-bold mt-4">Registration Form</h1>
        </div>
    <Form />
    </div>
  );
};

export default RegistrationAndFeeSubmission;
