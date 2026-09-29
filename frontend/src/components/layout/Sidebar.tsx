import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { id: 'overview', path: '/overview', icon: 'dashboard', label: 'Overview' },
  { id: 'explorer', path: '/explorer', icon: 'explore', label: 'Ocean Explorer', badge: '3D' },
  { id: 'reconstruction', path: '/reconstruction', icon: 'thermostat', label: 'Temperature Reconst.' },
  { id: 'profiles', path: '/profiles', icon: 'waves', label: 'Vertical Profiles' },
  { id: 'heatwaves', path: '/heatwaves', icon: 'warning', label: 'Heatwave Intel', dot: true },
  { id: 'analogues', path: '/analogues', icon: 'history_toggle_off', label: 'Historical Analogues' },
  { id: 'trust', path: '/trust', icon: 'verified', label: 'Scientific Trust' },
  { id: 'datasources', path: '/datasources', icon: 'database', label: 'Data Sources' },
  { id: 'performance', path: '/performance', icon: 'speed', label: 'Model Performance' },
  { id: 'mlops', path: '/mlops', icon: 'monitoring', label: 'Monitoring & MLOps' },
  { id: 'settings', path: '/settings', icon: 'settings', label: 'Settings' },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-inverse-surface text-inverse-on-surface z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-16 px-space-lg flex items-center gap-space-sm border-b border-outline/20">
          <img alt="OceanEmbed Scientific Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1W1akBOgTDd7mAKY1Zgfe8mcEc8TQUK0RTelIfwNtBh9DdoMlx2lqOaFt1I0BDmjxfTtwKShC3w2t8A1zsRyL9Iqp8jrHHWtDCPKkfKkk-N1DGcmq6TC5rDIdDDKaDW4LRETrxnNRS_hYbQcbEP7i4Aujs2jAtgfyLBKO0z1UTM2OZcPUwqArzilJ4W1Mgy-K5Op5CjNkhmhwkGPtRsYmLJEJc0uaH_fxfsx8u6Rj9_Vefxo9AkfqnBoQ" />
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md tracking-tight font-extrabold text-white">OceanEmbed</span>
            </div>
            <span className="font-label-caps text-[10px] text-primary-fixed tracking-widest uppercase">SIH26066 Node</span>
          </div>
        </div>

        {/* Status */}
        <div className="px-space-md py-space-sm">
          <div className="px-space-sm py-space-xs rounded bg-surface-variant/10 text-primary-fixed flex items-center justify-between font-label-caps text-label-caps">
            <span className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>SUBSURFACE TELEMETRY
            </span>
            <span className="text-[9px] bg-primary/40 px-1 py-0.5 rounded text-white font-data-mono text-data-mono">AI ACTIVE</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-space-md py-space-xs space-y-space-2xs overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "group flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors",
                  isActive
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                    : "text-inverse-on-surface/80 hover:bg-surface-variant/15 hover:text-white"
                )
              }
            >
              <span className="material-symbols-outlined text-[20px] text-primary-fixed">{item.icon}</span>
              <span className="font-body-md text-body-md flex-1">{item.label}</span>
              {item.badge && (
                <span className="font-data-mono text-[10px] bg-primary/30 text-primary-fixed px-1.5 py-0.5 rounded">{item.badge}</span>
              )}
              {item.dot && (
                <span className="w-2 h-2 rounded-full bg-error ring-4 ring-error/20"></span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer info */}
        <div className="p-space-md border-t border-outline/20 bg-inverse-surface">
          <div className="rounded-lg bg-surface-variant/10 p-space-sm mb-space-sm">
            <div className="flex items-center justify-between mb-space-2xs">
              <span className="font-label-caps text-[10px] text-inverse-on-surface/70 uppercase">Benchmark</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim"></span>
            </div>
            <p className="font-data-mono text-[11px] text-white leading-tight font-medium">GLORYS12V1 / ARGO Calibrated</p>
          </div>
          <button className="w-full flex items-center justify-between px-space-sm py-space-xs rounded text-inverse-on-surface/70 hover:text-white hover:bg-surface-variant/15 transition-colors" type="button">
            <span className="font-body-sm text-body-sm flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px]">keyboard_double_arrow_left</span>Collapse Shell
            </span>
            <span className="font-data-mono text-[10px] text-inverse-on-surface/50">⌘[</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
