import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react'; 

// --- Components ---
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

// --- Navbar (Only for the Main Page) ---
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll Spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#F9F9F9]/90 backdrop-blur-md py-4 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="text-xl font-serif font-bold tracking-tight text-black">
          TheHarizPortfolio
        </button>

        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase text-gray-400">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => {
            const id = item.toLowerCase();
            return (
              <button 
                key={item} 
                onClick={() => scrollToSection(id)}
                className={`hover:text-black transition-colors duration-300 ${activeSection === id ? 'text-black' : ''}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <button className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F9F9F9] z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-3xl font-serif text-black hover:text-gray-500"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- Main Layout Component (The Single Page) ---
const MainLayout = () => {
  return (
    <div className="bg-[#F9F9F9] text-black font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="contact"><Contact /></div>
      </main>
      
      <footer className="bg-[#F9F9F9] text-black py-12 text-center border-t border-gray-200">
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
  );
};

// --- Root App Component ---
const App = () => {
  // Inject Fonts and Tailwind
  useEffect(() => {
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
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;