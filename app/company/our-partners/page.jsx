"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function OurPartners() {
  const brandBlue = "#070B7F";

  const partnerCategories = [
    {
      title: "Insurance Partners",
      desc: "Reputed national and international insurers providing property, liability, health, and cyber risks protection.",
      icon: "🏦",
      tags: ["Property", "Liability", "Employee Benefits", "Cyber Risks"]
    },
    {
      title: "Financial Institutions",
      desc: "Leading associations for risk-aligned financial advisory, credit solutions, and wealth preservation.",
      icon: "💼",
      tags: ["Credit & Surety", "Wealth Protection", "Financial Advisory"]
    },
    {
      title: "Risk & Advisory",
      desc: "Experienced consultants and auditors supporting regulatory compliance and governance frameworks.",
      icon: "🧠",
      tags: ["Risk Audits", "Compliance", "Continuity Planning"]
    },
    {
      title: "Technology Partners",
      desc: "Digital providers enhancing efficiency through policy management and real-time claims tracking.",
      icon: "💻",
      tags: ["Policy Tech", "Data Analytics", "Risk Monitoring"]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. COLLABORATION HERO */}
      <section className="relative pt-48 pb-32 border-b-2 border-slate-100 overflow-hidden bg-slate-900">
        {/* Background Image Layer with Brand Tint */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Partnership" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 opacity-80" style={{ backgroundColor: brandBlue }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1.5 w-16 bg-white" />
                <span className="font-black uppercase tracking-[0.5em] text-xs text-blue-100">
                  Global Ecosystem
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Strong <br /> <span className="text-blue-300 text-opacity-80 italic">Partnerships.</span>
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed font-light max-w-xl">
                By collaborating with leading global institutions, we transform complexity into clarity and deliver resilient financial solutions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3 p-10 bg-white/10 backdrop-blur-lg rounded-[2.5rem] border border-white/20 shadow-2xl"
            >
              <h4 className="text-blue-300 font-black uppercase text-xs tracking-widest mb-4">The Value</h4>
              <p className="text-white text-lg font-medium">
                "We leverage a global partner network to offer competitive pricing and industry best practices."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE PARTNER NETWORK GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4" style={{ color: brandBlue }}>
              Our Network
            </h2>
            <div className="h-1.5 w-20 bg-slate-900 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerCategories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 border-2 border-slate-50 rounded-[3rem] bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-2xl group"
                style={{ borderLeft: `8px solid ${brandBlue}` }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="text-5xl">{cat.icon}</div>
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-4 text-slate-900">{cat.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed font-medium">{cat.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-[#070B7F] text-[10px] font-black uppercase rounded-lg tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTION PHILOSOPHY */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Partnership Philosophy" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 opacity-60" style={{ backgroundColor: brandBlue }} />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <p className="text-xl font-bold uppercase italic">"Built on mutual trust and shared responsibility."</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-10" style={{ color: brandBlue }}>
                Partner Selection <br /> Philosophy.
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Proven Industry Credibility", d: "A history of stable and trusted market presence." },
                  { t: "Financial Stability", d: "Capital strength to ensure long-term reliability." },
                  { t: "Ethical Standards", d: "Strict adherence to governance and moral transparency." },
                  { t: "Innovation Capability", d: "A focus on technology and future-ready solutions." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="h-1 w-8 mt-3 shrink-0 group-hover:w-12 transition-all" style={{ backgroundColor: brandBlue }} />
                    <div>
                      <h4 className="font-black uppercase text-slate-900 mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION: PARTNER WITH US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[4rem] p-16 lg:p-24 text-white text-center relative overflow-hidden shadow-2xl"
               style={{ backgroundColor: brandBlue }}>
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8">
                Interested in <br /> Partnering With Us?
              </h2>
              <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-light">
                We welcome organizations that share our vision of excellence, innovation, and integrity. Let’s create impactful financial solutions together.
              </p>
              <button className="px-12 py-5 bg-white text-[#070B7F] font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
                Explore Collaboration
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}