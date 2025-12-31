"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData = [
    { label: "Home", href: "/" },
    {
      label: "Company",
      href: "/company",
      links: [
        { name: "Overview", href: "/company" },
        { name: "Who we are", href: "/company/who-we-are" },
        { name: "Why us", href: "/company/why-us" },
        { name: "Our Team", href: "/company/our-team" },
        { name: "Our Partners", href: "/company/our-partners" },
      ],
    },
    {
      label: "Solutions",
      href: "/solutions",
      isMega: true,
      links: [
        { name: "Overview", href: "/solutions" },
        { name: "Commercial Insurance", href: "/solutions/commercial-insurance" },
        { name: "Employee Benefits", href: "/solutions/employee-benefits" },
        { name: "Life Insurance", href: "/solutions/life-insurance" },
        { name: "Claims Management", href: "/solutions/claims-management" },
        { name: "Green Insurance", href: "/solutions/green-insurance" },
        { name: "Surety Bond", href: "/solutions/surety-bond" },
        { name: "Credit Insurance", href: "/solutions/credit-insurance" },
        { name: "Liability Suite", href: "/solutions/liability-suite" },
        { name: "Audit & Risk", href: "/solutions/audit-risk-assessment" },
      ],
    },
    {
      label: "Industries",
      href: "/industries",
      isMega: true,
      links: [
        { name: "Overview", href: "/industries" },
        { name: "Chemical", href: "/industries/chemical" },
        { name: "Pharmaceutical", href: "/industries/pharmaceutical" },
        { name: "SME/MSME", href: "/industries/sme-msme" },
        { name: "Plastic", href: "/industries/plastic" },
        { name: "Textile", href: "/industries/textile" },
        { name: "Hospitality", href: "/industries/hospitality" },
        { name: "E-commerce", href: "/industries/ecommerce" },
        { name: "Shipping & Logistics", href: "/industries/shipping-logistics" },
        { name: "Engineering", href: "/industries/engineering" },
        { name: "Automobile", href: "/industries/automobile" },
      ],
    },
    { label: "Blog", href: "/blogs" },
  ];

  const brandBlue = "#070B7F";

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(7,11,127,0.07)] border-b border-gray-100" 
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-2 group">
                            <img src="./logo.png" alt="Logo" className="h-14 w-auto dark:brightness-150 "/>

            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuData.map((item) => (
              <div key={item.label} className="group relative">
                {item.links ? (
                  <>
                    <button className="flex items-center px-5 py-8 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-[#070B7F] transition-all duration-300">
                      {item.label}
                      <svg className="ml-1.5 w-3 h-3 opacity-40 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                      <div className={`bg-white rounded-3xl shadow-[0_20px_50px_rgba(7,11,127,0.12)] border border-gray-100 p-8 ${item.isMega ? 'w-[750px]' : 'w-64'}`}>
                        <div className={`grid gap-x-8 gap-y-2 ${item.isMega ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {item.links.map((link, idx) => (
                            <motion.div key={link.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.03 }}>
                              <Link 
                                href={link.href} 
                                className="block px-4 py-3 text-sm font-bold text-slate-500 hover:text-[#070B7F] hover:bg-[#F8FAFF] rounded-xl transition-all duration-200"
                              >
                                {link.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="px-5 py-8 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-[#070B7F] relative group">
                    {item.label}
                    <span className="absolute bottom-6 left-5 right-5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: brandBlue }} />
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              href="/contact" 
              className="ml-6 px-8 py-3.5 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-[#070B7F]/20 transition-all active:scale-95 shadow-[#070B7F]/10"
              style={{ backgroundColor: brandBlue }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-3 text-slate-600 hover:bg-slate-50 rounded-2xl transition-colors border border-slate-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <div className="p-6 space-y-2">
              {menuData.map((item) => (
                <div key={item.label}>
                  {item.links ? (
                    <>
                      <button 
                        onClick={() => setActiveMobileSection(activeMobileSection === item.label ? null : item.label)}
                        className="flex justify-between items-center w-full p-4 text-sm font-black uppercase tracking-widest text-slate-800 rounded-2xl hover:bg-slate-50 transition-colors"
                      >
                        {item.label}
                        <motion.svg animate={{ rotate: activeMobileSection === item.label ? 180 : 0 }} className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {activeMobileSection === item.label && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: 'auto', opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }} 
                            className="pl-6 space-y-1 mb-4"
                          >
                            {item.links.map((sub) => (
                              <Link key={sub.name} href={sub.href} onClick={() => setIsMobileOpen(false)} className="block p-3 text-sm font-bold text-slate-500 hover:text-[#070B7F]">
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} onClick={() => setIsMobileOpen(false)} className="block p-4 text-sm font-black uppercase tracking-widest text-slate-800 hover:bg-slate-50 rounded-2xl">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link 
                   href="/contact" 
                   className="block w-full text-center py-5 text-white rounded-[2rem] text-xs font-black uppercase tracking-[0.3em] shadow-2xl transition-transform active:scale-95"
                   style={{ backgroundColor: brandBlue }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}