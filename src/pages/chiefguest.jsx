import React from 'react'

const chiefGuests = [
  {
    id: 1,
    name: "Prof. Chuan-Yu Chang",
    title: "Distinguished Professor",
    badges: ["IET Fellow", "IEEE Senior Member"],
    department: "Computer Science and Information Engineering",
    institution: "National Yunlin University of Science and Technology, Taiwan",
    image: "https://ucarecdn.com/8423d646-9fe7-44cb-b9e9-54e526f587e3/-/preview/457x305/",
    interests: ["AI", "Machine Learning", "Computer Vision"],
    talk: {
      title: "Innovations in AI: Present and Future",
      date: "June 15, 2023",
      time: "10:30 AM"
    },
    links: {
      linkedin: "#",
      website: "#"
    }
  },
  {
    id: 2,
    name: "Prof. Sri Niwas Singh",
    title: "Professor",
    department: "",
    institution: "Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM) Gwalior, India",
    image: "https://ucarecdn.com/21f7b439-a4e1-4baa-9b73-1faf2c6dc9e2/-/preview/252x324/",
    interests: [""],
    talk: {
      title: "Advancements in Computing Technologies",
      date: "June 16, 2023",
      time: "11:00 AM"
    },
    links: {
      linkedin: "#",
      website: "#"
    }
  },
]

const GuestCard = ({ guest }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl max-w-xs">
      <div className="h-72 overflow-hidden">
        <img
          src={guest.image}
          alt={guest.name}
          className={`w-full h-full ${guest.name === "Prof. Chuan-Yu Chang" ? "object-cover" : ""}`}
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{guest.name}</h3>
        {guest.badges && guest.badges.length > 0 && (
          <div className="flex justify-center gap-2 mb-2">
            {guest.badges.map((badge, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-600 mb-1">{guest.title}</p>
        {guest.department && <p className="text-gray-500 text-sm mb-1">{guest.department}</p>}
        <p className="text-gray-500 text-sm mb-3">{guest.institution}</p>
        
      </div>
    </div>
  )
}

const ChiefGuest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Chief Guest Speakers
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our esteemed speakers who will share their knowledge and expertise at the conference.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {chiefGuests.map(guest => (
            <GuestCard key={guest.id} guest={guest} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChiefGuest
