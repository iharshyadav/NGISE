import React from 'react';

const VisaInformation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">VISA INFORMATION</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Citizens of Certain Countries/Regions</h2>
        <p className="text-lg">
          Citizens of certain countries/regions require a short-term visa to enter India. 
          For more information, please visit the 
          <a 
            href="https://www.mha.gov.in/MHA1/TourVisa.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 underline ml-1">
            Ministry of Foreign Affairs of Indian website
          </a>.
        </p>
      </section>

      <section className="mb-6">
        <p className="text-lg">
          On behalf of the local committee of DASFAA 2024, the India Travel Bureau (ITB) will prepare the documents 
          required for the visa application. Please send your request to the following email address:
        </p>
        <p className="text-lg font-semibold">
          <a href="mailto:ngise@akgec.ac.in" className="text-blue-500 underline">ngise@akgec.ac.in</a>
        </p>
      </section>

      {/* <section>
        <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
        <p className="text-lg italic text-gray-600">
          Please see the FAQ if you have any questions about your invitation letter.
        </p>
      </section> */} 
    </div>
  );
};

export default VisaInformation;
