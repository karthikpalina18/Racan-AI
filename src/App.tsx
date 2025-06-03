import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next";

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

export const metadata = {
  title: 'Racan AI Fashion Assistant',
  description: 'Experience the future of fashion with AI recommendations.',
  openGraph: {
    images: ['https://racan-ai.vercel.app/logo.png'],
  },
};


export default App;
