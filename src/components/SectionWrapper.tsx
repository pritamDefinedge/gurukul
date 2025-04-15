import React from 'react';
import { useSectionSkeleton } from '../hooks/useSectionSkeleton';

interface SectionWrapperProps {
  children: React.ReactNode;
  skeleton: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  skeleton,
  className = '',
}) => {
  const { sectionRef, isLoading } = useSectionSkeleton();

  return (
    <div ref={sectionRef} className={className}>
      {isLoading ? skeleton : children}
    </div>
  );
};

export default SectionWrapper; 