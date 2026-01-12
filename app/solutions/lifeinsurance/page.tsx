"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Users, Heart, Umbrella, Coins, 
  Baby, Home, ShieldCheck, Milestone,
  ArrowRight, Activity, Clock, FileCheck,
  CheckCircle2, Scale
} from "lucide-react";

// --- Counting Animation Component for Hero Stats ---
const StatCounter = ({ target, label, suffix = "%" }: { target: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-left">
      <div className="text-4xl font-black text-cyan-400 mb-1">{count}{suffix}</div>
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 opacity-70">{label}</div>
    </div>
  );
};

export default function LifeInsurancePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const processSteps = [
    { id: "step-1", num: "01", title: "Financial Diagnostics", icon: <Scale size={22} />, desc: "Evaluating current debt, income replacement needs, and long-term family goals." },
    { id: "step-2", num: "02", title: "Plan Selection", icon: <Milestone size={22} />, desc: "Tailoring between Term, Whole Life, or Endowment plans based on your roadmap." },
    { id: "step-3", num: "03", title: "Medical Underwriting", icon: <Activity size={22} />, desc: "Streamlined health assessment to secure the most favorable premium brackets." },
    { id: "step-4", num: "04", title: "Policy Issuance", icon: <FileCheck size={22} />, desc: "Formalizing the contract with immediate digital access to policy documents." },
    { id: "step-5", num: "05", title: "Legacy Management", icon: <ShieldCheck size={22} />, desc: "Ongoing beneficiary support and periodic reviews to adapt to life changes." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 relative">
      
      {/* 1. SCROLL PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-[110] origin-left" style={{ scaleX }} />

      {/* 2. HERO SECTION - High Contrast & Overlapping Visuals */}
      <section className="relative pt-24 min-h-[85vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-12 z-20 relative py-12 flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                  <Heart size={12} className="text-[#070B7F]" />
               </div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Legacy Protection</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Securing <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-400">Generations</span>
            </h1>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium mb-10">
              Life insurance isn't just a policy; it's a promise. We provide the financial certainty your family deserves, ensuring their lifestyle remains uninterrupted.
            </p>
            
            <div className="flex gap-12 border-t border-white/10 pt-8">
              <StatCounter target={100} label="Peace of Mind" suffix="%" />
              <StatCounter target={24} label="Hour Claim Support" suffix="/7" />
            </div>

            <div className="mt-12 flex gap-4">
               <button className="group bg-white text-[#070B7F] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-cyan-400 transition-all duration-300">
                 Calculate Coverage <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>

          {/* Overlapping Hero Image with Depth */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-30 -mb-32 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[4rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.4)] border-8 border-white/5 grayscale hover:grayscale-0 transition-all duration-700 w-[480px]"
              alt="Family Security"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[#070B7F] z-10" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0% 100%)' }} />
      </section>

      {/* 3. COVERAGE PILLARS - 3D Perspective Grid */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-12 text-center mb-20">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Coverage Types</h2>
          <p className="text-5xl font-black uppercase tracking-tighter text-[#070B7F]">Bespoke Solutions</p>
        </div>
        <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Term Insurance", icon: <Clock />, desc: "Maximum protection for a specific period at the lowest cost." },
            { title: "Whole Life", icon: <Umbrella />, desc: "Permanent coverage with built-in cash value accumulation." },
            { title: "Child Education", icon: <Baby />, desc: "Guaranteed funding for your children's academic future." },
            { title: "Retirement Life", icon: <Coins />, desc: "A combined plan for life cover and steady post-work income." },
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

      {/* 4. THE STRUCTURED APPROACH - Mobile-Optimized Timeline */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-32">
             <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">The Methodology</h2>
             <p className="text-5xl font-black uppercase tracking-tighter text-[#070B7F]">Our Secure Path</p>
          </div>

          <div className="absolute left-8 md:left-1/2 top-48 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent hidden md:block -translate-x-1/2" />

          <div className="flex flex-col gap-32 relative z-10">
            {processSteps.map((step, i) => (
              <div key={i} className={`flex items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row gap-12`}>
                
                {/* Information Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[42%]"
                >
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 relative group overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                       <div className="text-blue-600 p-4 bg-blue-50 rounded-2xl group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-500">{step.icon}</div>
                       <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{step.num}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#070B7F] mb-6">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">{step.desc}</p>
                    <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>

                {/* Vertical Central Node */}
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#070B7F] rounded-[1.5rem] flex items-center justify-center text-white shadow-[0_0_40px_rgba(7,11,127,0.3)] border-4 border-white z-20">
                    <span className="text-xl font-black">{step.num}</span>
                  </div>
                  <div className="absolute w-24 h-24 bg-cyan-400/20 rounded-full animate-ping" />
                </div>

                {/* Decorative Ghost Numbers (Desktop Only) */}
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

      {/* 5. LIFE MILESTONES SECTION - Emotional Depth */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#070B7F] mb-8">Coverage for Every Milestone</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Starting a Family", icon: <Users className="text-blue-600" /> },
                { title: "Buying a Home", icon: <Home className="text-blue-600" /> },
                { title: "Educational Security", icon: <CheckCircle2 className="text-blue-600" /> },
                { title: "Wealth Transfer", icon: <Coins className="text-blue-600" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                  <div className="p-3 bg-white rounded-xl shadow-sm">{item.icon}</div>
                  <span className="text-[12px] font-black uppercase tracking-widest text-slate-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=2070" 
              className="rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[4/3] object-cover"
              alt="Legacy Protection"
            />
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - Final Push */}
      <section className="bg-[#070B7F] py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-10 grayscale"
            alt="Consultation"
          />
        </div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-tight">
             Secure the promise of <br /> a brighter tomorrow.
          </h2>
          <button className="bg-white text-[#070B7F] px-12 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-cyan-400 transition-all duration-300">
            Book a Legacy Consult
          </button>
        </div>
      </section>

    </main>
  );
}