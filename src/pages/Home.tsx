import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Globe, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Smartphone,
  BarChart3,
  Lock,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: "https://picsum.photos/seed/nugacard/1920/1080?blur=2",
      alt: "Nuga Pay Premium Card"
    },
    {
      url: "https://picsum.photos/seed/nugapayment/1920/1080?blur=2",
      alt: "Secure Payment Modal"
    },
    {
      url: "https://picsum.photos/seed/nugalady/1920/1080?blur=2",
      alt: "Nigerian Professional using Nuga Pay"
    },
    {
      url: "https://picsum.photos/seed/nugamobile/1920/1080?blur=2",
      alt: "Nuga Pay Mobile App Interface"
    },
    {
      url: "https://picsum.photos/seed/nugabusiness/1920/1080?blur=2",
      alt: "Nuga Pay Business Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].url} 
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 lg:via-white/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Empowering Nigeria's Digital Economy
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6"
            >
              The Future of <span className="text-brand">Nigerian Finance.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-700 leading-relaxed mb-10 max-w-xl"
            >
              Nuga Pay is the premier fintech subsidiary of Nuga Group. Seamlessly bridge the gap between local commerce and global opportunities with Nigeria's most trusted payment gateway.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="bg-brand text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group">
                Open Naira Account
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/business" className="bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2">
                View Business Rates
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/nigeria${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">50k+</span> Nigerians trust Nuga Pay
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden">
              <div className="p-8">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">NugaPay Wallet Balance</p>
                    <h3 className="text-3xl font-display font-bold text-slate-900">₦2,450,000.00</h3>
                  </div>
                  <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="text-brand" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Globe className="text-emerald-600" size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">NIP Inward Transfer</p>
                        <p className="text-xs text-slate-500">From: Nuga Group Logistics</p>
                      </div>
                    </div>
                    <p className="font-bold text-emerald-600">+₦1,200,000.00</p>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
                        <Zap className="text-brand" size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Utility Payment</p>
                        <p className="text-xs text-slate-500">To: Eko Electricity (EKEDP)</p>
                      </div>
                    </div>
                    <p className="font-bold text-slate-900">-₦45,000.00</p>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-8 h-5 bg-slate-200 rounded" />
                      <div className="w-8 h-5 bg-slate-200 rounded" />
                    </div>
                    <button className="text-sm font-bold text-brand flex items-center gap-1">
                      View All Activity <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-xs font-bold text-slate-900">CBN Verified</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-slate-900 p-6 rounded-3xl shadow-2xl z-20 text-white w-56"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-brand" size={20} />
                <p className="text-sm font-bold">Secure Naira Vault</p>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-brand rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Globe className="text-brand" />,
      title: "Global Payments",
      description: "Send and receive money in 50+ currencies across 180 countries with mid-market exchange rates."
    },
    {
      icon: <CreditCard className="text-brand" />,
      title: "Virtual & Physical Cards",
      description: "Issue unlimited virtual cards for online spending and physical cards for your team globally."
    },
    {
      icon: <Smartphone className="text-brand" />,
      title: "Mobile First Experience",
      description: "Manage your entire financial life from our award-winning mobile application, anywhere, anytime."
    },
    {
      icon: <Building2 className="text-brand" />,
      title: "Business Banking",
      description: "Full-featured business accounts with multi-user access, API integrations, and automated bookkeeping."
    },
    {
      icon: <Lock className="text-brand" />,
      title: "Advanced Security",
      description: "256-bit encryption, multi-factor authentication, and real-time fraud monitoring protect your assets."
    },
    {
      icon: <Zap className="text-brand" />,
      title: "Instant Settlements",
      description: "No more waiting for days. Get your funds settled instantly with our proprietary Nuga-Net technology."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-4"
          >
            Our Solutions
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Everything you need to <br />scale your finances.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Nuga Pay provides a comprehensive suite of financial tools designed to help modern businesses and individuals thrive in a digital-first world.
          </motion.p>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand/5 rounded-2xl flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section id="security" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center p-12 lg:p-24 relative z-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand font-bold uppercase tracking-widest text-sm mb-6"
              >
                Security First
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-display font-bold text-white mb-8"
              >
                Your security is our <br />highest priority.
              </motion.h3>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Institutional-Grade Custody</h4>
                    <p className="text-slate-400">We use multi-signature cold storage and hardware security modules to ensure your funds are always safe.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Regulatory Compliance</h4>
                    <p className="text-slate-400">Nuga Pay is fully licensed and regulated in all jurisdictions where we operate, adhering to strict AML/KYC standards.</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Real-time Monitoring</h4>
                    <p className="text-slate-400">Our AI-driven systems monitor every transaction 24/7 to detect and prevent fraudulent activities before they happen.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand to-brand-dark p-1 rounded-[2.5rem] shadow-2xl">
                <div className="bg-slate-900 rounded-[2.4rem] p-8">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                        <Shield className="text-white" size={20} />
                      </div>
                      <span className="text-white font-bold">Nuga Shield™ Active</span>
                    </div>
                    <div className="px-3 py-1 bg-brand/20 text-brand rounded-full text-xs font-bold">
                      PROTECTED
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 bg-white/5 rounded-full w-full relative overflow-hidden">
                        <motion.div 
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/20 to-transparent"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl">
                      <p className="text-slate-500 text-xs mb-1">Encryption</p>
                      <p className="text-white font-bold">AES-256</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl">
                      <p className="text-slate-500 text-xs mb-1">Uptime</p>
                      <p className="text-white font-bold">99.99%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale">
            {['Stripe', 'Visa', 'Mastercard', 'AWS', 'Google Cloud'].map((partner) => (
              <span key={partner} className="text-2xl font-display font-black text-slate-900">{partner}</span>
            ))}
          </div>
        </div>
      </section>
      <Features />
      <TrustSection />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:100px_100px] opacity-20" />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-display font-bold text-white mb-8"
              >
                Ready to transform your <br />financial future?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-brand-light mb-12 max-w-2xl mx-auto"
              >
                Join thousands of businesses already using Nuga Pay to power their global operations. Start your journey today.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="bg-white text-brand px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-light transition-all shadow-xl">
                  Get Started Now
                </Link>
                <Link to="/contact" className="bg-brand-dark text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
