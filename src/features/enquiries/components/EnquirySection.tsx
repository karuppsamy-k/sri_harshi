import React from 'react';
import { Sparkles, Phone, MessageCircle, Mail, Scale, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '@/components/ui';
import { contactConfig } from '@/config';
import { PRODUCTS } from '@/features/products/data/products.data';

export interface EnquirySectionProps {
  selectedProductId?: string;
  id?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  selectedProductId,
  id = 'enquiry',
}) => {
  const selectedProduct = selectedProductId
    ? PRODUCTS.find(p => p.id === selectedProductId || p.slug === selectedProductId)
    : undefined;

  const defaultOrderMsg = selectedProduct
    ? `Hello Murugan K, I would like to order bulk ${selectedProduct.name} (${selectedProduct.localName}) at ₹50/kg (Min 20 kg). Please confirm delivery schedule.`
    : `Hello Murugan K, I would like to place a bulk wholesale produce order (₹50/kg, Min 20 kg). Please share current daily harvest availability.`;

  const whatsappOrderUrl = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(defaultOrderMsg)}`;

  const mailtoSubject = encodeURIComponent(
    `Wholesale Order Requirement - Sri Harshi [${selectedProduct ? selectedProduct.name : 'Bulk Produce'}]`
  );
  const mailtoBody = encodeURIComponent(
    `Hello Murugan K,\n\n` +
      `I would like to place a wholesale order for Sri Harshi produce:\n\n` +
      `Product: ${selectedProduct ? selectedProduct.name : 'Drumsticks / Pumpkin / Raw Banana / Guava'}\n` +
      `Price: ₹50 / kg\n` +
      `Minimum Order: 20 kg\n\n` +
      `Please contact me with delivery schedules and dispatch confirmation.\n\n` +
      `Thank you.`
  );
  const mailtoOrderUrl = `mailto:${contactConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id={id} className="section-padding relative overflow-hidden bg-slate-50/70">
      {/* Decorative ambient background mesh */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="container-app">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/70 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Wholesale Order Desk</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Instant Order Booking
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              No complicated forms to fill. Connect directly with{' '}
              <strong>{contactConfig.person}</strong> via phone, WhatsApp, or email to confirm your
              wholesale order at <strong>₹50 / kg</strong> with a minimum order of{' '}
              <strong>20 kg</strong>.
            </p>
          </div>

          {/* Main Direct Booking Glass Card */}
          <GlassCard
            intensity="high"
            padding="xl"
            className="border border-emerald-200/90 shadow-glass"
          >
            {/* Rates & Terms Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 mb-8 text-center">
              <div className="p-2">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Wholesale Flat Rate
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-900 tracking-tight">
                  ₹ 50 <span className="text-sm font-semibold text-emerald-700">/ kg</span>
                </span>
                <span className="text-[11px] text-emerald-700 block mt-0.5">All 4 Core Crops</span>
              </div>

              <div className="p-2 border-y sm:border-y-0 sm:border-x border-emerald-200/80">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Minimum Order
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-1">
                  <Scale className="w-5 h-5 text-emerald-600" />
                  20 kg
                </span>
                <span className="text-[11px] text-slate-600 block mt-0.5">
                  Flexible Bulk Batches
                </span>
              </div>

              <div className="p-2">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Contact Person
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                  {contactConfig.person}
                </span>
                <span className="text-[11px] text-emerald-700 block mt-0.5">
                  Direct Procurement Lead
                </span>
              </div>
            </div>

            {/* Direct Connect Options (3 Big Touch-Friendly Buttons) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Call Now */}
              <a
                href={`tel:${contactConfig.phone}`}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Call Murugan K
                </span>
                <span className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {contactConfig.phone}
                </span>
                <span className="text-[11px] text-emerald-700 mt-2 font-medium">
                  Tap to call directly
                </span>
              </a>

              {/* WhatsApp Now */}
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-emerald-600 text-white shadow-md hover:bg-emerald-700 transition-all text-center group hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-3">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider mb-1">
                  WhatsApp Order
                </span>
                <span className="text-base sm:text-lg font-black tracking-tight">
                  {contactConfig.phone}
                </span>
                <span className="text-[11px] text-emerald-100 mt-2 font-medium">
                  Instant order chat
                </span>
              </a>

              {/* Email Order */}
              <a
                href={mailtoOrderUrl}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Email Requirement
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors break-all">
                  {contactConfig.email}
                </span>
                <span className="text-[11px] text-emerald-700 mt-2 font-medium">
                  Send official email
                </span>
              </a>
            </div>

            {/* Produce Highlights Checklist */}
            <div className="pt-6 border-t border-slate-200/70">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 text-center sm:text-left">
                Available Produce for Daily Morning Dispatch (₹50 / kg • Min 20 kg):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs text-slate-700">
                {PRODUCTS.map(p => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">{p.name}</span>
                      <span className="text-[11px] text-emerald-700">{p.localName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
