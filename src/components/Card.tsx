import React from "react";
import { FaLanguage, FaBookOpen } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

interface Member {
  title: string;
  name: string;
  slug: string;
  hours: string;
  chepters: string;
  language: string;
  offer: string;
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
    <div className="relative w-full max-w-sm mx-auto min-h-[400px] flex">
      <Link to={`/courses/${member.slug}`} className="w-full">
        <div className="relative flex flex-col justify-between h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-md hover:ring-2 hover:ring-cyan-500/30 transition-all">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden shadow-lg group">
            {/* Gradient Badge */}
            {member.offer && (
              <span className="absolute bottom-3 left-0 bg-gradient-to-r from-pink-500 to-red-500 text-white text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1.5 rounded-r-full shadow-lg z-10 animate-pulse">
                {member.offer}
              </span>
            )}
            <img
              src={member.image}
              alt={member.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white leading-snug line-clamp-2">
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

              {!member.hours && !member.chepters && !member.language && (
                <span className="w-full inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-1.5 rounded-full shadow-md animate-pulse">
                  <span className="text-lg">🚧</span> Coming Soon ...
                </span>
              )}
            </div>

            {/* Pricing */}
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
      </Link>
    </div>
  );
};

export default Card;
