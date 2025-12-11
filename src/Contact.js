import React from 'react';

const Contact = () => {
  return (
    <section className="py-32 bg-black text-white px-6 md:px-12 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Let's <br /> Connect.
          </h2>
          <a 
            href="mailto:hariz.jasni@example.com" 
            className="inline-flex items-center gap-3 text-lg font-medium border-b border-white/30 pb-2 hover:border-white transition-all"
          >
            hariz.jasni@example.com
          </a>
        </div>
        <div className="flex flex-col justify-end">
           <div className="grid grid-cols-2 gap-8 text-sm text-gray-400 uppercase tracking-widest">
            <div>
              <h4 className="text-white mb-4">Socials</h4>
              <ul className="space-y-3">
                <li><button className="hover:text-white transition-colors">LinkedIn</button></li>
                <li><button className="hover:text-white transition-colors">GitHub</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;