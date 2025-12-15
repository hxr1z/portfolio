import React from 'react';
import { Link } from 'react-router-dom';

// --- Mood Board Images ---
// Replace these URLs with your own images (e.g., `${process.env.PUBLIC_URL}/images/photo1.jpg`)
const moodImages = [
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h5.JPG`, 
    className: "top-[-5%] left-[-5%] md:top-10 md:left-10 rotate-[-6deg]",
    delay: "0s" 
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h3.JPG`, 
    className: "top-[10%] right-[-10%] md:top-20 md:right-20 rotate-[12deg]",
    delay: "0.5s" 
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h6.jpg`, 
    className: "bottom-[10%] left-[-5%] md:bottom-20 md:left-20 rotate-[3deg]",
    delay: "1s" 
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h4.jpg`, 
    className: "bottom-[-5%] right-[-5%] md:bottom-10 md:right-32 rotate-[-8deg]",
    delay: "1.5s" 
  },
  // Extra decorative middle ones for larger screens
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h1.JPG`, 
    className: "hidden md:block top-[40%] left-[10%] -rotate-12 scale-75 blur-[1px]",
    delay: "2s" 
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h2.JPG`, 
    className: "hidden md:block top-[30%] right-[10%] rotate-6 scale-75 blur-[1px]",
    delay: "2.5s" 
  }
];

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 text-center bg-[#F9F9F9]">
      
      {/* --- SCATTERED IMAGES BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {moodImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute w-32 md:w-48 aspect-[3/4] bg-white p-2 shadow-xl rounded-lg transform transition-transform hover:scale-105 duration-700 ease-out opacity-80 ${img.className}`}
            style={{ animationDelay: img.delay }}
          >
            <img 
              src={img.src} 
              alt="Moodboard" 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        ))}
      </div>

      {/* --- CENTRAL CONTENT (Keeps Z-Index high to stay clickable) --- */}
      <div className="z-10 max-w-4xl mx-auto bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/50 shadow-sm animate-fade-in-up">
        <p className="text-sm md:text-base font-bold text-gray-600 mb-6 tracking-widest uppercase">
          Welcome to my digital space
        </p>
        <h1 className="font-serif text-6xl md:text-9xl text-black mb-8 tracking-tighter leading-none drop-shadow-sm">
          Hariz's <br /> Portfolio
        </h1>
        <p className="font-sans text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Showcasing a journey through Digital Design, Development, and Creative Technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/portfolio" className="px-10 py-4 bg-indigo-600 text-white text-xs font-bold tracking-widest uppercase hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 transition-all rounded-sm shadow-indigo-200 shadow-md">
            View My Works
          </Link>
          <Link to="/about" className="px-10 py-4 bg-white border border-gray-200 text-black text-xs font-bold tracking-widest uppercase hover:border-black transition-all rounded-sm hover:bg-gray-50">
            More About Me
          </Link>
        </div>
      </div>

      {/* Subtle Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-[#F9F9F9] pointer-events-none" />

    </section>
  );
};

export default Home;