import React, { useEffect, useState } from "react";
import Gurukul from "../assets/Gurukul.svg";

type NavItemProps = {
  label: string;
};

const NavItem = ({ label }: NavItemProps) => (
  <a
    href="#"
    className="font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
  >
    {label}
  </a>
);

const NavItemMobile = ({ label }: NavItemProps) => (
  <li>
    <a
      href="#"
      className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
    >
      {label}
    </a>
  </li>
);

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

const IconButton = ({ icon, onClick }: IconButtonProps) => (
  <button
    onClick={onClick}
    className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
  >
    {icon}
  </button>
);

type LoginIconProps = {
  mobile?: boolean;
};

const LoginIcon = ({ mobile }: LoginIconProps) => (
  <a
    href="#"
    className={`flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium ${
      mobile ? "py-2 px-3" : ""
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
    <span>Login</span>
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("color-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (theme === "dark" || (!theme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const newMode = !darkMode;
    setDarkMode(newMode);
    root.classList.toggle("dark", newMode);
    localStorage.setItem("color-theme", newMode ? "dark" : "light");
  };

  return (
    // <header className="flex border-b border-gray-200 dark:border-gray-800 py-3 px-4 sm:px-10 bg-white dark:bg-gray-950 min-h-[65px] tracking-wide relative z-50">
    //   <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl mx-auto">
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="flex py-3 px-4 sm:px-10 min-h-[65px] tracking-wide max-w-screen-xl mx-auto justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img
              src={Gurukul}
              alt="logo"
              className="w-[164px] md:w-[160px] dark:invert"
            />
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center space-x-4">
          <IconButton
            icon={
              darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )
            }
            onClick={toggleDarkMode}
          />
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            }
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {["Home", "Courses", "About", "Contact"].map((label) => (
              <NavItem key={label} label={label} />
            ))}
          </nav>

          <div className="flex items-center space-x-4 ml-6">
            <IconButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
            <IconButton
              icon={
                <div className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </div>
              }
            />
            <LoginIcon />
            <IconButton
              icon={
                darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )
              }
              onClick={toggleDarkMode}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-gray-950 shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <IconButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  }
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <nav className="px-6 py-4">
                <ul className="space-y-4">
                  {["Home", "Courses", "About", "Contact"].map((label) => (
                    <NavItemMobile key={label} label={label} />
                  ))}
                </ul>
                <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <LoginIcon mobile />
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
