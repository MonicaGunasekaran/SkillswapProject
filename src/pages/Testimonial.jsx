import React from 'react';
import user from '../assets/user.png';

const Testimonial = () => {
  return (
    <div className="bg-emerald-700 min-h-screen py-10 text-white">
      <div className="text-center mb-10">
        <p className="text-5xl font-bold">Testimonials</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Testimonial Card */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-72 bg-blue-800 rounded-lg shadow-xl p-4 hover:scale-105 transition-transform"
          >
            <div className="flex items-center mb-3">
              <img src={user} alt="user" className="h-10 w-10 rounded-full mr-3" />
              <p className="font-semibold">User {index + 1}</p>
            </div>
            <p className="text-sm text-blue-100">
              “This platform helped me connect with amazing people and exchange skills.
              Highly recommended!”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
