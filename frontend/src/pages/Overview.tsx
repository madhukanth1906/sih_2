import React from 'react';

const Overview = () => {
  return (
    <div className="w-full px-gutter-desktop py-space-xl">
      <div className="flex flex-col w-full">
        {/* Operational Notification Banner */}
        <div className="mb-space-lg rounded-xl bg-surface-container-low p-space-md shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="font-label-caps text-label-caps uppercase text-primary font-bold">TELEMETRY BENCHMARK NODE SIH26066</span>
              <span className="text-outline">/</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Equatorial & Northern Indian Ocean Assimilation Core (OSTIA-DUACS Coupled)</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-data-mono text-[11px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-semibold">STATUS: PROD-SYNCHRONIZED</span>
              <span className="font-data-mono text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded font-semibold">CYCLE: 06:00 UTC</span>
            </div>
          </div>
        </div>

        {/* Operational Header & Controls Strip */}
        <div className="mb-space-xl flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg">
          <div>
            <div className="flex items-center gap-space-xs mb-space-2xs">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Deep Stratification Intelligence</span>
              <span className="font-data-mono text-body-sm text-outline">•</span>
              <span className="font-label-caps text-[11px] text-tertiary font-bold tracking-wider uppercase">INCOIS-ARGO CALIBRATED</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Ocean Intelligence Overview</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
              Autonomous AI-driven subsurface state reconstruction across the Arabian Sea, Bay of Bengal, and Equatorial Indian Ocean with continuous ARGO drift telemetry.
            </p>
          </div>
          {/* Right Controls */}
          <div className="flex flex-wrap items-center gap-space-sm">
            <div className="flex items-center gap-space-xs bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-primary">public</span>
              <select className="bg-transparent font-body-sm text-body-sm text-on-surface font-semibold focus:outline-none cursor-pointer">
                <option>Indian Ocean (Arabian Sea, BoB, Eq.)</option>
                <option>Arabian Sea Central (10°N-22°N)</option>
                <option>Bay of Bengal Stratified Sector</option>
                <option>Equatorial Wave Guide (5°S-5°N)</option>
              </select>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary">date_range</span>
              <span className="font-body-sm text-body-sm text-on-surface font-medium">18 Oct – 24 Oct 2024</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <button className="flex items-center gap-space-xs bg-surface-container-lowest hover:bg-surface-container text-on-surface px-3 py-1.5 rounded-lg shadow-sm font-body-sm text-body-sm font-medium transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                <span>NetCDF/GeoJSON</span>
              </button>
              <button className="flex items-center gap-space-xs bg-primary hover:bg-surface-tint text-on-primary px-3.5 py-1.5 rounded-lg shadow-md font-body-sm text-body-sm font-semibold transition-all" type="button">
                <span className="material-symbols-outlined text-[18px]">cached</span>
                <span>Run Scan</span>
              </button>
            </div>
          </div>
        </div>

        {/* KPI Statistical Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md mb-space-xl">
          {[
            { title: 'Temporal Cycle', value: '24 Oct · 06:00', icon: 'schedule', desc: 'OSTIA/DUACS Sync (2h ago)', footLeft: 'Latency: -120m', footRight: 'Live Stream' },
            { title: 'Basin Coverage', value: '99.42%', icon: 'grid_view', desc: '30°S–30°N, 40°E–110°E', footLeft: 'Res: 0.25° × 0.25°', footRight: '14,240 Pixels' },
            { title: 'In-Situ Collocation', value: '1,428 Floats', icon: 'sensors', desc: 'Active ARGO & INCOIS moorings', footLeft: '98 BGC Sensors', footRight: '99.1% Fidelity' },
            { title: 'Subsurface MHWs', value: '4 Extreme Events', icon: 'local_fire_department', desc: '2 Cat-3 (Arabian Sea Thermocline)', footLeft: '+2.8°C Anomaly', footRight: 'HIGH RISK', danger: true },
            { title: 'ML Inference Kernel', value: 'v2.4-EmbedOcean', icon: 'neurology', desc: '15 Stratified Depth Layers', footLeft: 'Med: 184ms / col', footRight: 'Pass: 99.8%' },
          ].map((card, i) => (
            <div key={i} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-outline mb-space-sm">
                <span className={`font-label-caps text-label-caps uppercase ${card.danger ? 'text-error' : 'text-secondary'} font-semibold`}>{card.title}</span>
                <span className={`material-symbols-outlined text-[18px] ${card.danger ? 'text-error' : 'text-primary'}`}>{card.icon}</span>
              </div>
              <div>
                <div className={`font-metric-readout-md text-metric-readout-md ${card.danger ? 'text-error' : 'text-on-surface'} font-bold`}>{card.value}</div>
                <p className="font-data-mono text-[11px] text-on-surface-variant mt-1 flex items-center gap-1">
                  {!card.danger && i === 0 && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                  {card.desc}
                </p>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-[11px] font-data-mono text-outline">
                <span className={card.danger ? 'text-error font-semibold' : ''}>{card.footLeft}</span>
                <span className={card.danger ? 'bg-error-container text-on-error-container px-1 rounded text-[10px] font-bold' : (i===0?'text-primary font-medium':'text-emerald-700 font-semibold')}>{card.footRight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Primary Geospatial Visualization & Stratification Deck */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-xl">
          <div className="xl:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden min-h-[500px]">
            <div className="bg-surface-container-low px-space-md py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-xs">
                {['SST (SURFACE)', 'SALINITY (SSS)', 'HEIGHT (SLA)', 'CURRENTS (OSCAR)'].map(btn => (
                  <button key={btn} className={`px-2.5 py-1 rounded ${btn.includes('SST') ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'} font-label-caps text-[11px] font-bold tracking-wider transition-colors`} type="button">{btn}</button>
                ))}
                <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-caps text-[11px] font-bold tracking-wider shadow-sm flex items-center gap-1" type="button">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping"></span>
                  RECONSTRUCTED (100M)
                </button>
              </div>
            </div>
            <div className="relative w-full flex-1 bg-[#071326] flex items-center justify-center p-space-md">
              <span className="text-white/50">Map Visualization Placeholder</span>
            </div>
          </div>
          <div className="xl:col-span-4 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between pb-space-xs">
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Vertical Thermal Profile</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">ARGO 2902781 vs. AI Reconstructed</p>
                </div>
              </div>
              <div className="relative w-full h-44 bg-surface-container-low rounded-lg flex items-center justify-center my-space-xs">
                <span className="text-on-surface-variant">Profile Chart Placeholder</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between pb-space-xs">
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface font-bold">30-Day Heat Content Anomaly</h3>
                </div>
              </div>
              <div className="flex items-baseline gap-space-sm my-space-xs">
                <span className="font-metric-readout-lg text-metric-readout-lg text-on-surface font-extrabold">+0.42</span>
                <span className="font-title-sm text-title-sm text-tertiary font-bold">GJ/m²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
