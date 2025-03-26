import React from 'react';

const Ieeeobserver = () => {
    const observers = [
        {
            id: 1,
            name: 'Dr. Akhilesh Tiwari',
            image: "https://ucarecdn.com/6e8dfea6-d9dc-43be-a5d3-bd0b428a42d9/-/preview/128x98/",
            position: 'IEEE Observer',
            description: 'Indian Institute of Information Technology (IIIT), Allahabad',
        },
        {
            id: 2,
            name: 'Prof. Samarendra Pratap Singh',
            image: "/samendra.jpg",
            position: 'IEEE Observer',
            description: 'IET Dr RMLAU Ayodhya',
        }
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-3 text-gray-800">IEEE Observers</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Distinguished professionals supporting and guiding our IEEE student branch
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    {observers.map((observer) => (
                        <div 
                            key={observer.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg w-80 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="h-72 overflow-hidden">
                                <img
                                    src={observer.image}
                                    alt={observer.name}
                                    className="w-full h-full object- transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">{observer.name}</h2>
                                <h3 className="text-blue-600 font-medium mb-3">{observer.position}</h3>
                                <div className="w-12 h-0.5 bg-gray-200 mb-4"></div>
                                <p className="text-gray-600">{observer.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ieeeobserver;
