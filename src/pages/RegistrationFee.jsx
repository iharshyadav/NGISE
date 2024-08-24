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
    <div className="linearGradient font text-white px-2 sm:px-40 py-7 p-7">
      <div className="container">
        <h1 className="underline text-3xl font-bold">Registration Fees</h1>
        <table className="registervalue text-lg w-full mt-4">
          <thead>
            <tr>
              <th className="text-left p-2">Category</th>
              <th className="text-left p-2">Fee</th>
            </tr>
          </thead>
          <tbody>
            {registrationInfo.map((e, index) => (
              <tr key={index}>
                <td className="p-2">{e.data}</td>
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
