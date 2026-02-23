import React from 'react';
import { motion } from 'motion/react';
import { Building2, BarChart3, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export const Business = () => {
  const features = [
    {
      title: "Corporate Accounts",
      icon: <Building2 className="text-brand" />,
      desc: "Dedicated Naira and USD accounts for your business with high transaction limits."
    },
    {
      title: "Payroll Automation",
      icon: <Users className="text-brand" />,
      desc: "Pay hundreds of employees across Nigeria instantly with one click."
    },
    {
      title: "Expense Management",
      icon: <BarChart3 className="text-brand" />,
      desc: "Track every kobo spent with real-time analytics and automated reporting."
    },
    {
      title: "Enterprise Security",
      icon: <ShieldCheck className="text-brand" />,
      desc: "Role-based access control and multi-signature approvals for all transfers."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Scale Your Business <br />with <span className="text-brand">Nuga Business.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              The all-in-one financial operating system for Nigerian enterprises. Manage payments, payroll, and expenses in one unified dashboard.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/20">
                Open Business Account
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Contact Sales
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/nugabusiness/800/600" 
              alt="Nuga Business Dashboard" 
              className="rounded-[3rem] shadow-2xl border border-slate-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <p className="text-slate-500 text-sm font-medium mb-2">Monthly Volume</p>
              <p className="text-3xl font-display font-bold text-slate-900">₦1.2B+</p>
              <div className="mt-4 flex gap-1">
                {[1,2,3,4,5,6].map(i => <div key={i} className="w-2 h-8 bg-brand/20 rounded-full" style={{ height: `${Math.random() * 40 + 20}px` }} />)}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand/10 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Ready to modernize your <br />business finances?</h2>
            <p className="text-brand-light text-xl mb-12 max-w-2xl mx-auto">
              Join over 5,000 Nigerian businesses scaling with Nuga Pay. Setup takes less than 10 minutes.
            </p>
            <button className="bg-white text-brand px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-light transition-all shadow-2xl">
              Get Started with Nuga Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
