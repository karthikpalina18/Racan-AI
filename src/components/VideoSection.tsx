import React, { useRef } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[80vh] md:h-[70vh] lg:h-[75vh] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://v1.pinimg.com/videos/mc/720p/47/74/72/477472107a4ec6b9f3d60b4c32c84c1c.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;