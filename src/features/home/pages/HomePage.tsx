import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { AboutSection } from '../components/AboutSection';
import { ProductSection } from '@/features/products/components/ProductSection';
import { EnquirySection } from '@/features/enquiries/components/EnquirySection';
import { ContactSection } from '@/features/contact/components/ContactSection';
import type { Product } from '@/features/products/types';

export const HomePage: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const location = useLocation();

  // Scroll to hash element if URL contains hash (e.g. /#products)
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const el = document.getElementById(elementId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProductId(product.id);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection
        onExploreClick={() => {
          const el = document.getElementById('products');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onEnquiryClick={() => {
          const el = document.getElementById('enquiry');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Products Catalog Section */}
      <ProductSection id="products" onSelectProduct={handleSelectProduct} />

      {/* 3. Why Choose Sri Harshi Section */}
      <WhyChooseSection id="why-us" />

      {/* 4. About Us Section */}
      <AboutSection id="about" />

      {/* 5. Wholesale Enquiry Section */}
      <EnquirySection id="enquiry" selectedProductId={selectedProductId} />

      {/* 6. Contact Section */}
      <ContactSection id="contact" />
    </div>
  );
};

export default HomePage;
