import React from 'react';
import { education } from '../data/portfolioData';

const EducationCard = ({ icon, degree, institution, meta, badge, aosDelay, isLeft }) => (
  <div
    data-aos={isLeft ? 'fade-right' : 'fade-left'}
    data-aos-delay={aosDelay}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#700215]/30 hover:shadow-[0_15px_35px_rgba(112,2,21,0.1)] transition-all duration-500 group"
  >
    <div className="flex items-start gap-4">
      <div className="text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="bg-[#700215]/20 text-[#700215] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#700215]/30">
            {badge}
          </span>
        </div>
        <h3 className="text-white text-xl font-black tracking-tight mb-1 group-hover:text-[#700215] transition-colors">
          {degree}
        </h3>
        <p className="text-[#700215] text-xs font-bold font-mono tracking-wider uppercase mb-3">
          {institution}
        </p>
        <div className="flex flex-wrap gap-3">
          {meta.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-bold text-white/60 bg-white/5 rounded-full border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Glow orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#700215]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#700215]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#700215]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            My academic journey that built the foundation for my engineering career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* BCA */}
          <EducationCard
            icon="🎓"
            degree={education.degree}
            institution={education.institution}
            meta={[`CGPA: ${education.cgpa}`, `Graduating: ${education.graduation}`]}
            badge="Current · Degree"
            aosDelay="100"
            isLeft={true}
          />

          {/* Senior Secondary */}
          <EducationCard
            icon="📚"
            degree={education.twelfth.level}
            institution={`${education.twelfth.school} · ${education.twelfth.subject}`}
            meta={[`CGPA: ${education.twelfth.cgpa}`, `Year: ${education.twelfth.year}`]}
            badge="Completed · Class XII"
            aosDelay="200"
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
