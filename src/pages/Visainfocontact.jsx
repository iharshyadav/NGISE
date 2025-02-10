import { Mail, PhoneCall } from 'lucide-react';
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const VisaInfocontact = () => {

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
            <form action={`https://formsubmit.co/${import.meta.env.VITE_REACT_EMAIL_ID}`} method="POST" className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid items-center gap-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name='firstName'
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
                    name='lastName'
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
                  name='email'
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
                  name='phoneNumber'
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
                  name='message'
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
        </div>
        </div>
          );
        };
export default VisaInfocontact;