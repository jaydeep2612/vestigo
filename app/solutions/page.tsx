"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export default function SolutionsUltraDynamic() {
  const brandBlue = "#070B7F";
  const { scrollYProgress } = useScroll();

  // Advanced Parallax: Hero text moves up while image scales out
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const solutions = [
    { name: "Commercial Insurance", href: "/solutions/commercial-insurance", desc: "Property, Fire, Engineering, and Marine protection.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" },
    { name: "Employee Benefits", href: "/solutions/employee-benefits", desc: "Group Health, Life, and Wellness programs.", img: "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069" },
    { name: "Life Insurance", href: "/solutions/life-insurance", desc: "Personalized protection and wealth preservation.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" },
    { name: "Claims Management", href: "/solutions/claims-management", desc: "End-to-end documentation and settlement support.", img: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=2070" },
    { name: "Green Insurance", href: "/solutions/green-insurance", desc: "ESG-aligned risk management for sustainable growth.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070" },
    { name: "Surety Bond", href: "/solutions/surety-bond", desc: "Guarantees for infrastructure and commercial projects.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" },
    { name: "Credit Insurance", href: "/solutions/credit-insurance", desc: "Protecting your trade receivables against default.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" },
    { name: "Liability Suite", href: "/solutions/liability-suite", desc: "Directors & Officers, Professional, and Cyber Liability.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070" },
    { name: "Audit & Risk", href: "/solutions/audit-risk-assessment", desc: "Comprehensive risk assessments and compliance audits.", img: "https://images.unsplash.com/photo-1454165833767-027ffea7028c?q=80&w=2070" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#070B7F] selection:text-white">
      
      {/* 1. KINETIC ARCHITECTURAL HERO */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        <motion.div style={{ scale: imgScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Vestigo Institutional Background"
          />
          {/* Dual Overlay: Brand Blue + Deep Gradient */}
          <div className="absolute inset-0 opacity-90" style={{ backgroundColor: brandBlue }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white z-10" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div style={{ y: textY }} className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="h-[2px] w-20 bg-white" />
              <span className="text-blue-200 font-black uppercase tracking-[0.8em] text-[10px] md:text-xs">
                Solutions Directory
              </span>
            </motion.div>
            
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter mb-16">
              End-to-End <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">Resilience.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-blue-100/80 max-w-2xl font-light leading-relaxed border-l-[1px] pl-10 border-white/30">
              Defining the future of risk through <br />
              <span className="font-black italic">Structural Integrity.</span>
            </p>
          </motion.div>
        </div>

        {/* Dynamic Vertical Scrollbar Branding */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8">
           <span className="rotate-90 text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Vestigo Advisor</span>
           <div className="w-[1px] h-32 bg-white/20" />
        </div>
      </section>

      {/* 2. THE DYNAMIC GRID (OVERLAPPING ENTRIES) */}
      <section className="py-40 bg-white relative z-30 -mt-24 rounded-t-[6rem] shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {solutions.map((sol, i) => (
              <Link href={sol.href} key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="group relative cursor-pointer"
                >
                  {/* Image Container with Custom Aspect Ratio */}
                  <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-slate-900 shadow-2xl mb-8">
                    <img 
                      src={sol.img} 
                      className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110 opacity-40 group-hover:opacity-100" 
                      alt={sol.name} 
                    />
                    {/* Hover Tint Overlay */}
                    <div className="absolute inset-0 bg-[#070B7F]/60 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                    
                    {/* Floating Step Counter */}
                    <div className="absolute top-10 left-10 p-4 rounded-full border border-white/20 backdrop-blur-md text-white/40 group-hover:text-white transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest leading-none">C{i+1}</span>
                    </div>
                  </div>

                  {/* Text Content with "Active Trace" Underline */}
                  <div className="px-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none text-slate-900 group-hover:text-[#070B7F] transition-colors">
                      {sol.name}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                      {sol.desc}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="h-[2px] w-12 bg-slate-100 group-hover:w-full group-hover:bg-[#070B7F] transition-all duration-700" />
                      <div className="ml-6 p-4 rounded-full border border-slate-100 group-hover:bg-[#070B7F] group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUOTE / IMPACT SECTION */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div 
            className="p-16 lg:p-32 rounded-[5rem] text-white relative overflow-hidden shadow-2xl"
            style={{ backgroundColor: brandBlue }}
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-300 block mb-10">Institutional Advisory</span>
                <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
                  Global Expertise. <br /> Local Insight.
                </h2>
              </div>
              <div>
                <p className="text-blue-100 text-xl font-light leading-relaxed mb-12">
                  Our Strength lies in customized data-driven strategy and an unwavering commitment to transparency.
                </p>
                <button className="px-12 py-5 bg-white text-[#070B7F] font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-2xl hover:bg-blue-50 transition-all active:scale-95">
                  Request Risk Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}