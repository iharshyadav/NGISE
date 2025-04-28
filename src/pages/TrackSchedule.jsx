import React from "react";

const TrackSchedule = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Pattern Background */}
      <div className="relative bg-blue-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4 transform -rotate-1">
            NGISE 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">
            Track Schedule
          </h1>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-2">
            IEEE International Conference on
          </h2>
          <h2 className="text-xl md:text-2xl font-medium text-blue-100">
            Next Generation Information System Engineering
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-16 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <div className="py-5 px-6 sm:px-10 bg-gradient-to-r from-blue-50 to-white border-b border-gray-200">
            <p className="text-sm text-blue-800 font-medium italic">
              ** All session times are in Indian Standard Time (IST)
            </p>
          </div>

          {/* Day 1 */}
          <div className="px-6 sm:px-10 py-8 border-b border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg mr-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Friday, March 28, 2025
              </h3>
            </div>

            <div className="ml-16">
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      Afternoon Session
                    </div>
                    <p className="text-xl font-semibold text-gray-800">
                      2:30 PM - 4:00 PM
                    </p>
                  </div>
                  <a
                    href="/TS schedule of 28 march Day 1st (1).pdf"
                    download
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <span className="relative flex items-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <span className="font-semibold">Download Schedule</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="px-6 sm:px-10 py-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg mr-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Saturday, March 29, 2025
              </h3>
            </div>

            <div className="ml-16 space-y-6">
              {/* Morning Session */}
              <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border border-purple-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      Morning Session
                    </div>
                    <p className="text-xl font-semibold text-gray-800">
                      9:00 AM - 11:00 AM
                    </p>
                  </div>
                  <a
                    href="/TS schedule of 29 march 1st (1).pdf"
                    download
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    <span className="relative flex items-center gap-2 rounded-md bg-purple-700 px-5 py-2.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <span className="font-semibold">Download Schedule</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Afternoon Session */}
              <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      Afternoon Session
                    </div>
                    <p className="text-xl font-semibold text-gray-800">
                      11:00 AM - 2:30 PM
                    </p>
                  </div>
                  <a
                    href="/TS schedule of 29 march 2nd (1).pdf"
                    download
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-blue-700 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  >
                    <span className="relative flex items-center gap-2 rounded-md bg-indigo-700 px-5 py-2.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <span className="font-semibold">Download Schedule</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Card */}
        {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-4 px-6">
            <h3 className="text-lg font-bold text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Contact Information
            </h3>
          </div>
          <div className="p-6 text-center">
            <p className="text-gray-700">
              For any inquiries regarding the track schedule, please contact us
              at{" "}
              <a
                href="mailto:ngise@akgec.ac.in"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
              >
                ngise@akgec.ac.in
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </div>

  );
};

export default TrackSchedule;