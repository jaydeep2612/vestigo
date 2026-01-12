"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Zap, Wind, Sun, BatteryCharging, 
  ShieldCheck, Globe, Leaf, ArrowRight, 
  Activity, Cpu, CloudLightning, Microscope,
  BarChart3
} from "lucide-react";

const StatCounter = ({ target, label, suffix = "+" }: { target: number, label: string, suffix?: string }) => {
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
      <div className="text-4xl font-black text-emerald-400 mb-1">{count}{suffix}</div>
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 opacity-70">{label}</div>
    </div>
  );
};

export default function GreenEnergyInsurancePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const processSteps = [
    { id: "step-1", num: "01", title: "Site & Resource Audit", icon: <Microscope size={22} />, desc: "Analyzing meteorological data and site-specific environmental risks for yield certainty." },
    { id: "step-2", num: "02", title: "Asset Lifecycle Mapping", icon: <Cpu size={22} />, desc: "Structuring coverage from construction to long-term operational phases." },
    { id: "step-3", num: "03", title: "Yield Guarantee Design", icon: <BarChart3 size={22} />, desc: "Insuring against resource volatility (low wind/solar) to protect project financing." },
    { id: "step-4", num: "04", title: "Grid Integration Review", icon: <CloudLightning size={22} />, desc: "Assessing liability for grid connection and potential business interruption." },
    { id: "step-5", num: "05", title: "Sustainability Reporting", icon: <Leaf size={22} />, desc: "Aligning insurance portfolios with ESG mandates and green taxonomy requirements." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald-100 relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-400 z-[110] origin-left" style={{ scaleX }} />

      {/* HERO SECTION */}
      <section className="relative pt-24 min-h-[85vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-12 z-20 relative py-12 flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                  <Leaf size={12} className="text-[#070B7F]" />
               </div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Sustainable Infrastructure</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Insuring the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-200">Energy Transition</span>
            </h1>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium mb-10">
              Mitigating the unique risks of renewable energy assets. From solar farms to green hydrogen, we protect the infrastructure of a net-zero future.
            </p>
            <div className="flex gap-12 border-t border-white/10 pt-8">
              <StatCounter target={500} label="Projects Protected" suffix="MW+" />
              <StatCounter target={100} label="ESG Compliance" suffix="%" />
            </div>
            <div className="mt-12">
               <button className="group bg-white text-[#070B7F] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-400 transition-all duration-300">
                 Assess Asset Risk <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>

          {/* HERO IMAGE WITH FAIL-SAFE FALLBACK */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-30 -mb-32 hidden lg:block">
            <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-[-20px_20px_60px_rgba(0,0,0,0.4)]">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=1000&auto=format&fit=crop" 
                className="w-[480px] h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Renewable Energy"
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[#070B7F] z-10" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0% 100%)' }} />
      </section>

      {/* VERTICAL ROADMAP SECTION */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-32">
             <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">Operational Lifecycle</h2>
             <p className="text-5xl font-black uppercase tracking-tighter text-[#070B7F]">The Green Track</p>
          </div>
          <div className="absolute left-8 md:left-1/2 top-48 bottom-0 w-[2px] bg-gradient-to-b from-emerald-600 via-cyan-400 to-transparent hidden md:block -translate-x-1/2" />
          <div className="flex flex-col gap-32 relative z-10">
            {processSteps.map((step, i) => (
              <div key={i} className={`flex items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row gap-12`}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full md:w-[42%]">
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-900/5 border border-slate-100 relative group overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                       <div className="text-emerald-600 p-4 bg-emerald-50 rounded-2xl group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-500">{step.icon}</div>
                       <span className="text-5xl font-black text-slate-100 group-hover:text-emerald-50 transition-colors">{step.num}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#070B7F] mb-6">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">{step.desc}</p>
                    <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#070B7F] rounded-[1.5rem] flex items-center justify-center text-white shadow-[0_0_40px_rgba(6,78,59,0.3)] border-4 border-white z-20">
                    <span className="text-xl font-black text-emerald-400">{step.num}</span>
                  </div>
                  <div className="absolute w-24 h-24 bg-emerald-400/20 rounded-full animate-ping" />
                </div>
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
    </main>
  );
}