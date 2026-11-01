/**
 * Enquiries feature – public barrel export.
 */

export type {
  ProductEnquiry,
  EnquiryFormData,
  EnquiryValidationErrors,
  EnquiryStatus,
  EnquiryUnit,
  SubmissionResult,
} from './types';

export { submitEnquiry, validateEnquiryForm, getSavedEnquiries } from './services/enquiry.service';
