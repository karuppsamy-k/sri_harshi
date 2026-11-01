/**
 * Application-wide constants.
 * Single source of truth for all string literals, numbers, and config values.
 */

export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'Sri Harshi';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION ?? '1.0.0';
export const APP_DESCRIPTION =
  import.meta.env.VITE_APP_DESCRIPTION ?? 'B2B Wholesale Vegetable & Fruit Supplier';

export const CONTACT = {
  PERSON: import.meta.env.VITE_CONTACT_PERSON ?? 'Murugan K',
  PHONE: import.meta.env.VITE_CONTACT_PHONE ?? '9344226400',
  PHONE_DISPLAY: import.meta.env.VITE_CONTACT_PHONE_DISPLAY ?? '+91 93442 26400',
  EMAIL: import.meta.env.VITE_CONTACT_EMAIL ?? 'sriharshifreshmart@gmail.com',
  WHATSAPP: import.meta.env.VITE_CONTACT_WHATSAPP ?? '919344226400',
  WHATSAPP_URL: 'https://wa.me/919344226400',
  ADDRESS: import.meta.env.VITE_BUSINESS_ADDRESS ?? 'Tamil Nadu Wholesale Produce Hub, South India',
} as const;

/** Client-side route paths – single source of truth */
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  ABOUT: '/about',
  CONTACT: '/contact',
  ENQUIRY: '/enquiry',
  NOT_FOUND: '*',
} as const;

/** Enquiry / Order constants */
export const ENQUIRY = {
  MIN_QUANTITY_KG: 20,
  DEFAULT_PRICE_PER_KG: 50,
  MAX_MESSAGE_LENGTH: 500,
} as const;

/** SEO / meta */
export const SEO = {
  TITLE_SUFFIX: `| ${APP_NAME}`,
  DEFAULT_DESCRIPTION: APP_DESCRIPTION,
  OG_TYPE: 'website',
} as const;
