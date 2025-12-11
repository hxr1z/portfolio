import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-4">
          <span className="block w-12 h-[1px] bg-black mb-6"></span>
          <h2 className="text-sm font-bold tracking-widest uppercase mb-2">About Me</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-3xl md:text-4xl leading-tight font-light text-gray-800 mb-12">
            Here, within the digital tapestry of my portfolio, lies the story of a passionate individual who dares to dream big.
          </p>
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-lg mb-4">Design</h3>
              <p className="text-gray-500 leading-relaxed">
                My approach is grounded in the principles of Swiss Style design: clean grids, sans-serif typography, and a monochromatic palette.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Development</h3>
              <p className="text-gray-500 leading-relaxed">
                I build with the modern web stack (React, Tailwind, Node.js), ensuring that the code is as clean as the visual interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;