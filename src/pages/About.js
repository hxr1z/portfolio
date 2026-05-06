import React, { useState, useEffect } from 'react';
import { Download, Award, ExternalLink, Star, Users } from 'lucide-react';

const getPublicUrl = (path) => {
  if (!path) return "#";
  if (path.startsWith('http')) return path;
  return process.env.PUBLIC_URL + path;
};
const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
  { name: 'JetBrains', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg' },
  { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' },
  { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg' },
];

const About = () => {
  const [certificates, setCertificates] = useState([]);
  const [ccaRecords, setCcaRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/data/certificates.json').then(res => res.json()),
      fetch('/data/activities.json').then(res => res.json())
    ])
    .then(([certsData, ccaData]) => {
      setCertificates(certsData);
      setCcaRecords(ccaData);
      setLoading(false);
    })
    .catch(err => console.error("Error fetching data:", err));
  }, []);

  const DocumentCard = ({ item, icon: Icon, colorClass, linkText }) => (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-indigo-200 hover:shadow-lg transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded ${colorClass} bg-opacity-10 text-opacity-100`}>
            {/* DB column is 'date_issued' for certs, 'period' for activities. Check which one exists. */}
            {item.date_issued || item.period}
          </span>
          {Icon && <Icon size={24} className="text-gray-300" />}
        </div>
        
        <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
          {/* DB column is 'title' for certs, 'role' for activities. Use 'title' if it exists, else 'role' */}
          {item.title || item.role}
        </h4>
        
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">
          {item.organization || item.issuer}
        </p>

        {item.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {item.description}
          </p>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-gray-50">
        <a 
          href={getPublicUrl(item.document_url)} // <--- NEW (Fixed)
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors"
        >
          {linkText} <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );

  if (loading) return <div className="p-20 text-center">Loading info...</div>;

  return (
    <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">      
      {/* Header & Resume */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-200 pb-8">
        <div>
          <h2 className="font-serif text-5xl md:text-6xl text-black mb-4 relative inline-block">
            About Me
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mt-4">
            Digital designer, developer, and creative problem solver based in Singapore.
          </p>
        </div>
        
        <a 
          href={`${process.env.PUBLIC_URL}/documents/hariz-resume-2025.pdf`}
          download 
          className="mt-6 md:mt-0 inline-flex items-center gap-3 px-6 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-indigo-600 transition-colors rounded-sm"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>

      <div className="space-y-24">
        
        {/* 1. Bio Section */}
        <div className="font-sans text-lg leading-relaxed text-gray-600 max-w-3xl">
          <p className="mb-6">
            I'm <span className="font-bold text-black">Hariz</span>, a Diploma in Digital Design and Development student at Republic Polytechnic.
          </p>
          <p>
            I bridge the gap between creative design and technical engineering. Whether it's building immersive AR experiences in Unity or crafting clean web applications with React, I focus on functionality, minimalism, and user impact.
          </p>
        </div>

        {/* 2. Technical Toolkit */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-8 text-black">My Technical Toolkit</h3>
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

        {/* 3. Co-Curricular & Leadership */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-2 text-black">
            <Users className="text-orange-600" size={28} />
            Co-Curricular & Leadership
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
             {ccaRecords.map((item) => (
               <DocumentCard 
                  key={item.id} 
                  item={item} 
                  icon={Star} 
                  colorClass="text-orange-600 bg-orange-50"
                  linkText="View Record"
               />
             ))}
          </div>
        </div>

        {/* 4. Certifications */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-8 flex items-center gap-2 text-black">
            <Award className="text-indigo-600" size={28} />
            Certifications & Awards
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {certificates.map((cert) => (
              <DocumentCard 
                key={cert.id} 
                item={cert} 
                icon={Award} 
                colorClass="text-indigo-600 bg-indigo-50" 
                linkText="View Certificate"
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 font-sans text-sm">
              More certificates can be found on my{' '}
              <a 
                href="https://www.linkedin.com/in/mdharizjasni" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 font-bold hover:underline"
              >
                LinkedIn
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;