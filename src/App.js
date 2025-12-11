import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Using lucide-react since it's in your package.json

// --- Components ---
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

// --- Shared Navbar Component ---
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // To highlight active link

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold tracking-tight z-50">
          The Hariz Portfolio.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-xs font-medium tracking-widest uppercase text-gray-500">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link 
                key={item} 
                to={path}
                className={`hover:text-black transition-colors duration-300 relative group ${isActive ? 'text-black' : ''}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light tracking-tight hover:text-gray-500"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- Main App Component with Routes ---
const App = () => {
  // Inject Tailwind if missing (keeping your auto-fix)
  useEffect(() => {
    if (!document.querySelector('script[src*="tailwindcss"]')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
        <Navbar />
        <div className="pt-20"> {/* Padding to push content below fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <footer className="bg-black text-gray-600 py-8 px-6 md:px-12 border-t border-gray-900 text-xs tracking-wider uppercase text-center md:text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Muhammad Hariz Bin Jasni</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;