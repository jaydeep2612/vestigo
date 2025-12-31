"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function WhoWeAreMerged() {
  const brandBlue = "#070B7F";

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. IMMERSIVE IMAGE HERO */}
      <section className="relative h-[75vh] w-full flex items-center overflow-hidden bg-slate-900">
        {/* Background Image with #070B7F Tint */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Excellence" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div 
            className="absolute inset-0 opacity-40" 
            style={{ backgroundColor: brandBlue }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 items-end justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12" style={{ backgroundColor: brandBlue }} />
                <span className="text-white font-black uppercase tracking-[0.4em] text-xs">
                  Identity & Insight
                </span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                Who We <span style={{ color: brandBlue }}>Are.</span>
              </h1>
              <p className="mt-8 text-xl lg:text-2xl text-slate-200 leading-relaxed font-light border-l-4 pl-8 border-white/20">
                A forward-thinking risk advisory firm dedicated to protecting businesses and individuals against uncertainty.
              </p>
            </motion.div>

            {/* Floating Strength Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/3 w-full p-10 rounded-3xl text-white shadow-2xl backdrop-blur-md border border-white/10" 
              style={{ backgroundColor: `${brandBlue}CC` }} // CC = 80% opacity
            >
              <h4 className="text-xs font-black uppercase tracking-widest mb-6 opacity-60 text-blue-200">Our Strength</h4>
              <p className="text-lg font-medium leading-snug italic">
                "Designing financial strategies that are practical, compliant, and sustainable through a consultative approach."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OUR JOURNEY (The Foundation) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Journey" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 p-8 rounded-2xl shadow-xl text-white font-bold uppercase" 
                style={{ backgroundColor: brandBlue }}
              >
                Since Foundation
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase mb-8" style={{ color: brandBlue }}>Our Journey</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6 font-medium">
                Founded with the vision of simplifying complex financial risks, we have grown into a trusted partner for organizations across diverse industries.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Over the years, our focus on **integrity**, **transparency**, and **client success** has enabled us to build long-term relationships and deliver measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (Professional Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase mb-16" style={{ color: brandBlue }}>What We Do</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {[
              "Risk assessment & financial advisory",
              "Corporate & commercial insurance solutions",
              "Employee benefits planning",
              "Claims management & support",
              "Compliance & regulatory advisory",
              "Sustainable and ESG-aligned risk solutions"
            ].map((item, idx) => (
              <div key={idx} className="p-12 bg-white hover:bg-slate-50 transition-colors group relative text-left h-full">
                <span className="text-5xl font-black opacity-5 absolute top-8 right-8" style={{ color: brandBlue }}>0{idx+1}</span>
                <h4 className="text-sm font-black uppercase tracking-widest mb-4 pr-10" style={{ color: brandBlue }}>
                  Capability
                </h4>
                <p className="text-slate-700 font-bold text-lg leading-tight uppercase">
                   {item}
                </p>
                <div className="mt-8 h-1 w-8 transition-all group-hover:w-16" style={{ backgroundColor: brandBlue }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PHILOSOPHY (The Credo) */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div 
            className="max-w-5xl mx-auto p-16 lg:p-24 rounded-[4rem] text-center border-2 shadow-2xl shadow-[#070B7F]/5" 
            style={{ borderColor: brandBlue }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.5em] mb-10" style={{ color: brandBlue }}>Our Philosophy</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase leading-tight tracking-tight">
              "Financial protection is not just about policies—it’s about understanding risk, anticipating change, and enabling confident decisions."
            </h3>
            <div className="mt-12 flex flex-wrap justify-center gap-10">
               {["Client-Centric", "Data-Driven", "Future-Ready"].map(tag => (
                 <div key={tag} className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: brandBlue }} />
                   <span className="text-xs font-black uppercase tracking-widest text-slate-500">{tag}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}