const OceanExplorer = () => {
  return (
    <>
      <div className="w-full px-gutter-desktop py-space-xl"><div className="flex flex-col w-full space-y-space-lg">

<section className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="space-y-space-2xs min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Geospatial Telemetry Engine</span>
<span className="text-outline text-body-sm">•</span>
<span className="font-data-mono text-[11px] text-on-surface-variant font-medium">Node SIH26066-INCOIS</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Ocean Explorer</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Interactive geospatial exploration and point-wise subsurface profile inspection.</p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container-low rounded-lg shadow-sm">
<span className="material-symbols-outlined text-[18px] text-primary">my_location</span>
<span className="font-data-mono text-data-mono font-medium text-on-surface">Lat: 14.8500° N, Lon: 69.4200° E</span>
</div>
<div className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container-low rounded-lg shadow-sm">
<span className="material-symbols-outlined text-[18px] text-primary">south</span>
<span className="font-data-mono text-data-mono text-on-surface"><span className="font-semibold text-primary">Depth:</span> 100m</span>
<span className="text-outline-variant font-data-mono text-[11px]">|</span>
<span className="font-data-mono text-data-mono text-on-surface"><span className="font-semibold text-primary">Bathy:</span> -3,420m</span>
</div>
<div className="flex items-center gap-space-2xs">
<button className="flex items-center gap-space-xs px-space-md py-2 bg-primary hover:bg-primary/90 text-on-primary font-title-sm text-title-sm rounded-lg shadow-sm transition-all" title="Export GeoTIFF layer" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>GeoTIFF</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-title-sm rounded-lg transition-all" title="Copy NetCDF OpenDAP subset query" type="button">
<span className="material-symbols-outlined text-[18px]">data_object</span>
<span className="hidden sm:inline">NetCDF</span>
</button>
<button className="p-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg transition-all" title="Share geospatial viewport URL" type="button">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-4 flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[20px]">travel_explore</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-caps text-label-caps text-outline uppercase">Active Domain Basin</span>
<span className="font-title-sm text-title-sm text-on-surface font-bold truncate">North Indian Ocean &amp; Arabian Sea</span>
</div>
</div>
<span className="font-data-mono text-[11px] bg-surface-container px-2 py-1 rounded text-primary font-medium shrink-0">65°E, 15°N</span>
</div>

<div className="lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-space-sm p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center gap-space-sm">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Previous 24-hour cycle" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
<span className="font-data-mono text-data-mono font-semibold text-on-surface">24 Oct 2024</span>
<span className="font-label-caps text-label-caps text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase">Present Frame</span>
</div>
<button className="p-1.5 rounded-lg bg-surface-container text-outline cursor-not-allowed" disabled={true} title="Future horizon inaccessible" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>

<div className="flex items-center gap-1.5 overflow-x-auto py-1">
<span className="font-label-caps text-[10px] text-outline mr-1">-14d</span>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="10 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="11 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="12 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="13 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="14 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="15 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="16 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="17 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="18 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="19 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="20 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="21 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="22 Oct 2024" type="button"></button>
<button className="w-4 h-6 rounded bg-surface-container-highest hover:bg-primary-container/50 transition-colors" title="23 Oct 2024" type="button"></button>
<button className="w-5 h-7 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-data-mono text-[10px] font-bold ring-2 ring-primary-container/30" title="24 Oct 2024 (Now)" type="button">T0</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-8 flex flex-col space-y-space-md">

<div className="relative w-full rounded-2xl bg-inverse-surface overflow-hidden shadow-xl" style={{ height: '640px' }}>

<div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-85" data-location="Arabian Sea, Indian Ocean" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-inverse-surface/40"></div>
<div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/50 via-transparent to-inverse-surface/30"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="80" id="grid-pattern" patternUnits="userSpaceOnUse" width="80">
<path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4cd7f6" strokeDasharray="3 3" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>

<path className="animate-pulse" d="M 120,480 Q 250,420 400,450 T 680,410" fill="none" opacity="0.6" stroke="#acedff" strokeDasharray="6 4" strokeWidth="2"></path>
<path d="M 150,320 Q 300,260 480,290 T 780,260" fill="none" opacity="0.5" stroke="#06b6d4" strokeDasharray="8 4" strokeWidth="1.8"></path>
<path d="M 90,200 Q 220,150 420,180 T 720,150" fill="none" opacity="0.4" stroke="#4cd7f6" strokeDasharray="4 4" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-space-md left-space-md right-space-md z-20 flex items-center justify-between gap-space-sm flex-wrap pointer-events-auto">
<div className="flex items-center gap-1 p-1 bg-inverse-surface/90 backdrop-blur-md rounded-xl shadow-lg overflow-x-auto max-w-full">
<button className="px-space-sm py-1 rounded-lg font-data-mono text-[11px] text-inverse-on-surface/70 hover:text-white hover:bg-surface-variant/20 transition-all" type="button">SST (OSTIA)</button>
<button className="px-space-sm py-1 rounded-lg font-data-mono text-[11px] text-inverse-on-surface/70 hover:text-white hover:bg-surface-variant/20 transition-all" type="button">SSS (SMAP)</button>
<button className="px-space-sm py-1 rounded-lg font-data-mono text-[11px] text-inverse-on-surface/70 hover:text-white hover:bg-surface-variant/20 transition-all" type="button">SSH / SLA (DUACS)</button>
<button className="px-space-sm py-1 rounded-lg font-data-mono text-[11px] text-inverse-on-surface/70 hover:text-white hover:bg-surface-variant/20 transition-all" type="button">Currents (OSCAR)</button>
<button className="px-space-sm py-1 rounded-lg font-data-mono text-[11px] text-inverse-on-surface/70 hover:text-white hover:bg-surface-variant/20 transition-all" type="button">Winds (CCMP)</button>
<button className="px-space-sm py-1 rounded-lg font-data-mono text-[11px] text-inverse-on-surface/70 hover:text-white hover:bg-surface-variant/20 transition-all" type="button">GEBCO Bathy</button>
<button className="px-space-sm py-1 rounded-lg font-data-mono text-[11px] font-bold bg-primary-container text-on-primary-container shadow-md flex items-center gap-1" type="button">
<span className="w-1.5 h-1.5 rounded-full bg-on-primary-container animate-ping"></span>
              Subsurface T (OceanEmbed)
            </button>
</div>

<div className="flex items-center gap-1 bg-inverse-surface/90 backdrop-blur-md p-1 rounded-xl shadow-lg text-white">
<button className="p-1.5 rounded-lg hover:bg-surface-variant/20 text-primary-fixed" title="Recenter on Arabian Sea" type="button">
<span className="material-symbols-outlined text-[18px]">center_focus_strong</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-variant/20 text-white" title="3D Bathymetric Mesh" type="button">
<span className="material-symbols-outlined text-[18px]">layers</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-variant/20 text-white" title="Fullscreen Geospatial Canvas" type="button">
<span className="material-symbols-outlined text-[18px]">fullscreen</span>
</button>
</div>
</div>

<div className="absolute top-[44%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-auto cursor-pointer group">

<div className="relative flex items-center justify-center">
<span className="absolute w-16 h-16 rounded-full bg-primary-container/20 animate-ping"></span>
<span className="absolute w-10 h-10 rounded-full bg-primary-container/30"></span>
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg ring-4 ring-white/30 group-hover:scale-110 transition-transform">
<span className="w-2 h-2 rounded-full bg-white"></span>
</div>
</div>

<div className="mt-2 px-space-sm py-1 bg-inverse-surface/95 backdrop-blur-md rounded-lg shadow-xl flex items-center gap-space-xs text-white">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="font-data-mono text-[11px] font-semibold text-primary-fixed">Lat 15.20°N, Lon 68.80°E</span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-data-mono text-[11px] text-white/80">Arabian Sea Deep</span>
</div>
</div>

<div className="absolute top-[36%] left-[54%] z-10 flex items-center gap-1 pointer-events-auto cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
<div className="w-3 h-3 rounded-full bg-amber-400 ring-2 ring-white/40"></div>
<span className="font-data-mono text-[10px] text-amber-200 bg-inverse-surface/80 px-1.5 py-0.5 rounded shadow">WMO 2902742 (28km SSE)</span>
</div>
<div className="absolute top-[52%] left-[41%] z-10 flex items-center gap-1 pointer-events-auto opacity-75 hover:opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-white/40"></div>
<span className="font-data-mono text-[10px] text-amber-200 bg-inverse-surface/80 px-1 rounded shadow">WMO 2902811</span>
</div>

<div className="absolute top-[28%] left-[28%] w-44 h-32 rounded-3xl bg-error/15 border-2 border-dashed border-error/50 flex items-start justify-end p-2 pointer-events-none">
<span className="font-label-caps text-[9px] bg-error text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">MHW Cat II Active</span>
</div>

<div className="absolute bottom-space-md left-space-md right-space-md z-20 flex flex-col md:flex-row items-stretch md:items-end justify-between gap-space-sm pointer-events-none">

<div className="bg-inverse-surface/90 backdrop-blur-md p-space-sm rounded-xl shadow-xl max-w-sm pointer-events-auto text-white">
<div className="flex items-center justify-between mb-1.5">
<span className="font-label-caps text-[10px] uppercase tracking-wider text-primary-fixed">Thermal Scale (Turbo Gradient)</span>
<span className="font-data-mono text-[11px] font-semibold text-white">T(z=100m) °C</span>
</div>

<div className="w-full h-3 rounded bg-gradient-to-r from-blue-700 via-cyan-400 via-emerald-400 via-amber-300 to-rose-600 shadow-inner"></div>

<div className="flex justify-between font-data-mono text-[10px] text-inverse-on-surface/75 mt-1">
<span>10.0°</span>
<span>15.0°</span>
<span>20.0°</span>
<span>25.0°</span>
<span className="font-bold text-rose-300">30.5°C</span>
</div>
</div>

<div className="bg-inverse-surface/90 backdrop-blur-md px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-md pointer-events-auto">
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-0 cursor-pointer bg-surface-variant/20 border-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-white">ARGO In-Situ (WMO)</span>
</label>
<div className="w-px h-4 bg-outline/40"></div>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-0 cursor-pointer bg-surface-variant/20 border-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-white">Heatwave Alert Polygons</span>
</label>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">vertical_align_bottom</span>
<span className="font-label-caps text-label-caps text-on-surface font-semibold uppercase tracking-wider">Subsurface Depth Slice (15 Standard Levels)</span>
</div>
<span className="font-data-mono text-[11px] text-on-surface-variant">Selected: <strong className="text-primary font-bold">100 meters</strong> depth</span>
</div>

<div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-15 gap-1.5 pt-1">
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">0m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">5m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">10m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">20m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">30m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">50m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">75m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-primary text-on-primary font-bold shadow-md shadow-primary/20 scale-105" type="button">100m★</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">125m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">150m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">200m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">300m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">500m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">700m</button>
<button className="py-1.5 rounded font-data-mono text-[12px] bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium" type="button">1000m</button>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col space-y-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm space-y-space-md">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Subsurface Point Target</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Location Intelligence</h2>
<p className="font-data-mono text-data-mono text-on-surface-variant">Lat 15.2000° N, Lon 68.8000° E</p>
</div>
<span className="px-space-sm py-1 bg-emerald-50 text-emerald-800 font-label-caps text-[10px] font-bold rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
            PASS / RELIABLE
          </span>
</div>

<div className="grid grid-cols-3 gap-space-xs p-space-sm bg-surface-container-low rounded-xl">
<div className="flex flex-col text-center">
<span className="font-label-caps text-[9px] text-outline uppercase">Basin</span>
<span className="font-body-sm text-[12px] font-semibold text-on-surface">Arabian Deep</span>
</div>
<div className="flex flex-col text-center">
<span className="font-label-caps text-[9px] text-outline uppercase">Floor Depth</span>
<span className="font-data-mono text-[12px] font-semibold text-on-surface">3,850 m</span>
</div>
<div className="flex flex-col text-center">
<span className="font-label-caps text-[9px] text-outline uppercase">Coast Offset</span>
<span className="font-data-mono text-[12px] font-semibold text-on-surface">410 km</span>
</div>
</div>

<div className="p-space-md bg-surface-container rounded-xl space-y-space-sm">
<div className="flex items-baseline justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Reconstructed Temp (z=100m)</span>
<span className="font-data-mono text-[11px] text-outline">Target Level</span>
</div>
<div className="flex items-baseline gap-space-sm">
<span className="font-metric-readout-lg text-metric-readout-lg text-primary font-bold">23.4°C</span>
<span className="font-data-mono text-data-mono text-on-surface-variant font-medium">±0.55°C</span>
</div>

<div className="space-y-1">
<div className="flex justify-between font-data-mono text-[11px] text-on-surface-variant">
<span>P05: 22.8°C</span>
<span className="font-semibold text-primary">Median 23.4°C</span>
<span>P95: 23.9°C</span>
</div>
<div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden relative">
<div className="absolute left-[25%] right-[20%] h-full bg-primary-container rounded-full"></div>
<div className="absolute left-[54%] w-1.5 h-full bg-primary rounded-full"></div>
</div>
</div>
</div>

<div className="space-y-space-2xs">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Multi-Modal Ingestion Freshness</span>
<div className="flex items-center justify-between text-[11px] font-data-mono text-on-surface-variant bg-surface-container-lowest p-space-xs rounded-lg">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>SST 1.8h</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>SLA 2.4h</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>SSS 4.1h</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>WIND 1.2h</span>
</div>
</div>

<div className="space-y-space-2xs">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-outline uppercase">Vertical Profile (0m - 500m)</span>
<span className="font-data-mono text-[10px] text-primary">Thermocline: 60-140m</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-xl">

<svg className="w-full h-32 overflow-visible" viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">

<line stroke="#bcc9cd" strokeDasharray="2 2" strokeWidth="0.5" x1="40" x2="270" y1="15" y2="15"></line>
<line stroke="#bcc9cd" strokeDasharray="2 2" strokeWidth="0.5" x1="40" x2="270" y1="45" y2="45"></line>
<line stroke="#bcc9cd" strokeDasharray="2 2" strokeWidth="0.5" x1="40" x2="270" y1="75" y2="75"></line>
<line stroke="#bcc9cd" strokeDasharray="2 2" strokeWidth="0.5" x1="40" x2="270" y1="105" y2="105"></line>

<text fill="#6d797d" fontFamily="JetBrains Mono" fontSize="9" x="5" y="18">0m</text>
<text fill="#6d797d" fontFamily="JetBrains Mono" fontSize="9" x="5" y="48">100m</text>
<text fill="#6d797d" fontFamily="JetBrains Mono" fontSize="9" x="5" y="78">250m</text>
<text fill="#6d797d" fontFamily="JetBrains Mono" fontSize="9" x="5" y="108">500m</text>

<path d="M 245,15 C 240,30 200,40 160,45 C 120,55 90,80 80,105 L 94,105 C 104,80 134,55 174,45 C 214,40 252,30 255,15 Z" fill="#acedff" opacity="0.45"></path>

<path d="M 250,15 C 245,30 207,40 167,45 C 127,55 97,80 87,105" fill="none" stroke="#00687a" strokeLinecap="round" strokeWidth="2.5"></path>

<circle cx="167" cy="45" fill="#06b6d4" r="4.5" stroke="#ffffff" strokeWidth="2"></circle>
<line stroke="#06b6d4" strokeDasharray="2 2" strokeWidth="1.5" x1="167" x2="260" y1="45" y2="45"></line>
<text fill="#00687a" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" x="210" y="41">23.4°C</text>
</svg>
<div className="flex justify-between items-center px-1 text-[10px] font-data-mono text-outline">
<span>12°C</span>
<span>18°C</span>
<span>24°C</span>
<span>29°C</span>
</div>
</div>
</div>

<div className="p-space-sm bg-surface-container-lowest rounded-xl shadow-sm flex items-start gap-space-sm">
<span className="material-symbols-outlined text-amber-500 text-[20px] shrink-0 mt-0.5">adjust</span>
<div className="space-y-0.5">
<div className="flex items-center gap-space-xs">
<span className="font-data-mono text-[11px] font-bold text-on-surface">ARGO Float WMO #2902742</span>
<span className="font-label-caps text-[9px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-semibold">28.4 km SSE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Direct sensor validation matched within <strong className="text-on-surface font-semibold font-data-mono">0.22°C RMSE</strong> on latest surfacing cycle.</p>
</div>
</div>

<div className="space-y-space-xs pt-space-xs">
<button className="w-full py-2.5 px-space-md rounded-xl bg-primary-container text-on-primary-container font-title-sm text-title-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[20px]">psychology</span>
<span>Run Deep AI Reconstruction</span>
</button>
<button className="w-full py-2 px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-title-sm font-semibold transition-all flex items-center justify-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px]">show_chart</span>
<span>Open Full Vertical Profile (0-1000m)</span>
</button>
<div className="flex items-center justify-between pt-1">
<a className="font-body-sm text-body-sm text-primary hover:underline font-semibold flex items-center gap-1" href="#analogues">
<span className="material-symbols-outlined text-[16px]">manage_search</span>
<span>Search Historical Analogues</span>
</a>
<span className="font-data-mono text-[10px] text-outline">SIH26066 Prototype</span>
</div>
</div>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl text-on-surface-variant space-y-1">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-outline">info</span>
<span className="font-label-caps text-[10px] uppercase font-bold text-outline">Dataset Provenance</span>
</div>
<p className="font-body-sm text-[11px] leading-relaxed text-on-surface-variant">
          Inference synthesized via Deep Residual Surface-to-Subsurface Transformer (SIH26066 architecture). Calibrated against 20-year GLORYS12V1 reanalysis and Global In-situ ARGO dataset.
        </p>
</div>
</div>
</section>
</div></div>
    </>
  );
};

export default OceanExplorer;
