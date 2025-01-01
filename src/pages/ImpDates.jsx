
const ImportantDates = () => {
  
  const Dates = [
    { <s>data: "31st Dec, 2024"</s>, value: "Paper Submission Deadline" },
    { data: "10th Jan, 2025", value: "Acceptance Notification" },
    { data: "20th Jan, 2025", value: "Early Bird Registration" },
    { data: "22nd Jan, 2025", value: "Final Paper Submission" },
    
  ];

  return (
    <div className=" w-full flex flex-col items-center justify-center sm:px-20 ">
  <div className='flex w-full items-center justify-center mt-8 '>
        <h1 className='text-center text-2xl sm:text-4xl font-bold  inline-block '>Important Dates</h1>
      </div>      
      <div className="bg-white shadow-xl mt-10 mb-10  w-[87%] sm:[80%] md:w-[55%] lg:w-[50%] border border-gray-300">
      <table className="registervalue text-lg w-full  ">
          <tbody>
            {Dates.map((e, index) => (
              <tr key={index} className="odd:bg-stone-100 even:bg-white border-b border-gray-300">
                <td className="p-2 border-r border-gray-300" style={{ width: "30%" }}>{e.data}</td>
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
