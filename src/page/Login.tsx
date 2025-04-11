import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LockClosedIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowUpIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Logged in as: ${email}`);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:scale-110 transition-all"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-indigo-600" />
        )}
      </button>

      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md z-10"
        >
          {/* Auth Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-600 dark:to-blue-700 p-8 text-center">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <LockClosedIcon className="w-12 h-12 mx-auto text-white" />
                <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">Welcome Back</h1>
                <p className="text-white/90 dark:text-white/80 mt-1 text-sm md:text-base">
                  Sign in to your account
                </p>
              </motion.div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
                <div className="flex justify-end text-sm mt-2">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5 }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-600 dark:to-blue-700 hover:from-indigo-600 hover:to-blue-700 dark:hover:from-indigo-700 dark:hover:to-blue-800 transition-all ${
                    isLoading ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </motion.div>
            </form>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }} 
              className="text-center pb-6 px-6 md:px-8"
            >
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                  Sign up
                </a>
              </p>
            </motion.div>
          </div>

          {/* Social Login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { name: 'Google', icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png', bg: 'bg-red-100 dark:bg-red-900/30', hover: 'hover:bg-red-200 dark:hover:bg-red-800/50' },
                { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', bg: 'bg-blue-100 dark:bg-blue-900/30', hover: 'hover:bg-blue-200 dark:hover:bg-blue-800/50' },
                { name: 'Twitter', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png', bg: 'bg-sky-100 dark:bg-sky-900/30', hover: 'hover:bg-sky-200 dark:hover:bg-sky-800/50' },
              ].map((provider) => (
                <motion.a
                  key={provider.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`flex justify-center items-center py-2 px-4 ${provider.bg} ${provider.hover} rounded-lg border border-gray-200 dark:border-gray-700 transition-all`}
                >
                  <img src={provider.icon} alt={provider.name} className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll To Top Button */}
        <button
          className={`fixed ${scrollTop ? "visible opacity-100" : "invisible opacity-0"} right-4 bottom-4 z-50 bg-blue-600 dark:bg-blue-700 w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-800 shadow-lg`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6 text-white" />
        </button>

        <style >{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite ease-in-out;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </div>
  );
};

export default LoginPage;