import React from "react";

const RegistrationFee = () => {
  const registrationInfo1 = [
    { data: "Academician/Industry Participant/Others", fee1: "6000" , fee2:"7000" },
    { data: "Research Scholar/ UG/PG Student", fee1: "5000" , fee2:"6000" },
    { data: "Attendee", fee1: "4000" , fee2: "5000"},
    { data: "Non Presenting Author", fee1: "1000" , fee2:"1500" },
  
  ];

  const registrationInfo2 = [
    { data: "Academician/Industry Participant/Others", fee1: "350" , fee2:"400" },
   
  
  ];

  return (
    <div className="px-4 sm:px-40 py-7">
      <div className="">
        <h1 className=" text-3xl px-2 font-bold mt-4">Registration Fees</h1>
        <table className=" text-sm sm:text-lg w-full mt-10 mb-10 border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300 bg-stone-300">
              <th className="text-left p-2 border-r border-gray-300">Indian Authors</th>
              <th className="text-left p-2  border-r border-gray-300">IEEE Members(INR)</th>
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
        {/*<p>*Additional per page charges INR 1000</p>*/}
        <table className="registervalue text-sm sm:text-lg w-full mt-10 mb-10 border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300 bg-stone-300">
              <th className="text-left p-2 border-r border-gray-300">Foreign Authors </th>
              <th className="text-left p-2  border-r border-gray-300">IEEE Members(USD)</th>
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
        {/*<p>*Additional per page charges USD 50</p>*/}

      </div>
    </div>
  );
};

export default RegistrationFee;
