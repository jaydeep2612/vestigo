"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  FileText, ClipboardCheck, Scale, Banknote, 
  UserCheck, ShieldAlert, History, MessageSquare,
  ArrowRight, Activity
} from "lucide-react";

export default function ClaimsManagementPage() {
  const claimSteps = [
    { num: "01", title: "Claim Intimation", icon: <FileText size={22} />, desc: "Initial reporting of the incident through our digital portal or 24/7 hotline." },
    { num: "02", title: "Document Review", icon: <ClipboardCheck size={22} />, desc: "Verification of policy coverage and thorough assessment of submitted evidence." },
    { num: "03", title: "Liability Assessment", icon: <Scale size={22} />, desc: "Expert legal and financial evaluation to determine the settlement quantum." },
    { num: "04", title: "Final Settlement", icon: <Banknote size={22} />, desc: "Expedited fund transfer following approval to ensure business continuity." },
    { num: "05", title: "Closure & Analysis", icon: <UserCheck size={22} />, desc: "Final case closure with risk mitigation insights to prevent future occurrences." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION - PADDING ADDED FOR YOUR HEADER */}
      <section className="relative pt-24 min-h-[75vh] flex items-center overflow-hidden bg-[#070B7F]">
        <div className="container mx-auto px-12 z-20 relative py-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Activity size={12} className="text-[#070B7F]" />
               </div>
               <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-blue-200">Claims Advocacy</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Expedited <br /> Claim Management
            </h1>
            <div className="flex items-center gap-4 mb-8">
               <span className="bg-cyan-400 text-[#070B7F] px-5 py-1.5 text-2xl font-black rounded shadow-lg italic">98% SETTLED</span>
               <p className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.2em]">Fast. Transparent. Reliable.</p>
            </div>
            <p className="text-sm text-blue-100/70 max-w-sm leading-relaxed font-medium">
              When business continuity is on the line, every second counts. Our advocates handle the complexity so you can focus on recovery.
            </p>
            <div className="mt-8">
               <button className="group bg-white text-[#070B7F] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-cyan-400 transition-all duration-300">
                 File a Claim <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            alt="Claims Management"
          />
        </div>
      </section>

      {/* 2. VERTICAL PROCESS ROADMAP */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4">The Settlement Path</h2>
          <p className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#070B7F]">
            Transparent <br /> <span className="text-blue-500">Lifecycle</span>
          </p>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent hidden md:block -translate-x-1/2" />

          <div className="flex flex-col gap-24 relative z-10">
            {claimSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
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
                      <span className="text-[140px] font-black text-slate-200/40 select-none leading-none tracking-tighter">{step.num}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE VESTIGO ADVANTAGE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
              className="rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[4/3] object-cover"
              alt="The Advantage"
            />
          </div>

          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#070B7F] mb-8">The Vestigo Advantage</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Zero Paperwork Stress", icon: <History className="text-blue-600" /> },
                { title: "Dedicated Case Manager", icon: <UserCheck className="text-blue-600" /> },
                { title: "Legal & Compliance Support", icon: <ShieldAlert className="text-blue-600" /> },
                { title: "24/7 Omnichannel Tracking", icon: <MessageSquare className="text-blue-600" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                  <div className="p-3 bg-white rounded-xl shadow-sm">{item.icon}</div>
                  <span className="text-[12px] font-black uppercase tracking-widest text-slate-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}