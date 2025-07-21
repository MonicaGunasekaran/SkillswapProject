import React from 'react';

const Working = () => {
  return (
    <>
      <div className="min-h-screen pl-5 bg-blue-900 text-white">
        {/* Title and Steps */}
        <div className="flex justify-end">
          <div className="text-right mr-5">
            <p className="p-5 font-bold text-5xl">How It Works?</p>
            <ol className="pt-1 text-xl">
              <li>Create a Profile</li>
              <li>Connect With Peers</li>
              <li>Start Exchanging Knowledge</li>
            </ol>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 px-4">
          {/* Card 1 */}
          <div className="w-full md:w-1/3 bg-amber-500 rounded-xl p-5 text-center hover:bg-red-500 transition-all duration-300">
            <p className="text-xl font-semibold mb-2">Create Profile</p>
            <p className="text-blue-50 text-justify px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              consectetur ipsam vitae.
            </p>
            <button className="p-2 mt-4 w-32 hover:bg-blue-600 rounded-sm font-bold hover:text-amber-100 bg-blue-900 text-red-500">
              Click Me
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 bg-amber-500 rounded-xl p-5 text-center hover:bg-red-500 transition-all duration-300">
            <p className="text-xl font-semibold mb-2">Connect Peers</p>
            <p className="text-blue-50 text-justify px-3">
              Build your learning network by connecting with others who share
              your passion.
            </p>
            <button className="p-2 mt-4 w-32 hover:bg-blue-600 rounded-sm font-bold hover:text-amber-100 bg-blue-900 text-red-500">
              Click Me
            </button>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 bg-amber-500 rounded-xl p-5 text-center hover:bg-red-500 transition-all duration-300">
            <p className="text-xl font-semibold mb-2">Exchange Knowledge</p>
            <p className="text-blue-50 text-justify px-3">
              Start collaborating through live sessions, Q&A, and learning swaps.
            </p>
            <button className="p-2 mt-4 w-32 hover:bg-blue-600 rounded-sm font-bold hover:text-amber-100 bg-blue-900 text-red-500">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
