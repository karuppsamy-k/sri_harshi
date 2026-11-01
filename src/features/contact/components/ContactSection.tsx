import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Sparkles, ArrowUpRight, User } from 'lucide-react';
import { GlassCard } from '@/components/ui';
import { contactConfig } from '@/config';

export const ContactSection: React.FC<{ id?: string }> = ({ id = 'contact' }) => {
  return (
    <section id={id} className="section-padding relative">
      <div className="container-app">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/70 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Commercial Coordination</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Connect With Our Procurement Desk
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have questions about delivery slots, custom grading, or multi-tonne standing orders? Our
            commercial desk is directly managed by our procurement lead.
          </p>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {/* Contact Person & Phone */}
          <GlassCard
            interactive
            padding="lg"
            className="flex flex-col justify-between border border-emerald-100/80"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
                <User className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Business Contact Person
              </span>
              <h4 className="text-lg font-black text-slate-900 mb-1">{contactConfig.person}</h4>
              <p className="text-xs text-slate-500 mb-3">Procurement & Operations Lead</p>
              <a
                href={`tel:${contactConfig.phone}`}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-emerald-800 hover:text-emerald-600 transition-colors"
                aria-label={`Call ${contactConfig.person} at ${contactConfig.phone}`}
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{contactConfig.phone}</span>
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Direct hotline • Mon – Sat
            </div>
          </GlassCard>

          {/* WhatsApp Direct */}
          <GlassCard
            interactive
            padding="lg"
            className="flex flex-col justify-between border border-emerald-100/80"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Instant Messaging
              </span>
              <h4 className="text-lg font-black text-slate-900 mb-1">WhatsApp Desk</h4>
              <p className="text-xs text-slate-500 mb-3">Quick pricing & daily harvest updates</p>
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-emerald-800 hover:text-emerald-600 transition-colors"
                aria-label="Chat on WhatsApp with Sri Harshi"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{contactConfig.phone}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Opens in WhatsApp (24/7 enquiries)
            </div>
          </GlassCard>

          {/* Email */}
          <GlassCard
            interactive
            padding="lg"
            className="flex flex-col justify-between border border-emerald-100/80"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Official Correspondence
              </span>
              <h4 className="text-lg font-black text-slate-900 mb-1">Email Desk</h4>
              <p className="text-xs text-slate-500 mb-3">Formal RFPs & commercial invoicing</p>
              <a
                href={`mailto:${contactConfig.email}`}
                className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-600 break-all block transition-colors"
                aria-label={`Send email to ${contactConfig.email}`}
              >
                {contactConfig.email}
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Quotes issued within 4 business hours
            </div>
          </GlassCard>

          {/* Supply Hub Location */}
          <GlassCard
            interactive
            padding="lg"
            className="flex flex-col justify-between border border-emerald-100/80"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Sorting & Supply Hub
              </span>
              <h4 className="text-lg font-black text-slate-900 mb-1">Central Distribution</h4>
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed mb-3">
                {contactConfig.address}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Tamil Nadu Grower Belts & Distribution Docks
            </div>
          </GlassCard>
        </div>

        {/* Central Direct Action Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block mb-1">
              Zepto Vendors & Procurement Managers
            </span>
            <h3 className="text-xl sm:text-3xl font-black mb-2">
              Ready to lock in your next produce consignment?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Connect directly with <strong>{contactConfig.person}</strong> to confirm tomorrow's
              harvest availability and scheduled morning dispatch.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-bold text-sm shadow-md hover:bg-emerald-50 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-700 text-emerald-700" />
              <span>WhatsApp: {contactConfig.phone}</span>
            </a>

            <a
              href={`tel:${contactConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white border border-emerald-500/50 font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {contactConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
