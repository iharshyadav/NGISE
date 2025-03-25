import React from "react";

const WieActivity = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Poster */}
        <div className="flex flex-col lg:flex-row">
          {/* Poster Image */}
          <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h4 className="text-yellow-600 font-bold text-lg mb-2">
                IEEE NGISE 2025
              </h4>
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                Women in Engineering
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-purple-800 mb-6">
                MEET & GREET EVENT
              </h2>
              <p className="text-gray-700 text-lg">
                Join us for an engaging platform focused on knowledge sharing,
                mentorship, and collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Date</h3>
                  <p className="text-gray-700">March 29, 2025</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Time</h3>
                  <p className="text-gray-700">11:30 AM onwards</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 md:col-span-2">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Venue</h3>
                  <p className="text-gray-700">
                    CSIT Seminar Hall, Ajay Kumar Garg Engineering College
                  </p>
                  <p className="text-gray-700">Ghaziabad, India</p>
                </div>
              </div>
            </div>

            {/* <a
              href="https://forms.gle/YJVLrTAriLhEJywM7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white text-center font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              Register Now
            </a> */}
          </div>
          <div className="lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
            <img
              src="/WhatsApp Image 2025-03-25 at 11.11.21.jpeg"
              alt="IEEE WIE Meet & Greet Event Poster"
              className="w-full h-auto shadow-xl rounded-lg"
            />
          </div>

          {/* Event Information */}
          
        </div>

        {/* Detailed Information Section */}
        <div className="px-4 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Section Header */}
              <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white p-6">
                <h2 className="text-2xl font-bold">Event Details</h2>
                <p className="mt-2 opacity-90">
                  IEEE International Conference on Next Generation Information
                  System Engineering
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    About the Event
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We are delighted to invite you for the IEEE Women in
                    Engineering (WIE) Meet & Greet Program, which will be held
                    on March 29, 2025, at Ajay Kumar Garg Engineering College,
                    Ghaziabad, India.
                  </p>
                  <p className="text-gray-700">
                    This event aims to empower women in engineering by providing
                    an engaging platform for knowledge sharing, mentorship, and
                    collaboration.
                  </p>
                </div>

                {/* Schedule Timeline */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Event Schedule
                  </h3>
                  <div className="border-l-2 border-blue-500 ml-3 pl-8 space-y-6 relative">
                    <div className="relative">
                      <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-500"></div>
                      <div>
                        <span className="text-blue-600 font-bold">9:30 AM</span>
                        <h4 className="text-lg font-semibold text-gray-800 mt-1">
                          Arrival & Registration
                        </h4>
                        <p className="text-gray-600">
                          Main Seminar Hall (Admin Block)
                        </p>
                        <p className="text-gray-600">
                          Keynote Sessions and Networking
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-500"></div>
                      <div>
                        <span className="text-blue-600 font-bold">
                          11:00 AM
                        </span>
                        <h4 className="text-lg font-semibold text-gray-800 mt-1">
                          High Tea
                        </h4>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-10 w-5 h-5 rounded-full bg-blue-500"></div>
                      <div>
                        <span className="text-blue-600 font-bold">
                          11:30 AM
                        </span>
                        <h4 className="text-lg font-semibold text-gray-800 mt-1">
                          WIE Session Begins
                        </h4>
                        <p className="text-gray-600">CSIT Seminar Hall</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Participants are requested to arrive by 9:30 AM at the
                        Main Seminar Hall (Admin Block) for keynote sessions and
                        networking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-gray-700">
                        Email:{" "}
                        <a
                          href="mailto:ngise@akgec.ac.in"
                          className="text-blue-600 hover:underline"
                        >
                          ngise@akgec.ac.in
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Website:{" "}
                        <a
                          href="https://ngise.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          ngise.org
                        </a>
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-4">
                    Best Regards,
                    <br />
                    Organizing Committee, IEEE WIE Meet & Greet
                    <br />
                    NGISE 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WieActivity;
