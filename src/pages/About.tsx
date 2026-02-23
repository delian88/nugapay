import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, Users, Target, Heart } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: "Founded", value: "2018" },
    { label: "Employees", value: "250+" },
    { label: "Active Users", value: "500k+" },
    { label: "Transaction Vol.", value: "₦500B+" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-8"
            >
              The Nuga Pay <span className="text-brand">Story.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-600 mb-8 leading-relaxed"
            >
              Nuga Pay was born out of a simple realization: Nigeria's digital economy was growing faster than its financial infrastructure. As a subsidiary of the Nuga Group, we set out to build the bridge.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-slate-500 mb-10 leading-relaxed"
            >
              Today, we are more than just a payment gateway. We are the financial backbone for thousands of businesses and the trusted wealth partner for half a million Nigerians.
            </motion.p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-display font-bold text-slate-900">{s.value}</p>
                  <p className="text-sm text-slate-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img 
              src="https://picsum.photos/seed/nugateam/800/1000" 
              alt="Nuga Pay Team" 
              className="rounded-[4rem] shadow-2xl border border-slate-100"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To democratize access to world-class financial services for every Nigerian, regardless of their location or business size.
            </p>
          </div>
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the primary gateway for African capital, connecting the continent to global markets through technology and trust.
            </p>
          </div>
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
            <p className="text-slate-600 leading-relaxed">
              Integrity, Innovation, and Inclusion. We build with the customer at the center of every decision we make.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Part of the Nuga Group Family</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2">
                <Building2 className="text-slate-900" />
                <span className="font-bold">Nuga Logistics</span>
             </div>
             <div className="flex items-center gap-2">
                <Building2 className="text-slate-900" />
                <span className="font-bold">Nuga Energy</span>
             </div>
             <div className="flex items-center gap-2">
                <Building2 className="text-slate-900" />
                <span className="font-bold">Nuga Tech</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
