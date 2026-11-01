import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { EnquirySection } from '../components/EnquirySection';

export const EnquiryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product') || undefined;

  return (
    <div className="flex flex-col">
      <EnquirySection selectedProductId={productId} />
    </div>
  );
};

export default EnquiryPage;
