"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function OurTeamEnhancedVisibility() {
  const brandBlue = "#070B7F";

  const leadership = [
    {
      role: "Managing Director / CEO",
      desc: "Provides strategic direction, oversees client relationships, and drives long-term growth through innovation and governance.",
      id: "01"
    },
    {
      role: "Head – Risk Advisory",
      desc: "Leads risk assessment, audit, and mitigation strategies across industries with a focus on regulatory compliance and operational resilience.",
      id: "02"
    },
    {
      role: "Head – Insurance Solutions",
      desc: "Specializes in designing and managing corporate, commercial, and employee benefit insurance programs.",
      id: "03"
    }
  ];

  const expertise = [
    "Financial risk analysis",
    "Insurance structuring",
    "Claims management",
    "Compliance & governance",
    "ESG & sustainability frameworks"
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. HIGH-VISIBILITY HERO WITH BACKGROUND IMAGE */}
      <section className="relative pt-48 pb-32 border-b-2 border-slate-100 overflow-hidden bg-slate-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Environment" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 opacity-70" style={{ backgroundColor: brandBlue }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1.5 w-16 bg-white" />
                <span className="font-black uppercase tracking-[0.5em] text-xs text-blue-100">
                  Executive Leadership
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Human <br /> <span className="text-blue-300">Intelligence.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3 p-10 bg-white/10 backdrop-blur-md text-white rounded-[2rem] border border-white/20 shadow-2xl"
            >
              <p className="text-lg font-medium leading-relaxed italic">
                "Our expertise directly translates into measurable value and long-term security for our clients."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ACCESSIBLE LEADERSHIP GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group p-12 bg-white border-2 border-slate-100 rounded-[3rem] transition-all duration-300 hover:shadow-2xl"
                style={{ borderBottom: `8px solid ${brandBlue}` }}
              >
                <div className="flex justify-center lg:justify-start items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black"
                       style={{ backgroundColor: brandBlue }}>
                    {member.id}
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-6 text-slate-900 leading-tight">
                  {member.role}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHARP PROFESSIONALS SECTION WITH ACCENT IMAGE */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-5xl">
              <div className="mb-16">
                <h2 className="text-4xl font-black uppercase tracking-tight mb-4" style={{ color: brandBlue }}>
                  Our Domain Experts
                </h2>
                <div className="h-1.5 w-20 bg-slate-900" />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {expertise.map((item, idx) => (
                  <div key={idx} 
                       className="flex flex-col justify-between p-8 bg-white border border-slate-200 rounded-2xl hover:border-[#070B7F] transition-all group">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 group-hover:text-[#070B7F]">Specialization</span>
                    <h4 className="font-black text-slate-800 uppercase text-sm leading-tight">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F]/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white text-xl font-bold uppercase tracking-tight">Industry-leading advisory board.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SOLID CULTURE BANNER WITH ARCHITECTURAL IMAGE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-slate-100 min-h-[500px]">
            {/* Left Brand Block */}
            <div className="lg:w-1/2 relative p-16 lg:p-24 text-white flex flex-col justify-center overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Architecture" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 opacity-80" style={{ backgroundColor: brandBlue }} />
              
              <div className="relative z-10">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Our Culture.</h2>
                <p className="text-blue-100 text-xl font-light leading-relaxed">
                  We believe our people are our strongest asset—architecting a culture of accountability and continuous learning.
                </p>
              </div>
            </div>
            
            {/* Right Interactive List */}
            <div className="lg:w-1/2 p-16 lg:p-24 bg-white flex flex-col justify-center">
              <div className="space-y-10">
                {[
                  { t: "Collaboration", d: "Accountability at every organizational level." },
                  { t: "Ethical Core", d: "Decision-making rooted in transparency." },
                  { t: "Continuous Learning", d: "Investment in evolving market trends." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-2" style={{ color: brandBlue }}>
                      {item.t}
                    </h4>
                    <p className="text-slate-600 font-bold text-lg">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}