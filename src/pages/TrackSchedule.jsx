import React from "react";

const TrackSchedule = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
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

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4 transform -rotate-1">
            NGISE 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">
            Program Schedule
          </h1>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl font-medium text-blue-100">
            IEEE International Conference on Next Generation Information System
            Engineering
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        {/* Day 1 Schedule */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-6">
            <h2 className="text-2xl font-bold text-white">
              Day 1 | March 28, 2025
            </h2>
            <p className="text-blue-100">Admin Block, Main Seminar Hall</p>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Activity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["08:30 - 09:15", "Registration / Morning Networking Tea"],
                    [
                      "09:15 - 09:25",
                      "HODs, Professors, Faculty, Student to be Seated",
                    ],
                    ["09:25 - 09:30", "Arrival of Delegates"],
                    ["09:30 - 09:35", "Lamp Lighting"],
                    [
                      "09:35 - 09:45",
                      "Sapling Presentation to the Dignitaries",
                    ],
                    ["09:45 - 10:00", "Welcome Speech by the Director General"],
                    [
                      "10:00 - 10:20",
                      "Introduction to the conference theme and the entire program by the General Chair, Dr. Rahul Sharma",
                    ],
                    [
                      "10:20 - 10:30",
                      "Address by Prof. (Dr.) Dirk Draheim, General Chair NGISE",
                    ],
                    [
                      "10:30 - 10:45",
                      "Address by the Chief Guest, Prof. (Dr.) Chuan-Yu Chang",
                    ],
                    [
                      "10:45 - 11:15",
                      "Address by the Guest of Honor, Prof. Satish Kumar Singh",
                    ],
                    ["11:15 - 11:20", "Release of Proceedings"],
                    ["11:20 - 11:30", "Presentation of Memento"],
                    ["11:30 - 12:00", "High Tea"],
                    [
                      "12:00 - 12:45",
                      "Keynote Address I: Salvatore Sinno, VP of Innovation, Unisys, USA",
                    ],
                    [
                      "12:45 - 13:30",
                      "Keynote Address II: Prof. Chuan-Yu Chang, Professor, National Yunlin University of Science and Technology, Taiwan",
                    ],
                    ["13:30 - 14:30", "Lunch"],
                    ["14:30 - 16:00", "Technical Sessions"],
                    ["16:00 - 16:20", "Evening Tea"],
                  ].map(([time, activity], idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                        {time}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href="/TS schedule of 28 march 1st (2.30-4.00) FINAL.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
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
                Download Detailed Schedule
              </a>
            </div>
          </div>
        </div>

        {/* Day 2 Schedule - Updated Timings */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-6">
            <h2 className="text-2xl font-bold text-white">
              Day 2 | March 29, 2025
            </h2>
            <p className="text-purple-100">Admin Block, Main Seminar Hall</p>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Activity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["08:45 - 09:15", "Morning Networking Tea"],
                    ["09:15 - 09:30", "Faculty and participants to be Seated"],
                    [
                      "09:30 - 10:15",
                      "Keynote Address III: Pavan Kumar Adepu, GenAI/LLM Research Leader, Head of Engineering, Amazon.com LLC, USA",
                    ],
                    ["10:15 - 11:00", "Panel Discussion"],
                    ["11:00 - 11:30", "High Tea"],
                    ["11:30 - 13:00", "Visit to the Centres of Excellence"],
                    ["13:00 - 13:45", "Lunch"],
                    [
                      "13:45 - 13:50",
                      "HODs, Professors, Faculty, Student to be Seated",
                    ],
                    ["13:50 - 13:55", "Arrival of Delegates"],
                    [
                      "13:55 - 14:00",
                      "Sapling Presentation to the Dignitaries",
                    ],
                    [
                      "14:00 - 14:30",
                      "Address by the Chief Guest, Prof. Sri Niwas Singh",
                    ],
                    ["14:30 - 14:45", "Conference report presentation"],
                    ["14:45 - 15:05", "Certificate Distribution"],
                    ["15:05 - 15:10", "Presentation of Memento"],
                    [
                      "15:10 - 15:15",
                      "Vote of Thanks by the General Chair, Dr. Rahul Sharma",
                    ],
                    ["15:15 - 15:45", "Evening Tea"],
                  ].map(([time, activity], idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-900">
                        {time}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Parallel Activities
              </h3>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-purple-900">
                      Technical Sessions
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Admin Block-Mini seminar hall-1, Mini seminar hall-2
                      <br />
                      CSIT Block-Lab-6 (5th floor), Lab-7 (5th floor), CSIT
                      seminar hall (1st floor)
                    </p>
                    <p className="text-sm text-purple-900 mt-1">
                      09:00 - 11:00 & 11:00 - 12:30
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-900">
                      IEEE WIE Meet and Greet Program
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Admin block-DG Conference Hall
                    </p>
                    <p className="text-sm text-purple-900 mt-1">
                      11:30 - 12:30
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-900">
                      IEEE Computational Intelligence Student Chapter Activity
                      Poster Presentation
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Admin Block- Outside Main Seminar Hall
                    </p>
                    <p className="text-sm text-purple-900 mt-1">
                      11:30 - 12:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <a
                href="/TS schedule of 29 march 1st (9.00-11.00).FINAL.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
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
                Download Morning Schedule
              </a>
              <a
                href="/TS schedule of 29 march 1st (11.00-1.00) FINAL.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
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
                Download Afternoon Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackSchedule;
