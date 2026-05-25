import React from 'react';

// SVG Icon Renderer for a professional SaaS aesthetic
const SVGIcon = ({ type, className = "w-5 h-5" }) => {
  switch (type) {
    case 'gift':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v10H4V12m16 0h-4M4 12h4m8 0V7a3 3 0 10-6 0v5m6 0H8m4 0v10m-8-15h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
      );
    case 'scorpion':
    case 'discount-cut':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      );
    case 'tag':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.243 2.122a2 2 0 012.828 0l6.81 6.81a2 2 0 010 2.828l-9.9 9.9a2 2 0 01-2.828 0L2.122 14.64a2 2 0 010-2.828l9.9-9.9z" />
        </svg>
      );
    case 'download':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      );
    case 'ticket':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6a3 3 0 00-6 0H3v12h7.5a3 3 0 006 0H21V6h-4.5z" />
        </svg>
      );
    case 'academic':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.083c-2.507 0-4.83-.77-6.824-2.083a12.08 12.08 0 01.665-6.479L12 14zm0 0v6" />
        </svg>
      );
    case 'telegram':
      return (
        <svg className={`${className} transform translate-x-[-1.5px] translate-y-[0.5px]`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
  }
};

export default function LinkCard({ name, desc, url, iconType, color, type, badge, darkMode }) {
  const isTelegram = type === 'telegram';

  // Professional color palettes mapping
  const colorMap = {
    rose: {
      lightBg: 'hover:bg-rose-50/20',
      darkBg: 'hover:bg-rose-950/10',
      text: 'text-slate-800 dark:text-slate-100',
      iconText: 'text-rose-600 dark:text-rose-400',
      iconBgLight: 'bg-rose-50 border-rose-100/60',
      iconBgDark: 'bg-rose-950/20 border-rose-900/40',
      badgeBg: 'bg-rose-50 border border-rose-100 text-rose-700 dark:bg-rose-950/30 dark:border-rose-900/50 dark:text-rose-400'
    },
    amber: {
      lightBg: 'hover:bg-amber-50/20',
      darkBg: 'hover:bg-amber-950/10',
      text: 'text-slate-800 dark:text-slate-100',
      iconText: 'text-amber-600 dark:text-amber-400',
      iconBgLight: 'bg-amber-50 border-amber-100/60',
      iconBgDark: 'bg-amber-950/20 border-amber-900/40',
      badgeBg: 'bg-amber-50 border border-amber-100 text-amber-700 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-400'
    },
    emerald: {
      lightBg: 'hover:bg-emerald-50/20',
      darkBg: 'hover:bg-emerald-950/10',
      text: 'text-slate-800 dark:text-slate-100',
      iconText: 'text-emerald-600 dark:text-emerald-400',
      iconBgLight: 'bg-emerald-50 border-emerald-100/60',
      iconBgDark: 'bg-emerald-950/20 border-emerald-900/40',
      badgeBg: 'bg-emerald-50 border border-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-400'
    },
    indigo: {
      lightBg: 'hover:bg-indigo-50/20',
      darkBg: 'hover:bg-indigo-950/10',
      text: 'text-slate-800 dark:text-slate-100',
      iconText: 'text-indigo-600 dark:text-indigo-400',
      iconBgLight: 'bg-indigo-50 border-indigo-100/60',
      iconBgDark: 'bg-indigo-950/20 border-indigo-900/40',
      badgeBg: 'bg-indigo-50 border border-indigo-100 text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-900/50 dark:text-indigo-400'
    },
    violet: {
      lightBg: 'hover:bg-violet-50/20',
      darkBg: 'hover:bg-violet-950/10',
      text: 'text-slate-800 dark:text-slate-100',
      iconText: 'text-violet-600 dark:text-violet-400',
      iconBgLight: 'bg-violet-50 border-violet-100/60',
      iconBgDark: 'bg-violet-950/20 border-violet-900/40',
      badgeBg: 'bg-violet-50 border border-violet-100 text-violet-700 dark:bg-violet-950/30 dark:border-violet-900/50 dark:text-violet-400'
    },
    slate: {
      lightBg: 'hover:bg-slate-50/40',
      darkBg: 'hover:bg-slate-800/20',
      text: 'text-slate-800 dark:text-slate-100',
      iconText: 'text-slate-600 dark:text-slate-400',
      iconBgLight: 'bg-slate-50 border-slate-100',
      iconBgDark: 'bg-slate-800/30 border-slate-700/50',
      badgeBg: 'bg-slate-100 border border-slate-200 text-slate-700 dark:bg-slate-800/30 dark:border-slate-700/50 dark:text-slate-400'
    },
    blue: {
      lightBg: 'hover:bg-blue-50/20',
      darkBg: 'hover:bg-blue-950/10',
      text: 'text-slate-800 dark:text-slate-100',
      iconText: 'text-blue-600 dark:text-blue-400',
      iconBgLight: 'bg-blue-50 border-blue-100/60',
      iconBgDark: 'bg-blue-950/20 border-blue-900/40',
      badgeBg: 'bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-950/30 dark:border-blue-900/50 dark:text-blue-400'
    }
  };

  const currentStyles = colorMap[color.toLowerCase()] || colorMap.slate;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center p-4 rounded-2xl border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#b11d40] focus-visible:ring-offset-2 hover:-translate-y-0.5 ${
        darkMode
          ? `bg-slate-900/40 border-slate-800/60 hover:border-slate-700/80 hover:bg-slate-900/75 hover:shadow-[0_12px_24px_-8px_rgba(244,63,94,0.12)] shadow-[0_4px_12px_-4px_rgba(0,0,0,0.15)] ${currentStyles.darkBg}`
          : `bg-white border-slate-100 hover:border-slate-200 hover:shadow-[0_12px_20px_-8px_rgba(15,23,42,0.07)] shadow-[0_2px_8px_-3px_rgba(15,23,42,0.04)] ${currentStyles.lightBg}`
      }`}
    >
      {/* Icon Badge Container */}
      <div
        className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 select-none ${
          isTelegram
            ? 'bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-[0_6px_20px_-4px_rgba(14,165,233,0.5)] group-hover:shadow-[0_8px_24px_-4px_rgba(14,165,233,0.65)] group-hover:scale-110 border-0'
            : darkMode
            ? `${currentStyles.iconBgDark} ${currentStyles.iconText} border-2 group-hover:scale-110 group-hover:shadow-lg`
            : `${currentStyles.iconBgLight} ${currentStyles.iconText} border-2 group-hover:scale-110 group-hover:shadow-md`
        }`}
      >
        <SVGIcon type={iconType} className="w-6 h-6" />
      </div>

      {/* Title, Badge, Description */}
      <div className="ml-4 flex-1 min-w-0 pr-2">
        <div className="flex items-center flex-wrap gap-1.5">
          <h3 className={`font-semibold text-[14px] leading-tight transition-colors duration-200 ${
            darkMode ? 'text-slate-100 group-hover:text-white' : 'text-slate-800 group-hover:text-slate-900'
          }`}>
            {name}
          </h3>
          
          {/* Custom Promo Badges */}
          {badge && (
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider select-none ${currentStyles.badgeBg}`}>
              {badge}
            </span>
          )}
          
          {isTelegram && !badge && (
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100/50 dark:border-sky-900/30 uppercase tracking-wider select-none">
              Telegram
            </span>
          )}
        </div>
        <p className={`text-xs mt-1 font-normal leading-normal ${
          darkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-600'
        }`}>
          {desc}
        </p>
      </div>

      {/* Action Indicator Arrow */}
      <div className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-lg transition-colors duration-200 ${
        darkMode
          ? 'bg-slate-800/60 group-hover:bg-[#b11d40]/20 group-hover:text-rose-400 text-slate-500'
          : 'bg-slate-50 group-hover:bg-slate-100 group-hover:text-[#b11d40] text-slate-400'
      }`}>
        <svg
          className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
