import React from 'react';
import {
  HeroSkeleton,
  CoursesSectionSkeleton,
  MissionSectionSkeleton,
  InstructorsSkeleton,
  BenefitSkeleton,
  TestimonialsSectionSkeleton,
  FAQSectionSkeleton
} from '../../components/skeletons/index';

const HomeSkeleton = () => {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <CoursesSectionSkeleton />
      <MissionSectionSkeleton />
      <InstructorsSkeleton />
      <BenefitSkeleton />
      <TestimonialsSectionSkeleton />
      <FAQSectionSkeleton />
    </div>
  );
};

export default HomeSkeleton; 