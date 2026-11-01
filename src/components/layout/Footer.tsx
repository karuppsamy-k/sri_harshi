import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, ShieldCheck, User } from 'lucide-react';
import { contactConfig } from '@/config';
import { PRODUCTS } from '@/features/products/data/products.data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-emerald-950 text-slate-200 overflow-hidden border-t border-emerald-900/60">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-app pt-14 pb-10 sm:pt-16 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-emerald-900/60">
          {/* Col 1: Brand & Bio (Spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-lg font-bold shadow-md">
                🌿
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Sri Harshi</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Dedicated B2B wholesale vegetable and fruit supplier. We partner with Zepto vendors,
              quick-commerce fulfillment centers, and wholesale buyers across South India to supply
              Grade-A fresh produce in multi-tonne volumes.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-800 text-xs font-medium text-emerald-300 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tailored for Quick Commerce & Mandi Procurement</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="/#products" className="hover:text-emerald-400 transition-colors">
                  Wholesale Produce
                </a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-emerald-400 transition-colors">
                  Why Sri Harshi
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-emerald-400 transition-colors">
                  About Our Supply Chain
                </a>
              </li>
              <li>
                <a href="/#enquiry" className="hover:text-emerald-400 transition-colors">
                  Enquire Now
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-emerald-400 transition-colors">
                  Procurement Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Initial Products (All 4 products) */}
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
              Core Produce
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              {PRODUCTS.map(product => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{product.name}</span>
                    <span className="text-[11px] text-emerald-400/80 group-hover:text-emerald-300">
                      ({product.localName})
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Business Contact Information */}
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
              Procurement Desk
            </h5>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-semibold text-white">{contactConfig.person}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${contactConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={contactConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {contactConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{contactConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Disclaimers */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {currentYear} Sri Harshi Wholesale Supplies. All rights reserved.</p>
          <p className="text-center sm:text-right text-slate-400">
            Contact: {contactConfig.person} • {contactConfig.email} • {contactConfig.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};
