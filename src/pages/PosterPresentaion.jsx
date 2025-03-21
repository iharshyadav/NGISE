"use client"

import { useState, useEffect } from "react"

export default function PosterPresentation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".reveal-item").forEach((item) => {
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const tabs = [
    { title: "Poster Requirements", icon: "📋" },
    { title: "Themes for Poster Presentations", icon: "📤" },
  ]

  const tabContents = [
    <ul className="space-y-3 mt-4" key="requirements">
      {[
        { title: "Title & Authors", desc: "Clearly define your topic and contributors" },
        { title: "Problem Statement", desc: "Identify the critical issues addressed" },
        { title: "Objective & Scope", desc: "Set clear goals and define solution boundaries" },
        { title: "Methodology", desc: "Explain your scientific and technical approach" },
        { title: "Results", desc: "Showcase findings or potential outcomes" },
        { title: "Sustainability", desc: "Assess environmental and operational feasibility" },
        { title: "Future Work", desc: "Highlight possible improvements and next steps" },
      ].map((item, index) => (
        <li key={index} className="flex items-start p-2 rounded-md hover:bg-[#EFF5F2] transition-colors">
          <span className="text-[#5A8B7D] font-bold mr-2 mt-1">•</span>
          <div>
            <span className="font-bold text-[#3A6B5D]">{item.title}</span>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>,
    <div className="space-y-4 mt-4" key="guidelines">
      <ul className="space-y-3 mt-4">
            {[
                { title: "Next-Gen Cloud Computing Solutions", desc: "Shaping the future of technology." },
                { title: "Digital Transformation & Interoperability", desc: "Driving industry-wide innovation." },
                { title: "Large Language Models", desc: "Exploring AI's transformative power." },
                { title: "Green & Sustainable IT Systems", desc: "Leveraging eco-friendly technology." }
            ].map((item, index) => (
                <li key={index} className="flex items-start p-2 rounded-md hover:bg-[#EFF5F2] transition-colors">
                    <span className="text-[#5A8B7D] font-bold mr-2 mt-1">•</span>
                    <div>
                        <span className="font-bold text-[#3A6B5D]">{item.title}</span>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  ]

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative bg-[#5A8B7D] border-b-4 border-[#3A6B5D]">
        <div className="py-16 px-4 text-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center reveal-item opacity-0 transform translate-y-4 transition-all duration-700">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center leading-tight">
                IEEE International Conference on Next Generation Information System Engineering
              </h1>
              <div className="w-24 h-1 bg-white mx-auto my-6"></div>
              <h2 className="text-xl mb-6 text-center font-light">AKGEC 2025 - Poster Presentation</h2>
              <p className="text-xl md:text-2xl font-medium text-center max-w-3xl mx-auto leading-relaxed">
                Humanitarian Technology: Leveraging Innovation for a Better Future
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white opacity-10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2 reveal-item opacity-0 transform translate-y-4 transition-all duration-700">
            <div className="bg-white rounded-md shadow-md overflow-hidden h-full border border-gray-200">
              <div className="h-2 bg-[#5A8B7D]"></div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#5A8B7D] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📋</span>
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-800">Poster Content Requirements</h3>
                </div>

                <div className="flex border-b border-gray-200 mb-4">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 text-sm font-medium transition-colors duration-200 relative ${
                        activeTab === index ? "text-[#5A8B7D]" : "text-gray-500 hover:text-[#5A8B7D]"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span className="mr-1">{tab.icon}</span> {tab.title}
                      {activeTab === index && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5A8B7D]"></span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="min-h-[300px]">{tabContents[activeTab]}</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 reveal-item opacity-0 transform translate-y-4 transition-all duration-700 delay-100">
            {/* <div className="bg-white rounded-md shadow-md overflow-hidden h-full  border-gray-200"> */}
            <div className="container mx-auto px-4 py- flex justify-center">
            <img 
                src="/posterpresentation.jpg" 
                alt="IEEE International Conference on Next Generation Information System Engineering - Poster Presentation" 
                className="max-w-full h-auto shadow-lg rounded-lg reveal-item opacity-0 transform translate-y-4 transition-all duration-700"
            />
        </div>
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mt-8">
          {[
            {
              title: "Key Dates",
              icon: "📅",
              items: [
                { label: "Submission Deadline", value: "24th March 2025" },
                { label: "Acceptance Notification", value: "26th March 2025" },
                // { label: "Final Submission", value: "30th March 2025" },
              ],
            },
            {
              title: "Poster Dimensions",
              icon: "📏",
              items: [
                { label: "Size", value: "36 x 24 inches" },
                // { label: "Orientation", value: "Landscape" },
                { label: "Registration", value: "No Fee" },
              ],
            },
            {
              title: "Awards & Recognition",
              icon: "🏆",
              items: [
                { label: "First Prize", value: "₹3,000" },
                { label: "Second Prize", value: "₹2,000" },
                { label: "Third Prize", value: "₹1,000" },
                // { label: "Recognition", value: "Cash prizes for top entries" },
                { label: "Participation", value: "E-certificates for all participants" },
            ],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/3 px-4 mb-8 reveal-item opacity-0 transform translate-y-4 transition-all duration-700"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="bg-white rounded-md shadow-md h-full overflow-hidden border border-gray-200">
                <div className="h-2 bg-[#5A8B7D]"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-xl mr-3">{card.icon}</span>
                    <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{item.label}:</span>
                        <span className="font-semibold text-gray-800">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-12 reveal-item opacity-0 transform translate-y-4 transition-all duration-700">
          <div className="bg-[#5A8B7D] rounded-md shadow-md overflow-hidden">
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-xl mr-3">📤</span> Submission Details
              </h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    <li className="flex items-center bg-[#4A7B6D]/30 p-3 rounded-md">
                      <span className="text-lg mr-3">📧</span>
                      <span>
                        <strong>Email:</strong> madhavv8528@gmail.com
                      </span>
                    </li>
                    <li className="flex items-center bg-[#4A7B6D]/30 p-3 rounded-md">
                      <span className="text-lg mr-3">📋</span>
                      <span>
                        <strong>CC:</strong> agarwalshikha@akgec.ac.in
                      </span>
                    </li>
                    <li className="flex items-center mt-4 bg-[#4A7B6D]/30 p-3 rounded-md">
                      <span className="text-lg mr-3">📱</span>
                      <span>
                        For technical queries, contact Madhav Chaturvedi at <strong>+91 8529166527</strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <a
                    className="inline-block px-6 py-3 bg-white text-[#5A8B7D] font-bold rounded-md transition-colors shadow-md hover:bg-gray-100"
                    href="https://shorturl.at/bvUKh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-2">⬇️</span>
                      <span>Download Template</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-12 reveal-item opacity-0 transform translate-y-4 transition-all duration-700">
          <div className="bg-white py-8 rounded-md shadow-md border border-gray-200">
            <div className="border-l-4 border-[#5A8B7D] pl-4 mx-4">
              <p className="text-xl font-medium text-gray-700 leading-relaxed">
                Be part of the IEEE International Conference on Next Generation Information System Engineering at Ajay
                Kumar Garg Engineering College and showcase your innovative ideas on a global stage!
              </p>
            </div>

            {/* <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-[#5A8B7D] text-white rounded-md font-medium shadow-md hover:bg-[#3A6B5D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8B7D] focus:ring-opacity-50">
                Submit Your Poster Now
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-reveal {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}