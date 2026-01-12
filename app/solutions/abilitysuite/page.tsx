"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Layers, Cpu, Cloud, ShieldCheck, 
  Workflow, Database, BarChart3, Fingerprint,
  ArrowRight, Activity, CheckCircle2, Zap,
  Search, Settings2, Rocket
} from "lucide-react";

// --- Stat Counter for Enterprise Scale ---
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
      <div className="text-4xl font-black text-cyan-400 mb-1">{count}{suffix}</div>
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 opacity-70">{label}</div>
    </div>
  );
};

export default function AbilitySuitePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const suiteProcess = [
    { num: "01", title: "System Integration", icon: <Database size={22} />, desc: "Connecting Ability Suite to your existing ERP and data infrastructure via secure API." },
    { num: "02", title: "Risk Modeling", icon: <Cpu size={22} />, desc: "Leveraging AI to simulate thousands of risk scenarios based on historical enterprise data." },
    { num: "03", title: "Custom Logic", icon: <Settings2 size={22} />, desc: "Developing specific insurance triggers and workflows tailored to your business rules." },
    { num: "04", title: "Automated Placement", icon: <Zap size={22} />, desc: "Executing insurance placements across global markets through our algorithmic engine." },
    { num: "05", title: "Real-time Monitoring", icon: <Activity size={22} />, desc: "Live tracking of coverage status, claims, and emerging threats via the central dashboard." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 relative">
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-[110] origin-left" style={{ scaleX }} />

      {/* 1. HERO SECTION - Tech-Forward Split */}
      <section className="relative pt-24 min-h-[85vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-12 z-20 relative py-12 flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                  <Layers size={12} className="text-[#070B7F]" />
               </div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Enterprise Tech Stack</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              The Ability <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-white">Suite</span>
            </h1>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium mb-10">
              The world’s first integrated risk operating system. Automate your insurance lifecycle, unify your data, and scale your protection with algorithmic precision.
            </p>
            
            <div className="flex gap-12 border-t border-white/10 pt-8 mb-10">
              <StatCounter target={99} label="System Uptime" suffix="%" />
              <StatCounter target={50} label="Connected Carriers" suffix="+" />
            </div>

            <button className="group bg-white text-[#070B7F] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-cyan-400 transition-all duration-300">
              Request Demo <Rocket size={14} className="group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </motion.div>

          {/* HERO IMAGE - Stability Verified Link */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-30 hidden lg:block">
            <div className="absolute -inset-4 bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-[-20px_20px_60px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                className="w-[480px] h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Tech Integrated Office"
                onError={(e) => { e.currentTarget.src = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"; }}
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[#070B7F] z-10" style={{ clipPath: 'polygon(0 0, 58% 0, 42% 100%, 0% 100%)' }} />
      </section>

      {/* 2. THE CORE MODULES - Interactive Dashboard Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-12 text-center mb-24">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Software Architecture</h2>
          <p className="text-5xl font-black uppercase tracking-tighter text-[#070B7F]">The Ability Ecosystem</p>
        </div>
        <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Ability Placement", icon: <Cloud />, desc: "Algorithmic market matching and instant digital policy issuance." },
            { title: "Ability Analytics", icon: <BarChart3 />, desc: "Predictive risk modeling and financial impact visualization." },
            { title: "Ability Claims", icon: <ShieldCheck />, desc: "Automated claim workflow with 24/7 digital tracking." },
            { title: "Ability Connect", icon: <Workflow />, desc: "Unified API for seamless ERP and HR system integration." },
            { title: "Ability Insight", icon: <Search />, desc: "Live compliance monitoring and ESG risk reporting." },
            { title: "Ability Secure", icon: <Fingerprint />, desc: "Institutional-grade encryption and access control." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-[#070B7F] hover:text-white transition-all group relative overflow-hidden"
            >
              <div className="mb-8 p-5 bg-white rounded-2xl w-fit group-hover:bg-cyan-400 group-hover:text-[#070B7F] transition-all shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-xs font-medium text-slate-500 group-hover:text-blue-100/60 leading-relaxed">{item.desc}</p>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. IMPLEMENTATION ROADMAP - Vertical Optimized */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-32">
             <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Deployment Flow</h2>
             <p className="text-5xl font-black uppercase tracking-tighter text-[#070B7F]">Structured Onboarding</p>
          </div>

          <div className="absolute left-8 md:left-1/2 top-48 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent hidden md:block -translate-x-1/2" />

          <div className="flex flex-col gap-32 relative z-10">
            {suiteProcess.map((step, i) => (
              <div key={i} className={`flex items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row gap-12`}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full md:w-[42%]">
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 relative group overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                       <div className="text-blue-600 p-4 bg-blue-50 rounded-2xl group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-500">{step.icon}</div>
                       <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{step.num}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#070B7F] mb-6">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">{step.desc}</p>
                  </div>
                </motion.div>

                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#070B7F] rounded-[1.5rem] flex items-center justify-center text-white shadow-[0_0_40px_rgba(7,11,127,0.3)] border-4 border-white z-20 font-black">
                    {step.num}
                  </div>
                  <div className="absolute w-24 h-24 bg-cyan-400/20 rounded-full animate-ping -z-10" />
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

      {/* 4. FOOTER CALL TO ACTION */}
      <section className="bg-[#070B7F] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Corporate Tech"
          />
        </div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-5xl font-black uppercase tracking-tighter mb-10 leading-tight">
             Ready to synchronize <br /> your risk management?
          </h2>
          <button className="bg-white text-[#070B7F] px-12 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-cyan-400 transition-all duration-300">
            Book a Technical Walkthrough
          </button>
        </div>
      </section>
    </main>
  );
}