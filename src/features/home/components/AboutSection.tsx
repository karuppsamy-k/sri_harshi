import React from 'react';
import { Target, ShieldCheck, Scale, Users, Sparkles, Truck } from 'lucide-react';
import { GlassCard } from '@/components/ui';

export const AboutSection: React.FC<{ id?: string }> = ({ id = 'about' }) => {
  return (
    <section id={id} className="section-padding relative">
      <div className="container-app">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/70 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>About Sri Harshi</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 sm:mb-6">
              Empowering Wholesale Produce Supply Chains
            </h2>

            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
              <p>
                <strong>Sri Harshi</strong> is a specialized B2B wholesale vegetable and fruit
                supplier operating directly at the intersection of agricultural harvesting belts and
                modern commercial distribution networks.
              </p>
              <p>
                Unlike retail grocery operations, our entire business model is purposefully built
                around high-volume, multi-tonne supply contracts for{' '}
                <strong>Zepto dark store vendors</strong>, quick-commerce aggregators, food
                processing facilities, and wholesale mandi merchants.
              </p>
              <p>
                We focus intensely on high-demand fresh produce that requires precise freshness and
                consistency: <strong>Drumsticks (Murungakkai)</strong>,{' '}
                <strong>Pumpkin (Poosanikai)</strong>, <strong>Raw Banana (Vazhaikkai)</strong>, and{' '}
                <strong>Guava (Koyya Pazham)</strong>. By concentrating on deep supplier ties in
                these select crops, we guarantee dependable quality and volume fulfillment on every
                order.
              </p>
            </div>

            {/* Operational Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              <div className="p-4 rounded-xl bg-white/80 border border-emerald-100 shadow-2xs">
                <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-sm mb-1">
                  <Target className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Business Focus</span>
                </div>
                <p className="text-xs text-slate-600">
                  Bulk order fulfillment for quick commerce, institutional caterers, and wholesale
                  distributors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-emerald-100 shadow-2xs">
                <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Quality Commitment</span>
                </div>
                <p className="text-xs text-slate-600">
                  Strict farm-gate grading, manual sorting of blemishes, and optimal harvest
                  maturity verification.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Glassmorphism Profile */}
          <div className="lg:col-span-5 w-full">
            <GlassCard
              intensity="high"
              padding="lg"
              className="border border-white/90 shadow-glass relative"
            >
              <div className="pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-emerald-100/70">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-700 flex items-center justify-center text-white text-2xl font-bold shadow-md shrink-0">
                    🌿
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">Sri Harshi</h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                      B2B Commercial Produce Partner
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/40">
                  <Truck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Bulk Supply Capabilities</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Daily multi-tonne dispatch volumes from vetted farm clusters in Dindigul,
                      Theni, and Cauvery Delta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/40">
                  <Users className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Vendor Alignment</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Transparent commercial terms, prompt dispatch schedules, and dedicated
                      coordination with intake docks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/40">
                  <Scale className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Fair Wholesale Transactions
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Accurate weighing protocols, calibrated electronic scales, and detailed
                      consignment documentation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote / Mission Note */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-emerald-100/70 text-center">
                <p className="text-xs italic text-slate-600">
                  "Building reliable, transparent, and long-lasting supply relationships with
                  commercial produce buyers."
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
