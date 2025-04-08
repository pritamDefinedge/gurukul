import React from "react";
import { FaLanguage, FaBookOpen } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";

interface Member {
  title: string;
  name: string;
  hours: string;
  chepters: string;
  language: string;
  discount: string;
  originalPrice: string;
  image: string;
  logo: string;
}

interface CardProps {
  member: Member;
}

const Card: React.FC<CardProps> = ({ member }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto  hover:shadow-xl">
      <a
        href="https://gurukul.definedgesecurities.com/courses/become-a-noiseless-trader/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-md hover:ring-2 hover:ring-cyan-500/30 transition-all">
          {/* Image */}
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={member.image}
              alt="Become a Noiseless Trader"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 "
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white leading-snug">
              {member.title}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-1">
              {member.hours && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white bg-cyan-600 px-3 py-1 rounded-full shadow-sm">
                  <HiOutlineClock className="w-4 h-4" /> {member.hours}
                </span>
              )}
              {member.chepters && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white bg-emerald-600 px-3 py-1 rounded-full shadow-sm">
                  <FaBookOpen className="w-4 h-4" /> {member.chepters}
                </span>
              )}
              {member.language && (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white bg-indigo-600 px-3 py-1 rounded-full shadow-sm">
                  <FaLanguage className="w-4 h-4" /> {member.language}
                </span>
              )}

              {/* If none are present, show "Coming Soon" */}
              {!member.hours && !member.chepters && !member.language && (
                <span className="w-full inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-1.5 rounded-full shadow-md animate-pulse">
                  <span className="text-lg">🚧</span> Coming Soon ...
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex gap-2 items-center">
              {member.discount && (
                <span className="text-slate-500 dark:text-slate-400 line-through text-sm">
                  {member.discount}
                </span>
              )}
              {member.originalPrice && (
                <span className="text-red-600 dark:text-red-400 font-bold text-lg">
                  {member.originalPrice}
                </span>
              )}
              {member.originalPrice && member.discount && (
                <span className="text-xs bg-red-100 dark:bg-red-600/20 text-red-600 dark:text-red-400 font-semibold px-2 py-0.5 rounded-full animate-pulse">
                  🔥 Limited Offer
                </span>
              )}
            </div>

            {/* Instructor */}
            <div className="flex items-center pt-3 mt-3 border-t border-slate-200 dark:border-slate-700">
              <img
                alt={member.name}
                src={member.logo}
                className="h-10 w-10 rounded-full object-cover border border-white dark:border-slate-600"
              />
              <div className="ml-3">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {member.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
