"use client";
import  TextGenerateEffect  from "./ui/text-generate-effect";
import React from 'react';
import Link from "next/link";
const words = `The first development and consulting company in Algeria and the educational partner of over 80,000 students in the field of computer science.
`;
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
      <div className="hero min-h-screen bg-base-200" style={backgroundStyles}>
        <div className="hero-content flex flex-col lg:flex-row-reverse justify-center items-center px-4 md:px-8 lg:ml-7">
          <div className="mb-8 lg:mb-0 lg:mr-12">
            <img className="max-w-full rounded-lg shadow-2xl" src="logo.png" alt="worldwebSolutions" />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-4">Welcome to WorldWebsolutions</h1>
            <div className="text-lg md:text-xl lg:text-2xl py-4 md:py-6 lg:py-8"><TextGenerateEffect words={words} /></div>
            <Link href="lastProjects">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Hero;
