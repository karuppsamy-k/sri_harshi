import React from 'react';
import {
  ShieldCheck,
  Layers,
  Clock,
  TrendingDown,
  Handshake,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { GlassCard } from '@/components/ui';

interface ValuePillar {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

const PILLARS: ValuePillar[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: 'Quality-Focused Sourcing',
    tagline: 'Farm-gate grading & rigorous screening',
    description:
      'Every consignment is sorted directly at farm collection centers. We enforce stringent moisture, size, and peel standards to ensure zero spoilage at your intake docks.',
    points: [
      'Pre-dispatch physical grading per Zepto intake specs',
      'Harvest-to-dispatch turnaround in under 18 hours',
      'Cleaned, trimmed, and sorted produce with minimal transit loss',
    ],
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-600" />,
    title: 'Bulk Quantity Availability',
    tagline: 'Multi-tonne volume ready every single morning',
    description:
      'Engineered specifically for high-velocity commercial procurement. Whether you require 500 kg or multi-tonne daily standing truckloads, our supply chain scales seamlessly.',
    points: [
      'Aggregated daily harvests across key Tamil Nadu grower belts',
      'Sustained multi-tonne volume buffers for high-demand seasons',
      'Crate or gunny bag wholesale palletized packaging',
    ],
  },
  {
    icon: <Clock className="w-6 h-6 text-emerald-600" />,
    title: 'Reliable Supply Schedule',
    tagline: 'Zero-delay dark store dock deliveries',
    description:
      'Quick-commerce and wholesale buyers cannot afford stockouts. We operate disciplined morning dispatch cycles with predictable delivery schedules directly to your hub.',
    points: [
      'Early morning dock arrivals (before peak sorting shifts)',
      'Consistent daily supply continuity throughout the year',
      'Proactive dispatch tracking and procurement alerts',
    ],
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-emerald-600" />,
    title: 'Competitive Wholesale Pricing',
    tagline: 'Direct aggregator rates with transparent tiers',
    description:
      'By working directly with grower clusters and handling aggregate transportation, we eliminate multiple intermediary markups and deliver genuine wholesale value.',
    points: [
      'Transparent volume tiers (savings scale with order size)',
      'Direct farm-level pricing without mandi broker additions',
      'Clear invoicing and GST-compliant commercial documentation',
    ],
  },
  {
    icon: <Handshake className="w-6 h-6 text-emerald-600" />,
    title: 'Long-Term Business Partnerships',
    tagline: 'Dedicated commercial account management',
    description:
      'We treat each vendor partnership as an ongoing commercial relationship. Our team works hand-in-hand with your procurement officers to align on demand forecasts.',
    points: [
      'Dedicated point of contact for daily procurement updates',
      'Flexible standing orders with adjustable volume windows',
      'Fast dispute resolution and intake weight alignment',
    ],
  },
];

export const WhyChooseSection: React.FC<{ id?: string }> = ({ id = 'why-us' }) => {
  return (
    <section id={id} className="section-padding relative overflow-hidden bg-slate-50/50">
      {/* Background soft glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-100/30 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="container-app">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/70 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Built For Wholesale Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Why Choose Sri Harshi?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Quick-commerce platforms and wholesale vegetable buyers need dependable supply chains.
            Here is how we ensure reliability, quality, and commercial value on every dispatch.
          </p>
        </div>

        {/* 5 Pillars Layout (3 on top row, 2 centered on second row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.slice(0, 3).map((pillar, idx) => (
            <GlassCard
              key={pillar.title}
              interactive
              padding="lg"
              className="flex flex-col justify-between border border-emerald-100/80"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-5 shadow-xs">
                  {pillar.icon}
                </div>
                <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-xs font-semibold text-emerald-800 mb-3">{pillar.tagline}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                {pillar.points.map(pt => (
                  <div key={pt} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Second Row: 2 pillars centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mt-6 sm:mt-8">
          {PILLARS.slice(3, 5).map((pillar, idx) => (
            <GlassCard
              key={pillar.title}
              interactive
              padding="lg"
              className="flex flex-col justify-between border border-emerald-100/80"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-5 shadow-xs">
                  {pillar.icon}
                </div>
                <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  Pillar 0{idx + 4}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-xs font-semibold text-emerald-800 mb-3">{pillar.tagline}</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                {pillar.points.map(pt => (
                  <div key={pt} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
