import React from 'react';

const Hero = () => {
  const backgroundStyles = {
    backgroundImage: 'url(black4.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const backgroundStyles2 = {
    backgroundImage: 'url(blob4.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <h1></h1>
      <div className="hero min-h-screen bg-base-200" style={backgroundStyles}>
        <div className="hero-content flex flex-col lg:flex-row-reverse justify-center items-center px-4 md:px-8 lg:ml-7">
          <div className="mb-8 lg:mb-0 lg:mr-12">
            <img className="max-w-full rounded-lg shadow-2xl" src="logo.png" alt="worldwebSolutions" />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to WorldWebsolutions</h1>
            <p className="text-lg md:text-xl lg:text-2xl py-4 md:py-6 lg:py-8">The first development and consulting company in Algeria and the educational partner of over 80,000 students in the field of computer science.</p>
            <button className="btn btn-primary px-8 py-3 text-lg md:text-xl lg:text-2xl">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
