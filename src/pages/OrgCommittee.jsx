import React from 'react';

const Committee = () => {
  return (
    <>
      <div className='flex w-full items-center justify-center mt-12 mb-10'>
        <h1 className='text-center text-4xl font-bold inline-block pb-2'>ORGANIZING COMMITTEE</h1>
      </div>

      <div className='w-full flex justify-center px-8 mb-6'>
        <div className='flex flex-col my-4 w-full max-w-3xl'>
          
          <div className="mb-10">
            <h2 className="text-2xl flex justify-center font-bold mb-4">Honorary General Chair</h2>
            
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/8420b9cb-de66-421a-9c0c-32411c1bc508/-/preview/356x363/" 
                  alt="Dr. R. K. Agarwal"
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Dr. R. K. Agarwal</h3>
                  <p>Director General</p>
                  <p>Ajay Kumar Garg Engineering College</p>
                  <p>Ghaziabad, India</p>
                </div>
              </div>
            </div>
            
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex justify-center">General Chair</h2>
            <div className="flex justify-center space-x-20">

              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/e381736c-b70b-4c3d-93f6-837d9829705c/-/preview/284x284/" 
                  alt="Prof. (Dr.) Dirk Draheim"
                  className="w-full h-48 object-cover mb-4" 
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Prof. (Dr.) Dirk Draheim</h3>
                  <p>Tallinn University of Technology</p>
                  <p>Estonia</p>
                </div>
              </div>

              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/faba9ab7-fe92-467a-ad0c-abad3ced3c7b/-/preview/291x291/" 
                  alt="Prof. (Dr.) Rahul Sharma"
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Prof. (Dr.) Rahul Sharma</h3>
                  <p>Ajay Kumar Garg Engineering College</p>
                  <p>Ghaziabad, UP, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl flex justify-center font-bold mb-4">International Organizing Chair</h2>
            <div className="flex justify-center space-x-20">

              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/ac230815-d543-44f6-9fc1-9779440531ce/-/preview/301x301/"
                  alt="Dr. Markus Bertl"
                  className="w-full h-48 object-cover mb-4" 
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Dr. Markus Bertl</h3>
                  <p>Vienna University of Economics and Business</p>
                  <p>Austria</p>
                </div>
              </div>

              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/44c941b2-2d59-4f6e-81f3-b8dc3bd169d1/-/preview/257x171/" 
                  alt="Dr. Silvia Lips"
                  className="w-full h-48 object-cover mb-4" 
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Dr. Silvia Lips</h3>
                  <p>eID expert at the Estonian Information System Authority</p>
                  <p>Estonia</p>
                </div>
              </div>

              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/059cb7e0-ca41-4c75-bd2c-86847665495e/-/preview/237x312/" 
                  alt="Dr. Rozha Kamal Ahmed"
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Dr. Rozha Kamal Ahmed</h3>
                  <p>Computer Science Institute, Sulaimani Polytechnic University</p>
                  <p>Sulaymaniyah, Iraq</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl flex justify-center font-bold mb-4">Local Organizing Chair</h2>
            <div className="flex justify-center space-x-20">
            
              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/25333468-99cc-489a-a36d-bed92171fa46/-/preview/291x291/" 
                  alt="Prof. (Dr.) Anupama Sharma"
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Prof. (Dr.) Anupama Sharma</h3>
                  <p>Ajay Kumar Garg Engineering College</p>
                  <p>Ghaziabad, UP, India</p>
                </div>
              </div>

              <div className="flex flex-col items-center w-48">
                <img
                  src="https://ucarecdn.com/8b9db0cf-f743-4ace-89ca-6aa3c7fd59c4/-/preview/280x350/" 
                  alt="Prof. (Dr.) Ruchi Gupta"
                  className="w-full h-48 object-cover mb-4" 
                />
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold">Prof. (Dr.) Ruchi Gupta</h3>
                  <p>Ajay Kumar Garg Engineering College</p>
                  <p>Ghaziabad, UP, India</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Committee;
