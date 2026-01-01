'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

import { 
  faCar, faLaptopCode, faCogs, faHotel, 
  faLandmark, faCartShopping, faHospitalUser, faShip, 
  faBoxOpen, faScroll, faFlaskVial, faLeaf, 
  faPrescriptionBottle, faShirt, faIndustry, faTree ,faClipboardCheck, 
  faHandHoldingHeart, 
  faBuildingShield, 
  faUsersGear, 
  faHeartPulse, 
  faAddressCard,
  faFileContract,
  faLightbulb, 
  faUsers,
  faHandshakeSimple,
  faGem
} from '@fortawesome/free-solid-svg-icons';

// Lucide Imports
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  Globe,
  Zap,
  Briefcase,
  Users,
  Star,
  ShieldCheck,
  Handshake,
} from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

/* ================= NAV DATA ================= */
const NAV_DATA = [
  { name: 'Home', href: '/' },
  {
    name: 'Company',
    href: '/company',
    icon: <Globe size={20} />,
    desc: 'Securing your future with trust since 2010.',
    subLinks: [
      { 
    name: 'Who We Are', 
    href: '/company/whoweare', 
    icon: <FontAwesomeIcon icon={faAddressCard} /> 
  },
  { 
    name: 'Why Us', 
    href: '/company/whyus', 
    icon: <FontAwesomeIcon icon={faLightbulb} /> 
  },
  { 
    name: 'Our Team', 
    href: '/company/ourteam', 
    icon: <FontAwesomeIcon icon={faUsers} /> 
  },
  { 
    name: 'Our Partners', 
    href: '/company/ourpartners', 
    icon: <FontAwesomeIcon icon={faHandshakeSimple} /> 
  },],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Zap size={20} />,
    desc: 'Smart, scalable insurance solutions.',
    subLinks: [
      { 
    name: 'Risk Assessment', 
    href: '/solutions/audits&riskassessment', 
    icon: <FontAwesomeIcon icon={faClipboardCheck} /> 
  },
  { 
    name: 'Claims Management', 
    href: '/solutions/claimsmanagement', 
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} /> 
  },
  { 
    name: 'Commercial Insurance', 
    href: '/solutions/commercialinsurance', 
    icon: <FontAwesomeIcon icon={faBuildingShield} /> 
  },
  { 
    name: 'Employee Benefits', 
    href: '/solutions/employeebenifits', 
    icon: <FontAwesomeIcon icon={faUsersGear} /> 
  },
  { 
    name: 'Life Insurance', 
    href: '/solutions/lifeinsurance', 
    icon: <FontAwesomeIcon icon={faHeartPulse} /> 
  },
  { 
    name: 'Green Energy Insurance', 
    href: '/solutions/greenXinsurance', 
    icon: <FontAwesomeIcon icon={faLeaf} /> 
  },
  { 
    name: 'Surity Bond', 
    href: '/solutions/suretybond&creditinsurance', 
    icon: <FontAwesomeIcon icon={faFileContract} /> 
  },
  { 
    name: 'Ability Suite', 
    href: '/solutions/abilitysuite', 
    icon: <FontAwesomeIcon icon={faGem} /> 
  },],
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: <Briefcase size={20} />,
    desc: 'Protection designed for every industry.',
    subLinks: [
      { name: 'Automotive', href: '/industries/automobile', icon: <FontAwesomeIcon icon={faCar} /> },
      { name: 'IT & Tech', href: '/industries/it', icon: <FontAwesomeIcon icon={faLaptopCode} /> },
      { name: 'Engineering', href: '/industries/engineering', icon: <FontAwesomeIcon icon={faCogs} /> },
      { name: 'Hospitality', href: '/industries/hospitality', icon: <FontAwesomeIcon icon={faHotel} /> },
      { name: 'BFSI', href: '/industries/BFSI', icon: <FontAwesomeIcon icon={faLandmark} /> },
      { name: 'E-Commerce', href: '/industries/e-commerce', icon: <FontAwesomeIcon icon={faCartShopping} /> },
      { name: 'Hospital & Education', href: '/industries/hospital&education', icon: <FontAwesomeIcon icon={faHospitalUser} /> },
      { name: 'Shipping', href: '/industries/shipping&odccargo', icon: <FontAwesomeIcon icon={faShip} /> },
      { name: 'Packaging', href: '/industries/packaging', icon: <FontAwesomeIcon icon={faBoxOpen} /> },
      { name: 'Paper Mills', href: '/industries/papermills', icon: <FontAwesomeIcon icon={faScroll} /> },
      { name: 'Chemical & Pharmacy', href: '/industries/chemical&pharmaceuticals', icon: <FontAwesomeIcon icon={faFlaskVial} /> },
      { name: 'Green Energy', href: '/industries/greenenergy', icon: <FontAwesomeIcon icon={faLeaf} /> },
      { name: 'Plastic', href: '/industries/plastic', icon: <FontAwesomeIcon icon={faPrescriptionBottle} /> },
      { name: 'Textile', href: '/industries/textile', icon: <FontAwesomeIcon icon={faShirt} /> },
      { name: 'SME & MSME', href: '/industries/SME&MSME', icon: <FontAwesomeIcon icon={faIndustry} /> },
      { name: 'Wood & Laminates', href: '/industries/wood&laminates', icon: <FontAwesomeIcon icon={faTree} /> },
    ],
  },
  { name: 'Insights', href: '/blogs' },
];

export default function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-0 w-full z-[100] ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90'}`}>
          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.svg" alt="Vestigo" width={140} height={40} />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_DATA.map((item) => {
              const isSectionActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <div key={item.name} className="relative" onMouseEnter={() => setActiveMenu(item.name)} onMouseLeave={() => setActiveMenu(null)}>
                  <Link href={item.href} className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
                    {item.name}
                    {item.subLinks && (
                      <ChevronDown size={12} className={`inline ml-1 transition-transform ${activeMenu === item.name || isSectionActive ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    )}
                    <span className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] bg-[#C9D600] rounded-full transition-all ${activeMenu === item.name || isSectionActive ? 'w-6 opacity-100 shadow-[0_0_10px_rgba(201,214,0,0.8)]' : 'w-0 opacity-0'}`} />
                  </Link>

                  <AnimatePresence>
                    {item.subLinks && activeMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 mt-6"
                        style={{ width: item.subLinks.length > 10 ? '1100px' : item.subLinks.length > 6 ? '850px' : '600px' }}
                      >
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#E3F6FF] via-[#D7EEFF] to-[#F8FDFF] shadow-[0_30px_80px_rgba(28,42,125,0.35)] border border-[#C9D600]/30">
                          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-br from-[#1C2A7D] to-[#2F6BFF] p-6 text-white">
                            <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
                            <p className="text-sm font-medium text-white/90">{item.desc}</p>
                          </div>

                          <div className={`ml-48 p-8 grid gap-4 ${item.subLinks.length > 10 ? 'grid-cols-4' : item.subLinks.length > 5 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                            {item.subLinks.map((sub) => (
                              <Link key={sub.name} href={sub.href} className="group flex flex-row items-center gap-3 p-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/20 hover:bg-white/70 transition-all shadow-sm">
                                <div className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#4FC3F7] to-[#2F6BFF] text-white text-[14px]">
                                  {sub.icon}
                                </div>
                                <div className="relative">
                                  <p className="font-bold text-[10px] leading-tight uppercase tracking-wider text-[#1C2A7D]">{sub.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA & MOBILE TRIGGER */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <PhoneCall size={16} className="text-slate-400" />
              <Link href="/contacts" className="bg-[#1C2A7D] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#2F6BFF]">CONTACT</Link>
            </div>
            <button onClick={() => setIsMobileOpen(true)} className="lg:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition">
              <Menu size={20} className="text-[#1C2A7D]" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAV OVERLAY ================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[150] lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <Image src="/logo.svg" alt="Vestigo" width={120} height={35} />
              <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-slate-100 rounded-full">
                <X size={24} className="text-[#1C2A7D]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {NAV_DATA.map((item) => (
                <div key={item.name} className="space-y-4">
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMobileOpen(false)}
                    className="text-xl font-bold text-[#1C2A7D] flex items-center gap-2"
                  >
                    {item.name}
                  </Link>
                  {item.subLinks && (
                    <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100">
                      {item.subLinks.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          onClick={() => setIsMobileOpen(false)}
                          className="flex items-center gap-4 text-slate-600 py-1"
                        >
                          <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 shadow-sm">
                            {sub.icon}
                          </span>
                          <span className="text-sm font-semibold">{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50">
              <Link 
                href="/contacts" 
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-[#1C2A7D] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} /> CALL US NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}