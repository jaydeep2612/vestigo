"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";

const brandBlue = "#070B7F";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#070B7F] selection:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            className="w-full h-full object-cover grayscale opacity-30"
            alt="Corporate Office"
          />
          <div className="absolute inset-0 opacity-90" style={{ backgroundColor: brandBlue }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-blue-400" />
              <span className="text-blue-200 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Global Advisory Network
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Get In <br /> <span className="text-blue-300">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Info Cards */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-6" style={{ color: brandBlue }}>
                  Speak with an <br /> Expert Advisor.
                </h2>
                <p className="text-slate-500 leading-relaxed max-w-sm font-medium">
                  Whether you are scaling a startup or managing an enterprise, our risk specialists are ready to architect your coverage.
                </p>
              </div>

              <div className="space-y-8">
                {/* Contact Item */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#070B7F] group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Line</p>
                    <p className="text-xl font-black text-slate-900">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#070B7F] group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Institutional Inquiries</p>
                    <p className="text-xl font-black text-slate-900">advisory@vestigo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#070B7F] group-hover:bg-[#070B7F] group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Global Headquarters</p>
                    <p className="text-xl font-black text-slate-900">Financial District, <br /> New York, NY 10004</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
              >
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                      <input type="text" className="w-full bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#070B7F] transition-all font-bold text-slate-900" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Corporate Email</label>
                      <input type="email" className="w-full bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#070B7F] transition-all font-bold text-slate-900" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Subject of Interest</label>
                    <select className="w-full bg-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#070B7F] transition-all font-bold text-slate-900 appearance-none">
                      <option>Risk Advisory</option>
                      <option>Cyber Liability</option>
                      <option>Asset Management</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Detailed Message</label>
                    <textarea rows={5} className="w-full bg-white border-none rounded-3xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#070B7F] transition-all font-bold text-slate-900" placeholder="How can our specialists assist your growth?"></textarea>
                  </div>

                  <button className="w-full py-5 bg-[#070B7F] text-white font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl flex items-center justify-center gap-4 hover:bg-slate-900 transition-all group">
                    Dispatch Inquiry
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP / LOCATIONS PREVIEW */}
      <section className="h-[400px] bg-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
        {/* Integrate Google Maps or Leaflet here */}
        <div className="w-full h-full flex items-center justify-center bg-slate-200">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Interactive Map Interface Placeholder</p>
        </div>
      </section>
    </main>
  );
}