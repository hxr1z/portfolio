import React from 'react';

const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' },
  { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Tableau', icon: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Tableau_Logo.png' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg' },
];

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Bio */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-black relative inline-block">
            About Me
            {/* Subtle underline accent */}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-gray-600">
            <p>
              I'm <span className="font-bold text-black">Hariz</span>, a Digital Design and Development student at Republic Polytechnic.
            </p>
            <p>
              I bridge the gap between creative design and technical engineering. Whether it's building immersive AR experiences in Unity or crafting clean web applications with React, I focus on functionality, minimalism, and user impact.
            </p>
          </div>
        </div>

        {/* Right Side: Skills Grid - FULL COLOR */}
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 transform hover:-translate-y-1 transition-transform duration-500">
          <h3 className="font-serif text-xl font-bold mb-8 text-gray-800">Technical Toolkit</h3>
          <div className="grid grid-cols-4 gap-y-10 gap-x-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center group cursor-default">
                <div className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain drop-shadow-sm" 
                  />
                </div>
                {/* Text appears on hover */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 bg-white px-2">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;