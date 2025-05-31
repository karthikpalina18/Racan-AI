import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
