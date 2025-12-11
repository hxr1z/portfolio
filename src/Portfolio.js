import React from 'react';
import { Link } from 'react-router-dom';

// Data can be moved to a separate file later
export const projects = [
  {
    id: 1,
    title: "VR Escape Room",
    category: "AR/VR Design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s",
    description: "A fully immersive VR experience built with Unity."
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    category: "Interface Design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s",
    description: "Data visualization dashboard for fintech applications."
  },
  {
    id: 3,
    title: "Travel App",
    category: "Mobile Application",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s",
    description: "Social travel companion app for iOS."
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20">Selected Works</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <Link to={`/portfolio/${project.id}`} key={project.id} className="group cursor-pointer">
            <div className="overflow-hidden bg-gray-100 aspect-[4/5] mb-6 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">{project.category}</span>
              <h3 className="text-2xl font-medium text-black group-hover:text-gray-600 transition-colors">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
