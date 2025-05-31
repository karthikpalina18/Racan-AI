import React from 'react';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
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
      </div>
    </section>
  );
};

export default Features;
