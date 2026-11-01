import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, ArrowLeft } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { getProducts } from '../services/product.service';
import { Input, Select, Button, GlassCard } from '@/components/ui';
import type { Product, ProductFilter } from '../types';

export const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');

  const filter: ProductFilter = {
    search: searchQuery,
    sortBy,
  };

  const filteredProducts = getProducts(filter);

  const handleEnquire = (product: Product) => {
    navigate(`/?product=${product.id}#enquiry`);
  };

  return (
    <div className="section-padding">
      <div className="container-app">
        {/* Back Link */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/70 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Complete Wholesale Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Commercial Produce Supply
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600">
            Browse our core wholesale vegetable and fruit offerings. All produce is graded at source
            and supplied in multi-tonne or custom crate volumes for quick commerce and wholesale
            buyers.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <GlassCard padding="md" className="mb-8 sm:mb-10 border border-emerald-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8">
              <Input
                placeholder="Search by name, Tamil name (Murungakkai, Poosanikai, Vazhaikkai, Koyya Pazham)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-4 h-4" />}
              />
            </div>

            <div className="md:col-span-4">
              <Select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as 'name' | 'price-asc' | 'price-desc')}
                options={[
                  { value: 'name', label: 'Sort by: Name (A-Z)' },
                  { value: 'price-asc', label: 'Price: Low to High' },
                  { value: 'price-desc', label: 'Price: High to Low' },
                ]}
              />
            </div>
          </div>
        </GlassCard>

        {/* Dynamically Responsive Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onEnquire={handleEnquire} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl bg-white border border-slate-200">
            <p className="text-base font-bold text-slate-700 mb-2">No matching produce found</p>
            <p className="text-xs text-slate-500 mb-4">
              Try adjusting your search query or view all products.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setSearchQuery('')}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
