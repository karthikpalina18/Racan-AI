import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff } from 'lucide-react';

function Login() {
  const [step, setStep] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    password: '',
  });
  
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading time
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 'email') {
      if (formData.email) {
        setStep('password');
      }
    } else {
      console.log('Form submitted:', formData);
      // Handle final signup
    }
  };

  const handleGoBack = () => {
    if (step === 'password') {
      setStep('email');
    } else {
      window.history.back();
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked for:', formData.email);
  };

  // Loading screen
  if (isPageLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          {/* Morphing Blob Animation */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Main morphing blob */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 animate-pulse blur-sm opacity-90"></div>
            <div 
              className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 animate-spin blur-md"
              style={{
                animation: 'morph 3s ease-in-out infinite, spin 8s linear infinite',
                filter: 'blur(8px)',
              }}
            ></div>
            <div 
              className="absolute inset-4 rounded-full bg-gradient-to-tr from-pink-200 via-purple-200 to-cyan-200"
              style={{
                animation: 'morph2 4s ease-in-out infinite reverse',
                filter: 'blur(4px)',
              }}
            ></div>
            <div 
              className="absolute inset-8 rounded-full bg-gradient-to-bl from-blue-100 via-purple-100 to-pink-100"
              style={{
                animation: 'morph3 2.5s ease-in-out infinite',
                filter: 'blur(2px)',
              }}
            ></div>
          </div>
        </div>
        
        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes morph {
            0%, 100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            50% {
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }
          }
          
          @keyframes morph2 {
            0%, 100% {
              border-radius: 40% 60% 60% 40% / 70% 30% 60% 40%;
            }
            50% {
              border-radius: 70% 30% 40% 60% / 40% 70% 30% 60%;
            }
          }
          
          @keyframes morph3 {
            0%, 100% {
              border-radius: 50% 50% 30% 70% / 30% 70% 70% 30%;
            }
            50% {
              border-radius: 70% 30% 50% 50% / 60% 40% 40% 60%;
            }
          }
        `}</style>
      </div>
    );
  }

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
            {step === 'email' ? (
              <>
                <div className="flex items-center justify-center w-full">
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
                    Continue with Google
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <span className="px-4 text-gray-500">OR</span>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>

                <div onSubmit={handleSubmit}>
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
                    onClick={handleSubmit}
                    className="mt-4 w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Continue with email
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">
                    Enter your password
                  </h2>
                  <p className="text-gray-600">
                   secure password for your account
                  </p>
                </div>

                <div onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={8}
                        className="w-full px-3 py-3 pr-12 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                        placeholder="your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      Password must be at least 8 characters long
                    </div>
                  </div>

                  <link rel="stylesheet" href="./Signup" />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-4 w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    disabled={formData.password.length < 8}
                  >
                    Login 
                  </button>

                  <link/>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="mt-4 w-full text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Create an account link at the bottom */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <link rel="stylesheet" href="/Signup" />
              <button className="text-black font-medium hover:underline">
                Sign up
              </button>
              <link/>
            </p>
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
              src="https://i.pinimg.com/736x/94/d2/5f/94d25f091a8fd11ab557d02d4ac03979.jpg" 
              alt="Fashion" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[calc(50vh-3rem)]">
            <img 
              src="https://i.pinimg.com/736x/65/dc/8e/65dc8e24c28415fba29f1dff90c9d970.jpg" 
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
        </div>
      </div>
    </div>
  );
}

export default Login;