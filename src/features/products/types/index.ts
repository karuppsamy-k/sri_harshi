/**
 * Product feature – TypeScript types.
 * Strongly typed B2B wholesale vegetable and fruit product model.
 */

export type ProductAvailability = 'in-stock' | 'limited' | 'seasonal' | 'out-of-stock';

export type ProductUnit = 'kg' | 'tonne' | 'tonnes' | 'box' | 'crate';

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface PriceTier {
  minQuantity: number; // in kg
  maxQuantity: number | null; // null = unlimited
  pricePerKg: number | string; // in INR
  label: string; // e.g. "50–200 kg", "200+ kg"
}

export interface ProductQualityInfo {
  grading: string; // e.g. "Grade-A Premium"
  freshness: string; // e.g. "Farm-harvested daily (< 18 hrs to hub)"
  shelfLife: string; // e.g. "5–7 Days under ambient ventilation"
  sortingSpecs: string; // e.g. "Strict length & diameter grading, zero blemishes"
  highlights: string[]; // key bullet points for procurement buyers
}

export interface Product {
  id: string;
  name: string;
  regionalName: string; // Tamil / regional vernacular (e.g., Murungakkai, Poosanikai, Vazhaikkai, Koyya Pazham)
  localName?: string; // Backwards compatible alias
  slug: string;
  description: string;
  category: ProductCategory;
  imageUrl: string;
  fallbackImageUrl?: string;
  thumbnailUrl?: string;
  unit: ProductUnit | string;
  available: boolean;
  availability: ProductAvailability;
  pricePerKg: string | number; // Configurable per-kg wholesale price (placeholder "XX" or actual number)
  wholesalePricePerKg?: string | number;
  wholesalePrice?: number; // Base wholesale rate in ₹ (optional)
  basePrice: number; // Backwards compatible display rate
  priceTiers: PriceTier[];
  minOrderQuantity: number; // in kg
  qualityInfo: ProductQualityInfo;
  isFeatured: boolean;
  tags: string[];
  origin: string;
  harvestSeason: string;
  createdAt: string;
  updatedAt: string;
}

export type ProductSummary = Pick<
  Product,
  | 'id'
  | 'name'
  | 'regionalName'
  | 'slug'
  | 'imageUrl'
  | 'fallbackImageUrl'
  | 'pricePerKg'
  | 'wholesalePrice'
  | 'basePrice'
  | 'unit'
  | 'available'
  | 'availability'
  | 'isFeatured'
  | 'minOrderQuantity'
>;

export interface ProductFilter {
  categoryId?: string;
  availability?: ProductAvailability;
  search?: string;
  sortBy?: 'name' | 'price-asc' | 'price-desc';
}
