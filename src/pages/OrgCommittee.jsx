import React from 'react';

const Committee = () => {
  return (
    <>
      <div className='flex w-full items-center justify-center mt-12 mb-10'>
        <h1 className='text-center text-4xl font-bold inline-block pb-2'>ORGANIZING COMMITTEE</h1>
      </div>

      <div className='w-full flex justify-center p-4 sm:p-8 mb-6'>
        <div className='flex flex-col my-4 w-full max-w-3xl'>
          

          <div className='mb-8'>
            <h2 className='text-3xl font-bold mb-4'>Organizing Committee</h2>
            <ul className='list-disc list-inside'>
              <li>Dr. Rahul Sharma (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Dr. Anu Chaudhary (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Dr. B.K. Sharma (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Dr. Pallab Biswas (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Dr. Nilesh Gupta (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Prof. S. L. Kapoor (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Air Cmde. P. Singh (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Dr. Anupama Sharma (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
              <li>Dr. Ruchi Gupta (Ajay Kumar Garg Engineering College, Ghaziabad, India)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Committee;
