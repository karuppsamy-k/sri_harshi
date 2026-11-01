/**
 * Products feature – public API barrel export.
 * Import everything product-related from here, not from deep paths.
 */

// Types
export type {
  Product,
  ProductSummary,
  ProductCategory,
  ProductFilter,
  PriceTier,
  ProductAvailability,
  ProductUnit,
  ProductQualityInfo,
} from './types';

// Services
export {
  getProducts,
  getProductById,
  getProductBySlug,
  getFeaturedProducts,
  getProductSummaries,
  getCategories,
} from './services/product.service';

// Data
export { PRODUCTS, PRODUCT_CATEGORIES } from './data/products.data';

// Components
export { ProductCard, type ProductCardProps } from './components/ProductCard';
export { ProductSection, type ProductSectionProps } from './components/ProductSection';
export { ProductsPage } from './pages/ProductsPage';
export { ProductDetailPage } from './pages/ProductDetailPage';
