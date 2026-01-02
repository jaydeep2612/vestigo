'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function SlimFooter() {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={16} />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={16} />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, href: 'https://linkedin.com' },
    { name: 'Google', icon: <Globe size={16} />, href: 'https://google.com' },
  ];

  return (
    /* 1. PARENT CONTAINER: Background flows to the bottom */
    <div className="relative w-full bg-[url('/footer.jpeg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      
      {/* 2. GRADIENT OVERLAY: Transparent top to solid dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0B1120]/85 to-[#0B1120] z-0" />

      {/* 3. CTA SECTION: Reduced height to 200px to save space */}
      <section className="relative z-10 w-full h-[200px] flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h2 className="text-white text-1xl md:text-3xl font-black uppercase tracking-tighter mb-2 leading-tight">
            Protect your business with the <br /> 
            <span className="text-[#4169E1]">right insurance strategy</span>
          </h2>
          <p className="text-white/80 text-sm mb-4 font-light">
            Schedule a no-obligation consultation with our experts today
          </p>
          <button className="bg-[#4169E1] hover:bg-white hover:text-[#0B1120] text-white font-bold py-2.5 px-8 rounded-lg transition-all uppercase text-[10px] tracking-widest shadow-xl">
            Request Consultation
          </button>
        </div>
      </section>

      {/* 4. FOOTER: Minimal vertical padding (py-4) to make it slim */}
      <footer className="relative z-10 bg-transparent py-4 text-slate-400">
        <div className="max-w-7xl mx-auto px-1">
          
          {/* Main Grid: Using gap-4 for a tight vertical profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">
            
            {/* Logo & About */}
            <div className="lg:col-span-1 space-y-2">
              <Image
                src="/logo.png"
                alt="Vestigo Logo"
                width={100}
                height={28}
                className=""
              />
              <p className="text-[14px] leading-tight text-slate-300">
                Innovative digital insurance solutions protecting businesses worldwide.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/10"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company: Smaller Title font (11px) */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold text-[15px] uppercase tracking-[0.2em] mb-3 relative inline-block">
                Company
                <span className="absolute -bottom-1 left-0 w-4 h-0.5 bg-blue-600"></span>
              </h3>
              <ul className="space-y-1 mt-1 text-[15px]">
                <li><Link href="/company/whoweare" className="hover:text-white transition-all">Who We Are</Link></li>
                <li><Link href="/company/whyus" className="hover:text-white transition-all">Why Us</Link></li>
                <li><Link href="/company/ourteam" className="hover:text-white transition-all">Our Team</Link></li>
                <li><Link href="/company/ourpartners" className="hover:text-white transition-all">Our Partners</Link></li>
              </ul>
            </div>

            {/* Industries: 4 Column layout preserved but spaced tighter */}
            <div className="lg:col-span-2 ">
              <h3 className="text-white  font-bold text-[15px] uppercase tracking-[0.2em] mb-3 relative inline-block">
                Industries
                <span className="absolute -bottom-1 left-0 w-4 h-0.5 bg-blue-600"></span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 text-[14px]">
                <ul className="space-y-1 mt-1">
                  <li><Link href="#" className="hover:text-white truncate block">Auto Mobile</Link></li>
                  <li><Link href="#" className="hover:text-white block">BFSI</Link></li>
                  <li><Link href="#" className="hover:text-white truncate block">Chem/Pharma</Link></li>
                  <li><Link href="#" className="hover:text-white block">E-Com</Link></li>
                </ul>
                <ul className="space-y-1 mt-1">
                  <li><Link href="#" className="hover:text-white block">Engineering</Link></li>
                  <li><Link href="#" className="hover:text-white truncate block">Green Energy</Link></li>
                  <li><Link href="#" className="hover:text-white block">Hospital</Link></li>
                  <li><Link href="#" className="hover:text-white block">Hospitality</Link></li>
                </ul>
                <ul className="space-y-1 mt-1">
                  <li><Link href="#" className="hover:text-white block">IT & Tech</Link></li>
                  <li><Link href="#" className="hover:text-white block">Packaging</Link></li>
                  <li><Link href="#" className="hover:text-white truncate block">Shipping</Link></li>
                  <li><Link href="#" className="hover:text-white block">SME/MSME</Link></li>
                </ul>
                <ul className="space-y-1 mt-1">
                  <li><Link href="#" className="hover:text-white truncate block">Paper Mills</Link></li>
                  <li><Link href="#" className="hover:text-white block">Plastic</Link></li>
                  <li><Link href="#" className="hover:text-white block">TextTile</Link></li>
                  <li><Link href="#" className="hover:text-white truncate block">Wood</Link></li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1 ">
              <h3 className="text-white font-bold text-[15px] uppercase tracking-[0.2em] mb-3 relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-4 h-0.5 bg-blue-600"></span>
              </h3>
              <ul className="space-y-1 text-[15px] mt-1">
                <li><Link href="/solutions" className="hover:text-white transition-all block">Risk Solutions</Link></li>
                <li><Link href="/industries" className="hover:text-white transition-all block">Industries</Link></li>
                <li><Link href="/blogs" className="hover:text-white transition-all block">Insights</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-all block">Careers</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold text-[15px] uppercase tracking-[0.2em] mb-3 relative inline-block">
                Contact
                <span className="absolute -bottom-1 left-0 w-4 h-0.5 bg-blue-600"></span>
              </h3>
              <ul className="space-y-2 text-[15px] mt-1">
                <li className="flex items-center gap-2 group">
                    <Phone size={10} className="text-blue-400" />
                    <span className="text-slate-300 group-hover:text-white">+1 234 567 890</span>
                </li>
                <li className="flex items-center gap-2 group">
                    <Mail size={10} className="text-blue-400" />
                    <span className="text-slate-300 group-hover:text-white truncate">info@vestigo.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Tight mt-4 and pt-3 */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col md:flex-row justify-between text-slate-500 items-center gap-2 text-[9px] uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} VESTIGO RISK SOLUTIONS.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}