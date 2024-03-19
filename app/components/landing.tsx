import React from 'react';

const Landing = () => {
  return (
    <div className="clearfix">
      <div className="diff aspect-[16/9] h-[200px]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">WorldWeb Solutions</div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">WorldWeb  <img className="w-70 h-50 mx-auto" src="logo.png" alt="worldwebSolutions" /></div>
        </div>
        
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Landing;
