import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from './Portfolio'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
      <div className="text-center">
        <h2 className="font-serif text-2xl mb-4">Project not found</h2>
        <Link to="/" className="text-indigo-600 hover:underline">Return Home</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-20 px-6 font-sans text-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-12 text-gray-400 hover:text-indigo-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Link>
        
        {/* Header */}
        <div className="mb-12">
           <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block">{project.category}</span>
           <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">{project.title}</h1>
        </div>
        
        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100 mb-16 border-4 border-white">
          <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
        </div>
        
        {/* Content Body */}
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-indigo-600">
          <p className="text-2xl font-light leading-relaxed text-gray-700 mb-8">{project.description}</p>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl mb-4">Project Overview</h3>
            <p className="text-gray-600 text-base leading-7">
                This is where you can add more detailed content about the specific project. 
                You can describe your role, the tools used (like {project.category.includes('Unity') ? 'Unity and C#' : 'React and Tailwind'}), 
                and the final outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;