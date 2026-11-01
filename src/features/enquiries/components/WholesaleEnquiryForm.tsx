import React from 'react';
import { Phone, MessageCircle, Mail, User, Scale, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '@/components/ui';
import { contactConfig } from '@/config';
import { PRODUCTS } from '@/features/products/data/products.data';

export interface WholesaleEnquiryFormProps {
  initialProductId?: string;
  onSuccess?: () => void;
}

export const WholesaleEnquiryForm: React.FC<WholesaleEnquiryFormProps> = ({ initialProductId }) => {
  const selectedProduct = initialProductId
    ? PRODUCTS.find(p => p.id === initialProductId || p.slug === initialProductId)
    : undefined;

  const defaultMsg = selectedProduct
    ? `Hello Murugan K, I want to order bulk ${selectedProduct.name} (${selectedProduct.localName}) at ₹50/kg (Min 20 kg).`
    : `Hello Murugan K, I want to place a wholesale order for fresh produce at ₹50/kg (Min 20 kg).`;

  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(defaultMsg)}`;
  const mailtoSubject = encodeURIComponent(
    `Wholesale Order Requirement - Sri Harshi [${selectedProduct ? selectedProduct.name : 'Bulk Produce'}]`
  );
  const mailtoBody = encodeURIComponent(
    `Hello Murugan K,\n\n` +
      `I want to place a wholesale order:\n\n` +
      `Product: ${selectedProduct ? selectedProduct.name : 'Drumsticks / Pumpkin / Raw Banana / Guava'}\n` +
      `Price: ₹50 / kg\n` +
      `Minimum Order: 20 kg\n\n` +
      `Please contact me at your earliest convenience.\n\n` +
      `Thank you.`
  );
  const mailtoUrl = `mailto:${contactConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <GlassCard intensity="high" padding="lg" className="border border-emerald-200 shadow-glass">
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
          Direct Wholesale Booking
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
          Place Wholesale Order Directly
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Contact <strong>{contactConfig.person}</strong> directly to place your wholesale order at{' '}
          <strong>₹50 / kg</strong> with a minimum order of <strong>20 kg</strong>.
        </p>
      </div>

      {/* 3 Direct Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <a
          href={`tel:${contactConfig.phone}`}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-emerald-200 text-slate-900 font-bold text-sm shadow-xs hover:bg-emerald-50 hover:border-emerald-500 transition-all text-center"
        >
          <Phone className="w-5 h-5 text-emerald-600 mb-1.5" />
          <span className="text-[11px] text-slate-500">Call Murugan K</span>
          <span className="text-sm font-black">{contactConfig.phone}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all text-center hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5 fill-current mb-1.5" />
          <span className="text-[11px] text-emerald-100">WhatsApp Order</span>
          <span className="text-sm font-black">{contactConfig.phone}</span>
        </a>

        <a
          href={mailtoUrl}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-800 transition-all text-center"
        >
          <Mail className="w-5 h-5 mb-1.5" />
          <span className="text-[11px] text-slate-400">Email Murugan K</span>
          <span className="text-xs font-bold break-all">{contactConfig.email}</span>
        </a>
      </div>

      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-center text-xs text-slate-700 flex flex-wrap items-center justify-center gap-4">
        <span className="flex items-center gap-1 font-semibold text-emerald-900">
          <Scale className="w-3.5 h-3.5 text-emerald-600" />
          Rate: ₹50 / kg
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1 font-semibold text-emerald-900">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          Minimum Order: 20 kg
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1 text-slate-600">
          <User className="w-3.5 h-3.5 text-emerald-600" />
          Lead: {contactConfig.person}
        </span>
      </div>
    </GlassCard>
  );
};
