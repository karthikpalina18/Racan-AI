import React from 'react';

function Hero() {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      <section className="relative bg-white pt-10 mt-[80px] mb-[60px] lg:min-h-screen lg:pt-20 lg:mt-[50px] lg:mb-[10px]">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-[15px] lg:mt-[30px] mb-[10px] lg:mb-[10px] px-4 lg:px-0 gap-5 lg:gap-[20px]">
          <div className="w-full lg:w-1/2 px-2 lg:px-20 lg:ml-[65px]  flex flex-col justify-center min-h-[400px] lg:min-h-[452px]">
            <h1 className="text-[28px] sm:text-[30px] lg:text-[32px] text-gray-900 font-semibold leading-tight animate-fade-in-up">
              Redefine Your Style With Racan
              <br />
              <span className="text-[#004AAD]">
                AI-powered assistant + Fashion
              </span>
              <br />
              Ecommerce
            </h1>
            <p className="font-mono text-gray-600 text-[16px] sm:text-[17px] lg:text-[18px] mt-6 max-w-xl animate-fade-in-up animation-delay-300">
              Experience the future of fashion with AI-powered Fashion assistant
              Ecommerce,personalized recommendations that match your unique
              taste.
            </p>
            <a
              href="#"
              className="inline-block bg-[#ff3366] text-white px-8 py-3 rounded-full text-base lg:text-lg hover:bg-[#d70153] hover:scale-105 hover:shadow-lg transition-all duration-300 mt-8 w-fit animate-fade-in-up animation-delay-600"
            >
              Try Racan
            </a>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
            <div className="relative w-full max-w-[400px] lg:w-[466.89px] h-[350px] sm:h-[400px] lg:h-[452.12px] group">
              <img
                src="https://i.pinimg.com/736x/1f/11/bf/1f11bfeb936f435b9e134f064154668e.jpg"
                alt="Fashion AI"
                className="w-full h-full object-cover rounded-[2px] transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2px]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
