/**
 * Application-wide TypeScript type declarations.
 * Augment the ImportMeta interface so Vite env variables are type-safe.
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_CONTACT_PHONE: string;
  readonly VITE_CONTACT_WHATSAPP: string;
  readonly VITE_BUSINESS_ADDRESS: string;
  // Add future env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
