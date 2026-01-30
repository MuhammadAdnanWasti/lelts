'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";
import { User, LogOut, LayoutDashboard, ChevronDown, Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mock Tests', href: '/mock-tests' },
    { name: 'Practice', href: '/practice' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform duration-300">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-black text-xl tracking-tighter leading-none">IELTS.AI</span>
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mt-1">Practice Pro</span>
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden lg:flex items-center bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* --- ACTIONS --- */}
          <div className="hidden lg:flex items-center gap-4">
            {session ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-3 p-1.5 pr-4 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xs">
                    {session.user?.name?.[0]}
                  </div>
                  <ChevronDown size={14} className={`text-slate-400 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-64 bg-white rounded-[1.5rem] shadow-2xl border border-slate-100 p-2 z-50"
                    >
                      <div className="px-4 py-3 mb-2 bg-slate-50 rounded-xl">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Login as</p>
                        <p className="text-sm font-black text-slate-900 truncate">{session.user?.email}</p>
                      </div>
                      <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all">
                        <LayoutDashboard size={18} /> Dashboard
                      </Link>
                      <button onClick={() => signOut()} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all">
                        <LogOut size={18} /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="px-6 py-2.5 text-slate-600 font-bold text-sm hover:text-blue-600 transition-all">
                  Login
                </Link>
                <Link href="/start-mock" className="px-6 py-3 bg-slate-900 text-white font-bold text-sm rounded-2xl shadow-lg shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-100 transition-all">
                  Get Started Free
                </Link>
              </div>
            )}
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button 
            className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block text-xl font-bold text-slate-900 px-4 py-2 hover:bg-blue-50 rounded-xl">
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/start-mock" className="w-full py-4 bg-blue-600 text-white text-center font-bold rounded-2xl">
                  Start Free Mock Test
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;