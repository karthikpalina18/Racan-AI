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
          src=
          "https://scontent-msp1-1.cdninstagram.com/o1/v/t16/f2/m86/AQPebNT4ianwMC-DAr293zHQlqWt6-4GE__9i4UZ22o51dDPTvyU79ZP4-1isLobHDpXLwhhiVntrg5zqianxapgYHz71lVAySX1Chc.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=106&vs=1104529804819052_2523585088&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81MzQ1RDVFQzkwNDI4MkVGRUI3NTZERjA4QzMxNEI4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT1NYUmg2YWJpVVktaFlLQVA1eGdGeldwWk10YnFfRUFBQUYVAgLIARIAKAAYABsAFQAAJo7FzJHHqZ1BFQIoAkMzLBdALhT987ZFohgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2Fgdl5p0BAA%3D%3D&ccb=9-4&oh=00_AfOA2a4sLOPLs0_OmcNrhIZALLK2dKWUc7WkHBvAj1WxUA&oe=68522051&_nc_sid=10d13b"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;