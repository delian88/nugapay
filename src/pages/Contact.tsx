import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-8">
              Talk to an <span className="text-brand">Expert.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have questions about how Nuga Pay can help your business? Our team of financial experts is here to help you navigate the future of finance.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">support@nugapay.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+234 (0) 800 NUGA PAY</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">Nuga Tower, Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Work Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand" placeholder="Tell us about your business needs..."></textarea>
              </div>
              <button className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-2">
                Send Message
                <MessageSquare size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
