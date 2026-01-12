"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Search, AlertTriangle, BarChart3, Wrench, 
  ShieldCheck, Factory, Laptop, Construction, 
  HeartPulse, ChevronRight, Phone, CheckCircle2,
  Zap, Building2
} from "lucide-react";

export default function IndustryRiskPage() {
  const brandBlue = "#070B7F";

  const processSteps = [
    { num: "01", title: "Industry Analysis", icon: <Search size={22} />, desc: "Studying sector dependencies and regulations." },
    { num: "02", title: "Risk Identification", icon: <AlertTriangle size={22} />, desc: "Spotting operational and cyber threats." },
    { num: "03", title: "Risk Evaluation", icon: <BarChart3 size={22} />, desc: "Classifying financial and legal impacts." },
    { num: "04", title: "Risk Reduction", icon: <Wrench size={22} />, desc: "Implementing tech-driven safety controls." },
    { num: "05", title: "Protection Mapping", icon: <ShieldCheck size={22} />, desc: "Optimizing insurance and financial coverage." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* 1. NAVIGATION HEADER */}
     

      {/* 2. ANGLED HERO SECTION */}
      <section className="relative h-[70vh] top-26 flex items-center overflow-hidden">
        <div className="container mx-auto px-12 z-20 relative">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-[#070B7F]" />
               </div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Our Services</span>
            </div>
            <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Industry Risk <br /> Assessment
            </h1>
            <div className="flex items-center gap-4 mb-8">
               <span className="bg-cyan-400 text-[#070B7F] px-5 py-1.5 text-2xl font-black rounded shadow-lg italic">INFORMED</span>
               <p className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.2em]">Understand. Reduce. Protect.</p>
            </div>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium">
              Every industry faces its own unique risks. We help businesses identify potential threats and implement the right protection strategies before losses occur.
            </p>
          </motion.div>
        </div>

        {/* Diagonal Split */}
        <div className="absolute inset-0 bg-[#070B7F] z-10" style={{ clipPath: 'polygon(0 0, 56% 0, 44% 100%, 0% 100%)' }}></div>
        <div className="absolute right-0 top-0 w-[60%] h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-75 contrast-125"
            alt="Strategic Background"
          />
        </div>
      </section>

      {/* 3. HORIZONTAL PROCESS ROADMAP */}
  <section className="py-32 bg-slate-50 relative overflow-hidden font-sans">
  {/* Section Header */}
  <div className="text-center mb-24 relative z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4"
    >
      The Methodology
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#070B7F]"
    >
      Our Structured <br /> <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Approach</span>
    </motion.p>
  </div>

  <div className="container mx-auto px-6 relative">
    {/* THE GLOWING CENTRAL LINE */}
    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.6)] hidden md:block -translate-x-1/2" />

    <div className="flex flex-col gap-24 relative z-10">
      {processSteps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`flex items-center justify-between w-full ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-col md:flex-row gap-8`}
        >
          {/* 1. TEXT CONTENT CARD */}
          <div className="w-full md:w-[45%]">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-slate-100 relative group overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">
                  {step.num}
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-[#070B7F] mb-4">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                {step.desc}
              </p>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          </div>

          {/* 2. CENTRAL NODE */}
          <div className="relative flex items-center justify-center">
            <motion.div 
              whileInView={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-[#070B7F] rounded-[1.25rem] flex items-center justify-center text-white shadow-[0_0_30px_rgba(7,11,127,0.4)] border-4 border-white z-20"
            >
              <span className="text-lg font-black">{step.num}</span>
            </motion.div>
            {/* Outer pulse animation */}
            <div className="absolute w-20 h-20 bg-cyan-400/30 rounded-full animate-ping -z-10" />
          </div>

          {/* 3. GHOST NUMBER SPACER (Visible on Desktop) */}
          <div className="hidden md:block w-[45%]">
             <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} items-center px-16`}>
                <span className="text-[140px] font-black text-slate-200/40 select-none leading-none">
                   {step.num}
                </span>
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* 4. FOOTER BANNER WITH DIFFERENT IMAGE */}
      <section className="bg-[#070B7F] py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Office Background"
          />
        </div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-tight">
             Ready to Protect Your Business?
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-white text-[#070B7F] px-12 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-cyan-400 transition-colors"
          >
            Get Assessment Now
          </motion.button>
        </div>
      </section>
    </main>
  );
}