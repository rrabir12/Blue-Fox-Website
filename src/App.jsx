import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './pages/About/about';  // Import About component
import Footer from './components/Footer';
import AiEnable from './pages/ai-enable/AiEnable';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} /> {/* Fix: Define About route */}
        <Route path='/ai_enable' element={<AiEnable />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
