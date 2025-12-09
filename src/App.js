import React, { useState, useEffect, useRef } from 'react';

// --- Icon Components (No external dependency needed) ---
const Menu = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const X = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);
const ArrowRight = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

// Custom Hook for Scroll Animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return [domRef, isVisible];
};

// Reusable Animated Section
const FadeInSection = ({ children, delay = '0ms' }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- AUTO-FIX: Inject Tailwind CSS if missing ---
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="tailwindcss"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Handle navbar frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "VR Escape Room",
      category: "AR/VR Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s",
      tags: ["React", "Stripe", "Design System"]
    },
    {
      id: 2,
      title: "Placeholder",
      category: "Interface Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s",
      tags: ["UI/UX", "Data Vis", "Figma"]
    },
    {
      id: 3,
      title: "Placeholder",
      category: "Mobile Application",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s",
      tags: ["iOS", "Travel", "Social"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div 
            onClick={() => scrollToSection('home')} 
            className="text-lg font-bold tracking-tight cursor-pointer z-50"
          >
            The Hariz Portfolio.
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 text-xs font-medium tracking-widest uppercase text-gray-500">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-black transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-3xl font-light tracking-tight hover:text-gray-500 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 z-10">
            <FadeInSection>
              <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8">
                Crafting <br />
                <span className="text-gray-300">Digital</span> <br />
                Minimalism.
              </h1>
            </FadeInSection>
            
            <FadeInSection delay="200ms">
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed mb-10">
                I am Muhammad Hariz Bin Jasni. <br />
                A developer and designer focused on clarity, functionality, and the spaces in between.
              </p>
            </FadeInSection>

            <FadeInSection delay="400ms">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
              >
                View Selected Works
                <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </FadeInSection>
          </div>
        </div>

        {/* Abstract Background Blur */}
        <div className="absolute top-1/2 right-[-10%] w-[50vw] h-[50vw] bg-gray-100 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="grid md:grid-cols-12 gap-16 items-start">
              <div className="md:col-span-4">
                <span className="block w-12 h-[1px] bg-black mb-6"></span>
                <h2 className="text-sm font-bold tracking-widest uppercase mb-2">About Me</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-3xl md:text-4xl leading-tight font-light text-gray-800 mb-12">
                  Here, within the digital tapestry of my portfolio, lies the story of a passionate individual who dares to dream big and dauntlessly follows the call of their heart.
                </p>
                <div className="grid sm:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Design</h3>
                    <p className="text-gray-500 leading-relaxed">
                      My approach is grounded in the principles of Swiss Style design: clean grids, sans-serif typography, and a monochromatic palette that lets the content shine.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Development</h3>
                    <p className="text-gray-500 leading-relaxed">
                      I build with the modern web stack (React, Tailwind, Node.js), ensuring that the code is as clean and performant as the visual interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex justify-between items-end mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Selected Works</h2>
              <button className="hidden md:block text-sm font-bold tracking-widest uppercase border-b border-gray-200 pb-1 hover:border-black transition-all">
                View All Projects
              </button>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <FadeInSection key={project.id} delay={`${index * 100}ms`}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden bg-gray-100 aspect-[4/5] mb-6 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">{project.category}</span>
                    <h3 className="text-2xl font-medium text-black group-hover:text-gray-600 transition-colors">{project.title}</h3>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <FadeInSection>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Let's <br /> Connect.
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-12">
              I am currently open to freelance projects and full-time opportunities.
            </p>
            <a 
              href="mailto:hariz.jasni@example.com" 
              className="inline-flex items-center gap-3 text-lg font-medium border-b border-white/30 pb-2 hover:border-white transition-all"
            >
              hariz.jasni@example.com
            </a>
          </FadeInSection>

          <FadeInSection delay="200ms">
            <div className="flex flex-col justify-end h-full">
              <div className="grid grid-cols-2 gap-8 text-sm text-gray-400 uppercase tracking-widest">
                <div>
                  <h4 className="text-white mb-4">Socials</h4>
                  <ul className="space-y-3">
                    <li><button className="hover:text-white transition-colors">LinkedIn</button></li>
                    <li><button className="hover:text-white transition-colors">GitHub</button></li>
                    <li><button className="hover:text-white transition-colors">Instagram</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-4">Location</h4>
                  <p>Singapore</p>
                  <p>Remote Available</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <footer className="bg-black text-gray-600 py-8 px-6 md:px-12 border-t border-gray-900 text-xs tracking-wider uppercase text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Muhammad Hariz Bin Jasni</p>
          <p className="mt-2 md:mt-0">Designed & Built with React</p>
        </div>
      </footer>
    </div>
  );
};

export default App;