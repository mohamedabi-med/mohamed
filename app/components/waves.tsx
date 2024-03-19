"use client"
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import LoadingSpinner from './LoadingSpinner'; // Import your loading spinner component

const Waves = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  useEffect(() => {
    const handleDocumentClick = (e:any) => {
      const target = e.target;
      const youtubeVideoElement = document.querySelector('.youtube-video');
      // Check if the click event occurred outside the YouTube video element
      if (youtubeVideoElement && !youtubeVideoElement.contains(target)) {
        setIsVideoPlaying(false);
      }
    };

    document.body.addEventListener('click', handleDocumentClick);

    return () => {
      document.body.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <div className={`absolute z-50 flex justify-center w-100 object-cover youtube-video ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}>
        {isVideoPlaying && (
          <YouTube
            videoId="8bvxLARIWiw"
            className="w-full h-full object-cover"
            opts={{
              playerVars: {
                autoplay: 1,
                list: 'PLZIaQrBOCjHrCVpqdOE5mbYTupO2UyvUQ',
                listType: 'playlist',
                controls: 0,
                loop: 1,
                mute: 0,
                modestbranding: 1,
                origin: 'http://localhost:3000'
              }
            }}
          />
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay muted loop controls={false} className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="stars.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-primary-content rounded-lg text-5xl transform-y-[10%] font-black grid place-content-center">Check WorldWeb Solutions Playlists on Youtube <br></br>Computer Science And Programming Free Content </h1>
        <img src="banner.jpg" alt="Banner" className="block mx-auto border-collapse z-30 rounded-lg" style={{ maxHeight: '70vh', zIndex: 9001 }} />
        <button className="btn btn-circle btn-outline w-20 absolute top-[50%] z-40" onClick={handlePlayPauseClick} style={{ zIndex: 9002 }}>
          <img className="w-10 h-10" src={isVideoPlaying ? "pause.png" : "start.png"} />
        </button>
      </div>
      {/* Your loading spinner component */}
      {isVideoPlaying && <LoadingSpinner />}
    </div>
  );
};

export default Waves;
