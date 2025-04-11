import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import {
  ArrowUpIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import background from "../assets/aboutusbackround.svg";

function Contact() {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-no-repeat bg-cover bg-center px-6 py-24 md:py-32 overflow-hidden dark:bg-gray-800"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Optional floating glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 dark:text-blue-900 leading-tight mb-6"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Office Location */}
            <motion.a
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.google.com/maps/place/3rd+Floor,+Ambashish,+Lane+9,+Pakharbag,+Bavdhan,+Pune,+Maharashtra+411021"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl mb-6 shadow-md">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Our Office
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                3rd Floor, Ambashish, Lane – 9, Pakharbag, Bavdhan, Pune,
                Maharashtra – 411021
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:info@definedge.com"
              className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl mb-6 shadow-md">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Email Us
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium relative z-10 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                info@definedge.com
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            {/* Phone */}
            <motion.a
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:02061923200"
              className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl mb-6 shadow-md">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Call Us
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium relative z-10 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                020-61923200
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            {/* Hours */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl mb-6 shadow-md">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                Working Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                Mon-Fri: 9AM - 6PM
                <br />
                Sat-Sun: Closed
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map + Form Section */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.504421033856!2d73.77488144187937!3d18.51750145370344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb6b43958c9%3A0x16b9182fa1b784a6!2sDefinedge!5e0!3m2!1sen!2sin!4v1744193089333!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send Us a Message
                </h3>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="shine shine-anim w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterBanner />
      <Footer />

      {/* Scroll To Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: scrollTop ? 1 : 0,
          y: scrollTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center justify-center shadow-xl transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </motion.button>
    </div>
  );
}

export default Contact;
