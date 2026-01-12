"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Building2, ShieldCheck, Landmark, Briefcase, 
  Users, HardHat, Gavel, Globe, 
  CheckCircle2, ArrowRight, Zap, TrendingUp,
  FileSearch, PenTool, Rocket
} from "lucide-react";

export default function CommercialInsurancePage() {
  // Specialized Commercial Process Steps
  const processSteps = [
    { num: "01", title: "Exposure Mapping", icon: <FileSearch size={22} />, desc: "Conducting a granular audit of your business assets and operational liabilities." },
    { num: "02", title: "Strategic Design", icon: <PenTool size={22} />, desc: "Crafting a bespoke insurance architecture tailored to your specific industry sector." },
    { num: "03", title: "Market Placement", icon: <Globe size={22} />, desc: "Leveraging our global network to secure competitive premiums and comprehensive terms." },
    { num: "04", title: "Policy Optimization", icon: <ShieldCheck size={22} />, desc: "Fine-tuning coverage limits and deductibles to maximize your financial efficiency." },
    { num: "05", title: "Continuous Review", icon: <TrendingUp size={22} />, desc: "Ongoing portfolio monitoring to adapt to business growth and emerging risks." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION - Tailored for Commercial Assets */}
      <section className="relative pt-24 min-h-[75vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-12 z-20 relative py-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Landmark size={12} className="text-[#070B7F]" />
               </div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Institutional Protection</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Commercial <br /> Risk Solutions
            </h1>
            <div className="flex items-center gap-4 mb-8">
               <span className="bg-cyan-400 text-[#070B7F] px-5 py-1.5 text-2xl font-black rounded shadow-lg italic">B2B EXPERTISE</span>
               <p className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.2em]">Comprehensive. Scalable. Precise.</p>
            </div>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium">
              Protecting your enterprise is not just about a policy; it's about business continuity. We provide the intelligence and coverage needed to safeguard your future.
            </p>
            <div className="mt-8 flex gap-4">
               <button className="group bg-white text-[#070B7F] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-cyan-400 transition-all duration-300">
                 Request Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        </div>

        {/* Diagonal Split Background */}
        <div 
          className="absolute inset-0 bg-[#070B7F] z-10" 
          style={{ clipPath: 'polygon(0 0, 58% 0, 42% 100%, 0% 100%)' }} 
        />
        <div className="absolute right-0 top-0 w-[65%] h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            alt="Commercial Real Estate"
          />
        </div>
      </section>

      {/* 2. CORE COVERAGE AREAS - Grid of services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-12 text-center mb-16">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Core Competencies</h2>
          <p className="text-4xl font-black uppercase tracking-tighter text-[#070B7F]">Comprehensive Coverage</p>
        </div>
        <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Property Damage", icon: <Building2 className="text-blue-500" />, desc: "Assets, equipment, and inventory protection." },
            { title: "Public Liability", icon: <Gavel className="text-blue-500" />, desc: "Third-party legal and compensation coverage." },
            { title: "Worker's Comp", icon: <HardHat className="text-blue-500" />, desc: "Statutory employee safety and medical protection." },
            { title: "Cyber Defense", icon: <Zap className="text-blue-500" />, desc: "Protection against data breaches and digital extortion." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-[#070B7F] hover:text-white transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-3">{item.title}</h3>
              <p className="text-xs font-medium text-slate-500 group-hover:text-blue-100/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VERTICAL STRATEGY ROADMAP */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">The Methodology</h2>
          <p className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#070B7F]">
            Our Structured <br /> <span className="text-blue-500">Placement</span>
          </p>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent hidden md:block -translate-x-1/2" />

          <div className="flex flex-col gap-24 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row gap-8`}
              >
                <div className="w-full md:w-[45%]">
                  <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-slate-100 relative group overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{step.num}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-[#070B7F] mb-4">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">{step.desc}</p>
                    <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#070B7F] rounded-[1.25rem] flex items-center justify-center text-white shadow-[0_0_30px_rgba(7,11,127,0.4)] border-4 border-white z-20">
                    <span className="text-lg font-black">{step.num}</span>
                  </div>
                  <div className="absolute w-20 h-20 bg-cyan-400/30 rounded-full animate-ping -z-10" />
                </div>

                <div className="hidden md:block w-[45%]">
                   <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} px-16`}>
                      <span className="text-[140px] font-black text-slate-200/40 select-none leading-none">{step.num}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - FOOTER */}
      <section className="bg-[#070B7F] py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-10 grayscale"
            alt="Business Center"
          />
        </div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-tight">
             Optimizing Enterprise Resilience <br /> through surgical precision.
          </h2>
          <button className="bg-white text-[#070B7F] px-12 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-cyan-400 transition-all duration-300">
            Consult a Risk Expert
          </button>
        </div>
      </section>
    </main>
  );
}