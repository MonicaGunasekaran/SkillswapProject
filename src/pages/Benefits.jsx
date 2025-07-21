import React from 'react';
import { FaHandshake, FaChalkboardTeacher, FaUsers, FaRocket } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaHandshake size={30} />,
      title: 'Skill Exchange',
      desc: 'Learn new skills while teaching others what you know.',
    },
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: 'Peer Learning',
      desc: 'Connect with motivated learners across the globe.',
    },
    {
      icon: <FaUsers size={30} />,
      title: 'Community Growth',
      desc: 'Be part of a growing and supportive learning network.',
    },
    {
      icon: <FaRocket size={30} />,
      title: 'Career Boost',
      desc: 'Sharpen your skills and boost your portfolio for better opportunities.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10">Why SkillSwap?</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-emerald-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-emerald-600 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
