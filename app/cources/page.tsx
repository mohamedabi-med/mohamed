import React from 'react';

const Cources = () => {
  return (
    <>
       <h1 className="text-5xl font-black text-center  position relative">Computer Science Courses</h1>
        <div className="flex justify-center mb-8">
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure>
              <img src="images.jpeg" alt="Computer Science Courses" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold mb-4">Computer Science Courses</h2>
              <ul className="list-disc ml-5 ">
                <li>Introduction To Computer Science</li>
                <li>Web Development</li>
                <li>Mobile Application Development</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default Cources;
