import React from 'react';

const Cources = () => {
  return (
    <>
       <h1 className="text-5xl font-black text-center  position relative">ABConsulting</h1>
        <div className="flex justify-center mb-8">
          <div className="card bg-base-200 text-base-content shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure>
              <img src="abc.png" alt="Computer Science Courses" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold mb-4">We are Ready to help Your company grow to the next LevelConseil and Solutions </h2>
              <ul className="list-disc ml-5 ">
                <li>IT SOLUTIONS</li>
                <li>Social Media marketing</li>
                <li>Consumer Support</li>
                <li>The buisness is in Incubation , we are working to offer you the best quality service</li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default Cources;
