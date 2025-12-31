"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export default function IndustriesPage() {
  const brandBlue = "#070B7F";
  const { scrollYProgress } = useScroll();

  // Parallax for a premium feel
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  // Parallax for the footer/last component image
  const yFooter = useTransform(scrollYProgress, [0.6, 1], [-50, 50]);

  const industries = [
    { 
      name: "Chemical & Pharmaceutical", 
      href: "/industries/chemical", 
      icon: "🧪", 
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
      points: ["Hazard & Liability Coverage", "Regulatory Compliance", "Environmental Mitigation"]
    },
    { 
      name: "SME / MSME", 
      href: "/industries/sme-msme", 
      icon: "🏢", 
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069",
      points: ["Cost-Effective Programs", "Scalable Risk Solutions", "Financial Protection"]
    },
    { 
      name: "Textile & Apparel", 
      href: "/industries/textile", 
      icon: "👕", 
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074",
      points: ["Fire & Inventory Insurance", "Transit & Export Coverage", "Workforce Protection"]
    },
    { 
      name: "Hospitality", 
      href: "/industries/hospitality", 
      icon: "🏨", 
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      points: ["Property & Liability", "Employee Benefits", "Business Interruption"]
    },
    { 
      name: "E-commerce", 
      href: "/industries/ecommerce", 
      icon: "🛒", 
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089",
      points: ["Cyber & Data Protection", "Logistics Coverage", "Consumer Liability"]
    },
    { 
      name: "Shipping & Logistics", 
      href: "/industries/shipping-logistics", 
      icon: "🚢", 
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
      points: ["Marine Cargo Insurance", "Transit Risk Mitigation", "Global Trade Compliance"]
    },
    { 
      name: "Manufacturing & Engineering", 
      href: "/industries/engineering", 
      icon: "🏗", 
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
      points: ["Asset & Machinery Protection", "Supply Chain Risk", "Workplace Safety"]
    },
    { 
      name: "Automobile", 
      href: "/industries/automobile", 
      icon: "🚗", 
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
      points: ["Asset & Liability Coverage", "Supply Chain Management", "Dealer Protection"]
    },
    { 
      name: "Plastic", 
      href: "/industries/plastic", 
      icon: "♻️", 
      img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e17?q=80&w=2070",
      points: ["Operational Risk", "Environmental Compliance", "Asset Protection"]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#070B7F] selection:text-white">
      
      {/* 1. SECTOR HERO */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Industrial Background"
          />
          <div className="absolute inset-0 opacity-85" style={{ backgroundColor: brandBlue }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F] via-transparent to-transparent z-10" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div style={{ y: yHero }} className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-white" />
              <span className="text-blue-200 font-black uppercase tracking-[0.6em] text-[10px] md:text-xs">
                Sectors We Protect
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.85] uppercase tracking-tighter mb-10">
              Industry <br /> 
              <span className="text-blue-300">Focused.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-2xl font-light leading-relaxed border-l-4 pl-8 border-white/20">
              Addressing sector-specific risks and regulatory challenges with tailored advisory and robust insurance frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INDUSTRY DIRECTORY */}
      <section className="py-24 bg-white relative -mt-24 z-30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Link href={industry.href} key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -15 }}
                  className="group relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl bg-slate-900 cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={industry.img} 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 opacity-40 group-hover:opacity-100" 
                    alt={industry.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F] via-[#070B7F]/80 to-transparent transition-opacity duration-700" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-12 text-white z-10">
                    <div className="text-4xl mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                      {industry.icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">{industry.name}</h3>
                    
                    <div className="space-y-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {industry.points.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="h-1 w-1 bg-blue-300 rounded-full" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sector Profile</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC EXPERTISE CALLOUT WITH PARALLAX BG */}
      <section className="relative py-40 overflow-hidden bg-slate-900">
        {/* Parallax Background Layer */}
        <motion.div 
          style={{ y: yFooter }}
          className="absolute inset-0 z-0 scale-110"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 opacity-80" style={{ backgroundColor: brandBlue }} />
          {/* Subtle light leak for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#070B7F] via-transparent to-blue-400/10" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-white"
            >
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Deep Domain <br /> <span className="text-blue-300">Expertise.</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                We believe that risk cannot be managed with a one-size-fits-all approach. Our strength lies in understanding the granular operational realities of the industries we serve.
              </p>
              <button 
                className="px-12 py-5 bg-white text-[#070B7F] font-black uppercase tracking-[0.3em] text-xs rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Book Industry Audit
              </button>
            </motion.div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
               {[
                 { label: "Claims Settlement", value: "Smooth & Accelerated" },
                 { label: "Compliance", value: "Fully Regulatory Aligned" },
                 { label: "Exposure", value: "Significantly Reduced" },
                 { label: "Growth", value: "Sustainable Protection" },
               ].map((stat, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] shadow-xl hover:bg-white/20 transition-all group"
                 >
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2 block">{stat.label}</span>
                    <h4 className="text-lg font-bold text-white uppercase leading-tight">{stat.value}</h4>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}