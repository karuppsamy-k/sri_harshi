import React from 'react';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { getProducts } from '../services/product.service';
import type { Product } from '../types';

export interface ProductSectionProps {
  onSelectProduct?: (product: Product) => void;
  title?: string;
  subtitle?: string;
  id?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectProduct,
  title = 'Our Wholesale Produce Catalog',
  subtitle = 'High-velocity vegetable and fruit supply for Zepto hubs, dark stores, and wholesale buyers. Harvested fresh, graded rigorously, and delivered in bulk quantities.',
  id = 'products',
}) => {
  const products = getProducts();

  return (
    <section id={id} className="section-padding relative">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/40 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="container-app">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/70 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Core Wholesale Selection</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {title}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Dynamically Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 items-stretch">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onEnquire={onSelectProduct} />
          ))}
        </div>

        {/* Bottom procurement assurance note */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-emerald-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Custom Volume Contracts Available
              </h4>
              <p className="text-xs text-slate-600">
                Need customized sizing, special crate packaging, or daily standing truckloads? We
                tailor our fulfillment to your procurement SLA.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200/60 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zepto Vendor Standard Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};
