import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900">Nuga<span className="text-brand">Pay</span></span>
            </div>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Leading the digital transformation of financial services as a proud member of the Nuga Group.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-brand hover:bg-brand/5 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Products</h4>
            <ul className="space-y-4">
              {['Personal Accounts', 'Business Banking', 'Global Transfers', 'Virtual Cards', 'API Access'].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Nuga Group', 'Careers', 'Press Kit', 'Contact Us', 'Legal'].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-slate-500 mb-4 text-sm">Get the latest fintech insights and product updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              />
              <button className="bg-brand text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-brand-dark transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Nuga Pay. A Nuga Group Subsidiary. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
