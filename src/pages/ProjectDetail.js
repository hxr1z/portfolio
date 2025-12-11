import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from './Portfolio'; // Import the data array

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div className="p-20 text-center">Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link to="/portfolio" className="inline-flex items-center text-sm font-bold uppercase tracking-widest mb-10 hover:text-gray-500">
        <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
      </Link>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
      <p className="text-xl text-gray-500 mb-10">{project.category}</p>
      
      <img src={project.image} alt={project.title} className="w-full h-auto mb-10 rounded-sm bg-gray-100" />
      
      <div className="prose prose-lg max-w-none">
        <p className="text-2xl font-light leading-relaxed">{project.description}</p>
        <p className="mt-8">
            This is where you can add more detailed content about the specific project. 
            Since you are routing by ID, you can load specific descriptions, more images, 
            or case studies here based on the project selected.
        </p>
      </div>
    </div>
  );
};
export default ProjectDetail;