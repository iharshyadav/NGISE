import React from 'react';

const Committee = () => {
  return (
    <>
      <div className='flex w-full items-center justify-center mt-12 mb-10'>
        <h1 className='text-center text-4xl font-bold inline-block pb-2'>ORGANIZING COMMITTEE</h1>
      </div>

      <div className='w-full flex  justify-center px-8 mb-6'>
        <div className='flex flex-col my-4 w-full max-w-3xl'>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Honorary General Chair</h2>
            <ul className="list-disc list-inside">
              <li>
                Dr. R. K. Agarwal, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India {" "}
              </li>
            </ul>
          </div> 

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">General Chair</h2>
            <ul className="list-disc list-inside">
              <li>Prof. (Dr.) Dirk Draheim, Tallinn University of Technology, Estonia {" "}</li>
              <li>Prof. (Dr.) Rahul Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India {" "}</li>
            </ul>
          </div> 
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">International Organizing Chair</h2>
            <ul className="list-disc list-inside">
              <li>Dr. Markus Bertl, Tallinn University of Technology, Estonia {" "}</li>
              <li>Dr. Silvia Lips, eID expert at the Estonian Information System Authority, Estonia {" "}</li>
              <li>Dr. Rozha Ahmed, Digital Transformation Expert, Tallin, Estonia {" "}</li>
            </ul>
          </div> 

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Local Organizing Chair</h2>
            <ul className="list-disc list-inside">
              <li>Prof. (Dr.) Anupama Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India {" "}</li>
              <li>Prof. (Dr.) Ruchi Gupta, Ajay Kumar Garg Engineering College, Ghaziabad, UP, India {" "}</li>
            </ul>
          </div>
          
          {/* <div className='mb-8'>
            <h2 className='text-3xl font-bold mb-4'>Organizing Committee</h2>
            <ul className='list-disc list-inside'>
              <li>Dr. Rahul Sharma (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Dr. Anu Chaudhary (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Dr. B.K. Sharma (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Dr. Pallab Biswas (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Dr. Nilesh Gupta (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Prof. S. L. Kapoor (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Air Cmde. P. Singh (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Dr. Anupama Sharma (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
              <li>Dr. Ruchi Gupta (Ajay Kumar Garg Engineering College, Ghaziabad, UP, India)</li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Committee;
