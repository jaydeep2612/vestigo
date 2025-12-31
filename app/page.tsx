"use client";
import { motion } from "framer-motion";
import React from 'react';
import Hero from './components/hero';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const identityData = [
    {
      title: "Our Vision",
      desc: "To be the trusted leader in business insurance, delivering cutting-edge, innovative & tech-powered solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Our Mission",
      desc: "To transform the insurance experience for organizations by delivering intelligent, tech-driven solutions backed by expert advisory.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Our Values",
      desc: "Integrity, Transparency, and Honesty. Excellence in delivering superior solutions and a core focus on customer needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const promoters = [
    {
      name: "Mr. Bhavit Acharya",
      role: "Co-Founder | FIII | Corporate Insurance Expert",
      initials: "BA",
      bullets: [
        "16+ years' insurance expertise",
        "Large-scale program specialist",
        "Fellow, Insurance Institute",
        "Tech-savvy risk strategist",
        "Cross-industry program leader"
      ],
      color: "from-[#070B7F] to-[#4F55FF]" // Updated to brand colors
    },
    {
      name: "Ms. Riya Shah",
      role: "Co-Founder | FIII | Corporate Insurance Specialist",
      initials: "RS",
      bullets: [
        "10 years' insurance expertise",
        "Corporate risk specialist",
        "Tech-driven insurance thinker",
        "Engineer with business acumen",
        "Tailored insurance solutions"
      ],
      color: "from-[#05085C] to-[#070B7F]" // Deep blue variants
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-[#070B7F] selection:text-white">
      <Hero />

      <div className="bg-white">
        {/* 2. CORE IDENTITY SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Decorative Grid */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#070B7F_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              {identityData.map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -12 }}
                  className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#070B7F]/10"
                >
                  {/* Brand Accent Bar */}
                  <div className="absolute top-10 left-0 w-1.5 h-12 bg-[#070B7F] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  {/* Icon Container with Brand Blue */}
                  <div className="w-16 h-16 rounded-2xl bg-[#070B7F]/5 text-[#070B7F] flex items-center justify-center mb-8 group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                    {item.desc}
                  </p>

                  <span className="absolute bottom-8 right-10 text-6xl font-black text-slate-50 group-hover:text-[#070B7F]/5 transition-colors duration-500 pointer-events-none z-[-1]">
                    0{idx + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SERVICES & EXPERTISE GRID */}
        <section className="py-24 bg-[#F8FAFF] text-slate-900 relative overflow-hidden">
          {/* Decorative Glows using Logo Blue */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#070B7F]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4F55FF]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div {...fadeIn}>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tighter leading-none text-slate-900">
                  Our Services <br />
                  <span className="text-[#070B7F]">& Expertise</span>
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Risk Management", "Claim Consultancy", "Insurance Awareness", 
                    "Risk Matrix Program", "Comprehensive Coverage", "Health Talk Experts"
                  ].map((service, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#070B7F]/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#070B7F]/5 flex items-center justify-center group-hover:bg-[#070B7F] transition-colors">
                        <span className="text-[#070B7F] font-bold text-sm group-hover:text-white transition-colors">✓</span>
                      </div>
                      <span className="text-sm font-bold text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#070B7F]" />
                  <h3 className="text-xs font-black mb-6 text-[#070B7F] uppercase tracking-[0.3em]">Specialized Domains</h3>
                  <div className="grid grid-cols-2 gap-y-4">
                    {[
                      "Property & Casualty", "Marine Cargo & Hull", "Employee Benefits", 
                      "Liability & Specialty", "Infrastructure Projects", "Surety Bonds"
                    ].map((exp) => (
                      <div key={exp} className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4F55FF]" /> 
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                className="relative h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                {/* Visual Imagery representing Corporate Security */}
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Office" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F] via-[#070B7F]/40 to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 text-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                    Why Vestigo?
                    <div className="h-1 w-12 bg-white rounded-full" />
                  </h2>
                  <div className="space-y-6">
                    {[
                      { title: "Personalized", desc: "Solutions for unique corporate needs." },
                      { title: "Innovative", desc: "Strategies for emerging 21st-century risks." }
                    ].map((reason, i) => (
                      <div key={i} className="border-l-2 border-white/30 pl-6 hover:border-white transition-colors">
                        <h4 className="font-bold text-xl">{reason.title}</h4>
                        <p className="text-white/70 text-sm">{reason.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. PROMOTERS SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[#070B7F] font-black text-xs uppercase tracking-[0.4em] block mb-3"
              >
                The Visionaries
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter"
              >
                Our Promoters
              </motion.h2>
              <div className="w-24 h-1.5 bg-[#070B7F] mx-auto mt-6 rounded-full shadow-lg shadow-[#070B7F]/20"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {promoters.map((p, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="group relative"
                >
                  <div className="relative bg-[#F8FAFF] p-10 lg:p-14 rounded-[4rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-[#070B7F]/10 transition-all duration-500 overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                      <div className="relative shrink-0">
                        <div className={`w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br ${p.color} rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-bold shadow-xl transform group-hover:rotate-6 transition-transform duration-500`}>
                          {p.initials}
                        </div>
                      </div>

                      <div className="text-center lg:text-left">
                        <h4 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2">
                          {p.name}
                        </h4>
                        <span className="inline-block px-4 py-1 rounded-full bg-[#070B7F]/10 text-[#070B7F] text-[10px] font-black uppercase tracking-wider mb-6">
                          {p.role}
                        </span>
                        
                        <div className="space-y-4">
                          {p.bullets.map((b, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-bold group/item">
                              <div className="w-5 h-5 rounded-full bg-[#070B7F]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#070B7F] transition-colors">
                                <span className="text-[#070B7F] group-hover/item:text-white text-[10px]">✓</span>
                              </div>
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}