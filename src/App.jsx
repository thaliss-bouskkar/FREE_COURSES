import React, { useState, useEffect } from 'react';
import LinkCard from './components/LinkCard';

export default function App() {
  // Theme state: dark mode active by default for high-end SaaS feel
  const [darkMode, setDarkMode] = useState(true);
  // Category tabs state: 'all' | 'web' | 'telegram'
  const [activeTab, setActiveTab] = useState('all');
  // Copy sharing feedback state
  const [showToast, setShowToast] = useState(false);

  // Auto-hide clipboard notification toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Synchronize document body background color with theme state
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#090d16' : '#f8fafc';
  }, [darkMode]);

  // Reset viewport and document scroll offsets on mount to prevent focus shifts
  useEffect(() => {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  const handleShare = () => {
    const profileUrl = window.location.href;
    navigator.clipboard.writeText(profileUrl)
      .then(() => {
        setShowToast(true);
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err);
      });
  };

  const courseLinks = [
    // Web Sites
    {
      name: 'Couponami',
      desc: 'Coupons w promo codes jdad / Freshly updated Udemy coupon codes.',
      url: 'https://www.couponami.com/',
      color: 'rose',
      iconType: 'gift',
      type: 'web',
      badge: 'Moroccan 🇲🇦'
    },
    {
      name: 'Coupon Scorpion',
      desc: 'Coupons Udemy 100% Off / Active discount codes database.',
      url: 'https://couponscorpion.com/',
      color: 'amber',
      iconType: 'scorpion',
      type: 'web',
      badge: '🔥 Hot'
    },
    {
      name: 'Real Discount',
      desc: 'Les cours fabor w l\'khtiyarat bzaf / Huge catalog of free online classes.',
      url: 'https://www.real.discount/',
      color: 'emerald',
      iconType: 'tag',
      type: 'web',
      badge: '⚡ Catalog'
    },
    {
      name: 'FreeCourseSite',
      desc: 'Téléchargement direct d les cours / Premium IT direct downloads.',
      url: 'https://fcsnew.net/',
      color: 'indigo',
      iconType: 'download',
      type: 'web',
      badge: '📥 Direct'
    },
    {
      name: 'Udemy Freebies',
      desc: 'Les meilleurs cours Udemy gratuits / Daily selected course coupons.',
      url: 'https://www.udemyfreebies.com/',
      color: 'violet',
      iconType: 'ticket',
      type: 'web',
      badge: '🎁 Selected'
    },
    {
      name: 'Free Udemy',
      desc: 'Section officielle f Udemy / Official list of free Udemy-hosted courses.',
      url: 'https://www.udemy.com/courses/free/',
      color: 'slate',
      iconType: 'academic',
      type: 'web',
      badge: '🎓 Official'
    },
    // Telegram Channels
    {
      name: 'Tutorialbar Official',
      desc: 'Canal Telegram dima à jour / Highly active Telegram community.',
      url: 'https://t.me/tutorialbarofficial',
      color: 'blue',
      iconType: 'telegram',
      type: 'telegram',
      badge: '✈️ Active'
    },
    {
      name: 'Udemy Coupons Free',
      desc: 'Des centaines de coupons chaque jour / Hundreds of coupon alerts daily.',
      url: 'https://t.me/udemy_free_courses_coupons',
      color: 'blue',
      iconType: 'telegram',
      type: 'telegram',
      badge: '⚡ 100% Off'
    },
    {
      name: 'Freebies Global',
      desc: 'Cours et logiciels gratuits / Daily updates on free IT materials.',
      url: 'https://t.me/freebiesglobal',
      color: 'blue',
      iconType: 'telegram',
      type: 'telegram',
      badge: '✈️ Global'
    }
  ];

  // Filtered links mapping
  const filteredLinks = courseLinks.filter((link) => {
    if (activeTab === 'web') return link.type === 'web';
    if (activeTab === 'telegram') return link.type === 'telegram';
    return true;
  });

  return (
    <div className={`min-h-screen w-full relative flex flex-col justify-start md:justify-center items-center py-8 px-4 transition-colors duration-500 font-sans ${
      darkMode ? 'bg-[#090d16] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Decorative ambient background glows — fixed so they don't scroll */}
      <div className={`fixed top-[-25%] left-[-15%] w-[70%] h-[70%] rounded-full blur-[130px] pointer-events-none transition-colors duration-500 ${
        darkMode ? 'bg-rose-900/10' : 'bg-rose-200/10'
      }`}></div>
      <div className={`fixed bottom-[-25%] right-[-15%] w-[70%] h-[70%] rounded-full blur-[130px] pointer-events-none transition-colors duration-500 ${
        darkMode ? 'bg-blue-950/15' : 'bg-blue-200/10'
      }`}></div>
      
      {/* Floating toast notification */}
      <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none flex items-center gap-2 bg-slate-900 border border-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg ${
        showToast ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}>
        <span className="text-emerald-400">✔</span> Copied link to clipboard / Tm nskh l-rabit!
      </div>

      {/* Main card container — no fixed height, scrolls with page */}
      <div className={`relative w-full max-w-md rounded-3xl border transition-all duration-500 ${
        darkMode
          ? 'bg-slate-900/75 backdrop-blur-xl border-slate-800/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]'
          : 'bg-white border-slate-100 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.06)]'
      }`}>
        
        {/* Banner with professional background image */}
        <div className={`h-36 w-full flex flex-col justify-center items-center relative rounded-t-[22px] overflow-hidden select-none border-b transition-colors duration-500 ${
          darkMode ? 'border-slate-800/80' : 'border-slate-100'
        }`}>
          <img
            src="/cover_banner.png"
            alt="Cyber Tech cover banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10"></div>
          
          {/* Top Controls: Dark Mode Toggle & Share Button */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-30">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white transition-all duration-200 cursor-pointer"
              title="Toggle Light/Dark Theme"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                // Sun Icon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Share Clipboard Button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Share Link-in-Bio"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l4.636-2.318m0 7.152l-4.636-2.318M21 12a3 3 0 11-6 0 3 3 0 016 0zm-11-6a3 3 0 11-6 0 3 3 0 016 0zm0 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Share</span>
            </button>
          </div>

          <span className="relative z-10 text-white font-extrabold text-2xl tracking-[0.18em] block drop-shadow-sm font-sans uppercase mt-4">
            FREE COURSES
          </span>
          <span className="relative z-10 text-rose-400 font-semibold text-[10px] tracking-[0.25em] block uppercase mt-1.5 opacity-90">
            IT RESOURCES HUB
          </span>
        </div>

        {/* Circular profile avatar overlapping the banner */}
        <div className="flex justify-center -mt-10 relative z-20">
          <div className={`w-20 h-20 rounded-full p-1 shadow-[0_8px_20px_-4px_rgba(15,23,42,0.25)] transform hover:scale-105 transition-all duration-300 border-4 ${
            darkMode ? 'border-slate-900' : 'border-white'
          }`}>
            <img
              src="/anime.png"
              alt="Profile avatar"
              className="w-full h-full rounded-full object-cover select-none"
            />
          </div>
        </div>

        {/* Bio/Description section */}
        <div className="text-center mt-5 px-6 mb-5">
          <h1 className={`font-extrabold text-xl tracking-tight leading-tight transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Learn For Free
          </h1>
          <p className={`font-medium text-xs mt-2.5 leading-relaxed max-w-xs mx-auto transition-colors duration-500 ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Jm3t likom hna ga3 les sites w les canaux Telegram li kiy7to les cours payants b 0$.
          </p>
          
          {/* Subtle status/metadata badges */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-semibold select-none">
            <span className={`flex items-center gap-1 border px-2.5 py-0.5 rounded-full transition-colors duration-500 ${
              darkMode ? 'bg-slate-800/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-400'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Updated Today
            </span>
            <span className={`flex items-center gap-1 border px-2.5 py-0.5 rounded-full transition-colors duration-500 ${
              darkMode ? 'bg-slate-800/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-400'
            }`}>
              ⚡ 100% Free
            </span>
          </div>
        </div>

        {/* Dynamic Category Tab Bar */}
        <div className="px-5 mb-5 select-none">
          <div className={`flex p-1 rounded-xl border transition-colors duration-500 ${
            darkMode ? 'bg-slate-950/40 border-slate-800/60' : 'bg-slate-100/70 border-slate-200/50'
          }`}>
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#b11d40] text-white shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              All Links
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-[#b11d40] text-white shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab('telegram')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'telegram'
                  ? 'bg-[#b11d40] text-white shadow-sm'
                  : darkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Telegram
            </button>
          </div>
        </div>

        {/* Reusable vertical link cards list */}
        <div className="px-5 pb-5 space-y-2.5">
          
          {/* Featured Udemy Promo Banner Card */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className={`relative group rounded-2xl overflow-hidden border transition-all duration-300 select-none ${
              darkMode
                ? 'border-slate-800 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:border-slate-700'
                : 'border-slate-100 shadow-[0_4px_16px_-5px_rgba(15,23,42,0.06)] hover:border-slate-200 hover:shadow-[0_12px_24px_-10px_rgba(15,23,42,0.12)]'
            }`}>
              <div className="h-32 w-full overflow-hidden bg-slate-900 relative">
                <img
                  src="/udemy_banner.png"
                  alt="Udemy Premium Free Courses"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>
                
                {/* Promo Floating Badge */}
                <div className="absolute top-3 left-4">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#b11d40] text-white uppercase tracking-wider shadow-sm">
                    🔥 Best Quality
                  </span>
                </div>
                
                {/* Promo Titles */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block">
                    Featured Promotion
                  </span>
                  <h4 className="text-white font-extrabold text-sm mt-0.5 leading-snug drop-shadow-sm text-left">
                    100% Free Udemy Premium Coupons
                  </h4>
                </div>
              </div>
            </div>
          )}

          {/* Core filtered link cards (vertically stacked list) */}
          <div className="space-y-2.5 transition-all duration-300">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link, index) => (
                <LinkCard
                  key={index}
                  name={link.name}
                  desc={link.desc}
                  url={link.url}
                  color={link.color}
                  iconType={link.iconType}
                  type={link.type}
                  badge={link.badge}
                  darkMode={darkMode}
                />
              ))
            ) : (
              <div className="text-center py-8 text-xs text-slate-400 font-medium select-none">
                No links found in this category.
              </div>
            )}
          </div>

          {/* Coursera Special Tutorial Section */}
          <div className={`mt-8 pt-6 border-t ${
            darkMode ? 'border-slate-800/80' : 'border-slate-100'
          }`}>
            <div className="flex items-center gap-2 mb-3.5 px-1 select-none">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors duration-500 ${
                darkMode
                  ? 'bg-slate-800/40 text-blue-400 border-slate-800'
                  : 'bg-blue-50 text-blue-600 border-blue-100/50'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-16.25v14.25" />
                </svg>
              </div>
              <div className="text-left">
                <h2 className={`font-extrabold text-[13px] uppercase tracking-wider leading-none transition-colors duration-500 ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  Coursera Free Access Guide
                </h2>
                <p className="text-slate-400 text-[10px] font-medium mt-1">
                  Kifach takhod ay cours f Coursera fabor 🎓
                </p>
              </div>
            </div>

            {/* Coursera Guide Body */}
            <div className={`rounded-2xl border p-4 space-y-4 transition-all duration-500 ${
              darkMode
                ? 'bg-slate-900/40 border-slate-800'
                : 'bg-slate-50/70 border-slate-100'
            }`}>
              
              {/* HTML5 video player */}
              <div className="space-y-1.5">
                <span className={`text-[11px] font-bold flex items-center gap-1 select-none transition-colors duration-500 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span>🎥</span> Sharh Video / Video Guide:
                </span>
                <div className={`relative rounded-xl overflow-hidden bg-slate-950 border shadow-inner aspect-video transition-colors duration-500 ${
                  darkMode ? 'border-slate-800/80' : 'border-slate-200/40'
                }`}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/TzonCRaCQPc?rel=0&modestbranding=1"
                    title="Coursera Free Courses Guide"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* PDF download element */}
              <div className="space-y-1.5 pt-1">
                <span className={`text-[11px] font-bold flex items-center gap-1 select-none transition-colors duration-500 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span>📄</span> Dalil Maktoub / Written Guide (PDF):
                </span>
                <a
                  href="/coursera_guide.pdf"
                  download="Coursera_Free_Guide.pdf"
                  className={`group flex items-center justify-between p-3 rounded-xl border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#b11d40] ${
                    darkMode
                      ? 'bg-slate-950/40 border-slate-800/60 hover:border-[#b11d40]/40'
                      : 'bg-white border-slate-100 hover:border-[#b11d40]/30 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border group-hover:scale-105 transition-transform duration-200 ${
                      darkMode
                        ? 'bg-rose-950/30 text-rose-400 border-rose-900/40'
                        : 'bg-rose-50 text-rose-600 border-rose-100/50'
                    }`}>
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold text-[12px] leading-tight transition-colors duration-500 ${
                        darkMode ? 'text-slate-300 group-hover:text-slate-100' : 'text-slate-700 group-hover:text-slate-800'
                      }`}>
                        Coursera_Free_Guide.pdf
                      </h4>
                      <p className="text-slate-400 text-[10px] mt-0.5 leading-none">
                        Telecharger / Download Guide PDF
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg group-hover:bg-[#b11d40] group-hover:text-white flex items-center justify-center transition-all duration-200 ${
                    darkMode ? 'bg-slate-800/80 text-slate-400' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="text-center pb-5 pt-1 px-6 select-none">
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
            Created for Moroccan tech learners. Find your roadmap & start coding.
          </p>
        </div>

      </div>
    </div>
  );
}
