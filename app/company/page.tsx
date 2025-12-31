"use client";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export default function DynamicAbout() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Parallax effect for decorative backgrounds
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroZoom = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <main className="min-h-screen bg-[#FDFDFF] text-slate-900 overflow-hidden font-sans">
      
      {/* 1. IMMERSIVE HERO WITH IMAGE BACKGROUND */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Tint */}
        <motion.div 
          style={{ scale: heroZoom }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          {/* Brand Overlay - Gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B7F]/90 via-[#070B7F]/80 to-[#070B7F]" />
        </motion.div>

        {/* Animated Floating Shapes */}
        <motion.div style={{ y: y1 }} className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] z-1" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-blue-300/30 text-blue-200 font-black uppercase tracking-[0.4em] text-[10px] bg-white/10 backdrop-blur-md">
              Established Excellence
            </span>
            <h1 className="text-5xl lg:text-8xl font-black text-white mt-8 mb-6 tracking-tighter uppercase leading-[0.9]">
              Beyond <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Insurance.</span>
            </h1>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-lg lg:text-xl font-medium leading-relaxed">
              We architect financial resilience through data-driven strategies and a client-first philosophy.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 z-10"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </section>

      {/* 2. DYNAMIC WHO WE ARE */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Corporate Strategy" 
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-[#070B7F]/10" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px]"
              >
                <h4 className="text-[#070B7F] text-4xl font-black mb-2 tracking-tighter">100%</h4>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-tight">Transparency in <br/>Policy Structuring</p>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-[#070B7F]" />
                <span className="text-[#070B7F] font-black uppercase tracking-widest text-xs">Our Identity</span>
              </div>
              <motion.h2 className="text-4xl lg:text-6xl font-black text-[#070B7F] uppercase mb-8 leading-none tracking-tighter">
                Designing <br /> Risk-Proof <br /> Futures.
              </motion.h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  At <span className="text-[#070B7F] font-black">Vestigo</span>, we don't just assess risk—we visualize it. Our mission is to transform the complex insurance landscape into a clear, strategic roadmap for growth.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                  <div>
                    <h5 className="text-[#070B7F] font-black text-xs uppercase mb-3 tracking-widest">Our Mission</h5>
                    <p className="text-sm font-bold text-slate-500">To empower decision-making with innovative financial solutions.</p>
                  </div>
                  <div>
                    <h5 className="text-[#070B7F] font-black text-xs uppercase mb-3 tracking-widest">Our Vision</h5>
                    <p className="text-sm font-bold text-slate-500">Leading global advisory recognized for measurable success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE METHODOLOGY WITH SUBTLE IMAGE BACKGROUND */}
      <section className="py-32 bg-[#020420] text-white relative overflow-hidden">
        {/* Subtle Background Texture/Image */}
        <div className="absolute inset-0 opacity-10 grayscale brightness-50">
           <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Data Analytics Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
                The <span className="text-blue-400">Execution</span> <br /> Framework
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm text-xs font-black uppercase tracking-[0.2em] mb-2">
              From discovery to settlement, <br/> we are your end-to-end partner.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-0 border-t border-white/10">
            {[
              { title: "Risk Discovery", desc: "Data-driven audit of your current financial exposure." },
              { title: "Strategy Design", desc: "Bespoke protection tailored to industry needs." },
              { title: "Structuring", desc: "Optimizing policies through global networks." },
              { title: "Monitoring", desc: "Continuous oversight to adapt to changing markets." },
              { title: "Claims Support", desc: "Reliable assistance during settlements." },
            ].map((step, i) => (
              <div 
                key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`p-10 border-r border-white/10 cursor-default transition-all duration-500 relative group
                  ${hoveredStep === i ? 'bg-[#070B7F]' : 'bg-transparent'}`}
              >
                <span className="text-xs font-black text-blue-400 mb-6 block">STEP 0{i+1}</span>
                <h4 className="text-lg font-black mb-4 uppercase tracking-tight">{step.title}</h4>
                <p className={`text-sm leading-relaxed transition-opacity duration-300 font-medium
                  ${hoveredStep === i ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                  {step.desc}
                </p>
                {i < 4 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/20 z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUES AS A BENTO GRID */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 grid-rows-2 gap-6 h-auto lg:h-[600px]">
            {/* Main Value Card with Image Background */}
            <div className="lg:col-span-2 rounded-[3rem] p-12 text-white flex flex-col justify-end group overflow-hidden relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=2070&auto=format&fit=crop" 
                alt="Partnership" 
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F] via-[#070B7F]/60 to-transparent z-1" />
              
              <div className="relative z-10">
                <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Integrity & Transparency</h3>
                <p className="text-blue-100/90 max-w-md font-medium">The bedrock of every contract we structure. No hidden clauses, just clear protection.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-end hover:bg-blue-50 transition-all group border border-slate-100">
              <div className="w-12 h-12 bg-[#070B7F] rounded-2xl mb-6 flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 className="text-2xl font-black text-[#070B7F] uppercase mb-4 tracking-tighter leading-none">Risk Intelligence</h3>
              <p className="text-slate-500 text-sm font-bold">Turning raw data into actionable security strategies.</p>
            </div>

            <div className="bg-[#F8FAFF] border border-blue-100 rounded-[3rem] p-12 flex flex-col justify-end hover:shadow-2xl hover:shadow-blue-900/10 transition-all group">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-2xl font-black text-[#070B7F] uppercase mb-4 tracking-tighter leading-none">Innovation</h3>
              <p className="text-slate-500 text-sm font-bold">ESG-aligned products for a sustainable corporate future.</p>
            </div>

            <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-12 text-white flex items-center justify-between group relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 grayscale">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase mb-2 tracking-tighter">Long-Term Partnerships</h3>
                <p className="text-slate-400 font-medium">We grow together. We evolve together.</p>
              </div>
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}