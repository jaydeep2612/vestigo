"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function WhyChooseUsRefined() {
  const brandBlue = "#070B7F";

  const pillarData = [
    { title: "Client-First", desc: "We listen before we advise. Solutions tailored to your P&L.", icon: "👤" },
    { title: "Expertise", desc: "Deep domain knowledge in Pharma, Tech, and Manufacturing.", icon: "🛡️" },
    { title: "Lifecycle", desc: "From risk assessment to final claims settlement support.", icon: "🔄" },
    { title: "Network", desc: "Direct access to A+ rated global financial institutions.", icon: "🌐" },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. ARCHITECTURAL HERO */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Modern Corporate Architecture"
          />
          <div className="absolute inset-0 opacity-50" style={{ backgroundColor: brandBlue }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16" style={{ backgroundColor: 'white' }} />
              <span className="text-white font-black uppercase tracking-[0.5em] text-xs">Value Proposition</span>
            </div>
            <h1 className="text-6xl lg:text-[100px] font-black text-white leading-none uppercase tracking-tighter">
              Why <br /> <span style={{ color: "white", opacity: 0.5 }}>Vestigo?</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERLAPPING VALUE PILLARS */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarData.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-2xl border-b-8 transition-all group"
                style={{ borderBottomColor: brandBlue }}
              >
                <div className="text-3xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-black uppercase mb-4" style={{ color: brandBlue }}>{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE DIFFERENTIATORS (The "Why") */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[4rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl"
               >
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[600px] object-cover"
                    alt="Team analyzing financial data"
                  />
               </motion.div>
               {/* Floating Overlay Card */}
               <div className="absolute -bottom-10 -right-10 p-12 rounded-[3rem] text-white shadow-2xl max-w-sm hidden lg:block" style={{ backgroundColor: brandBlue }}>
                  <h4 className="text-2xl font-black uppercase mb-4">Future-Ready</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We integrate analytics and sustainability into every financial landscape we navigate.
                  </p>
               </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-12" style={{ color: brandBlue }}>
                Transparency <br /> & Integrity.
              </h2>
              <div className="space-y-12">
                 {[
                  { t: "Unbiased Advice", d: "Our primary loyalty is to your resilience, not the provider." },
                  { t: "Strong Network", d: "Direct partnerships with the world's leading A+ rated insurers." },
                  { t: "Regulatory Guard", d: "Strict adherence to compliance and evolving governance." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="h-1 w-8 mt-3 shrink-0 group-hover:w-12 transition-all" style={{ backgroundColor: brandBlue }} />
                    <div>
                      <h4 className="font-black uppercase text-slate-900 mb-2">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR IMPACT (Data Visualization Feel) */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Sidebar Branding */}
            <div className="lg:w-1/3 p-12 lg:p-20 text-white flex flex-col justify-between" style={{ backgroundColor: brandBlue }}>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.4em] opacity-60">Success Board</span>
                <h3 className="text-4xl lg:text-5xl font-black uppercase mt-6 leading-none">Our <br /> Impact.</h3>
              </div>
              <p className="text-blue-200 text-sm mt-10">Proactive management that goes beyond the policy document.</p>
            </div>

            {/* Impact List with Images/Icons */}
            <div className="lg:w-2/3 p-12 lg:p-20 grid md:grid-cols-2 gap-12 items-center">
              {[
                { label: "Financial Exposure", action: "Significantly Reduced" },
                { label: "Claims Settlement", action: "Smooth & Accelerated" },
                { label: "Risk Optimization", action: "Long-term Efficiency" },
                { label: "Governance", action: "Full Compliance Met" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 pl-8 border-slate-100 hover:border-[#070B7F] transition-colors">
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">{item.label}</p>
                  <h4 className="text-xl font-bold uppercase text-slate-800">{item.action}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Background Image for CTA */}
        <div className="absolute inset-0 z-0 opacity-5">
            <img src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&q=80&w=1500" className="w-full h-full object-cover" alt="" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8">
            The Right Partner <br /> <span style={{ color: brandBlue }}>Changes Everything.</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 text-white font-bold uppercase tracking-widest text-sm rounded-xl shadow-2xl transition-all" 
            style={{ backgroundColor: brandBlue }}
          >
            Consult With Our Experts
          </motion.button>
        </div>
      </section>

    </main>
  );
}