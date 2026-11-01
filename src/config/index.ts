/**
 * Application configuration.
 * Centralises environment-driven settings.
 * Prefer importing from here rather than accessing import.meta.env directly.
 */

export const appConfig = {
  name: import.meta.env.VITE_APP_NAME ?? 'Sri Harshi',
  version: import.meta.env.VITE_APP_VERSION ?? '1.0.0',
  description: import.meta.env.VITE_APP_DESCRIPTION ?? 'B2B Wholesale Vegetable & Fruit Supplier',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;

export const contactConfig = {
  person: import.meta.env.VITE_CONTACT_PERSON ?? 'Murugan K',
  phone: import.meta.env.VITE_CONTACT_PHONE ?? '9344226400',
  phoneDisplay: import.meta.env.VITE_CONTACT_PHONE_DISPLAY ?? '+91 93442 26400',
  email: import.meta.env.VITE_CONTACT_EMAIL ?? 'karuppasamy.k8987@gmail.com',
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP ?? '919344226400',
  whatsappUrl: 'https://wa.me/919344226400',
  address: import.meta.env.VITE_BUSINESS_ADDRESS ?? 'Tamil Nadu Wholesale Produce Hub, South India',
} as const;
