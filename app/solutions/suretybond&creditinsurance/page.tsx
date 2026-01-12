"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Gavel, Landmark, FileCheck, ShieldCheck, 
  Handshake, Construction, Briefcase, Scale,
  ArrowRight, Activity, CheckCircle2, Info
} from "lucide-react";

// --- Stat Counter Component ---
const StatCounter = ({ target, label }: { target: number, label: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const timer = setInterval(() => {
      start += Math.ceil(target / 50);
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-left">
      <div className="text-4xl font-black text-cyan-400 mb-1">{count}+</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200 opacity-60">{label}</div>
    </div>
  );
};

export default function SuretyBondPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Horizontal Scroll Transformation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const bondStages = [
    { num: "01", title: "Capacity Audit", icon: <Landmark />, desc: "Evaluating financial strength, credit history, and operational track record." },
    { num: "02", title: "Bond Selection", icon: <FileCheck />, desc: "Determining the specific bond type: Bid, Performance, Payment, or License." },
    { num: "03", title: "Underwriting", icon: <Scale />, desc: "Deep-dive analysis of contract obligations and project complexity." },
    { num: "04", title: "Agreement Execution", icon: <Handshake />, desc: "Formalizing the indemnity agreement and issuing the bond certificate." },
    { num: "05", title: "Compliance Monitoring", icon: <ShieldCheck />, desc: "Ongoing verification of performance to maintain bond validity." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 relative">
      
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-[110] origin-left" style={{ scaleX }} />

      {/* 1. HERO SECTION - UPDATED WITH VALID STABLE IMAGE */}
      <section className="relative pt-24 min-h-[85vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-12 z-20 relative py-12 flex flex-col lg:flex-row items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                  <Gavel size={12} className="text-[#070B7F]" />
               </div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Financial Guarantees</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Surety <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-200">Execution</span>
            </h1>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium mb-10">
              Transforming obligations into opportunities. We provide the backing your business needs to win larger contracts and secure institutional trust.
            </p>
            
            <div className="flex gap-12 border-t border-white/10 pt-8 mb-10">
              <StatCounter target={1500} label="Bonds Issued" />
              <StatCounter target={450} label="Active Principals" />
            </div>

            <button className="group bg-white text-[#070B7F] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-cyan-400 transition-all duration-300 shadow-2xl">
              Get Bonded Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Depth Effect Image Card - Fixed with Production Link */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-30 hidden lg:block">
            <div className="absolute -inset-4 bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="relative w-[450px] aspect-[3/4] bg-slate-800 rounded-[4rem] overflow-hidden border-4 border-white/10">
                <img 
                src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Architecture and Corporate Trust"
                onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                }}
                />
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[#070B7F] z-10" style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)' }} />
      </section>

      {/* 2. HORIZONTAL SCROLL STAGE */}
      <section ref={targetRef} className="relative h-[300vh] bg-slate-50">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-12 mb-20 absolute top-24 left-0 right-0 z-20">
             <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-2">The Methodology</h2>
             <p className="text-4xl font-black uppercase tracking-tighter text-[#070B7F]">Our Issuance Framework</p>
          </div>

          <motion.div style={{ x }} className="flex gap-12 px-12 items-center">
            {bondStages.map((stage, i) => (
              <div key={i} className="flex-shrink-0 w-[450px]">
                <div className="bg-white/60 backdrop-blur-xl p-12 rounded-[4rem] border border-white shadow-2xl shadow-blue-900/5 relative group overflow-hidden h-[500px] flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-5 bg-[#070B7F] text-white rounded-3xl shadow-xl">{stage.icon}</div>
                      <span className="text-6xl font-black text-slate-100/80 leading-none">{stage.num}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#070B7F] mb-6">{stage.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wide">{stage.desc}</p>
                  </div>
                  
                  <div className="h-20 w-full bg-slate-50 rounded-2xl flex items-end px-4 py-2 gap-1 group-hover:bg-blue-50 transition-colors">
                     {[40, 70, 45, 90, 65, 80, 50, 95].map((h, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ height: 0 }} 
                          whileInView={{ height: `${h}%` }} 
                          className="flex-1 bg-blue-200 rounded-t-sm group-hover:bg-blue-500 transition-colors" 
                        />
                     ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. BOND CATEGORIES */}
      <section className="py-32 bg-white relative z-20">
        <div className="container mx-auto px-12 grid lg:grid-cols-3 gap-8">
          {[
            { title: "Contract Bonds", icon: <Construction />, list: ["Bid Bonds", "Performance Bonds", "Payment Bonds"] },
            { title: "Commercial Bonds", icon: <Briefcase />, list: ["License & Permit", "Customs Bonds", "Court Bonds"] },
            { title: "Fidelity Bonds", icon: <ShieldCheck />, list: ["Employee Dishonesty", "ERISA Bonds", "Crime Insurance"] },
          ].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ rotateX: 3, rotateY: 3, y: -10 }}
              className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:bg-[#070B7F] hover:text-white transition-all duration-500 group"
            >
              <div className="p-4 bg-white rounded-2xl w-fit mb-8 shadow-sm group-hover:bg-cyan-400 group-hover:text-[#070B7F] transition-colors">{cat.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">
                    <CheckCircle2 size={14} className="text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="bg-[#070B7F] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            className="w-full h-full object-cover opacity-10 grayscale"
            alt="Corporate Trust"
          />
        </div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-5xl font-black uppercase tracking-tighter mb-10 leading-tight">
             Backing your reputation <br /> with financial certainty.
          </h2>
          <button className="bg-cyan-400 text-[#070B7F] px-12 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-white transition-all duration-300">
            Request Surety Consultation
          </button>
        </div>
      </section>
    </main>
  );
}