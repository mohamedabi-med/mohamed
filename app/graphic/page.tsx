import React from 'react';

const Graphic = () => {
  return (
    <>
       <h1 className="text-5xl font-black text-center  position relative">Graphic Design</h1>
    <div className="flex justify-center mb-8">
        <div className="mb-8">
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure>
              <img src="graphic.jpg" alt="Graphic Design" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold mb-4">Graphic Design</h2>
              <ul className="list-disc ml-5">
                <li>Logo Design</li>
                <li>Branding</li>
                <li>Print & Digital Designs</li>
              </ul>
            
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Graphic;
