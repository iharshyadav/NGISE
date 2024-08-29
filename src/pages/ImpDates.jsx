
const ImportantDates = () => {
  
  const Dates = [
    { data: "25th Nov, 2024", value: "Paper Submission Deadline" },
    { data: "10th Jan, 2025", value: "Acceptance Notification" },
    { data: "20th Jan, 2025", value: "Early Bird Registration" },
    { data: "22nd Jan, 2025", value: "Final Paper Submission" },
    
  ];

  return (
    <div className=" w-full flex flex-col items-center justify-center px-20 ">
  <div className='flex w-full items-center justify-center mt-8 '>
        <h1 className='text-center text-4xl font-bold  inline-block  pb-2'>Important Dates</h1>
      </div>      
      <div className="bg-white shadow-lg rounded-lg p-6 md:w-[55%] lg:w-[50%]">
      <table className="registervalue text-lg w-full mt-4">
          <tbody>
            {Dates.map((e, index) => (
              <tr key={index}>
                <td className="p-2" style={{ width: "30%" }}>{e.data}</td>
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
