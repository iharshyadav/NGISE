import { Mail, PhoneCall } from 'lucide-react'
import React from 'react'


const Contact = () => {

  
  return (
    <div>

    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-7xl py-12 md:py-24">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          {/* contact from */}
          <div className="p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ajay Kumar Garg Engineering College
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              27th KM Milestone, Delhi - Meerut Expy,<br />
              Ghaziabad, Uttar Pradesh 201015
            </p>
            <p className="text-lg flex gap-2 items-center justify-start text-gray-700">
            <PhoneCall size={22} /> 919868450322 (Dr. Anupama Sharma) 
          </p>
          <p className="text-lg flex gap-2 items-center justify-start text-gray-700 mb-2">
  <Mail /> 
  <a href="mailto:ngise@akgec.ac.in" className="text-black hover:underline">
    ngise@akgec.ac.in
  </a>
</p>
            <p className="text-md text-gray-600">
              For more information, visit our website or contact us at <a className='font-semibold' href="https://www.akgec.ac.in/">https://www.akgec.ac.in</a>
            </p>
          </div>
          <div className="formMap">
              <iframe
              className=' hidden max-h-full w-full rounded-lg object-cover lg:block sm:w-[40vw] sm:h-[32vw] h-44'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.467007802247!2d77.503329!3d28.6749973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf3e5f579762d%3A0x3b56cd68178e2f29!2sCSIT%20BLOCK%20AKGEC!5e0!3m2!1sen!2sin!4v1676826055930!5m2!1sen!2sin"
                width=""
                height=""
                title=""
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact