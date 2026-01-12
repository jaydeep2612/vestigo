"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  HeartPulse, Users2, Umbrella, Stethoscope, 
  Wallet, Smile, ArrowRight, Sparkles, 
  SearchCheck, FilePlus, ShieldCheck, Activity,
 // Note: You can replace with a simple state-based counter if not using a lib
} from "lucide-react";

// --- Sub-component for Counting Animation ---
const StatCounter = ({ target, label }: { target: number, label: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 100);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl font-black text-cyan-400 mb-1">{count}%</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">{label}</div>
    </div>
  );
};

export default function EmployeeBenefitsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const processSteps = [
    { id: "step-1", num: "01", title: "Demographic Audit", icon: <Users2 size={22} />, desc: "Analyzing workforce age and location to define a baseline." },
    { id: "step-2", num: "02", title: "Benefit Structuring", icon: <FilePlus size={22} />, desc: "Designing a competitive mix of health and wellness incentives." },
    { id: "step-3", num: "03", title: "Provider Sourcing", icon: <SearchCheck size={22} />, desc: "Negotiating with top-tier providers for premium rates." },
    { id: "step-4", num: "04", title: "Digital Enrollment", icon: <Sparkles size={22} />, desc: "Launching seamless, tech-enabled onboarding." },
    { id: "step-5", num: "05", title: "Engagement Support", icon: <ShieldCheck size={22} />, desc: "Providing 24/7 claims advocacy and optimization." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 relative">
      
      {/* 1. SCROLL PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-[110] origin-left" style={{ scaleX }} />

      {/* 2. STICKY STEP INDICATOR (Desktop Only) */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-[100]">
        {processSteps.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-4 transition-all">
            <span className="h-[2px] w-4 bg-slate-200 group-hover:w-8 group-hover:bg-blue-500 transition-all" />
            <span className="text-[10px] font-black text-slate-300 group-hover:text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
              {s.title}
            </span>
          </a>
        ))}
      </div>

      {/* 3. HERO SECTION - With Stats & Overlap */}
      <section className="relative pt-24 min-h-[85vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-12 z-20 relative py-12 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse"><Activity size={12} className="text-[#070B7F]" /></div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Workforce Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Empowering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Your People</span>
            </h1>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium mb-10">
              Transforming corporate culture through bespoke health and security programs.
            </p>
            
            {/* STATS COUNT-UP */}
            <div className="flex gap-12 border-t border-white/10 pt-8">
              <StatCounter target={94} label="Talent Retention" />
              <StatCounter target={88} label="Employee Satisfaction" />
            </div>
          </motion.div>

          {/* OVERLAPPING HERO IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-30 -mb-24 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[4rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.4)] border-8 border-white/5 grayscale hover:grayscale-0 transition-all duration-700 w-[450px]"
              alt="Team"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[#070B7F] z-10" style={{ clipPath: 'polygon(0 0, 58% 0, 42% 100%, 0% 100%)' }} />
      </section>

      {/* 4. BENEFITS GRID - 3D TILT EFFECT */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-12 text-center mb-20">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">The Pillars</h2>
          <p className="text-5xl font-black uppercase tracking-tighter text-[#070B7F]">Wellness Redefined</p>
        </div>
        <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Group Health", icon: <Stethoscope />, desc: "High-tier medical, dental, and vision networks." },
            { title: "Financial Security", icon: <Wallet />, desc: "Structured retirement and savings management." },
            { title: "Mental Wellness", icon: <Smile />, desc: "Scalable psychological support frameworks." },
            { title: "Life Protection", icon: <Umbrella />, desc: "Security for employees and their families." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ rotateX: 5, rotateY: 5, y: -10 }}
              className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(7,11,127,0.15)] transition-all group perspective-1000"
            >
              <div className="mb-8 p-5 bg-white rounded-3xl w-fit group-hover:bg-[#070B7F] group-hover:text-white transition-all shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#070B7F]">{item.title}</h3>
              <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. VERTICAL ROADMAP - MOBILE OPTIMIZED */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          {/* THE TRACK: Stays Left on Mobile, Center on Desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent hidden md:block -translate-x-1/2" />

          <div className="flex flex-col gap-32 relative z-10">
            {processSteps.map((step, i) => (
              <div key={i} id={step.id} className={`flex items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row gap-12`}>
                
                {/* CONTENT CARD */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  className="w-full md:w-[42%]"
                >
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 relative group overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                       <div className="text-blue-600 p-4 bg-blue-50 rounded-2xl group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-500">{step.icon}</div>
                       <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{step.num}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#070B7F] mb-6">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">{step.desc}</p>
                  </div>
                </motion.div>

                {/* CENTRAL NODE */}
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#070B7F] rounded-[1.5rem] flex items-center justify-center text-white shadow-[0_0_40px_rgba(7,11,127,0.3)] border-4 border-white z-20">
                    <span className="text-xl font-black">{step.num}</span>
                  </div>
                  <div className="absolute w-24 h-24 bg-cyan-400/20 rounded-full animate-ping" />
                </div>

                {/* GHOST NUMBER (Opposite Side) */}
                <div className="hidden md:block w-[42%]">
                   <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} px-16`}>
                      <span className="text-[180px] font-black text-slate-200/40 select-none leading-none tracking-tighter">{step.num}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUSTED BY SECTION (Logos) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-12 flex flex-wrap justify-between items-center opacity-30 gap-12">
           {/* Mock Logos - Replace with your Actual SVGs */}
           <div className="text-xl font-black grayscale hover:grayscale-0 transition-all cursor-default">GLOBAL LOGISTICS</div>
           <div className="text-xl font-black grayscale hover:grayscale-0 transition-all cursor-default">TECH CORP</div>
           <div className="text-xl font-black grayscale hover:grayscale-0 transition-all cursor-default">FINANCE PRO</div>
           <div className="text-xl font-black grayscale hover:grayscale-0 transition-all cursor-default">MANUFACTURING CO</div>
        </div>
      </section>

    </main>
  );
}