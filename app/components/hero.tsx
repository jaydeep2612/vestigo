"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    tag: "🔍 The Spirit of Vestigo",
    title: "Uncover, Explore, ",
    highlight: "and Protect.",
    desc: "We track and trace risks before they reach you using intelligent insurance tech to ensure certainty."
  },
  {
    tag: "🛡️ Strategic Security",
    title: "Deep Insights, ",
    highlight: "Corporate Shield.",
    desc: "Tailored insurance solutions built by deeply understanding your specific industry needs."
  },
  {
    tag: "📈 Asset Growth",
    title: "Stability for ",
    highlight: "Your Future.",
    desc: "Focus on scaling your enterprise while we manage the complexities of risk and liability."
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const totalVideoDuration = 10000; // 10 seconds
  const slideDuration = totalVideoDuration / slides.length; // ~3333ms per slide

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slideDuration]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#020420]">
      {/* 1. Video Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay to pop the white text */}
        <div className="absolute inset-0 bg-black/20 z-10" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-[#020420]/80 via-transparent to-[#020420] z-10" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Taglines: Soft Blue Tint for hierarchy */}
              <span className="inline-block text-[#93C5FD] font-black uppercase tracking-[0.4em] text-[12px] mb-6">
                {slides[index].tag}
              </span>
              
              {/* Main Headline: Pure White for maximum contrast */}
              <h1 className="text-4xl lg:text-7xl font-black text-[#FFFFFF] leading-[1.1] mb-6 uppercase tracking-tighter">
                {slides[index].title} 
                {/* Highlight Keywords: Vibrant Action Blue */}
                <span className="text-blue-500"> {slides[index].highlight}</span>
              </h1>

              {/* Body Text: Light Gray for readability without strain */}
              <p className="text-lg text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-6 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#4F55FF" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#070B7F] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-2xl transition-all"
            >
              Get Started
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-[#FFFFFF] text-[#FFFFFF] text-xs font-black uppercase tracking-widest rounded-full backdrop-blur-md transition-all"
            >
              View Solutions
            </motion.button>
          </div>
        </div>
      </div>

      {/* 3. Synced Progress Indicators */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, i) => (
          <div key={i} className="h-1 w-16 bg-white/20 rounded-full overflow-hidden relative">
            {index === i && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: slideDuration / 1000, ease: "linear" }}
                className="absolute inset-0 bg-[#00D1FF]" // Electric Cyan progress bar
              />
            )}
          </div>
        ))}
      </div> */}
    </section>
  );
}