import React, { useRef } from 'react';
import { technicalSkills } from '../data/portfolioData';
import { motion, useScroll, useTransform } from 'framer-motion';

const getCategoryIcon = (title) => {
  switch (title) {
    case 'Languages & Frontend':
      return (
        <svg className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'Backend & Databases':
      return (
        <svg className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'AI & ML Integration':
      return (
        <svg className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path>
        </svg>
      );
    case 'Tools & Deployment':
      return (
        <svg className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10-5-10 5v12Z"></path><path d="M12 3v19"></path><path d="M2 8h20"></path>
        </svg>
      );
    case 'Security & Auth':
      return (
        <svg className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case 'Problem Solving':
    default:
      return (
        <svg className="w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      );
  }
};

const SkillCard = ({ category }) => (
  <div 
    className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 md:p-10 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(112,2,21,0.5)] hover:border-[#700215]/80 transition-all duration-500 overflow-hidden w-[85vw] md:w-[420px] shrink-0 h-full flex flex-col"
  >
    {/* Animated background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#700215]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    
    {/* Inner shadow for 3D depth */}
    <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] pointer-events-none" />
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Icon & Title */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="w-16 h-16 rounded-2xl bg-black/50 shadow-inner flex items-center justify-center border border-white/5 group-hover:bg-[#700215]/20 group-hover:border-[#700215]/50 group-hover:shadow-[0_0_20px_rgba(112,2,21,0.4)] transition-all duration-300">
          {getCategoryIcon(category.title)}
        </div>
        <h3 className="text-white text-2xl font-black tracking-tight leading-tight">
          {category.title}
        </h3>
      </div>
      
      {/* Skill Pills */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {category.skills.map((skill) => (
          <span 
            key={skill.name}
            className="px-5 py-2.5 bg-black/60 border border-white/5 rounded-xl text-sm font-bold text-white/70 shadow-inner group-hover:border-white/10 hover:!bg-gradient-to-r hover:!from-[#700215] hover:!to-red-700 hover:!text-white hover:!border-transparent hover:shadow-[0_0_15px_rgba(112,2,21,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const transform = useTransform(xValue, (v) => `translateX(calc(${v}% + ${-v}vw))`);

  return (
    <section ref={targetRef} id="skills" className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#700215]/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-red-900/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

        <div className="relative z-10 w-full flex flex-col justify-center">
          
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12">
            <div className="inline-block border border-[#700215]/40 rounded-full px-6 py-2 text-sm text-red-300 font-bold mb-6 shadow-[0_0_20px_rgba(112,2,21,0.3)] bg-[#700215]/10 backdrop-blur-md tracking-wider uppercase">
              Technical Arsenal
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6">
              Technologies I work with
            </h2>
          </div>

          {/* Scrolling Row */}
          <motion.div 
            style={{ transform }} 
            className="flex gap-6 md:gap-10 px-6 md:px-12 w-max items-stretch"
          >
            {technicalSkills.categories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
