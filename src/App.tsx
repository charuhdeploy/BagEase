import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Services from './pages/Services';
import Storage from './pages/Storage';
import Pickup from './pages/Pickup';
import Delivery from './pages/Delivery';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onSignInClick={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/pickup" element={<Pickup />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App