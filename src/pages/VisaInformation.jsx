import React from 'react';
import VisaInfoContact from './Visainfocontact'; // Import the Visainfocontact component

const VisaInformation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 underline">VISA INFORMATION</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Conference Visa (‘C’ Visa)</h2>
        <ul className="text-lg">
          <li>• Foreign nationals are granted Conference Visas on production of an invitation to a conference/seminar/workshop being organized in India. For business meetings or board meetings, to discuss business matters of a particular company/organization, a foreigner may obtain Business Visa.</li>
          <li>• May refer to <a href="https://conference.mha.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-500">https://conference.mha.gov.in</a> for more details.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Documents required</h2>
        <ul className="list-disc pl-5">
          <li>Passport valid for a minimum of 6 months with at least two blank pages.</li>
          <li>One photograph. For photo requirements, visit <a href="https://indianvisaonline.gov.in/visa/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-500">https://indianvisaonline.gov.in/visa/index.html</a>.</li>
          <li>Printout of the online application form duly signed.</li>
          <li>Letter from the Institution represented in Germany.</li>
          <li>Letter of invitation from the Indian organization organizing the Conference/Seminar.</li>
          <li>Political clearance from the Ministry of External Affairs.</li>
          <li>Clearance from the Ministry of Home Affairs (when applicable).</li>
          <li>If holding a Travel document (refugee passport).</li>
          <li>Bank account statements for the last 3 months.</li>
          <li>I hereby certify that I have submitted a complete application and that I know and accept the minimum processing time required for my visa application.</li>
          <li>Date:</li>
          <li>Signature:</li>
        </ul>
      </section>

      <section className="mb-6">
        <p className="text-lg">
          Please send your request to the following email address:
        </p>
        <p className="text-lg font-semibold">
          <a href="mailto:ngise@akgec.ac.in" className="text-blue-500 underline">ngise@akgec.ac.in</a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
        <p className="text-lg text-gray-600">
          Please see <a href="/locale/faq" className='text-blue-600 underline'>the FAQ</a> if you have any questions about your invitation letter <a className='font-semibold' href="/locale/Visainformation/contact">Contact Us</a>.
        </p>
      </section>
      
    </div>
  );
};

export default VisaInformation;
