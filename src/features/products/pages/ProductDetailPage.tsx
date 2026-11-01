import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Scale,
  MapPin,
  Calendar,
  Phone,
  MessageCircle,
  Mail,
  User,
} from 'lucide-react';
import { getProductBySlug } from '../services/product.service';
import { GlassCard, Badge, Button } from '@/components/ui';
import { contactConfig } from '@/config';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="section-padding text-center">
        <div className="container-app max-w-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Product Not Found</h2>
          <p className="text-sm text-slate-600 mb-6">
            The requested produce catalog item does not exist or has been updated.
          </p>
          <Button variant="primary" onClick={() => navigate('/products')}>
            View All Products
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMsg = `Hello Murugan K, I would like to order wholesale ${product.name} (${product.localName}) at ₹50/kg (Min 20 kg). Please confirm delivery availability.`;
  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  const mailtoSubject = encodeURIComponent(
    `Wholesale Order: ${product.name} (Min 20 kg at ₹50/kg)`
  );
  const mailtoBody = encodeURIComponent(
    `Hello Murugan K,\n\n` +
      `I want to place a bulk order for ${product.name} (${product.regionalName}):\n\n` +
      `Rate: ₹50 / kg\n` +
      `Minimum Order: 20 kg\n\n` +
      `Please contact me with scheduled delivery slots and intake confirmation.\n\n` +
      `Thank you.`
  );
  const mailtoUrl = `mailto:${contactConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="section-padding">
      <div className="container-app">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 sm:mb-8">
          <Link to="/" className="hover:text-emerald-700">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-emerald-700">
            Products
          </Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>

        {/* Product Details Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-14 sm:mb-16">
          {/* Left: Product Image Canvas */}
          <div className="lg:col-span-5 w-full">
            <GlassCard
              intensity="high"
              padding="none"
              className="border border-emerald-100 overflow-hidden"
            >
              <div className="aspect-4/3 p-6 sm:p-8 bg-gradient-to-b from-emerald-50/60 to-slate-50 flex items-center justify-center relative">
                <div className="absolute top-4 left-4">
                  <Badge variant="green" size="sm">
                    {product.available ? 'In Stock (Daily Harvest)' : 'Limited Supply'}
                  </Badge>
                </div>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Fast Facts Bar */}
              <div className="p-4 bg-white/90 border-t border-emerald-100/70 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Harvest Origin</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{product.origin}</span>
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Harvest Cycle</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{product.harvestSeason}</span>
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right: Product Specifications & Pricing */}
          <div className="lg:col-span-7 flex flex-col w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Wholesale Produce Spec</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg font-bold text-emerald-700 mb-4">
              Regional Tamil Name: {product.regionalName}
            </p>

            {/* Prominent Wholesale Price per Kilogram Banner */}
            <div className="flex flex-wrap items-center justify-between p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 mb-6 gap-3">
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                  Wholesale Flat Price
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-900 tracking-tight">
                  ₹ 50 <span className="text-sm font-semibold text-emerald-700">/ kg</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                  Minimum Order
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-800 flex items-center justify-end gap-1.5">
                  <Scale className="w-4 h-4 text-emerald-600" />
                  20 kg
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Quality Specs Highlight Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100/80 shadow-xs mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Grading & Intake Standards</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-2.5 rounded-lg bg-emerald-50/50">
                  <span className="block text-slate-500 font-medium">Grading:</span>
                  <span className="font-bold text-slate-900">{product.qualityInfo.grading}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-50/50">
                  <span className="block text-slate-500 font-medium">Freshness Window:</span>
                  <span className="font-bold text-slate-900">{product.qualityInfo.freshness}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-50/50">
                  <span className="block text-slate-500 font-medium">Warehouse Shelf Life:</span>
                  <span className="font-bold text-slate-900">{product.qualityInfo.shelfLife}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-50/50">
                  <span className="block text-slate-500 font-medium">Sorting Specs:</span>
                  <span className="font-bold text-slate-900">
                    {product.qualityInfo.sortingSpecs}
                  </span>
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                {product.qualityInfo.highlights.map(h => (
                  <div key={h} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Quantity Summary */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-emerald-600" />
                <span>Wholesale Ordering Terms</span>
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-700">
                <div>
                  <span className="block text-slate-500">Rate per Kilogram:</span>
                  <span className="text-base font-black text-emerald-800">₹ 50 / kg</span>
                </div>
                <div>
                  <span className="block text-slate-500">Minimum Wholesale Order:</span>
                  <span className="text-base font-bold text-slate-900">20 kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Order Booking Card (No Form) */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-slate-200">
          <GlassCard
            intensity="high"
            padding="lg"
            className="border border-emerald-200 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Order Bulk {product.name} Directly
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-lg mx-auto">
              Ready to schedule a delivery? Contact <strong>{contactConfig.person}</strong> directly
              at <strong>₹50 / kg</strong> (Minimum Order: <strong>20 kg</strong>).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${contactConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-emerald-200 text-slate-900 font-bold text-sm shadow-xs hover:bg-emerald-50 hover:border-emerald-500 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call {contactConfig.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-800 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Order</span>
              </a>
            </div>

            <div className="mt-4 pt-3 text-[11px] text-slate-500 flex items-center justify-center gap-2">
              <User className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                Contact: {contactConfig.person} • {contactConfig.email}
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
