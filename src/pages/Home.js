import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center relative overflow-hidden px-6 text-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-[100px] opacity-40 -z-10 pointer-events-none" />

      <div className="animate-fade-in-up z-10 max-w-4xl mx-auto">
        <p className="text-sm md:text-base font-bold text-gray-500 mb-6 tracking-widest uppercase">
          Welcome to my digital space
        </p>
        <h1 className="font-serif text-6xl md:text-9xl text-black mb-8 tracking-tighter leading-none">
          Hariz's <br /> Portfolio
        </h1>
        <p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Showcasing a journey through Digital Design, Development, and Creative Technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/portfolio" className="px-10 py-4 bg-indigo-600 text-white text-xs font-bold tracking-widest uppercase hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 transition-all rounded-sm shadow-indigo-200 shadow-md">
            View My Works
          </Link>
          <Link to="/about" className="px-10 py-4 bg-white border border-gray-200 text-black text-xs font-bold tracking-widest uppercase hover:border-black transition-all rounded-sm">
            More About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;