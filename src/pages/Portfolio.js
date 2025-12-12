import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Data with Categories AND Gallery Images
export const projects = [
  {
    id: 1,
    title: "AR Business Card with Logo",
    description: "A Business Card which can project objects in augmented reality when pointed at with a camera.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop", 
    category: "AR/VR",
    // Add extra photos here
    gallery: [
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Cypher's Chamber Escape Room",
    description: "An Escape Room designed from scratch in Unity.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    category: "Game Dev",
    gallery: [
      `${process.env.PUBLIC_URL}portfolio/public/images/VR Escape Room`,
    ]
  },
  {
    id: 3,
    title: "Swiss Show Choir EXCO Windbreaker Design",
    description: "Apparel design fully led by me to create a windbreaker for the Swiss Club Executive Committee.",
    image: `${process.env.PUBLIC_URL}/images/CCA Windbreaker/Jacket_Black.JPEG`,
    category: "Design",
    gallery: [
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/1.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/2.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/3.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/4.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/5.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/6.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/7.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/8.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/9.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/10.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/11.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/Jacket_White.JPEG`, 
    ]
  },
  {
    id: 4,
    title: "Swiss Blue Whales Banner Design",
    description: "The Swiss Blue House banner that I contributed to creating.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    category: "Design",
    gallery: []
  },
  {
    id: 5,
    title: "Personal Portfolio V1",
    description: "My first attempt at a personal website using HTML and CSS.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    category: "Web Dev",
    gallery: []
  }
];

const categories = ['All', 'AR/VR', 'Game Dev', 'Design', 'Web Dev'];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-5xl md:text-6xl mb-6 relative inline-block">
          My Works
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-50 bg-opacity-50 rounded-full"></span>
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
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            {/* Image */}
            <Link to={`/portfolio/${project.id}`} className="block relative aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
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
        ))}
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