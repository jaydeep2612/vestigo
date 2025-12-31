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

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 dark:bg-[#020420]/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-white/10" 
          : "bg-white dark:bg-[#020420] border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
           {/* <Link href="/" className="flex items-center">
               Note: Ensure your logo.svg is readable on dark backgrounds, or use a white version for dark mode 
              <img src="./logo.png" alt="Logo" className="h-14 w-auto dark:brightness-150 drop-shadow-[0_6px_14px_rgba(7,11,127,0.6)]"/>
            </Link>*/}
            <Link href="/" className="text-3xl font-bold text-blue-700">
            V<span className="text-white text-2xl">estigo</span>
          </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuData.map((item) => (
              <div key={item.label} className="group relative">
                {item.links ? (
                  <>
                    <button className="flex items-center px-4 py-8 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#070B7F] dark:hover:text-[#4F55FF] transition-colors">
                      {item.label}
                      <svg className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className={`bg-white dark:bg-[#0A0E2E] rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 p-6 ${item.isMega ? 'w-[600px]' : 'w-56'}`}>
                        <div className={`grid gap-2 ${item.isMega ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {item.links.map((link, idx) => (
                            <motion.div key={link.name} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                              <Link 
                                href={link.href} 
                                className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#070B7F] dark:hover:text-white hover:bg-[#F0F2FF] dark:hover:bg-white/5 rounded-lg transition-all"
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
                  <Link href={item.href} className="px-4 py-8 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#070B7F] dark:hover:text-[#4F55FF] relative group">
                    {item.label}
                    <span className="absolute bottom-6 left-4 right-4 h-0.5 bg-[#070B7F] dark:bg-[#4F55FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            ))}
            
            <Link href="/contact" className="ml-4 px-6 py-2.5 bg-[#070B7F] dark:bg-[#070B7F] text-white text-sm font-semibold rounded-full hover:bg-[#05085C] dark:hover:bg-[#1A1F9C] hover:shadow-lg transition-all active:scale-95 border border-transparent dark:border-white/10">
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#020420] border-t dark:border-white/10 overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {menuData.map((item) => (
                <div key={item.label}>
                  {item.links ? (
                    <>
                      <button 
                        onClick={() => setActiveMobileSection(activeMobileSection === item.label ? null : item.label)}
                        className="flex justify-between items-center w-full p-3 text-base font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
                      >
                        {item.label}
                        <motion.svg animate={{ rotate: activeMobileSection === item.label ? 180 : 0 }} className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {activeMobileSection === item.label && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 space-y-1">
                            {item.links.map((sub) => (
                              <Link key={sub.name} href={sub.href} onClick={() => setIsMobileOpen(false)} className="block p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#070B7F] dark:hover:text-[#4F55FF]">
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} onClick={() => setIsMobileOpen(false)} className="block p-3 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-3">
                <Link href="/contact" className="block w-full text-center py-3 bg-[#070B7F] text-white rounded-xl font-bold hover:bg-[#05085C] transition-colors">
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