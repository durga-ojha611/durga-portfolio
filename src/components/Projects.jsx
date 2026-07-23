import React, { useState } from 'react';
import { projects, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ProjectCard = ({ project, aosDelay, onImageClick }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`relative rounded-3xl p-[1px] group transition-all duration-500 overflow-hidden ${
      project.isFlagship 
        ? 'bg-gradient-to-br from-[#700215]/50 via-white/10 to-[#700215]/30 hover:from-[#700215] hover:via-[#700215]/30 hover:to-[#700215]/60 shadow-[0_0_40px_rgba(112,2,21,0.1)]' 
        : 'bg-white/10 hover:bg-white/20'
    }`}
  >
    <div className={`relative z-10 rounded-3xl p-8 md:p-12 h-full backdrop-blur-xl transition-all duration-500 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 ${
      project.isFlagship 
        ? 'bg-gradient-to-b from-[#0f0f0f]/95 to-[#050505]/95' 
        : 'bg-gradient-to-b from-[#111111]/90 to-[#0a0a0a]/90'
    }`}>
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
        {/* Badge */}
        {project.badge && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-400/10 px-4 py-1.5 rounded-full border border-red-400/20 mb-6 shadow-inner">
            {project.badge}
          </span>
        )}

        {/* Number + Title */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-6xl font-black text-white/5 font-serif italic select-none">{project.number}</span>
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-medium">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {project.techTags.map((tag) => (
            <span 
              key={tag}
              className="px-4 py-1.5 text-xs font-bold text-white/70 bg-black/40 rounded-lg border border-white/10 hover:bg-[#700215] hover:border-[#700215] hover:text-white transition-all duration-300 cursor-default shadow-inner"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* GitHub */}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group/btn"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}

          {/* Live Demo */}
          {project.links.demo !== undefined && (
            <a 
              href={project.links.demo || '#'}
              target={project.links.demo ? "_blank" : undefined}
              rel={project.links.demo ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                project.links.demo 
                  ? 'bg-[#700215] text-white hover:bg-red-700 hover:shadow-[0_0_25px_rgba(112,2,21,0.6)]' 
                  : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
              }`}
            >
              <ExternalLinkIcon />
              {project.links.demo ? 'Live Demo' : 'Demo Coming Soon'}
            </a>
          )}

          {/* Explanation PDF */}
          {project.links.explanation && (
            <a 
              href={project.links.explanation}
              download
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-bold hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 group/btn"
            >
              <DownloadIcon />
              Detail Explanation
            </a>
          )}
        </div>
      </div>

      {/* Right Content - 3D Image Stack */}
      {project.images && project.images.length > 0 && (
        <div className="w-full lg:w-1/2 relative min-h-[250px] md:min-h-[350px] flex items-center justify-center mt-10 lg:mt-0 group/images perspective-1000">
          <div className="relative w-full max-w-[450px] aspect-[16/10] mx-auto">
            {project.images.map((img, idx) => {
              // Custom Tailwind arbitrary values for z-index since dynamic z-[30] requires safelisting
              let zClass = idx === 0 ? 'z-30' : idx === 1 ? 'z-20' : 'z-10';
              
              let baseClasses = '';
              let hoverClasses = '';
              
              if (idx === 0) {
                baseClasses = 'translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.5)]';
                hoverClasses = 'group-hover/images:-translate-y-8 group-hover/images:scale-[1.02] group-hover/images:rotate-2 group-hover/images:shadow-[0_30px_60px_rgba(255,255,255,0.3)]';
              } else if (idx === 1) {
                baseClasses = 'translate-x-4 translate-y-4 scale-[0.95] -rotate-2 opacity-80 shadow-[0_15px_30px_rgba(0,0,0,0.4)]';
                hoverClasses = 'group-hover/images:-translate-y-2 group-hover/images:translate-x-12 group-hover/images:scale-100 group-hover/images:-rotate-1 group-hover/images:opacity-100 group-hover/images:shadow-[0_20px_50px_rgba(255,255,255,0.15)]';
              } else {
                baseClasses = 'translate-x-8 translate-y-8 scale-[0.90] -rotate-4 opacity-60 shadow-[0_10px_20px_rgba(0,0,0,0.3)]';
                hoverClasses = 'group-hover/images:translate-y-4 group-hover/images:translate-x-24 group-hover/images:scale-[0.95] group-hover/images:-rotate-3 group-hover/images:opacity-100 group-hover/images:shadow-[0_20px_50px_rgba(255,255,255,0.15)]';
              }

              return (
                <div 
                  key={idx}
                  onClick={() => onImageClick(img)}
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ease-out cursor-pointer ${zClass} ${baseClasses} ${hoverClasses}`}
                >
                  <img src={img} alt={`${project.title} preview ${idx + 1}`} className="w-full h-full object-cover pointer-events-none" />
                  
                  {/* Subtle white glow overlay that activates on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/images:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Click to view text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/images:opacity-100 transition-opacity duration-500 pointer-events-none">
                     <span className="bg-black/60 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md border border-white/20">Click to view</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  </div>
);

const ImageLightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-[#700215] p-2 rounded-full border border-white/10 transition-all"
      >
        <CloseIcon />
      </button>
      
      <img 
        src={image} 
        alt="Enlarged view" 
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
      />
    </div>
  );
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="bg-[#050505] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-24">
          <div className="inline-block border border-[#700215]/40 rounded-full px-6 py-2 text-sm text-red-300 font-bold mb-6 shadow-[0_0_20px_rgba(112,2,21,0.3)] bg-[#700215]/10 backdrop-blur-md tracking-wider uppercase">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/50 text-base md:text-xl max-w-2xl font-medium leading-relaxed">
            A selection of my best work showcasing full-stack development, modern UI/UX, and complex AI integrations.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 100)}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-20 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Projects;
