import React, { useState } from 'react';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
   

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Sign up form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* Back button */}
            <button 
              onClick={handleGoBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="flex items-center gap-2 mb-12">
              <img src="https://i.postimg.cc/50B939gH/Logo.png" alt="Racan AI" className="w-8 h-8" />
              <span className="text-2xl font-semibold">Racan AI</span>
            </div>
            <h1 className="text-5xl font-serif mb-3">Redefine Your Style</h1>
            <p className="text-gray-600 text-lg">
              Experience the future of fashion with AI-powered recommendations that match your unique taste.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center w-full">
              <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
            </div>

            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="email"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  placeholder="Enter your personal or work email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Continue with email
              </button>
            </form>
          </div>

          <div className="pt-4">
            <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2 mx-auto">
              Learn more
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Fashion images */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-50">
        <div className="h-screen grid grid-cols-2 gap-4 p-8">
          <div className="rounded-2xl overflow-hidden h-[calc(50vh-3rem)]">
            <img 
              src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg" 
              alt="Fashion" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[calc(50vh-3rem)]">
            <img 
              src="https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg" 
              alt="Fashion" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[calc(50vh-3rem)]">
            <img 
              src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg" 
              alt="Fashion" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[calc(50vh-3rem)]">
            <img 
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" 
              alt="Fashion" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup; 