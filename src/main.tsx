import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const metadata = {
  title: 'Racan AI Fashion Assistant',
  description: 'Experience the future of fashion with AI recommendations.',
  openGraph: {
    images: ['https://racan-ai.vercel.app/logo.png'],
  },
};

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
