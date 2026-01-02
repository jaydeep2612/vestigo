"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    /* MASTER WRAPPER: Background image flows through the entire page */
    <main className="min-h-screen bg-[#050816] font-sans selection:bg-blue-600 selection:text-white overflow-hidden relative bg-[url('/footer.jpeg')] bg-cover bg-center bg-no-repeat">
      
      {/* UNIFIED GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#050816]/80 to-[#050816] z-0" />

      {/* 1. HERO CTA SECTION */}
      <div className="relative z-10 w-full pt-32 flex flex-col items-center justify-center text-center">
        <div className="px-6 max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-tight">
              PROTECT YOUR BUSINESS WITH THE <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                RIGHT INSURANCE STRATEGY
              </span>
            </h1>
            <p className="text-white/80 text-lg mb-8 font-light">
              Schedule a no-obligation consultation with our experts today
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. CONTACT & FORM SECTION: Items centered vertically to be parallel */}
      <section className="relative z-10 bg-transparent py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-stretch">
            
            {/* LEFT: Contact Info - Vertically Centered */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
              {[
                { icon: <Phone size={20} />, label: "CALL US", val: "+1 234 567 890", href: "tel:+1234567890" },
                { icon: <Mail size={20} />, label: "EMAIL", val: "advisory@vestigo.com", href: "mailto:advisory@vestigo.com" },
                { icon: <MapPin size={20} />, label: "OFFICE", val: "Financial District, NY", href: "#" }
              ].map((item, idx) => (
                <motion.a 
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-2xl">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{item.label}</span>
                    <span className="text-white text-lg font-bold tracking-tight">{item.val}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* RIGHT: Inquiry Form with Phone and Subject */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B1120]/60 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-white/5 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-blue-400 ml-2">YOUR NAME</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-500" placeholder="Full Name" />
                    </div>
                    {/* Corporate Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-blue-400 ml-2">CORPORATE EMAIL</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-500" placeholder="email@company.com" />
                    </div>
                    {/* Phone Number - New Column */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-blue-400 ml-2">PHONE NUMBER</label>
                      <input maxLength={10} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-500" placeholder="00000-00000" />
                    </div>
                    {/* Subject - New Column */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-blue-400 ml-2">SUBJECT</label>
                      <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-500" placeholder="Inquiry Topic" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-blue-400 ml-2">MESSAGE</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-500" placeholder="How can our specialists assist?"></textarea>
                  </div>

                  <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl flex items-center justify-center gap-4 transition-all group shadow-lg shadow-blue-600/20">
                    DISPATCH INQUIRY
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}