import React from "react";
import { HeroesSectionSkeleton,ContactSectionSkeleton } from "../../components/skeletons/index";

const ContactSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <HeroesSectionSkeleton />
      <ContactSectionSkeleton />
    </div>
  );
};

export default ContactSkeleton;
