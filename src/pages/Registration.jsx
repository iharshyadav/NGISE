// import React, { useState } from "react";
// import "./registration.css";
// const Registration = () => {
//   let registrationinfo = [
//     {
//       data: "Non-IEEE Professional",
//       fee: "INR 7000",
//     },
//     { data: " IEEE Professional Members", fee: "INR 6000" },
//     { data: " Non-IEEE Students", fee: "INR 6000" },
//     { data: " IEEE Student Members", fee: "INR 5000" },
//     { data: "  Industry Participants", fee: "INR 7000" },
//     { data: " Non-IEEE Foreign Participants", fee: "$400" },
//     { data: "  IEEE Foreign Participants", fee: "$350" },
//   ];
//   const [register, setregiste] = useState(registrationinfo);
//   const [fee, setfee] = useState([
//     {
//       data: "Name of Beneficiary",
//       value: "Ajay Kumar Garg Engineering College",
//     },
//     {
//       data: "Name of the Bank",
//       value: "Kotak Mahindra Bank Ltd.",
//     },
//     {
//       data: "Name of the Bank",
//       value:
//         "30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (U.P.) - INDIA",
//     },
//     {
//       data: "Branch Code",
//       value: "5295",
//     },
//     {
//       data: "Bank Account No.",
//       value: "508010250461",
//     },
//     {
//       data: "Type of Bank Account",
//       value: "Savings Bank Accounts",
//     },
//     {
//       data: "RTGS/NEFT/IFSC Code",
//       value: "KKBK0005295",
//     },
//     {
//       data: "Contact No.",
//       value: "0120-2790969",
//     },
//   ]);

//   return (
// <>
//     <div className='linearGradient font flex w-full items-center justify-center pt-12 pb-4'>
//     <h1 className='text-center text-4xl  font-bold border-b-4 inline-block border-[#46ce9c] text-white'>Committee</h1>
//       </div>
// <div className="linearGradient font text-white px-2 sm:px-40 py-7 p-7">
// <div className="container ">
//       <div className="insidecontainer"  id='fees'>
//         <div style={{ marginTop: "34px" }}>
//           <h1 className="underline text-3xl font-bold ">Registration Fees</h1>
//         </div>
//         <div className="registervalue text-lg ">
//           {register.map((e, index) => {
//             return (
//               <>
//                 <div className="registerdata" key={index}>
//                   <p style={{ width: "50%" }}>{e.data}</p>
//                   <p>{e.fee}</p>
//                 </div>
//               </>
//             );
//           })}
//         </div>

//         <div className="fee"  id='submission'>
//           <h1 className="text-3xl font-bold underline ">Fee Submission Details</h1>
//           <h3 className="text-lg">Details of IMPS/UPI/RTGS/NEFT:</h3>
//           <div className="registervalue text-lg">
//             {fee.map((e, index) => {
//               return (
//                 <>
//                   <div className="registerdata" key={index}>
//                     <p style={{ width: "30%" }}>{e.data}</p>
//                     <p style={{ width: "100%" }}>{e.value}</p>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
// </div>
// </>
//   );
// };

// export default Registration;


import React, { useState } from "react";
import "./registration.css";

const Registration = () => {
  const registrationinfo = [
    {
      data: "Non-IEEE Professional",
      fee: "INR 7000",
    },
    { data: "IEEE Professional Members", fee: "INR 6000" },
    { data: "Non-IEEE Students", fee: "INR 6000" },
    { data: "IEEE Student Members", fee: "INR 5000" },
    { data: "Industry Participants", fee: "INR 7000" },
    { data: "Non-IEEE Foreign Participants", fee: "$400" },
    { data: "IEEE Foreign Participants", fee: "$350" },
  ];

  const feeDetails = [
    {
      data: "Name of Beneficiary",
      value: "Ajay Kumar Garg Engineering College",
    },
    {
      data: "Name of the Bank",
      value: "Kotak Mahindra Bank Ltd.",
    },
    {
      data: "Address of the Bank",
      value: "30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (U.P.) - INDIA",
    },
    {
      data: "Branch Code",
      value: "5295",
    },
    {
      data: "Bank Account No.",
      value: "508010250461",
    },
    {
      data: "Type of Bank Account",
      value: "Savings Bank Accounts",
    },
    {
      data: "RTGS/NEFT/IFSC Code",
      value: "KKBK0005295",
    },
    {
      data: "Contact No.",
      value: "0120-2790969",
    },
  ];

  return (
    <>
      <div className="linearGradient font flex w-full items-center justify-center pt-12 pb-4">
        <h1 className="text-center text-4xl font-bold border-b-4 inline-block border-[#46ce9c] text-white">Committee</h1>
      </div>
      <div className="linearGradient font text-white px-2 sm:px-40 py-7 p-7">
        <div className="container">
          <div className="insidecontainer" id="fees">
            <div style={{ marginTop: "34px" }}>
              <h1 className="underline text-3xl font-bold">Registration Fees</h1>
            </div>
            <table className="registervalue text-lg w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left p-2">Category</th>
                  <th className="text-left p-2">Fee</th>
                </tr>
              </thead>
              <tbody>
                {registrationinfo.map((e, index) => (
                  <tr key={index}>
                    <td className="p-2">{e.data}</td>
                    <td className="p-2">{e.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="fee mt-8" id="submission">
              <h1 className="text-3xl font-bold underline">Fee Submission Details</h1>
              <h3 className="text-lg mt-4">Details of IMPS/UPI/RTGS/NEFT:</h3>
              <table className="registervalue text-lg w-full mt-4">
                <tbody>
                  {feeDetails.map((e, index) => (
                    <tr key={index}>
                      <td className="p-2" style={{ width: "30%" }}>{e.data}</td>
                      <td className="p-2">{e.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

