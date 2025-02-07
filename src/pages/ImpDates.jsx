// const ImportantDates = () => {
  
//   const Dates = [
//     { data: "15th Jan, 2025", value: "Extended Paper Submission Deadline"},
//     { data: "25th Jan, 2025", value: "Acceptance Notification" },
//     { data: "31st Jan, 2025", value: "Early Bird Registration" },
//     { data: "5th Feb, 2025", value: "Final Paper Submission" },
//     /*{ data: "31st Dec, 2024", value: "Paper Submission Deadline" },
//     { data: "10th Jan, 2025", value: "Acceptance Notification" },
//     { data: "20th Jan, 2025", value: "Early Bird Registration" },
//     { data: "22nd Jan, 2025", value: "Final Paper Submission" },*/
    
//   ];

//   return (
//     <div className=" w-full flex flex-col items-center justify-center sm:px-20 ">
//   <div className='flex w-full items-center justify-center mt-8 '>
//         <h1 className='text-center text-2xl sm:text-4xl font-bold  inline-block '>Important Dates</h1>
//       </div>      
//       <div className="bg-white shadow-xl mt-10 mb-10  w-[87%] sm:[80%] md:w-[55%] lg:w-[50%] border border-gray-300">
//       <table className="registervalue text-lg w-full  ">
//           <tbody>
//             {Dates.map((e, index) => (
//               <tr key={index} className="odd:bg-stone-100 even:bg-white border-b border-gray-300">
//                 <td className="p-2 border-r border-gray-300" style={{ width: "30%" }}>{e.data}</td>
//                 <td className="p-2">{e.value}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
 
//       </div>
//     </div>


//   );
// };

// export default ImportantDates;

const ImportantDates = () => {
  const Dates = [
    {
      oldDate: "31st Dec, 2024",
      newDate: "15th Jan, 2025",
      value: "Extended Paper Submission Deadline",
    },
    {
      oldDate: "31st Jan, 2025",
      newDate: "8th Feb, 2025",
      value: "Acceptance Notification",
    },
    {
      oldDate: "31st Jan, 2025",
      newDate: "10th Feb, 2025",
      value: "Last Date of Registration",
    },
    {
      oldDate: "5th Feb, 2025",
      newDate: "15th Feb, 2025",
      value: "Final Paper Submission",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center sm:px-20">
      <div className="flex w-full items-center justify-center mt-8">
        <h1 className="text-center text-2xl sm:text-4xl font-bold inline-block">
          Important Dates
        </h1>
      </div>
      <div className="bg-white shadow-xl mt-10 mb-10 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[65%] border border-gray-300">
        <table className="registervalue text-lg w-full">
          <tbody>
            {Dates.map((e, index) => (
              <tr
                key={index}
                className="odd:bg-stone-100 even:bg-white border-b border-gray-300"
              >
                <td
                  className="p-2 border-r border-gray-300"
                  style={{ width: "45%" }}
                >
                  <span
                    className="mr-2"
                    style={{
                      textDecoration: "line-through",
                      textDecorationColor: "red",
                      textDecorationThickness: "2px",
                      color: "gray",
                    }}
                  >
                    {e.oldDate}
                  </span>
                  <span className="text-black"> {e.newDate}</span>
                </td>

                <td className="p-2">{e.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;

