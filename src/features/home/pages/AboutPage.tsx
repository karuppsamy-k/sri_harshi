import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseSection } from '../components/WhyChooseSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <WhyChooseSection />
    </div>
  );
};

export default AboutPage;
