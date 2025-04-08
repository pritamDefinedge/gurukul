import React from "react";
import Gurukul from "../assets/Gurukul.svg";

const FooterBanner: React.FC = () => {
  return (
    <section className="w-full bg-gray-200 bg-gradient-to-br  dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <a href="https://gurukul.definedgesecurities.com/">
            <img
              src={Gurukul}
              alt="Gurukul Logo"
              className="h-12 w-auto dark:invert"
              loading="lazy"
            />
          </a>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Follow us on social media
          </h2>
          <ul className="flex justify-center md:justify-start gap-5 text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="https://www.facebook.com/DefinedgeSecurities/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Definedge"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M6.92,6l14.22,20.73L6.23,44h3.18l13.14-15.22l10.44,15.22h10.01L28.12,22.31l14.08-16.31h-3.18l-12.31,14.26L6.92,6z" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/Definedge_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/company/definedge"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/DefinedgeSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
