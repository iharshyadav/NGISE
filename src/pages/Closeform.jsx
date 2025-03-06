import { useState } from 'react';

const ClosedRegistration = () => {
    
    return (
        <div className='h-screen flex justify-center items-center'>
        <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-lg shadow-lg text-center border border-gray-100">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-5">Registration Closed</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        <span className="font-semibold">Thank you for your interest.</span> The registration period for this event has ended.
                    </p>
                    <a href='/' 
                    
                        className="bg-blue-700 text-white px-6 py-3 rounded font-bold shadow-md cursor-pointer transition-all duration-200 hover:bg-blue-800 hover:shadow-lg"
                    >
                        Home
                    </a>
                </div>
        </div>
        </div>
    );
};

export default ClosedRegistration;
