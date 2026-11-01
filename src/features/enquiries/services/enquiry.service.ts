/**
 * Enquiries feature – service layer.
 * Manages validation, dispatching, and storage of B2B wholesale enquiries.
 * Provides a clean interface for future backend / CRM / webhook integration.
 */

import { contactConfig } from '@/config';
import { whatsappLink, isValidEmail, isValidPhone } from '@/utils';
import type {
  EnquiryFormData,
  EnquiryValidationErrors,
  ProductEnquiry,
  SubmissionResult,
} from '../types';

const ENQUIRIES_STORAGE_KEY = 'sri_harshi_procurement_enquiries';

/** Validate all fields of the wholesale enquiry form */
export function validateEnquiryForm(data: EnquiryFormData): {
  isValid: boolean;
  errors: EnquiryValidationErrors;
} {
  const errors: EnquiryValidationErrors = {};

  if (!data.customerName.trim()) {
    errors.customerName = 'Vendor or customer name is required';
  } else if (data.customerName.trim().length < 2) {
    errors.customerName = 'Please enter a valid full name (at least 2 characters)';
  }

  if (!data.companyName.trim()) {
    errors.companyName = 'Company / business or mandi store name is required';
  }

  const cleanPhone = data.phoneNumber.trim().replace(/[\s-]/g, '');
  if (!cleanPhone) {
    errors.phoneNumber = 'Phone number is required for procurement coordination';
  } else if (!isValidPhone(cleanPhone)) {
    errors.phoneNumber = 'Enter a valid 10-digit Indian mobile number';
  }

  if (!data.emailAddress.trim()) {
    errors.emailAddress = 'Email address is required for official communication';
  } else if (!isValidEmail(data.emailAddress.trim())) {
    errors.emailAddress = 'Please provide a valid business email address';
  }

  if (!data.productId) {
    errors.productId = 'Please select a vegetable or produce category';
  }

  if (data.quantity === '' || Number(data.quantity) <= 0) {
    errors.quantity = 'Please specify a positive required quantity';
  } else if (data.unit === 'kg' && Number(data.quantity) < 10) {
    errors.quantity = 'Minimum wholesale order is 10 kg';
  }

  if (!data.unit) {
    errors.unit = 'Please select a measurement unit (kg / tonnes)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submit wholesale bulk enquiry.
 * If backend API endpoint is defined in env, calls the API.
 * Otherwise, logs to procurement queue, stores in localStorage, and prepares direct dispatch URLs.
 */
export async function submitEnquiry(data: EnquiryFormData): Promise<SubmissionResult> {
  // Simulate network latency for realistic UX feel
  await new Promise(resolve => setTimeout(resolve, 800));

  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `SH-${new Date().getFullYear()}-${randomSuffix}`;
  const timestamp = new Date().toISOString();

  const apiUrl = import.meta.env.VITE_ENQUIRY_API_ENDPOINT;

  // Formatted message text for WhatsApp and Email direct dispatch
  const formattedOrderSummary =
    `*Sri Harshi Bulk Produce Enquiry*\n` +
    `Ref ID: ${referenceId}\n` +
    `Contact Person: ${contactConfig.person}\n` +
    `Customer: ${data.customerName}\n` +
    `Company: ${data.companyName}\n` +
    `Product: ${data.productName}\n` +
    `Quantity: ${data.quantity} ${data.unit.toUpperCase()}\n` +
    `Phone: ${data.phoneNumber}\n` +
    `Email: ${data.emailAddress}\n` +
    (data.message?.trim() ? `Notes: ${data.message.trim()}\n` : '') +
    `Date: ${new Date().toLocaleString('en-IN')}`;

  const whatsappUrl = whatsappLink(contactConfig.whatsapp, formattedOrderSummary);

  const mailtoSubject = encodeURIComponent(
    `Bulk Produce Enquiry [${referenceId}] - ${data.companyName}`
  );
  const mailtoBody = encodeURIComponent(
    `Hello ${contactConfig.person} & Sri Harshi Procurement Team,\n\n` +
      `Please provide wholesale information for the following bulk requirement:\n\n` +
      `Reference ID: ${referenceId}\n` +
      `Customer Name: ${data.customerName}\n` +
      `Company: ${data.companyName}\n` +
      `Produce Requested: ${data.productName}\n` +
      `Quantity: ${data.quantity} ${data.unit}\n` +
      `Phone Number: ${data.phoneNumber}\n` +
      `Email: ${data.emailAddress}\n\n` +
      (data.message ? `Additional Specifications:\n${data.message}\n\n` : '') +
      `Regards,\n${data.customerName}`
  );
  const mailtoUrl = `mailto:${contactConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  // 1. Live API integration path (if configured)
  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, referenceId, timestamp }),
      });

      if (!response.ok) {
        throw new Error(`API returned HTTP ${response.status}`);
      }

      return {
        success: true,
        referenceId,
        mode: 'live_api',
        timestamp,
        data,
        whatsappUrl,
        mailtoUrl,
        notice: `Your bulk enquiry was received by our server. ${contactConfig.person} will contact you within 2 hours.`,
      };
    } catch (err) {
      console.error(
        '[EnquiryService] API Submission failed, falling back to direct dispatch:',
        err
      );
    }
  }

  // 2. Local registry + Direct dispatch path (honest, non-fictitious response)
  const enquiryRecord: ProductEnquiry = {
    id: crypto.randomUUID(),
    referenceId,
    customerName: data.customerName,
    companyName: data.companyName,
    phoneNumber: data.phoneNumber,
    emailAddress: data.emailAddress,
    productId: data.productId,
    productName: data.productName,
    quantity: Number(data.quantity),
    unit: data.unit,
    message: data.message,
    status: 'pending',
    submittedAt: timestamp,
    mode: 'direct_dispatch',
  };

  try {
    const existingRaw = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    const existingList: ProductEnquiry[] = existingRaw ? JSON.parse(existingRaw) : [];
    existingList.unshift(enquiryRecord);
    localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(existingList.slice(0, 50)));
  } catch (storageErr) {
    console.warn('[EnquiryService] Could not access localStorage:', storageErr);
  }

  return {
    success: true,
    referenceId,
    mode: 'direct_dispatch',
    timestamp,
    data,
    whatsappUrl,
    mailtoUrl,
    notice: `Enquiry validated & registered in your local procurement queue. To guarantee immediate delivery priority, transmit your order details directly to ${contactConfig.person} via WhatsApp or Email below.`,
  };
}

/** Retrieve all previously logged enquiries from local queue */
export function getSavedEnquiries(): ProductEnquiry[] {
  try {
    const raw = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
