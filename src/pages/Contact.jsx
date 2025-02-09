import { Mail, PhoneCall } from 'lucide-react';
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phoneNumber, message } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      alert('Fill in the required details');
      return false;
    }
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true); 
        await addDoc(collection(db, 'contacts'), {
          ...formData, 
          timestamp: new Date(), 
        });

        alert('Form submitted successfully!');
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } catch (error) {
        console.error("Error adding document: ", error);
        alert('There was an error submitting the form. Please try again.');
      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
         
          {/* Contact Form Section */}
          <div className="flex flex-col items-start justify-center">
            <p className="text-2xl font-bold text-gray-900 md:text-4xl">Want To Contact Us?</p>
            <p className="mt-4 text-lg text-gray-600">
              Our friendly team would love to hear from you.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid items-center gap-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-gray-400"
                  />
                </div>
                <div className="grid items-center gap-1.5">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>
              <div className="grid items-center gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div className="grid items-center gap-1.5">
                <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div className="grid items-center gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave us a message"
                  cols="3"
                  className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
                disabled={loading} 
              >
                {loading ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              className="rounded-lg shadow-lg"
              src="https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4fimEAjB0OyYoqDMIXfPhVRlaNZbm9gzL2BpFE"
              alt="College Image"
            />
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="py-12 md:py-24">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <iframe
                  className="rounded-lg w-full h-[300px] lg:h-[300px] shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.467007802247!2d77.49981541461779!3d28.67567358240077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1676826055930!5m2!1sen!2sin"
                  title="location"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 ">
                  Ajay Kumar Garg Engineering College
                </h2>
                <p className="text-lg text-gray-700 mb-2">
                  27th KM Milestone, Delhi - Meerut Expy,<br />
                  Ghaziabad, Uttar Pradesh 201015
                </p>
                <p className="text-lg flex gap-2 items-center text-gray-700 mb-2">
                  <PhoneCall size={22} /> 919868450322 (Dr. Anupama Sharma)
                </p>
                <p className="text-lg flex gap-2 items-center text-gray-700 mb-4">
                  <Mail size={22} /> ngise@akgec.ac.in
                </p>
                <p className="text-md text-gray-600">
                  For more information, visit our website or contact us at{' '}
                  <a className="font-semibold text-blue-500 hover:underline" href="https://www.akgec.ac.in" target="_blank" rel="noopener noreferrer">
                    www.akgec.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

