import React from "react";

const RegistrationFee = () => {
  const registrationInfo = [
    { data: "Non-IEEE Professional", fee: "INR 7000" },
    { data: "IEEE Professional Members", fee: "INR 6000" },
    { data: "Non-IEEE Students", fee: "INR 6000" },
    { data: "IEEE Student Members", fee: "INR 5000" },
    { data: "Industry Participants", fee: "INR 7000" },
    { data: "Non-IEEE Foreign Participants", fee: "$400" },
    { data: "IEEE Foreign Participants", fee: "$350" },
  ];

  return (
    <div className=" font px-2 sm:px-40 py-7 p-7">
      <div className="container">
        <h1 className=" text-3xl font-bold mt-4">Registration Fees</h1>
        <table className="registervalue text-lg w-full mt-10 mb-10 border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left p-2 border-r border-gray-300">Category</th>
              <th className="text-left p-2">Fee</th>
            </tr>
          </thead>
          <tbody>
            {registrationInfo.map((e, index) => (
              <tr key={index} className="odd:bg-stone-100 even:bg-white border-b border-gray-300">
                <td className="p-2 border-r border-gray-300">{e.data}</td>
                <td className="p-2">{e.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationFee;
