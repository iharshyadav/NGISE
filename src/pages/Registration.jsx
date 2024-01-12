import React, { useState } from "react";
import "./registration.css";
const Registration = () => {
  let registrationinfo = [
    {
      data: "Participants from Industry",
      fee: "INR 6000",
    },
    { data: "Participants from Academics", fee: "INR 6000" },
    { data: "Research Scholars and students", fee: "INR 4000" },
    { data: "Foreign Participants", fee: "	USD 100" },
  ];
  const [register, setregiste] = useState(registrationinfo);
  const [fee, setfee] = useState([
    {
      data: "Name of Beneficiary",
      value: "Ajay Kumar Garg Engineering College",
    },
    {
      data: "Name of the Bank",
      value: "Kotak Mahindra Bank Ltd.",
    },
    {
      data: "Name of the Bank",
      value:
        "30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (U.P.) - INDIA",
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
  ]);

  return (
    <div className="container">
      <div className="insidecontainer">
        <div style={{ marginTop: "34px" }}>
          <h1>Registration Fees</h1>
        </div>
        <div className="registervalue">
          {register.map((e, index) => {
            return (
              <>
                <div className="registerdata" key={index}>
                  <p style={{ width: "50%" }}>{e.data}</p>
                  <p>{e.fee}</p>
                </div>
              </>
            );
          })}
        </div>

        <div className="fee">
          <h1>Fee Submission Details</h1>
          <h3>Details of IMPS/UPI/RTGS/NEFT:</h3>
          <div className="registervalue">
            {fee.map((e, index) => {
              return (
                <>
                  <div className="registerdata" key={index}>
                    <p style={{ width: "30%" }}>{e.data}</p>
                    <p style={{ width: "100%" }}>{e.value}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
