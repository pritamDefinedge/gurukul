import React from 'react';
import {
  HeroesSectionSkeleton,
  StockSectionSkeleton,
  JumbotronSectionSkeleton,
  GurukulWorksSectionSkeleton,
  GurukulHelpSectionSkeleton,
  SmartTradingSectionSkeleton
} from '../../components/skeletons/index';

const AboutSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <HeroesSectionSkeleton />
      <StockSectionSkeleton />
      <JumbotronSectionSkeleton />
      <GurukulWorksSectionSkeleton />
      <GurukulHelpSectionSkeleton />
      <SmartTradingSectionSkeleton />
    </div>
  );
};

export default AboutSkeleton; 