import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from './Portfolio'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  
  const project = projects ? projects.find(p => p.id === parseInt(id)) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] flex-col gap-4">
      <h2 className="font-serif text-2xl">Project not found</h2>
      <Link to="/" className="text-indigo-600 font-bold hover:underline">Return Home</Link>
    </div>
  );

  const hasGallery = project.gallery && project.gallery.length > 0;
  
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

  // FIXED: Case-insensitive check (works for .MP4, .mp4, .Mov, etc.)
  const isVideo = (url) => {
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.endsWith('.mp4') || lowerUrl.endsWith('.mov') || lowerUrl.endsWith('.webm');
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-20 px-6 font-sans text-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/portfolio" className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-12 text-gray-400 hover:text-indigo-600 transition-colors">
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
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-indigo-600 mb-20">
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

        {/* --- GALLERY SECTION --- */}
        {hasGallery && (
          <div className="border-t border-gray-200 pt-16">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center">Project Gallery</h3>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-black aspect-video group">
              
              {isVideo(project.gallery[currentImage]) ? (
                // FIXED: Added 'key' prop to force React to reload the video player
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

              {/* Controls */}
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
                  
                  {/* Dots */}
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