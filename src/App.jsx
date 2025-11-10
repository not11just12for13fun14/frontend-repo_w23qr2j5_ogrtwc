import React from 'react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Network from './components/Network';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 antialiased">
      <Hero />
      <Capabilities />
      <Network />
      <Contact />
    </div>
  );
}

export default App;
