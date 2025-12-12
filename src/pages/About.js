import React from 'react';
import { Download, Award, ExternalLink } from 'lucide-react';

// --- Data ---
const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' },
  { name: 'Power BI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi-1.svg' },
  { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg' },
];

const certificates = [
  { 
    id: 1, 
    title: 'Edusave Merit Bursary 2024', 
    issuer: 'MOE Singapore', 
    date: '2024',
    pdf: '/certificates/edusave-2024.pdf' 
  },
  { 
    id: 2, 
    title: 'Edusave Award For Achievement, Good Leadership and Service (EAGLES)', 
    issuer: 'MOE Singapore', 
    date: '2023',
    pdf: '/certificates/EAGLES_2023.pdf'
  },
  { 
    id: 3, 
    title: 'UI/UX Design Fundamentals', 
    issuer: 'Coursera', 
    date: '2023',
    pdf: '/certificates/coursera-uiux.pdf'
  },
  { 
    id: 4, 
    title: 'Certified Unity Developer', 
    issuer: 'Unity Technologies', 
    date: '2022',
    pdf: '/certificates/unity-cert.pdf'
  },
];

const About = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
      
      {/* --- Header & Resume Button --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-200 pb-8">
        <div>
          <h2 className="font-serif text-5xl md:text-6xl text-black mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mt-4">
            Digital designer, developer, and creative problem solver based in Singapore.
          </p>
        </div>
        
        <a 
          href="/DDDD_Resume_Hariz_2025.pdf" 
          download 
          className="mt-6 md:mt-0 inline-flex items-center gap-3 px-6 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-indigo-600 transition-colors rounded-sm"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>

      <div className="space-y-20">
        
        {/* --- 1. Bio Section --- */}
        <div className="font-sans text-lg leading-relaxed text-gray-600 max-w-3xl">
          <p className="mb-6">
            I'm <span className="font-bold text-black">Hariz</span>, a Digital Design and Development student at Republic Polytechnic.
          </p>
          <p>
            I bridge the gap between creative design and technical engineering. Whether it's building immersive AR experiences in Unity or crafting clean web applications with React, I focus on functionality, minimalism, and user impact.
          </p>
        </div>

        {/* --- 2. Technical Toolkit --- */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-8 text-black">Technical Toolkit</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-8 h-8 mb-3">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 3. Certifications & Awards (Cards) --- */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-2 text-black">
            <Award className="text-indigo-600" size={28} />
            Certifications & Awards
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-indigo-200 hover:shadow-lg transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase bg-indigo-50 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-6">
                    {cert.issuer}
                  </p>
                </div>

                <a 
                  href={cert.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors self-start mt-auto"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;