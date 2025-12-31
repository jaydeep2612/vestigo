"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, staggerChildren: 0.1 }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-white dark:bg-[#020420] border-t border-slate-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background glow - Uses Logo Blue */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#070B7F]/5 dark:bg-[#070B7F]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        
        {/* Top Section: Newsletter Lead Gen - Background changed to Brand-Compliant Slate-950 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 lg:p-12 rounded-[3rem] bg-[#0A0E2E] dark:bg-[#070B7F]/20 dark:border dark:border-white/10 text-white flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-2">Stay ahead of industry risks.</h3>
            <p className="text-slate-400 dark:text-slate-300 font-medium">Get monthly insights from our risk assessment experts.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl w-full lg:w-80 focus:outline-none focus:ring-2 focus:ring-[#070B7F] transition-all"
            />
            {/* Button changed to Logo Blue */}
            <button className="bg-[#070B7F] hover:bg-[#05085C] text-white font-bold px-8 py-4 rounded-2xl transition-all active:scale-95 whitespace-nowrap shadow-xl">
              Join Now
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block group">
               <img src="./logo.png" alt="Logo" className="h-14 w-auto dark:brightness-150 drop-shadow-[0_6px_14px_rgba(7,11,127,0.65)]"/>
            </Link>
            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
              Vestigāre — We track, trace, and search out risks to build a safer future for global enterprises through intelligent insurance tech.
            </p>
            <div className="flex space-x-3">
              {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                <motion.div 
                  key={social}
                  /* Social Hover Background changed to Logo Blue */
                  whileHover={{ y: -4, backgroundColor: '#070B7F', color: '#fff' }}
                  className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-slate-600 dark:text-gray-400 cursor-pointer transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="lg:pl-8">
            <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-[0.2em] mb-6">Organization</h4>
            <ul className="space-y-4">
              {["Who we are", "Why us", "Our Team", "Blog", "Careers"].map((link) => (
                <li key={link}>
                  {/* Link Hover text changed to Logo Blue */}
                  <Link href="#" className="text-slate-500 dark:text-gray-400 hover:text-[#070B7F] dark:hover:text-[#4F55FF] text-sm font-bold transition-all hover:pl-2">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-[0.2em] mb-6">Expertise</h4>
            <ul className="space-y-4">
              {["Commercial Insurance", "Employee Benefits", "Life Insurance", "Green Insurance", "Audit & Risk"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-500 dark:text-gray-400 hover:text-[#070B7F] dark:hover:text-[#4F55FF] text-sm font-bold transition-all hover:pl-2">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-[0.2em] mb-6">Global Office</h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                {/* Heading text changed to Logo Blue */}
                <p className="text-xs font-black text-[#070B7F] dark:text-[#4F55FF] uppercase mb-1">HQ Address</p>
                <p className="text-slate-500 dark:text-gray-400 text-sm font-bold leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  123 Business Way, Financial District<br/>New York, NY 10004
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <p className="text-slate-500 dark:text-gray-400 text-sm font-bold italic">Support: +1 (800) VESTIGO</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-400 dark:text-gray-500 text-[11px] font-bold uppercase tracking-widest">
            © {currentYear} INSURECORP Global Solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((legal) => (
              <Link key={legal} href="#" className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">
                {legal}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}