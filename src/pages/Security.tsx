import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, CheckCircle2, ShieldAlert, Fingerprint } from 'lucide-react';

export const Security = () => {
  const protocols = [
    {
      title: "Nuga Shield™ AI",
      icon: <ShieldAlert className="text-brand" />,
      desc: "Our proprietary AI monitors every transaction in real-time, flagging suspicious activity before it impacts your account."
    },
    {
      title: "Biometric Security",
      icon: <Fingerprint className="text-brand" />,
      desc: "Access your funds with FaceID or TouchID. We ensure that only you can authorize high-value transactions."
    },
    {
      title: "End-to-End Encryption",
      icon: <Lock className="text-brand" />,
      desc: "All data is encrypted using AES-256 standards, ensuring your financial information remains private and secure."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
            <Shield size={18} />
            Institutional-Grade Security
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-8"
          >
            Your Assets, <span className="text-brand">Fortified.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Security isn't just a feature at Nuga Pay—it's our foundation. We employ multiple layers of defense to protect your wealth and data.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          {protocols.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center mb-8">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 blur-[120px] rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8">Regulatory Compliance & Trust</h2>
              <div className="space-y-6">
                {[
                  "Fully licensed by the Central Bank of Nigeria (CBN)",
                  "NDPR Compliant for Data Protection",
                  "PCI-DSS Level 1 Certified for Card Security",
                  "Regular third-party security audits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-300">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Eye className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Real-time Audit Log</p>
                  <p className="text-slate-400 text-sm">Every action is tracked and verifiable</p>
                </div>
              </div>
              <div className="space-y-4 font-mono text-xs text-slate-400">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>[02:04:48] AUTH_SUCCESS</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>[02:04:45] TX_INITIATED: ₦500,000</span>
                  <span className="text-emerald-400">SECURE</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>[02:04:40] MFA_CHALLENGE_PASSED</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
