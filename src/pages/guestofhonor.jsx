import React from "react";

const GuestCard = ({ image, name, affiliation }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl max-w-xs mx-auto">
      <div className="h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">{affiliation}</p>
      </div>
    </div>
  );
};

const Guestofhonor = () => {
  const guests = [
    {
      id: 1,
      image:
        "https://ucarecdn.com/b4b1e588-b43c-45b8-9ad2-bef10ecbc053/-/preview/328x327/",
      name: "Prof. Satish Kumar Singh",
      affiliation:
        "Indian Institute of Information Technology Allahabad, India",
    },
  ];

return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Guests of Honor
                </h1>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Distinguished personalities who grace our event with their knowledge
                    and experience.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {guests.map((guest) => (
                    <GuestCard
                        key={guest.id}
                        image={guest.image}
                        name={guest.name}
                        affiliation={guest.affiliation}
                    />
                ))}
            </div>
        </div>
    </div>
);
};

export default Guestofhonor;
