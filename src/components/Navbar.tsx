import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Business', href: '/business' },
    { name: 'Security', href: '/security' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center shadow-lg shadow-brand/20 overflow-hidden">
            <img src="/logo.svg" alt="Nuga Pay Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-slate-900">Nuga<span className="text-brand">Pay</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
               <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                  <img src="/logo.svg" alt="Nuga Pay Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-slate-900">Nuga<span className="text-brand">Pay</span></span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-600">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 items-center justify-center flex-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-3xl font-display font-bold text-slate-900 hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/signup" className="w-full max-w-xs bg-brand text-white py-5 rounded-2xl font-bold text-xl mt-4 shadow-xl shadow-brand/20 text-center">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
