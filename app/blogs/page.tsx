"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export default function BlogsHub() {
  const brandBlue = "#070B7F";
  const { scrollYProgress } = useScroll();

  // Parallax for the Knowledge Hub Hero
  const yHero = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.05]);

  const categories = [
    { name: "Risk Management", icon: "🛡️", topics: ["Emerging Business Risks", "Mitigation Strategies", "Continuity Planning"] },
    { name: "Insurance Insights", icon: "📑", topics: ["Policy Understanding", "Claims Best Practices", "Coverage Optimization"] },
    { name: "Industry Updates", icon: "🌐", topics: ["Regulatory Changes", "Market Trends", "Compliance Requirements"] },
    { name: "Financial Planning", icon: "📈", topics: ["Asset Protection", "Financial Security", "Employee Benefits"] },
  ];

  const featuredBlogs = [
    { 
      title: "Sustainable Risk Management: The ESG Perspective", 
      cat: "Risk Management", 
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
      date: "Dec 30, 2025" 
    },
    { 
      title: "The Importance of Cyber Insurance in Today’s Digital Economy", 
      cat: "Insurance Insights", 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
      date: "Dec 22, 2025" 
    },
    { 
      title: "Regulatory Compliance: What Businesses Need to Know", 
      cat: "Industry Updates", 
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
      date: "Dec 15, 2025" 
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#070B7F] selection:text-white">
      
      {/* 1. KNOWLEDGE HUB HERO */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-900">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Insights Hub Background"
          />
          <div className="absolute inset-0 opacity-85" style={{ backgroundColor: brandBlue }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F] via-transparent to-transparent z-10" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div style={{ y: yHero }} className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-white" />
              <span className="text-blue-200 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">
                Insights & Knowledge Hub
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.85] uppercase tracking-tighter mb-8">
              Stay <br /> <span className="text-blue-300">Informed.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-2xl font-light leading-relaxed border-l-4 pl-8 border-white/20">
              Expert insights, regulatory updates, and industry trends from our financial and risk advisory specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATOR */}
      <section className="py-20 bg-slate-50 relative -mt-16 z-30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 group transition-all"
              >
                <div className="text-4xl mb-6">{cat.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4" style={{ color: brandBlue }}>{cat.name}</h3>
                <ul className="space-y-2">
                  {cat.topics.map((topic, idx) => (
                    <li key={idx} className="text-xs font-bold text-slate-400 flex items-center gap-2 group-hover:text-slate-600 transition-colors">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: brandBlue }} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CONTENT FEED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ color: brandBlue }}>
              Recent <br /> Analysis.
            </h2>
            <div className="h-[2px] w-24 bg-slate-100 mb-4 hidden lg:block" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {featuredBlogs.map((blog, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={blog.img} 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    alt={blog.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">
                      {blog.cat}
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 block">{blog.date}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-[#070B7F] transition-colors mb-6">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-900 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    Read Article <div className="h-[1px] w-12" style={{ backgroundColor: brandBlue }} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE NEWSLETTER / CTA */}
      <section className="relative py-40 overflow-hidden bg-slate-900">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.7, 1], [-50, 50]) }}
          className="absolute inset-0 z-0 scale-110"
        >
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea7028c?q=80&w=2070" 
            alt="Strategic Planning" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 opacity-80" style={{ backgroundColor: brandBlue }} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              Never Miss an <br /> <span className="text-blue-300 italic">Evolution.</span>
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto font-light">
              Subscribe to receive the latest regulatory updates and risk advisory insights directly to your inbox.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-[2rem] border border-white/20">
              <input 
                type="email" 
                placeholder="Institutional Email" 
                className="bg-transparent px-8 py-5 text-white placeholder-blue-200 outline-none flex-grow font-bold uppercase text-[11px] tracking-widest"
              />
              <button className="px-12 py-5 bg-white text-[#070B7F] font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl shadow-2xl hover:bg-blue-50 transition-all">
                Join Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}