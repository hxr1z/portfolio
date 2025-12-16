import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
// Corrected Import Path
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  
  // Find the project based on the ID from the URL
  const project = projects ? projects.find(p => p.id === parseInt(id)) : null;

  // Scroll to top when opening a new project
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle case where project doesn't exist
  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] flex-col gap-4">
      <h2 className="font-serif text-2xl">Project not found</h2>
      <Link to="/portfolio" className="text-indigo-600 font-bold hover:underline">Return to Portfolio</Link>
    </div>
  );

  const hasGallery = project.gallery && project.gallery.length > 0;
  
  // Gallery Navigation Functions
  const nextImage = () => {
    if (hasGallery) {
      setCurrentImage((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (hasGallery) {
      setCurrentImage((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
    }
  };

  // Helper to check if a file is a video
  const isVideo = (url) => {
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.endsWith('.mp4') || lowerUrl.endsWith('.mov') || lowerUrl.endsWith('.webm');
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-20 px-6 font-sans text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Back Button --- */}
        <Link to="/portfolio" className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-12 text-gray-400 hover:text-indigo-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Link>
        
        {/* --- Header (Title & Category) --- */}
        <div className="mb-12">
           <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block">
             {project.category}
           </span>
           <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
             {project.title}
           </h1>
        </div>
        
        {/* --- Main Hero Image --- */}
        {project.image && (
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100 mb-16 border-4 border-white">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}
        
        {/* --- Content Body (The New Part) --- */}
        <div className="max-w-4xl mx-auto mb-20">
          
          {/* 1. Main Description (Intro) */}
          <p className="text-2xl font-light leading-relaxed text-gray-700 mb-12">
            {project.description}
          </p>

          {/* 2. Dynamic Sections (Technologies, Features, Challenges, etc.) */}
          {project.sections && project.sections.map((section, index) => (
            <div key={index} className="mb-8 overflow-hidden rounded-xl border border-indigo-100 shadow-sm bg-white">
              
              {/* Colored Header Bar */}
              <div className="bg-indigo-600 px-6 py-3">
                <h3 className="text-white font-bold text-lg tracking-wide">
                  {section.title}
                </h3>
              </div>

              {/* Content Area */}
              <div className="p-6 text-gray-700 leading-relaxed">
                {Array.isArray(section.content) ? (
                  // If content is an array, render bullet points
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  // If content is a string, render a paragraph
                  <p>{section.content}</p>
                )}
              </div>
            </div>
          ))}

          {/* Fallback if no sections exist yet */}
          {!project.sections && (
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
               <p className="text-gray-500 italic">
                 Detailed overview coming soon.
               </p>
            </div>
          )}
        </div>

        {/* --- GALLERY SECTION --- */}
        {hasGallery && (
          <div className="border-t border-gray-200 pt-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center">Project Gallery</h3>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-black aspect-video group">
              
              {/* Media Display (Video or Image) */}
              {isVideo(project.gallery[currentImage]) ? (
                <video 
                  key={project.gallery[currentImage]}
                  src={project.gallery[currentImage]} 
                  controls 
                  className="w-full h-full object-contain"
                />
              ) : (
                <img 
                  key={project.gallery[currentImage]}
                  src={project.gallery[currentImage]} 
                  alt={`Gallery slide ${currentImage + 1}`} 
                  className="w-full h-full object-contain transition-opacity duration-500"
                />
              )}

              {/* Navigation Controls (Only if > 1 image) */}
              {project.gallery.length > 1 && (
                <>
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button onClick={prevImage} className="pointer-events-auto p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black text-white transition-all shadow-md hover:scale-110">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextImage} className="pointer-events-auto p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black text-white transition-all shadow-md hover:scale-110">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {project.gallery.map((_, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === currentImage ? 'bg-white w-6' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;