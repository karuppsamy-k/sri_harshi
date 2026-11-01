/**
 * Enquiries feature – TypeScript types.
 * Defines the models for B2B wholesale enquiries and validation states.
 */

export type EnquiryUnit = 'kg' | 'tonnes';

export type EnquiryStatus = 'pending' | 'reviewed' | 'responded' | 'closed';

/** Full enquiry record entity */
export interface ProductEnquiry {
  id: string;
  referenceId: string;
  customerName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  productId: string;
  productName: string;
  quantity: number;
  unit: EnquiryUnit;
  message?: string;
  status: EnquiryStatus;
  submittedAt: string;
  mode: 'live_api' | 'direct_dispatch';
}

/** Form input state bound to input elements */
export interface EnquiryFormData {
  customerName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  productId: string;
  productName: string;
  quantity: number | '';
  unit: EnquiryUnit;
  message?: string;
}

/** Form validation error bag */
export interface EnquiryValidationErrors {
  customerName?: string;
  companyName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  productId?: string;
  quantity?: string;
  unit?: string;
  message?: string;
}

/** Result returned by the enquiry service layer */
export interface SubmissionResult {
  success: boolean;
  referenceId: string;
  mode: 'live_api' | 'direct_dispatch';
  timestamp: string;
  data: EnquiryFormData;
  whatsappUrl: string;
  mailtoUrl: string;
  notice: string;
}
