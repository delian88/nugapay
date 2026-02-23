import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand/20">
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Create your Nuga Pay account</h1>
            <p className="text-slate-600">Join the future of Nigerian finance in minutes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="+234..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Password</label>
                <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="••••••••" />
              </div>
              
              <div className="flex items-start gap-3 py-2">
                <div className="mt-1">
                  <CheckCircle2 className="text-brand" size={16} />
                </div>
                <p className="text-xs text-slate-500">
                  By signing up, you agree to our <Link to="/terms" className="text-brand font-bold">Terms of Service</Link> and <Link to="/privacy" className="text-brand font-bold">Privacy Policy</Link>.
                </p>
              </div>

              <button className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-2 group">
                Create Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-600">
                Already have an account? <Link to="/login" className="text-brand font-bold">Sign in</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
