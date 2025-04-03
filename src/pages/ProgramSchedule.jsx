import React, { useState } from 'react';
import { IoTimeOutline, IoLocationOutline, IoCalendarOutline, IoPersonOutline } from 'react-icons/io5';
import { BsDownload } from 'react-icons/bs';

const ProgramSchedule = () => {
  const [activeTab, setActiveTab] = useState('day1');
  const [expandedSession, setExpandedSession] = useState(null);

  const day1Schedule = [
    { time: '08:30 - 09:15', activity: 'Registration / Morning Networking Tea', type: 'break' },
    { time: '09:15 - 09:25', activity: 'HODs, Professors, Faculty, Student to be Seated' },
    { time: '09:25 - 09:30', activity: 'Arrival of Delegates' },
    { time: '09:30 - 09:35', activity: 'Lamp Lighting', type: 'ceremony' },
    { time: '09:35 - 09:45', activity: 'Sapling Presentation to the Dignitaries' },
    { time: '09:45 - 10:00', activity: 'Welcome Speech by the Director General' },
    { time: '10:00 - 10:20', activity: 'Introduction to the conference theme and the entire program by the General Chair, Dr. Rahul Sharma' },
    { time: '10:20 - 10:30', activity: 'Address by Prof. (Dr.) Dirk Draheim, General Chair NGISE' },
    { time: '10:30 - 10:45', activity: 'Address by the Chief Guest, Prof. (Dr.) Chuan-Yu Chang' },
    { time: '10:45 - 11:15', activity: 'Address by the Guest of Honor, Prof. Satish Kumar Singh' },
    { time: '11:15 - 11:20', activity: 'Release of Proceedings' },
    { time: '11:20 - 11:30', activity: 'Presentation of Memento' },
    { time: '11:30 - 12:00', activity: 'High Tea', type: 'break' },
    { 
      time: '12:00 - 12:45', 
      activity: 'Keynote Address I: Salvatore Sinno, VP of Innovation, Unisys, USA', 
      type: 'keynote',
      speaker: 'Salvatore Sinno',
      affiliation: 'VP of Innovation, Unisys, USA',
      abstract: 'This keynote will explore the latest trends in innovation and digital transformation.',
      image: 'https://ucarecdn.com/3473b0ea-d09a-4641-a15c-c848cbe17bc3/-/preview/398x304/'
    },
    { 
      time: '12:45 - 13:30', 
      activity: 'Keynote Address II: Prof. Chuan-Yu Chang, Professor, National Yunlin University of Science and Technology, Taiwan', 
      type: 'keynote',
      speaker: 'Prof. Chuan-Yu Chang',
      affiliation: 'National Yunlin University of Science and Technology, Taiwan',
      abstract: 'A comprehensive look at emerging technologies and their impact on society.',
      image: 'https://ucarecdn.com/8423d646-9fe7-44cb-b9e9-54e526f587e3/-/preview/457x305/'
    },
    { time: '13:30 - 14:30', activity: 'Lunch', type: 'break' },
    { 
      time: '14:30 - 16:00', 
      activity: 'Technical Sessions', 
      type: 'session',
      location: 'Multiple Rooms',
      chairs: 'Various Session Chairs',
      papers: [
        'Machine Learning for Predictive Maintenance in Smart Factories',
        'Blockchain-based Solutions for Supply Chain Visibility',
        'IoT and Edge Computing: A Survey of Current Trends'
      ]
    },
    { time: '16:00 - 16:20', activity: 'Evening Tea', type: 'break' },
  ];

  const day2Schedule = [
    { time: '08:45 - 09:15', activity: 'Morning Networking Tea', type: 'break' },
    { time: '09:15 - 09:30', activity: 'Faculty and participants to be Seated' },
    { 
      time: '09:30 - 10:15', 
      activity: 'Keynote Address III: Pavan Kumar Adepu, GenAI/LLM Research Leader, Head of Engineering, Amazon.com LLC, USA', 
      type: 'keynote',
      speaker: 'Pavan Kumar Adepu',
      affiliation: 'GenAI/LLM Research Leader, Head of Engineering, Amazon.com LLC, USA',
      abstract: 'Insights on the latest advancements in Generative AI and Large Language Models and their applications.',
      image: 'https://ykyfn9m5nl.ufs.sh/f/DYj65IeXYQ4f3AJrojnLmKwaHBYRXjZnVf8kpTecI2PGQ46S'
    },
    { 
      time: '10:15 - 11:00', 
      activity: 'Panel Discussion', 
      type: 'networking',
      location: 'Admin Block-Main Seminar Hall',
      speakers: ['Dr. John Smith', 'Prof. Maria Rodriguez', 'Dr. Ahmed Hassan']
    },
    { time: '11:00 - 11:30', activity: 'High Tea', type: 'break' },
    { 
      time: '11:30 - 13:00', 
      activity: 'Visit to the Centres of Excellence', 
      type: 'networking',
      location: 'Various Locations'
    },
    { time: '13:00 - 13:45', activity: 'Lunch', type: 'break' },
    { time: '13:45 - 13:50', activity: 'HODs, Professors, Faculty, Student to be Seated' },
    { time: '13:50 - 13:55', activity: 'Arrival of Delegates' },
    { time: '13:55 - 14:00', activity: 'Sapling Presentation to the Dignitaries' },
    { 
      time: '14:00 - 14:30', 
      activity: 'Address by the Chief Guest, Prof. Sri Niwas Singh',
      speaker: 'Prof. Sri Niwas Singh',
      affiliation: 'Chief Guest'
    },
    { time: '14:30 - 14:45', activity: 'Conference report presentation' },
    { time: '14:45 - 15:05', activity: 'Certificate Distribution', type: 'ceremony' },
    { time: '15:05 - 15:10', activity: 'Presentation of Memento' },
    { time: '15:10 - 15:15', activity: 'Vote of Thanks by the General Chair, Dr. Rahul Sharma' },
    { time: '15:15 - 15:45', activity: 'Evening Tea', type: 'break' },
  ];

  const day2ParallelActivities = [
    {
      time: '09:00 - 11:00',
      activity: 'Technical Sessions (Morning)',
      type: 'session',
      locations: [
        'Admin Block-Mini seminar hall-1',
        'Admin Block-Mini seminar hall-2',
        'CSIT Block-Lab-6 (5th floor)',
        'CSIT Block-Lab-7 (5th floor)',
        'CSIT seminar hall (1st floor)'
      ],
      // papers: [
      //   'Artificial Intelligence and Machine Learning Applications',
      //   'Information Security and Privacy',
      //   'Cloud Computing and Big Data Analytics',
      //   'IoT and Edge Computing Systems',
      //   'Next Generation Network Technologies'
      // ]
    },
    {
      time: '11:00 - 12:30',
      activity: 'Technical Sessions (Continued)',
      type: 'session',
      locations: [
        'Admin Block-Mini seminar hall-1',
        'Admin Block-Mini seminar hall-2',
        'CSIT Block-Lab-6 (5th floor)',
        'CSIT Block-Lab-7 (5th floor)',
        'CSIT seminar hall (1st floor)'
      ]
    },
    {
      time: '11:30 - 12:30',
      activity: 'IEEE WIE Meet and Greet Program',
      type: 'networking',
      location: 'Admin block-DG Conference Hall'
    },
    {
      time: '11:30 - 12:30',
      activity: 'IEEE Computational Intelligence Student Chapter Activity Poster Presentation',
      type: 'presentation',
      location: 'Admin Block- Outside Main Seminar Hall'
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'break': return 'bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800';
      case 'keynote': return 'bg-purple-50 border-l-4 border-purple-500 text-purple-900';
      case 'session': return 'bg-blue-50 border-l-4 border-blue-500 text-blue-900';
      case 'ceremony': return 'bg-amber-50 border-l-4 border-amber-500 text-amber-900';
      case 'talk': return 'bg-indigo-50 border-l-4 border-indigo-500 text-indigo-900';
      case 'networking': return 'bg-pink-50 border-l-4 border-pink-500 text-pink-900';
      case 'presentation': return 'bg-orange-50 border-l-4 border-orange-500 text-orange-900';
      default: return 'bg-gray-50 border-l-4 border-gray-300 text-gray-800';
    }
  };

  const getTypeBadgeColor = (type) => {
    switch(type) {
      case 'break': return 'bg-emerald-100 text-emerald-800';
      case 'keynote': return 'bg-purple-100 text-purple-800';
      case 'session': return 'bg-blue-100 text-blue-800';
      case 'ceremony': return 'bg-amber-100 text-amber-800';
      case 'talk': return 'bg-indigo-100 text-indigo-800';
      case 'networking': return 'bg-pink-100 text-pink-800';
      case 'presentation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleSessionDetails = (index) => {
    setExpandedSession(expandedSession === index ? null : index);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className="relative mb-16 text-center">
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="h-64 w-64 rounded-full bg-blue-600"></div>
          </div> */}
          
          <h1 className='text-5xl font-extrabold text-gray-900 mb-4 tracking-tight'>
            Conference Program
          </h1>
          
          <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
            Next Generation Information Systems Engineering (NGISE)
          </h2>
          
          <div className='flex justify-center items-center gap-3 mb-6 text-gray-700 font-medium'>
            <div className='flex items-center'>
              <IoCalendarOutline className="mr-2 text-blue-600" />
              March 28-29, 2025
            </div>
            <span className="text-gray-400">•</span>
            <div className='flex items-center'>
              <IoLocationOutline className="mr-2 text-blue-600" />
              Hybrid Conference
            </div>
          </div>
          
            <button
              // href="/Minute to Minute Program 28th-29th March 25.pdf" 
              // download
              className="mt-4 inline-flex mb-5 items-center px-5 py-2.5 border cursor-pointer border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <BsDownload className="mr-2" />
              Download PDF Schedule
            </button>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
        </div>
        
        <div className='flex justify-center mb-12'>
          <div className="inline-flex shadow-md rounded-lg bg-white overflow-hidden">
            <button
              className={`py-3 px-10 font-medium transition-all duration-200 ${
                activeTab === 'day1'
                  ? 'bg-blue-600 text-white shadow-inner'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('day1')}
            >
              <div className="flex items-center">
                <IoCalendarOutline className="mr-2" />
                Day 1 (March 28)
              </div>
            </button>
            <button
              className={`py-3 px-10 font-medium transition-all duration-200 ${
                activeTab === 'day2'
                  ? 'bg-blue-600 text-white shadow-inner'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('day2')}
            >
              <div className="flex items-center">
                <IoCalendarOutline className="mr-2" />
                Day 2 (March 29)
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10 p-5 bg-white rounded-xl shadow-sm">
          <h3 className="w-full text-center text-sm font-medium text-gray-500 mb-3">SESSION TYPES</h3>
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">Breaks</span>
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">Keynotes</span>
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">Sessions</span>
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">Ceremonies</span>
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800 border border-pink-200">Networking</span>
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">Talks</span>
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">Presentations</span>
        </div>

        {activeTab === 'day1' && (
          <div className="space-y-10">
            <div className='bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100'>
              <div className='px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  Day 1 - March 28, 2025
                </h2>
                <div className='mt-2 flex items-center text-gray-600'>
                  <IoLocationOutline className="mr-2 text-blue-500" />
                  <p className='text-sm'>
                    Admin Block, Main Seminar Hall
                  </p>
                </div>
              </div>
              <div className='bg-white relative'>
                <div className="absolute left-[120px] sm:left-[145px] top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                <ul className='divide-y divide-gray-100'>
                  {day1Schedule.map((item, index) => (
                    <li 
                      key={index} 
                      className={`px-6 py-5 flex hover:bg-gray-50 transition-all duration-200 ${
                        item.abstract || item.papers ? 'cursor-pointer' : ''
                      } ${item.type ? getTypeColor(item.type) : ''}`}
                      onClick={() => (item.abstract || item.papers || item.parallelSessions) && toggleSessionDetails(index)}
                    >
                      <div className='min-w-[110px] sm:min-w-[130px] pr-6 flex items-start relative z-10'>
                        <span className='text-sm font-semibold text-blue-700 whitespace-nowrap'>
                          <IoTimeOutline className="inline " />
                          {item.time}
                        </span>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-[120px] sm:left-[140px] mt-1.5 w-3 h-3 rounded-full bg-blue-500 z-10 shadow-md"></div>
                      
                      <div className='ml-8 flex-1'>
                        <p className={`text-gray-900 ${(item.abstract || item.papers || item.parallelSessions) ? 'font-semibold' : 'font-medium'}`}>
                          {item.activity}
                          {(item.abstract || item.papers || item.parallelSessions) && 
                            <span className="ml-2 text-blue-500 text-sm inline-flex items-center justify-center transition-transform duration-200" style={{ 
                              transform: expandedSession === index ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>▼</span>
                          }
                        </p>
                        
                        {item.location && (
                          <div className='text-sm text-gray-600 mt-1.5 flex items-center'>
                            <IoLocationOutline className="mr-1.5 text-blue-400" />
                            {item.location}
                          </div>
                        )}

                        {item.presenter && (
                          <div className='text-sm text-gray-600 mt-1.5 flex items-center'>
                            <IoPersonOutline className="mr-1.5 text-blue-400" />
                            {item.presenter}
                          </div>
                        )}
                        
                        {item.type && (
                          <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeBadgeColor(item.type)}`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        )}
                        
                        {expandedSession === index && (item.abstract || item.papers || item.parallelSessions) && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm border border-gray-100 animate-fadeIn">
                            {item.speaker && (
                              <div className="flex items-center mb-3">
                                {item.image && (
                                  <div className="mr-3 rounded-full overflow-hidden w-12 h-12 flex-shrink-0">
                                    <img src={item.image} alt={item.speaker} className="w-full h-full object-cover" />
                                  </div>
                                )}
                                <div>
                                  <p className="font-medium text-gray-800">{item.speaker}</p>
                                  {item.affiliation && (
                                    <p className="text-gray-600 text-sm">{item.affiliation}</p>
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {item.abstract && (
                              <div className="mb-3">
                                <p className="font-medium text-gray-700 mb-1">Abstract:</p>
                                <p className="text-gray-600">{item.abstract}</p>
                              </div>
                            )}
                            
                            {item.papers && (
                              <div className="mt-3">
                                <p className="font-medium text-gray-700 mb-2">Papers:</p>
                                <ul className="space-y-1.5">
                                  {item.papers.map((paper, i) => (
                                    <li key={i} className="text-gray-600 flex items-start">
                                      <span className="text-blue-500 mr-2">•</span>
                                      {paper}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {item.speakers && (
                              <div className="mt-3">
                                <p className="font-medium text-gray-700 mb-2">Speakers:</p>
                                <ul className="space-y-1.5">
                                  {item.speakers.map((speaker, i) => (
                                    <li key={i} className="text-gray-600 flex items-center">
                                      <IoPersonOutline className="mr-1.5 text-blue-400" />
                                      {speaker}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {item.description && (
                              <div className="mt-3">
                                <p className="font-medium text-gray-700 mb-1">Description:</p>
                                <p className="text-gray-600">{item.description}</p>
                              </div>
                            )}
                            
                            {item.chairs && (
                              <div className="mt-3">
                                <p className="font-medium text-gray-700 mb-1">Chairs:</p>
                                <p className="text-gray-600">{item.chairs}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'day2' && (
          <div className="space-y-10">
            <div className='bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100'>
              <div className='px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  Day 2 - March 29, 2025
                </h2>
                <div className='mt-2 flex items-center text-gray-600'>
                  <IoLocationOutline className="mr-2 text-blue-500" />
                  <p className='text-sm'>
                    Admin Block, Main Seminar Hall
                  </p>
                </div>
              </div>
              
              <div className='bg-white relative'>
                <div className="absolute left-[120px] sm:left-[140px] top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                <ul className='divide-y divide-gray-100'>
                  {day2Schedule.map((item, index) => (
                    <li 
                      key={index} 
                      className={`px-6 py-5 flex hover:bg-gray-50 transition-all duration-200 ${
                        item.abstract || item.papers || item.parallelSessions ? 'cursor-pointer' : ''
                      } ${item.type ? getTypeColor(item.type) : ''}`}
                      onClick={() => (item.abstract || item.papers || item.parallelSessions) && toggleSessionDetails(index + 100)} // Offset to avoid day1 indices
                    >
                      <div className='min-w-[110px] sm:min-w-[130px] pr-6 flex items-start relative z-10'>
                        <span className='text-sm font-semibold text-blue-700 whitespace-nowrap'>
                          <IoTimeOutline className="inline mr-1.5" />
                          {item.time}
                        </span>
                      </div>
                      
                      <div className="absolute left-[120px] sm:left-[140px] mt-1.5 w-3 h-3 rounded-full bg-blue-500 z-10 shadow-md"></div>
                      
                      <div className='ml-8 flex-1'>
                        <p className={`text-gray-900 ${(item.abstract || item.papers || item.parallelSessions) ? 'font-semibold' : 'font-medium'}`}>
                          {item.activity}
                          {(item.abstract || item.papers || item.parallelSessions) && 
                            <span className="ml-2 text-blue-500 text-sm inline-flex items-center justify-center transition-transform duration-200" style={{ 
                              transform: expandedSession === index + 100 ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>▼</span>
                          }
                        </p>
                        
                        {item.location && (
                          <div className='text-sm text-gray-600 mt-1.5 flex items-center'>
                            <IoLocationOutline className="mr-1.5 text-blue-400" />
                            {item.location}
                          </div>
                        )}

                        {item.presenter && (
                          <div className='text-sm text-gray-600 mt-1.5 flex items-center'>
                            <IoPersonOutline className="mr-1.5 text-blue-400" />
                            {item.presenter}
                          </div>
                        )}
                        
                        {item.type && (
                          <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeBadgeColor(item.type)}`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                        )}
                        
                        {expandedSession === index + 100 && (item.abstract || item.papers || item.parallelSessions) && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm border border-gray-100 animate-fadeIn">
                            {item.speaker && (
                              <div className="flex items-center mb-3">
                                {item.image && (
                                  <div className="mr-3 rounded-full overflow-hidden w-12 h-12 flex-shrink-0">
                                    <img src={item.image} alt={item.speaker} className="w-full h-full object-cover" />
                                  </div>
                                )}
                                <div>
                                  <p className="font-medium text-gray-800">{item.speaker}</p>
                                  {item.affiliation && (
                                    <p className="text-gray-600 text-sm">{item.affiliation}</p>
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {item.abstract && (
                              <div className="mb-3">
                                <p className="font-medium text-gray-700 mb-1">Abstract:</p>
                                <p className="text-gray-600">{item.abstract}</p>
                              </div>
                            )}
                            
                            {item.papers && (
                              <div className="mt-3">
                                <p className="font-medium text-gray-700 mb-2">Papers:</p>
                                <ul className="space-y-1.5">
                                  {item.papers.map((paper, i) => (
                                    <li key={i} className="text-gray-600 flex items-start">
                                      <span className="text-blue-500 mr-2">•</span>
                                      {paper}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {item.parallelSessions && (
                              <div className="mt-3 space-y-4">
                                <p className="font-medium text-gray-800 mb-2">Parallel Sessions:</p>
                                {item.parallelSessions.map((session, i) => (
                                  <div key={i} className="bg-white p-3 rounded-md border border-gray-200">
                                    <p className="font-semibold text-blue-700 mb-1">{session.title}</p>
                                    <div className="flex items-center text-sm text-gray-600 mb-1">
                                      <IoLocationOutline className="mr-1 text-blue-400" />
                                      {session.location}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                      <IoPersonOutline className="mr-1 text-blue-400" />
                                      Chair: {session.chair}
                                    </div>
                                    <p className="font-medium text-gray-700 text-sm mt-2 mb-1">Papers:</p>
                                    <ul className="space-y-1">
                                      {session.papers.map((paper, j) => (
                                        <li key={j} className="text-gray-600 text-sm flex items-start">
                                          <span className="text-blue-500 mr-2">•</span>
                                          {paper}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {item.description && (
                              <div className="mt-3">
                                <p className="font-medium text-gray-700 mb-1">Description:</p>
                                <p className="text-gray-600">{item.description}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100'>
              <div className='px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  Parallel Activities - March 29, 2025
                </h2>
                <div className='mt-2 flex items-center text-gray-600'>
                  <IoLocationOutline className="mr-2 text-indigo-500" />
                  <p className='text-sm'>
                    Multiple Venues
                  </p>
                </div>
              </div>
              
              <div className='p-6 divide-y divide-gray-100'>
                {day2ParallelActivities.map((activity, index) => (
                  <div key={index} className={`py-5 ${index > 0 ? 'pt-6' : ''}`}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 font-medium px-3 py-2 rounded-lg text-center">
                        <IoTimeOutline className="mx-auto text-lg mb-1" />
                        <span className="text-sm whitespace-nowrap">{activity.time}</span>
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <h3 className="font-bold text-lg text-gray-800">{activity.activity}</h3>
                        
                        {activity.location && (
                          <div className="text-sm text-gray-600 mt-1 flex items-center">
                            <IoLocationOutline className="mr-1.5 text-indigo-400" />
                            {activity.location}
                          </div>
                        )}
                        
                        {activity.locations && (
                          <div className="mt-3">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Venues:</h4>
                            <ul className="space-y-1">
                              {activity.locations.map((loc, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-600">
                                  <IoLocationOutline className="mr-1.5 text-indigo-400" />
                                  {loc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {activity.papers && (
                          <div className="mt-3">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Topics:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {activity.papers.map((paper, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                  <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                                  {paper}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {activity.type && (
                          <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(activity.type)}`}>
                            {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>For any queries regarding the schedule, please contact the conference organizers</p>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProgramSchedule;