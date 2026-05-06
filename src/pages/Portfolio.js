import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

const categories = ['All', 'Immersive Technologies', 'Mobile Development', 'Web Development', 'Design', 'Multimedia'];
const getImageUrl = (path) => {
  if (path.startsWith('http')) return path;
  
  return process.env.PUBLIC_URL + path;
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const [projects, setProjects] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/projects.json')
      .then(res => res.json())
      .then(data => {
        console.log("SERVER RESPONSE:", data); // <--- Add this!
        
        if (Array.isArray(data)) {
           setProjects(data);
        } else {
           console.error("Server returned an error instead of a list:", data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-5xl md:text-6xl mb-6 relative inline-block">
          My Works
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          A curated selection of my projects across development, design, and immersive tech.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border
              ${activeTab === cat 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200' 
                : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-500'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((dbProject) => {
          

          const project = {
            ...dbProject,

            image: dbProject.image_url, 

            id: parseInt(dbProject.id),

          };

          return (
            <div key={project.id} className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              {/* Image */}
              <Link to={`/portfolio/${project.id}`} className="block relative aspect-[4/3] overflow-hidden">
                <img 
                  src={getImageUrl(project.image)}
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                  {project.category}
                </div>
              </Link>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-indigo-700 transition-colors">
                    <Link to={`/portfolio/${project.id}`}>{project.title}</Link>
                  </h3>
                  <p className="font-sans text-sm text-gray-500 mb-6 flex-grow leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <Link 
                    to={`/portfolio/${project.id}`}
                    className="self-start text-[10px] font-bold tracking-widest uppercase text-indigo-600 hover:text-indigo-800 border-b border-indigo-200 pb-1 hover:border-indigo-600 transition-all"
                  >
                    Read Case Study
                  </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p>No projects found in this category.</p>
        </div>
      )}

    </section>
  );
};

export default Portfolio;