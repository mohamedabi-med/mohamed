"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './animation.css'; // Import your CSS file

const backgroundStyles = {
  background: 'url("insta.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Phone = () => {
  return (
    <motion.div // Wrap the entire component with motion.div
      className="flex flex-col lg:flex-row justify-around relative items-center "
      initial={{ opacity: 0, y: -50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when component mounts
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
        <video autoPlay muted loop controls={false} className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="smoke.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full lg:w-3/5 text-center z-50 mb-8 lg:mb-0">
        <h1 className="text-4xl font-black mb-4">What is World Web Solutions?</h1>
        <p className="text-lg text-white-700 leading-relaxed mb-8 lg:ml-5">World Web Solutions is your humble endeavor in the real world, where we aim to teach, offer advice, and create content related to programming and technology, with a special focus on web development. It also represents a small company that is dedicated to providing top-notch website development services. Our goal is to collaborate with clients not only in the USA and Algeria but also from around the globe.</p>
      </div>
      <motion.div 
        initial={{
          transform: 'translateZ(8px) translateY(-2px)',
        }}
        animate={{
          transform: 'translateZ(32px) translateY(-8px)',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-30deg) rotateX(15deg)',
        }} 
        className="flex justify-center items-center z-50 lg:w-2/5"
      >
        <motion.div // Wrap the phone mockup with motion.div
          className="mockup-phone border-primary relative z-50"
          initial={{ opacity: 0, scale: 0.8, x: -100 }} // Initial animation properties
          animate={{ opacity: 1, scale: 1, x: 0 }} // Animation properties when component mounts
          transition={{ delay: 0.2, duration: 0.5 }} // Animation delay and duration
        >
          <div
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateY(-20deg) rotateX(15deg)',
            }}
            className="rounded-[24px] "
          ></div>
          <motion.div
            className="camera"
          ></motion.div>
          <motion.div // Wrap the display content with motion.div
            className="display"
          >
            <div className="artboard worldweb-phone phone-1 relative">
              <div className="background-image" style={backgroundStyles}>
                <img src="logo.png" alt="Website Logo" className="phone-img" />
                <div className='bg-primary opacity-70'>
                  <h2 className="text-xl font-bold mt-5 text-center">Welcome to our Website</h2>
                  <p className="text-base text-center">If you are interested in our services, we invite you to check our latest work.</p>
                  <p className="text-sm text-white-600 text-center">Your trusted partner during your journey in computer science.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Phone;

