import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Package, Sparkles, Scale } from 'lucide-react';
import { GlassCard, Button, Badge } from '@/components/ui';
import { contactConfig } from '@/config';
import type { Product } from '../types';

export interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
  showDetailsLink?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEnquire,
  showDetailsLink = true,
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (product.fallbackImageUrl && e.currentTarget.src !== product.fallbackImageUrl) {
      e.currentTarget.src = product.fallbackImageUrl;
    }
  };

  const whatsappOrderUrl = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Murugan K, I want to order bulk ${product.name} (${product.localName}) at ₹50/kg (Min 20 kg).`
  )}`;

  const handleEnquireAction = () => {
    if (onEnquire) {
      onEnquire(product);
    } else {
      window.open(whatsappOrderUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <GlassCard
      interactive
      padding="none"
      className="flex flex-col h-full border border-emerald-100/80 hover:border-emerald-300 transition-all group"
    >
      {/* Product Image Canvas */}
      <div className="relative w-full aspect-4/3 bg-gradient-to-b from-emerald-50/50 to-slate-50/30 overflow-hidden border-b border-emerald-100/60 flex items-center justify-center p-4 sm:p-6">
        {/* Availability Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <Badge variant={product.available ? 'green' : 'neutral'} size="sm">
            <span
              className={`w-2 h-2 rounded-full mr-1.5 ${
                product.available ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
              }`}
            />
            {product.available ? 'Available in Bulk' : 'Out of Stock'}
          </Badge>
        </div>

        {/* Wholesale Unit Tag */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-700 shadow-xs border border-slate-200/60 uppercase">
            Unit: {product.unit}
          </span>
        </div>

        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Regional Name */}
          <div className="mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-emerald-700">
              {product.regionalName}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            {product.description}
          </p>

          {/* Quality Information Box */}
          <div className="mb-4 p-3 sm:p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/50">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Quality & Grading Specs</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">
                  <strong>Grade:</strong> {product.qualityInfo.grading}
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">
                  <strong>Freshness:</strong> {product.qualityInfo.freshness}
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">
                  <strong>Shelf Life:</strong> {product.qualityInfo.shelfLife}
                </span>
              </li>
            </ul>
          </div>

          {/* Wholesale Price Per Kilogram (₹50 / kg) & Order Specs (Min 20 kg) */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/90 border border-slate-200/70 mb-5">
            <div>
              <span className="text-slate-500 block text-[11px] font-medium">Wholesale Price</span>
              <span className="text-base sm:text-lg font-black text-emerald-700 tracking-tight">
                ₹ {product.pricePerKg ?? 50}{' '}
                <span className="text-xs font-semibold text-slate-500">/ kg</span>
              </span>
            </div>
            <div className="text-right">
              <span className="text-slate-500 block text-[11px] font-medium">Min Order</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-end gap-1">
                <Scale className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                {product.minOrderQuantity ?? 20} {product.unit}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-3 border-t border-slate-100">
          <Button
            variant="primary"
            size="sm"
            onClick={handleEnquireAction}
            className="flex-1 justify-center shadow-xs font-semibold py-2.5"
            leftIcon={<Package className="w-4 h-4" />}
          >
            Enquire Now
          </Button>

          {showDetailsLink && (
            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 rounded-lg transition-colors border border-slate-200 sm:border-transparent"
              aria-label={`View full specifications for ${product.name}`}
            >
              <span>Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </GlassCard>
  );
};
