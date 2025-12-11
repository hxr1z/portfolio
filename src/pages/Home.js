import React from 'react';

const Home = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-20 pb-20 px-6 text-center">
      
      {/* --- NEW: Colorful Background Glow --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-[120px] opacity-20 -z-10 pointer-events-none" />

      <div className="animate-fade-in-up z-10">
        <p className="text-lg font-bold text-gray-500 mb-4 tracking-wide uppercase">Hi there! Welcome to</p>
        <h1 className="font-serif text-6xl md:text-9xl text-black mb-12 tracking-tight">
          Hariz's <br className="md:hidden"/> Portfolio
        </h1>

        {/* Buttons with Hover Colors */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto mb-20">
          <button onClick={() => scrollTo('about')} className="px-8 py-3 bg-white border border-gray-200 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
            About Me
          </button>
          <button onClick={() => scrollTo('portfolio')} className="px-8 py-3 bg-indigo-600 border border-indigo-600 text-white text-xs font-bold tracking-widest uppercase hover:bg-indigo-700 hover:border-indigo-700 transition-all shadow-lg shadow-indigo-200">
            My Works
          </button>
          <button onClick={() => scrollTo('contact')} className="px-8 py-3 bg-white border border-gray-200 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;