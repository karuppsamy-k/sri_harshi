import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Truck } from 'lucide-react';
import { Button, GlassCard, Badge } from '@/components/ui';
import { PRODUCTS } from '@/features/products/data/products.data';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onEnquiryClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onEnquiryClick }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-10 sm:pb-20">
      {/* Background ambient glowing mesh */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-200/40 via-green-100/30 to-amber-100/40 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300/20 blur-2xl rounded-full pointer-events-none -z-10" />

      <div className="container-app">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 shadow-2xs mb-5 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-emerald-800 tracking-wide uppercase">
                B2B Wholesale Procurement Partner
              </span>
              <span className="text-slate-300 hidden xs:inline">•</span>
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 hidden xs:flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Zepto Vendor Ready
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.15] mb-5 sm:mb-6">
              Fresh Vegetables.{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent">
                Reliable Wholesale Supply.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Your trusted partner for quality vegetables and fruits in bulk quantities. Delivering
              fresh produce with consistency, quality, and reliability for Zepto dark stores,
              hypermarkets, and wholesale procurement networks.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={onEnquiryClick || (() => handleScroll('enquiry'))}
                rightIcon={<Sparkles className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-md py-3.5"
              >
                Bulk Enquiry
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreClick || (() => handleScroll('products'))}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto py-3.5"
              >
                Explore Products
              </Button>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full pt-4 border-t border-emerald-100/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-Tonne Availability</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Farm-Direct Grading</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Supply Disruption</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Column (Glassmorphism preview cards) */}
          <div className="lg:col-span-5 relative w-full">
            {/* Main Central Glass Card */}
            <GlassCard
              intensity="high"
              padding="md"
              className="relative z-10 border border-white/90 shadow-glass"
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-emerald-50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">
                    Daily Bulk Supply Status
                  </span>
                </div>
                <Badge variant="green" size="sm">
                  Active Dispatch Hub
                </Badge>
              </div>

              {/* Dynamic 4 Produce Quick Showcase */}
              <div className="space-y-2.5">
                {PRODUCTS.map(prod => (
                  <div
                    key={prod.id}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/70 border border-emerald-100/80 hover:bg-white transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/60 p-1 flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] text-emerald-700 font-medium truncate">
                          {prod.localName} • ₹ {prod.pricePerKg ?? 'XX'} / kg
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 pl-2">
                      <span className="inline-block text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                        Bulk Ready
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metric stats card embedded inside */}
              <div className="mt-3.5 pt-3.5 border-t border-emerald-100/70 grid grid-cols-2 gap-2.5 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200/40">
                  <div className="text-base sm:text-lg font-black text-emerald-800">
                    Multi-Tonne
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-600">
                    Daily Dispatch
                  </div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200/40">
                  <div className="text-base sm:text-lg font-black text-emerald-800">
                    &lt; 18 Hours
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-600">
                    Farm-to-Hub Transit
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Floating side badge (Zepto Partner) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200/80 shadow-lg">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Direct Mandi & Dark Store Supply</p>
                <p className="text-[11px] text-emerald-700 font-semibold">
                  Drumsticks, Pumpkin, Raw Banana, Guava
                </p>
              </div>
            </div>

            {/* Floating top badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 p-2 px-3 rounded-full bg-white/95 backdrop-blur-xl border border-emerald-200/80 shadow-md">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800">
                Transparent Wholesale Pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
