import React from 'react';

const Software = () => {
  return (

    <>
           <h1 className="text-5xl font-black text-center  position relative">Software Development</h1>
        <div className="flex justify-center mb-8">
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure>
              <img src="images.jpeg" alt="Computer Science Courses" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
                 <h2 className="card-title text-lg font-bold mb-4">Software Development</h2>
              <ul className="list-disc ml-5 ">
                <li>Website Development</li>
                <li>Mobile Applications</li>
                <li>Visual Identity</li>
              </ul>
            </div>
          </div>
        </div>
        
        </>
       
  );
};

export default Software;
