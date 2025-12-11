import React from 'react';
import { Link } from 'react-router-dom';

// Exporting projects so ProjectDetail.js can use them
export const projects = [
  {
    id: 1,
    title: "AR Business Card with Logo",
    description: "A Business Card which can project objects in augmented reality when pointed at with a camera.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop", 
    category: "Augmented Reality"
  },
  {
    id: 2,
    title: "Cypher's Chamber Escape Room",
    description: "An Escape Room designed from scratch in Unity.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    category: "Game Development"
  },
  {
    id: 3,
    title: "CCA EXCO Windbreaker Design",
    description: "Apparel design fully led by me to create a windbreaker for the Swiss Club Executive Committee.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    category: "Product Design"
  },
  {
    id: 4,
    title: "Swiss Blue Whales Banner Design",
    description: "The Swiss Blue House banner that I contributed to creating.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Design"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto bg-white">
      <h2 className="font-serif text-5xl md:text-6xl text-center mb-20 relative inline-block left-1/2 -translate-x-1/2">
        My Works
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-50 bg-opacity-50 rounded-full"></span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col">
            {/* Image */}
            <Link to={`/portfolio/${project.id}`} className="block overflow-hidden rounded-lg mb-6 relative aspect-[4/3] cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-500" />
            </Link>
            
            {/* Content */}
            <div className="flex flex-col flex-grow">
                <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-2">{project.category}</div>
                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-indigo-700 transition-colors">
                  <Link to={`/portfolio/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="font-sans text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                {project.description}
                </p>
                
                {/* Button replaced with Link */}
                <Link 
                  to={`/portfolio/${project.id}`}
                  className="self-start px-8 py-3 bg-gray-100 text-[10px] font-bold tracking-widest uppercase hover:bg-indigo-600 hover:text-white transition-all rounded-sm"
                >
                  Read More
                </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;