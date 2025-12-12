import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react'; 

// --- Components ---
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#F9F9F9]/95 backdrop-blur-md py-4 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-serif font-bold tracking-tight text-black">
          TheHarizPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase text-gray-400">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`hover:text-indigo-600 transition-colors duration-300 ${isActive ? 'text-indigo-600' : ''}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F9F9F9] z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif text-black hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const App = () => {
  useEffect(() => {
    // Inject Fonts and Tailwind
    if (!document.querySelector('script[src*="tailwindcss"]')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);
    }

    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      .font-serif { font-family: 'Playfair Display', serif; }
      .font-sans { font-family: 'Lato', sans-serif; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#F9F9F9] text-black font-sans selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="bg-[#F9F9F9] text-black py-12 text-center border-t border-gray-200 mt-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <h3 className="font-serif text-2xl font-bold">TheHarizPortfolio</h3>
            <div className="flex gap-4 text-gray-600">
               <Mail className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
               <Linkedin className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
            </div>
            <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-4">&copy; 2025 Hariz Jasni. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;