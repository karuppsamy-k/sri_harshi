/**
 * Products feature – service layer.
 * All product data fetching/filtering logic lives here.
 * Designed so the implementation can be swapped to an API call
 * without changing any component code.
 */

import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products.data';
import type { Product, ProductCategory, ProductFilter, ProductSummary } from '../types';

/** Get all products (optionally filtered) */
export function getProducts(filter?: ProductFilter): Product[] {
  let results = [...PRODUCTS];

  if (filter?.categoryId) {
    results = results.filter(p => p.category.id === filter.categoryId);
  }

  if (filter?.availability) {
    results = results.filter(p => p.availability === filter.availability);
  }

  if (filter?.search) {
    const q = filter.search.toLowerCase();
    results = results.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.regionalName.toLowerCase().includes(q) ||
        (p.localName && p.localName.toLowerCase().includes(q)) ||
        p.tags.some(t => t.includes(q))
    );
  }

  if (filter?.sortBy === 'price-asc') {
    results.sort((a, b) => (a.wholesalePrice ?? a.basePrice) - (b.wholesalePrice ?? b.basePrice));
  } else if (filter?.sortBy === 'price-desc') {
    results.sort((a, b) => (b.wholesalePrice ?? b.basePrice) - (a.wholesalePrice ?? a.basePrice));
  } else if (filter?.sortBy === 'name') {
    results.sort((a, b) => a.name.localeCompare(b.name));
  }

  return results;
}

/** Get a single product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug || p.id === slug);
}

/** Get a single product by id */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

/** Get featured products */
export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isFeatured);
}

/** Get lightweight product summaries for listing */
export function getProductSummaries(filter?: ProductFilter): ProductSummary[] {
  return getProducts(filter).map(
    ({
      id,
      name,
      regionalName,
      slug,
      imageUrl,
      fallbackImageUrl,
      pricePerKg,
      wholesalePrice,
      basePrice,
      unit,
      available,
      availability,
      isFeatured,
      minOrderQuantity,
    }) => ({
      id,
      name,
      regionalName,
      slug,
      imageUrl,
      fallbackImageUrl,
      pricePerKg,
      wholesalePrice,
      basePrice,
      unit,
      available,
      availability,
      isFeatured,
      minOrderQuantity,
    })
  );
}

/** Get all product categories */
export function getCategories(): ProductCategory[] {
  return PRODUCT_CATEGORIES;
}
