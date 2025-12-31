'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
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
      { name: 'Who We Are', href: '/company/whoweare', icon: <ShieldCheck size={16} /> },
      { name: 'Why Us', href: '/company/whyus', icon: <Star size={16} /> },
      { name: 'Our Team', href: '/company/ourteam', icon: <Users size={16} /> },
      { name: 'Our Partners', href: '/company/ourpartners', icon: <Handshake size={16} /> },
    ],
  },

  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Zap size={20} />,
    desc: 'Smart, scalable insurance solutions.',
    subLinks: [
      { name: 'Risk Assessment', href: '/solutions/audits&riskassessment', icon: <ShieldCheck size={16} /> },
      { name: 'Claims Management', href: '/solutions/claimsmanagement', icon: <Users size={16} /> },
      { name: 'Commercial Insurance', href: '/solutions/commercialinsurance', icon: <Briefcase size={16} /> },
      { name: 'Employee Benefits', href: '/solutions/employeebenifits', icon: <Users size={16} /> },
      { name: 'Life Insurance', href: '/solutions/lifeinsurance', icon: <ShieldCheck size={16} /> },
    ],
  },

  {
    name: 'Industries',
    href: '/industries',
    icon: <Briefcase size={20} />,
    desc: 'Protection designed for every industry.',
    subLinks: [
      { name: 'Automotive', href: '/industries/automobile', icon: <Briefcase size={16} /> },
      { name: 'IT & Tech', href: '/industries/it', icon: <Zap size={16} /> },
      { name: 'Engineering', href: '/industries/engineering', icon: <ShieldCheck size={16} /> },
      { name: 'Hospitality', href: '/industries/hospitality', icon: <Users size={16} /> },
      { name: 'Automotive', href: '/industries/automobile', icon: <Briefcase size={16} /> },
      { name: 'IT & Tech', href: '/industries/it', icon: <Zap size={16} /> },
      { name: 'Engineering', href: '/industries/engineering', icon: <ShieldCheck size={16} /> },
      { name: 'Hospitality', href: '/industries/hospitality', icon: <Users size={16} /> },
      { name: 'Automotive', href: '/industries/automobile', icon: <Briefcase size={16} /> },
      { name: 'IT & Tech', href: '/industries/it', icon: <Zap size={16} /> },
      { name: 'Engineering', href: '/industries/engineering', icon: <ShieldCheck size={16} /> },
      { name: 'Hospitality', href: '/industries/hospitality', icon: <Users size={16} /> },
      { name: 'Automotive', href: '/industries/automobile', icon: <Briefcase size={16} /> },
      { name: 'IT & Tech', href: '/industries/it', icon: <Zap size={16} /> },
      { name: 'Engineering', href: '/industries/engineering', icon: <ShieldCheck size={16} /> },
      { name: 'Hospitality', href: '/industries/hospitality', icon: <Users size={16} /> },
    ],
  },

  { name: 'Insights', href: '/blogs' },
];

export default function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-0 w-full z-[100] ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all
          ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90'}
        `}
        >
          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.png" alt="Vestigo" width={140} height={40} />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_DATA.map((item) => {
              const isSectionActive =
                pathname === item.href ||
                pathname.startsWith(item.href + '/');

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {/* TOP LINK */}
                  <Link
                    href={item.href}
                    className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
                  >
                    {item.name}

                    {item.subLinks && (
                      <ChevronDown
                        size={12}
                        className={`inline ml-1 transition-transform
                        ${
                          activeMenu === item.name || isSectionActive
                            ? 'rotate-180 text-blue-600'
                            : 'text-slate-400'
                        }
                      `}
                      />
                    )}

                    {/* YELLOW UNDERLINE */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] bg-[#C9D600] rounded-full transition-all
                      ${
                        activeMenu === item.name || isSectionActive
                          ? 'w-6 opacity-100 shadow-[0_0_10px_rgba(201,214,0,0.8)]'
                          : 'w-0 opacity-0'
                      }
                    `}
                    />
                  </Link>

                  {/* ================= DROPDOWN ================= */}
                  {/* ================= DYNAMIC DROPDOWN ================= */}
<AnimatePresence>
  {item.subLinks && activeMenu === item.name && (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 -translate-x-1/2 mt-6"
      // Dynamic Width Calculation based on link count
      style={{
        width: item.subLinks.length > 10 ? '1200px' : item.subLinks.length > 5 ? '900px' : '600px',
      }}
    >
      <div className="relative rounded-3xl overflow-hidden
        bg-gradient-to-br from-[#E3F6FF] via-[#D7EEFF] to-[#F8FDFF]
        shadow-[0_30px_80px_rgba(28,42,125,0.35)]
        border border-[#C9D600]/30"
      >
        {/* LEFT PANEL */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-br from-[#1C2A7D] to-[#2F6BFF] p-6 text-white">
          <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
            {item.icon}
          </div>
          <p className="text-sm font-medium text-white/90">
            {item.desc}
          </p>
        </div>

        {/* DYNAMIC GRID LINKS */}
        <div 
          className={`ml-48 p-8 grid gap-5 ${
            item.subLinks.length > 10 
              ? 'grid-cols-4' // Big list: 6 columns
              : item.subLinks.length > 5 
                ? 'grid-cols-3' // Medium list: 4 columns
                : 'grid-cols-2' // Small list: 2 columns
          }`}
        >
          {item.subLinks.map((sub) => {
    const isSubActive = pathname === sub.href;

    return (
      <Link
        key={sub.name}
        href={sub.href}
        className="group flex flex-row items-center gap-3 p-3 rounded-xl
        bg-white/40 backdrop-blur-md border border-white/20
        hover:bg-white/70 transition-all duration-300
        shadow-sm hover:shadow-lg"
      >
        {/* ICON/AVATAR */}
        <div
          className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center
          bg-gradient-to-br from-[#4FC3F7] to-[#2F6BFF]
          text-white shadow-md group-hover:scale-110 transition-transform"
        >
          {sub.icon}
        </div>

        {/* TEXT */}
        <div className="relative flex items-center">
          <p className={`font-bold text-[11px] leading-tight uppercase tracking-wider
            ${isSubActive ? 'text-blue-700' : 'text-[#1C2A7D]'}`}
          >
            {sub.name}
          </p>
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-[#C9D600] rounded-full transition-all
            ${isSubActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
          />
        </div>
      </Link>
    );
})}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <PhoneCall size={16} className="text-slate-400" />
            <Link
              href="/contacts"
              className="bg-[#1C2A7D] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#2F6BFF]"
            >
              CONTACT
            </Link>
          </div>

          {/* MOBILE ICON */}
          <button className="lg:hidden p-2 rounded-lg bg-slate-100">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
