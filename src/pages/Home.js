import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 z-10">
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8">
            Crafting <br />
            <span className="text-gray-300">Digital</span> <br />
            Minimalism.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-xl leading-relaxed mb-10">
            I am Muhammad Hariz Bin Jasni. <br />
            A developer and designer focused on clarity, functionality, and the spaces in between.
          </p>
          <Link 
            to="/portfolio"
            className="group inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
          >
            View Selected Works
            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      <div className="absolute top-1/2 right-[-10%] w-[50vw] h-[50vw] bg-gray-100 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
    </section>
  );
};
export default Home;