/**
 * Centralized Product Data Catalog.
 * Single source of truth for all wholesale products.
 * All products priced at ₹50 / kg with a minimum order quantity of 20 kg.
 */

import type { Product, ProductCategory } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'wholesale-vegetables',
    name: 'Bulk Vegetables',
    slug: 'bulk-vegetables',
    description: 'Farm-fresh vegetables graded and packed for high-volume wholesale distribution.',
  },
  {
    id: 'wholesale-fruits',
    name: 'Bulk Fruits',
    slug: 'bulk-fruits',
    description: 'Orchard-fresh fruits harvested for commercial wholesale distribution.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'drumsticks',
    name: 'Drumsticks',
    regionalName: 'Murungakkai (முருங்கைக்காய்)',
    localName: 'Murungakkai',
    slug: 'drumsticks',
    description:
      'Tender, straight-pod Grade-A drumsticks sourced directly from fertile Tamil Nadu farm belts. Harvested at optimal maturity with generous pulp, uniform green color, and zero fiber hardness. Ideal for Zepto quick-commerce fulfillment, hotel chains, and wholesale mandis.',
    category: PRODUCT_CATEGORIES[0],
    imageUrl: '/images/products/drumstick.svg',
    fallbackImageUrl: '/images/products/drumstick.svg',
    thumbnailUrl: '/images/products/drumstick.svg',
    unit: 'kg',
    available: true,
    availability: 'in-stock',
    pricePerKg: 50, // Fixed 50 Rupees per kg
    wholesalePricePerKg: 50,
    wholesalePrice: 50,
    basePrice: 50,
    minOrderQuantity: 20, // Minimum order changed to 20 kg
    priceTiers: [
      { minQuantity: 20, maxQuantity: 100, pricePerKg: 50, label: '20 – 100 kg' },
      { minQuantity: 100, maxQuantity: 500, pricePerKg: 50, label: '100 – 500 kg' },
      { minQuantity: 500, maxQuantity: null, pricePerKg: 50, label: '500+ kg / Bulk Batches' },
    ],
    qualityInfo: {
      grading: 'Grade-A Export & Retail Quality',
      freshness: 'Direct harvest within 18 hours of dispatch',
      shelfLife: '5 – 7 days under standard cool storage',
      sortingSpecs: 'Uniform length (45 – 55 cm), thickness (12 – 18 mm), minimal curvature',
      highlights: [
        'Uniform green pod coloration with rich tender flesh',
        'Stringent pre-dispatch sorting to eliminate broken or overripe pods',
        'Packed in ventilated wholesale gunny bags or plastic crates (20 kg / 50 kg)',
        'Daily volume fulfillment capability exceeding 2+ Tonnes',
      ],
    },
    isFeatured: true,
    tags: ['drumstick', 'murungakkai', 'moringa', 'fresh', 'wholesale', 'zepto-supply'],
    origin: 'Dindigul & Theni, Tamil Nadu',
    harvestSeason: 'Year-round daily harvest',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    regionalName: 'Poosanikai / Ash Gourd (பூசணிக்காய்)',
    localName: 'Poosanikai',
    slug: 'pumpkin',
    description:
      'Firm, dense white pumpkins (Ash Gourd) cultivated for superior water retention, crisp pulp, and extended transit longevity. Each gourd is individually cleaned, graded by weight, and protected with its natural wax bloom. Bulk supply geared for retail distribution, industrial catering, and bulk vegetable buyers.',
    category: PRODUCT_CATEGORIES[0],
    imageUrl: '/images/products/pumpkin.svg',
    fallbackImageUrl: '/images/products/pumpkin.svg',
    thumbnailUrl: '/images/products/pumpkin.svg',
    unit: 'kg',
    available: true,
    availability: 'in-stock',
    pricePerKg: 50, // Fixed 50 Rupees per kg
    wholesalePricePerKg: 50,
    wholesalePrice: 50,
    basePrice: 50,
    minOrderQuantity: 20, // Minimum order changed to 20 kg
    priceTiers: [
      { minQuantity: 20, maxQuantity: 100, pricePerKg: 50, label: '20 – 100 kg' },
      { minQuantity: 100, maxQuantity: 500, pricePerKg: 50, label: '100 – 500 kg' },
      { minQuantity: 500, maxQuantity: null, pricePerKg: 50, label: '500+ kg / Multi-Load' },
    ],
    qualityInfo: {
      grading: 'Heavy-Density Grade-A Spec',
      freshness: 'Intact stem cuts, zero bruising, firm outer skin',
      shelfLife: '20 – 30 days under ambient conditions',
      sortingSpecs: 'Weight calibrated in 4–6 kg or 6–10 kg size bands',
      highlights: [
        'Natural protective wax layer preserves internal freshness and moisture',
        'Minimal seed cavity with dense, juicy cooking flesh',
        'Secure palletized or straw-bedded bulk transport to minimize impact dents',
        'Sustained multi-tonne daily sourcing from vetted grower clusters',
      ],
    },
    isFeatured: true,
    tags: ['pumpkin', 'ash-gourd', 'poosanikai', 'bulk', 'wholesale', 'zepto-ready'],
    origin: 'Udumalpet & Coimbatore Belt, Tamil Nadu',
    harvestSeason: 'Year-round consistent supply',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'raw-banana',
    name: 'Raw Banana',
    regionalName: 'Vazhaikkai (வாழைக்காய்)',
    localName: 'Vazhaikkai',
    slug: 'raw-banana',
    description:
      'Deep green, unblemished raw cooking bananas (Plantains) harvested directly from Cauvery delta plantations. Harvested at firm maturity before starch conversion, offering optimal peel integrity, uniform finger size, and maximum cooking versatility for South Indian culinary operations and Zepto hubs.',
    category: PRODUCT_CATEGORIES[0],
    imageUrl: '/images/products/raw-banana.svg',
    fallbackImageUrl: '/images/products/raw-banana.svg',
    thumbnailUrl: '/images/products/raw-banana.svg',
    unit: 'kg',
    available: true,
    availability: 'in-stock',
    pricePerKg: 50, // Fixed 50 Rupees per kg
    wholesalePricePerKg: 50,
    wholesalePrice: 50,
    basePrice: 50,
    minOrderQuantity: 20, // Minimum order changed to 20 kg
    priceTiers: [
      { minQuantity: 20, maxQuantity: 100, pricePerKg: 50, label: '20 – 100 kg' },
      { minQuantity: 100, maxQuantity: 500, pricePerKg: 50, label: '100 – 500 kg' },
      { minQuantity: 500, maxQuantity: null, pricePerKg: 50, label: '500+ kg / Bulk Truckload' },
    ],
    qualityInfo: {
      grading: 'Uniform Finger Grade-A Cooking Spec',
      freshness: 'Cut fresh from the tree bunch, washed and sap-treated',
      shelfLife: '7 – 10 days at ambient room temperature',
      sortingSpecs: 'Length 15 – 20 cm, uniform girth, unwrinkled green peel',
      highlights: [
        'Crisp texture and low moisture loss during warehouse transit',
        'Graded into hands and clusters according to client receiving specs',
        'Packed in heavy-duty ventilated returnable crates or cartons',
        'Ideal for Zepto dark store replenishment, chips manufacturers, and caterers',
      ],
    },
    isFeatured: true,
    tags: ['raw-banana', 'vazhaikkai', 'plantain', 'cooking-banana', 'wholesale', 'bulk'],
    origin: 'Tiruchirappalli & Erode, Tamil Nadu',
    harvestSeason: 'Year-round daily harvest',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'guava',
    name: 'Guava',
    regionalName: 'Koyya Pazham (கொய்யா பழம்)',
    localName: 'Koyya Pazham',
    slug: 'guava',
    description:
      'Farm-fresh, crisp Grade-A guavas sourced directly from premium orchard belts in Tamil Nadu (Ayakudi & Dindigul). Known for firm green skin, aromatic fragrance, rich vitamin C, and balanced sweetness with dense pulp. Suitable for Zepto quick-commerce fulfillment, retail chains, fruit markets, and bulk fruit buyers.',
    category: PRODUCT_CATEGORIES[1],
    imageUrl: '/images/products/guava.svg',
    fallbackImageUrl: '/images/products/guava.svg',
    thumbnailUrl: '/images/products/guava.svg',
    unit: 'kg',
    available: true,
    availability: 'in-stock',
    pricePerKg: 50, // Fixed 50 Rupees per kg
    wholesalePricePerKg: 50,
    wholesalePrice: 50,
    basePrice: 50,
    minOrderQuantity: 20, // Minimum order changed to 20 kg
    priceTiers: [
      { minQuantity: 20, maxQuantity: 100, pricePerKg: 50, label: '20 – 100 kg' },
      { minQuantity: 100, maxQuantity: 500, pricePerKg: 50, label: '100 – 500 kg' },
      { minQuantity: 500, maxQuantity: null, pricePerKg: 50, label: '500+ kg / Bulk Batches' },
    ],
    qualityInfo: {
      grading: 'Grade-A Table & Retail Spec',
      freshness: 'Direct orchard harvest within 18 hours of dispatch',
      shelfLife: '4 – 6 days under ventilated cool ambient storage',
      sortingSpecs: 'Calibrated sizing (150 – 250 g per fruit), unblemished firm rind',
      highlights: [
        'Naturally ripened, firm texture with high pulp density',
        'Hand-sorted and graded to eliminate soft spots and skin blemishes',
        'Supplied in ventilated CFB corrugated fruit boxes or plastic crates (20 kg)',
        'Daily multi-tonne supply capacity from Ayakudi orchard clusters',
      ],
    },
    isFeatured: true,
    tags: ['guava', 'koyya-pazham', 'fruit', 'fresh', 'wholesale', 'zepto-supply'],
    origin: 'Ayakudi & Dindigul, Tamil Nadu',
    harvestSeason: 'Year-round with peak winter flush',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];
