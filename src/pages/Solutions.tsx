import React from 'react';
import { motion } from 'motion/react';
import { Globe, CreditCard, Smartphone, Zap, ArrowRight } from 'lucide-react';

export const Solutions = () => {
  const solutions = [
    {
      title: "Global Remittance",
      icon: <Globe className="text-brand" size={32} />,
      description: "Send money to Nigeria from anywhere in the world with zero hidden fees and instant delivery to any bank account.",
      features: ["Real-time exchange rates", "Instant NIP settlements", "Zero transfer fees for first 3 months"]
    },
    {
      title: "Virtual Dollar Cards",
      icon: <CreditCard className="text-brand" size={32} />,
      description: "Pay for Spotify, Netflix, AWS, and global vendors without limits. Our virtual cards work everywhere.",
      features: ["Instant issuance", "High spending limits", "3D Secure protection"]
    },
    {
      title: "Nuga Checkout",
      icon: <Zap className="text-brand" size={32} />,
      description: "The fastest way for Nigerian businesses to accept payments globally. One integration, infinite possibilities.",
      features: ["Accept Naira & USD", "Fraud protection built-in", "Developer-friendly APIs"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6"
          >
            Financial Solutions for the <span className="text-brand">Modern World.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            From personal wealth management to enterprise-grade payment infrastructure, Nuga Pay provides the tools you need to succeed in the digital economy.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {solutions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{item.description}</p>
              <ul className="space-y-3 mb-8">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="text-brand font-bold flex items-center gap-2 group">
                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Built for Developers, <br />Trusted by Founders.</h2>
              <p className="text-slate-400 text-lg mb-8">
                Our robust APIs allow you to integrate Nuga Pay into your existing workflow in minutes. Whether you're building a marketplace or a subscription service, we've got you covered.
              </p>
              <div className="flex gap-4">
                <button className="bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all">
                  Read Documentation
                </button>
                <button className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                  Get API Keys
                </button>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm text-emerald-400 border border-white/5 shadow-2xl">
              <pre>
                {`const nuga = require('nugapay');

await nuga.payments.create({
  amount: 500000, // 500,000 Naira
  currency: 'NGN',
  customer: 'customer_id_123',
  metadata: {
    order_id: 'ORDER_99'
  }
});`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
