import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-16 md:py-24 bg-white -mt-[20px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#004AAD] text-center">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16 px-4">
          {/* AI-Powered Styling */}
          <div className="group bg-white rounded-[2px] border border-gray-100 transition-all duration-300 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://i.postimg.cc/VvypZYJt/ddf.png"
                alt="AI-Powered Styling"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI-Powered Styling
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get personalized outfit recommendations based on your style
                preferences.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#004AAD] hover:text-[#973cff] transition-colors duration-300 text-sm font-semibold"
              >
                Learn more <ArrowRight className="ml-2 h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Character Selection */}
          <div className="group bg-white rounded-[2px] border border-gray-100 transition-all duration-300 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://majestic-halva-16882d.netlify.app/image-9.png"
                alt="Character Selection"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Character Selection
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Pick your character and get style recommendations that match
                their vibe.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#004AAD] hover:text-[#973cff] transition-colors duration-300 text-sm font-semibold"
              >
                Learn more <ArrowRight className="ml-2 h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Smart Wardrobe Assistant */}
          <div className="group bg-white rounded-[2px] border border-gray-100 transition-all duration-300 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://majestic-halva-16882d.netlify.app/image-10.png"
                alt="Smart Wardrobe Assistant"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Smart Wardrobe Assistant
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Organize your closet and create new outfit combinations with AI
                assistance.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#004AAD] hover:text-[#973cff] transition-colors duration-300 text-sm font-semibold"
              >
                Learn more <ArrowRight className="ml-2 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        {/* New div added at the end of features section */}
        <div 
          ref={sectionRef}
          className={`mt-12 w-full flex flex-col lg:flex-row items-center px-4 lg:px-8 py-8 lg:py-12 gap-12 lg:gap-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{backgroundColor: '#F4FFD1'}}
        >
          <div className="w-full lg:w-3/3 mb-8 lg:mb-0 transform transition-all duration-500">
            <video 
              src="https://v1.pinimg.com/videos/mc/expMp4/c4/3a/8e/c43a8e47b258e2642768c92bacf744ea_t1.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className={`w-full lg:w-2/3 text-center lg:text-right px-4 lg:mr-[2rem] mt-[10px] transform transition-all duration-800 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 hover:text-[#004AAD] transition-colors duration-300">
              Here is Racan Ai Demo
            </h3>
            <button className="bg-[#004AAD] text-white px-6 py-3 text-sm md:text-base hover:bg-[#973cff] mt-[0px] lg:mt-[20px] transition-all duration-300 lg:mr-[12rem] transform hover:scale-105 hover:shadow-lg active:scale-95" style={{borderRadius: '0px'}}>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;