import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {


  return (
    <footer
      id="footer"
      className="relative bg-gray-900 dark:bg-black text-gray-800 dark:text-white text-base"
    >
      <div className="text-center py-4">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()}
            <strong>
              <span className="text-amber-500 dark:text-amber-300"> Definedge </span>
            </strong>
            | All Rights Reserved
          </p>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
