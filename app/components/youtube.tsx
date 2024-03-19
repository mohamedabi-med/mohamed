import React, { useState } from 'react';
import YouTube from 'react-youtube';

const Waves = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {isVideoPlaying && (
          <YouTube
            videoId="8bvxLARIWiw"
            className="absolute top-0 left-0 w-full h-full object-cover"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                controls: 0,
                loop: 1,
                mute: 1,
                modestbranding: 1,
                playlist: "8bvxLARIWiw"
              },
            }}
          />
        )}
      </div>
      <div className="relative inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className=" text-primary-content  rounded-lg text-5xl transform-y-[10%] font-black grid place-content-center">Check WorldWeb Solutions Playlists on Youtube <br></br>Computer Science And Programming Free Content </h1>
        <img src="banner.jpg" alt="Banner" className="block mx-auto border-collapse" style={{ maxHeight: '70vh' }} />
        <button className="btn btn-circle btn-outline " onClick={handlePlayPauseClick}>
          <img className="p-5 " src={isVideoPlaying ? "pause.png" : "start.png"} />
        </button>
      </div>
    </div>
  );
};

export default Waves;
