"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    tag: "🔍 The Spirit of Vestigo",
    title: "Uncover, Explore, ",
    highlight: "and Protect.",
    desc: "We track and trace risks before they reach you using intelligent insurance tech."
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    tag: "🛡️ Strategic Security",
    title: "Deep Insights, ",
    highlight: "Corporate Shield.",
    desc: "Tailored insurance solutions built by deeply understanding your specific industry needs."
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
    tag: "📈 Asset Growth",
    title: "Stability for ",
    highlight: "Your Future.",
    desc: "Focus on scaling your enterprise while we manage the complexities of risk and liability."
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#020420]">
      {/* 1. Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Enhanced Bottom-Heavy Gradient for readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020420] via-[#020420]/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#070B7F]/5 z-10" /> 
          <img
            src={slides[index].image}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Content Layer - Positioned at Bottom */}
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-end pb-32">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "circOut" }}
            >
              <span className="inline-block text-[#4F55FF] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
                {slides[index].tag}
              </span>
              
              {/* Reduced size: text-3xl to 5xl instead of 8xl */}
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {slides[index].title} 
                <span className="text-[#4F55FF]"> {slides[index].highlight}</span>
              </h1>

              {/* Reduced size: text-base instead of text-xl */}
              <p className="text-base text-gray-300 leading-relaxed max-w-lg mb-8">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#4F55FF" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-[#070B7F] text-white text-sm font-bold rounded-lg shadow-2xl transition-all"
            >
              Get Started
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-white/20 text-white text-sm font-bold rounded-lg backdrop-blur-sm transition-all"
            >
              View Solutions
            </motion.button>
          </div>
        </div>
      </div>

      {/* 3. Slim Progress Bar (Very Bottom) */}
      <div className="absolute bottom-10 left-6 right-6 z-30 container mx-auto flex gap-2">
        {slides.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setIndex(i)}
            className="h-0.5 flex-1 bg-white/10 rounded-full overflow-hidden cursor-pointer"
          >
            {index === i && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-[#4F55FF]"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}