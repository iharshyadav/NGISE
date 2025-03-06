import React from "react";

const FeeSubmission = () => {
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
    <div className="font px-2 sm:px-40 py-7 p-7">
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
      <div className="container">
        <h1 className="text-3xl font-bold mt-4">Fee Submission Details</h1>
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
        <marquee width="100%" direction="right" height="30px" bgcolor="Yellow" padding="10px">**Please Pay Using Above Details.</marquee>
      </div>
    </div>
  );
};

export default FeeSubmission;


