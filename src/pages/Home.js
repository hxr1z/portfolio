import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const moodImages = [
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h5.JPG`, 
    className: "top-5 left-5 md:top-10 md:left-20 rotate-[-6deg]",
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h3.JPG`, 
    className: "top-5 right-5 md:top-12 md:right-24 rotate-[8deg]",
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h6.jpg`, 
    className: "bottom-5 left-5 md:bottom-12 md:left-24 rotate-[3deg]",
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h4.jpg`, 
    className: "bottom-5 right-5 md:bottom-12 md:right-32 rotate-[-8deg]",
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h1.JPG`, 
    className: "hidden md:block top-1/2 left-10 -translate-y-1/2 -rotate-12",
  },
  { 
    src: `${process.env.PUBLIC_URL}/images/Home/h2.JPG`, 
    className: "hidden md:block top-1/2 right-10 -translate-y-1/2 rotate-6",
  }
];

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 text-center bg-[#F9F9F9]">
      
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {moodImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute w-32 md:w-52 aspect-[3/4] bg-white p-2 shadow-2xl rounded-sm transform transition-all hover:scale-110 hover:z-50 duration-500 ease-out pointer-events-auto ${img.className}`}
          >
            <img 
              src={img.src} 
              alt="Moodboard" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="z-10 relative max-w-4xl mx-auto pointer-events-none">
        
        <p className="text-sm md:text-base font-bold text-indigo-600 mb-6 tracking-widest uppercase">
          Welcome to my digital space
        </p>
        
        <h1 className="font-serif text-6xl md:text-9xl text-black mb-8 tracking-tighter leading-none drop-shadow-xl">
          Hariz's <br /> Portfolio
        </h1>
        
        {/* Added pointer-events-auto to the paragraph so you can select text if you want */}
        <p className="font-sans text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-12 leading-relaxed font-medium bg-white/60 backdrop-blur-sm rounded-lg p-2 pointer-events-auto">
          Showcasing a journey through Digital Design, Development, and Creative Technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pointer-events-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-indigo-600 hover:-translate-y-1 transition-all rounded-sm shadow-xl">
            View My Works <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="px-10 py-4 bg-white border border-gray-200 text-black text-xs font-bold tracking-widest uppercase hover:border-black transition-all rounded-sm hover:bg-gray-50">
            About Me
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Home;