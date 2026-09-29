import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md flex-1 max-w-xl">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
          <input className="w-full h-9 pl-9 pr-space-md bg-surface-container-low border border-outline-variant/60 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all" placeholder="Search lat/long, ARGO float ID, ocean basin, or coordinates..." type="text" />
        </div>
        <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low border border-outline-variant/50 rounded-lg">
          <span className="material-symbols-outlined text-primary text-[16px]">public</span>
          <span className="font-body-sm text-body-sm font-medium text-on-surface whitespace-nowrap">Indian Ocean (BoB)</span>
          <span className="material-symbols-outlined text-outline text-[16px]">arrow_drop_down</span>
        </div>
      </div>
      <div className="flex items-center gap-space-sm shrink-0">
        <div className="hidden lg:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded font-data-mono text-[11px] text-on-surface">
          <span className="material-symbols-outlined text-[14px] text-primary">calendar_today</span>
          <span>24 Oct 2024 · 12:00 UTC</span>
        </div>
        <div className="hidden md:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full font-label-caps text-label-caps text-on-surface-variant">
          <span>v2.4-EmbedOcean</span>
          <span className="text-outline">•</span>
          <span>Res 0.25°</span>
        </div>
        <div className="flex items-center gap-space-xs px-space-sm py-1 bg-emerald-50 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-label-caps text-[10px] text-emerald-800 font-semibold tracking-wide">15 LEVELS ACTIVE</span>
        </div>
        <button className="relative p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
        </button>
        <div className="h-6 w-px bg-outline-variant/60 mx-space-2xs"></div>
        <div className="flex items-center gap-space-sm pl-space-2xs">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJBOiEeGIiSF1fAlShbhXKmJQUEt30gucHDSXljmtUOTUcO_QyhOmjrodbBmYlp-KEtq99JkHUeURM2WJ4wx-byPaK8_Hm44g4Rx7o1Jm_7rGjbiMeGxl2wof9qtFl_76M7I8buSKVQXlkeqkLD2k5k6oieq046x5mP0x0lc_Q2Jpq-ztGC0WSezd0lmkZ3eB3XZMCszvWfXWm32ornfSq1LYf4Egm_xjGyZY6szKcnB1j7KUJ6kj" />
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-title-sm text-[13px] leading-tight text-on-surface font-semibold">Dr. Anya Sharma</span>
            <span className="font-body-sm text-[11px] leading-tight text-outline">Lead Physical Oceanographer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
