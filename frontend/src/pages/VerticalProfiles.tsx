const VerticalProfiles = () => {
  return (
    <>
      <div classname="w-full px-gutter-desktop py-space-xl"><div classname="flex flex-col w-full">
<!-- Top Context Header & Metadata Ribbon -->
<div classname="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div>
<div classname="flex items-center gap-space-sm mb-space-2xs">
<span classname="font-label-caps text-label-caps uppercase text-primary px-space-xs py-0.5 rounded bg-surface-container-highest">Profile Telemetry Node #4</span>
<span classname="flex items-center gap-1.5 font-label-caps text-label-caps text-emerald-700 bg-emerald-100/70 px-space-xs py-0.5 rounded-full">
<span classname="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
          High Fid. Reconstruction
        </span>
</div>
<h1 classname="font-headline-xl text-headline-xl text-on-surface tracking-tight">Vertical Temperature Profiles</h1>
<p classname="font-body-md text-body-md text-secondary mt-0.5">In-depth thermal stratification analysis, uncertainty quantification, and in-situ validation.</p>
</div>
<!-- Quick Action Export / Compare Controls -->
<div classname="flex flex-wrap items-center gap-space-sm">
<button classname="group flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all shadow-sm" id="btn-compare-argo" type="button">
<span classname="material-symbols-outlined text-[18px] text-tertiary">difference</span>
<span classname="font-body-sm text-body-sm font-medium">Compare Collocated ARGO</span>
</button>
<button classname="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all shadow-sm" type="button">
<span classname="material-symbols-outlined text-[18px] text-primary">download</span>
<span classname="font-body-sm text-body-sm font-medium">Download CSV</span>
</button>
<button classname="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container hover:brightness-105 transition-all shadow-md" type="button">
<span classname="material-symbols-outlined text-[18px]">picture_as_pdf</span>
<span classname="font-body-sm text-body-sm font-semibold">Export Publication Plot</span>
</button>
</div>
</div>
<!-- Location & Profile Selector Bar -->
<div classname="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
<div classname="flex flex-wrap items-center gap-space-md min-w-0">
<div classname="flex items-center gap-space-sm bg-surface-container-low px-space-md py-2 rounded-lg">
<span classname="material-symbols-outlined text-primary text-[22px]">pin_drop</span>
<div classname="flex flex-col">
<span classname="font-label-caps text-[10px] text-secondary uppercase">Current Station</span>
<span classname="font-title-sm text-title-sm text-on-surface truncate">Arabian Sea Central Deep (15.42° N, 68.75° E)</span>
</div>
</div>
<div classname="flex items-center gap-space-sm bg-surface-container-low px-space-md py-2 rounded-lg">
<span classname="material-symbols-outlined text-tertiary text-[20px]">calendar_month</span>
<div classname="flex flex-col">
<span classname="font-label-caps text-[10px] text-secondary uppercase">Observation Epoch</span>
<span classname="font-data-mono text-data-mono font-medium text-on-surface">24 Oct 2024 · 12:00 UTC</span>
</div>
</div>
<div classname="hidden sm:flex items-center gap-space-sm bg-surface-container-low px-space-md py-2 rounded-lg">
<span classname="material-symbols-outlined text-secondary text-[20px]">height</span>
<div classname="flex flex-col">
<span classname="font-label-caps text-[10px] text-secondary uppercase">Bathymetric Floor</span>
<span classname="font-data-mono text-data-mono text-on-surface">3,850 m (Abyssal Plain)</span>
</div>
</div>
<div classname="hidden md:flex items-center gap-space-sm bg-surface-container-low px-space-md py-2 rounded-lg">
<span classname="material-symbols-outlined text-amber-600 text-[20px]">ssid_chart</span>
<div classname="flex flex-col">
<span classname="font-label-caps text-[10px] text-secondary uppercase">Peak Thermocline Gradient</span>
<span classname="font-data-mono text-data-mono text-on-surface">78 m (-0.18°C/m)</span>
</div>
</div>
</div>
<!-- Coordinates Selector Micro-pill -->
<div classname="flex items-center gap-space-xs self-end xl:self-center">
<span classname="font-label-caps text-[11px] text-secondary uppercase mr-1">Switch Basin:</span>
<button classname="px-space-sm py-1 bg-surface-container-highest rounded text-on-surface font-body-sm text-body-sm font-medium hover:bg-secondary-container transition-colors">Bay of Bengal</button>
<button classname="px-space-sm py-1 bg-primary text-on-primary rounded font-body-sm text-body-sm font-semibold">Arabian Sea</button>
<button classname="px-space-sm py-1 bg-surface-container-highest rounded text-on-surface font-body-sm text-body-sm font-medium hover:bg-secondary-container transition-colors">Equatorial Ind.</button>
</div>
</div>
<!-- Main Vertical Profile Visualization Section (Split Panel) -->
<div classname="w-full grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg">
<!-- Large Chart Visualizer (xl:col-span-9) -->
<div classname="xl:col-span-9 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col relative overflow-hidden">
<!-- Chart Top Bar / Toggles -->
<div classname="flex flex-wrap items-center justify-between gap-space-sm pb-space-md mb-space-sm">
<div classname="flex items-center gap-space-sm">
<div classname="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<span classname="material-symbols-outlined text-[20px]">stacked_line_chart</span>
</div>
<div>
<h2 classname="font-headline-md text-headline-md text-on-surface leading-tight">Subsurface Thermal Profile (0 – 1000m)</h2>
<span classname="font-label-caps text-label-caps text-secondary uppercase">Depth Y-Axis Inversion [0m Surface ➔ -1000m Bathypelagic]</span>
</div>
</div>
<!-- Dynamic Trace Filters -->
<div classname="flex flex-wrap items-center gap-space-sm bg-surface-container-low px-space-sm py-1 rounded-lg">
<label classname="flex items-center gap-1.5 cursor-pointer text-on-surface font-body-sm text-body-sm select-none">
<input defaultChecked classname="accent-cyan-600 rounded" id="chk-p50" type="checkbox"/>
<span classname="w-3 h-0.5 bg-cyan-500 inline-block rounded-full"></span>
<span>OceanEmbed P50</span>
</label>
<label classname="flex items-center gap-1.5 cursor-pointer text-on-surface font-body-sm text-body-sm select-none">
<input defaultChecked classname="accent-cyan-400 rounded" id="chk-band" type="checkbox"/>
<span classname="w-3 h-2 bg-cyan-200 inline-block rounded-xs"></span>
<span>P05–P95 Ribbon</span>
</label>
<label classname="flex items-center gap-1.5 cursor-pointer text-on-surface font-body-sm text-body-sm select-none">
<input defaultChecked classname="accent-amber-500 rounded" id="chk-argo" type="checkbox"/>
<span classname="w-2.5 h-2.5 rotate-45 bg-amber-500 inline-block"></span>
<span>ARGO #2902742</span>
</label>
<label classname="flex items-center gap-1.5 cursor-pointer text-on-surface font-body-sm text-body-sm select-none">
<input defaultChecked classname="accent-slate-400 rounded" id="chk-glorys" type="checkbox"/>
<span classname="w-3 h-0.5 bg-slate-400 inline-block"></span>
<span>GLORYS Baseline</span>
</label>
</div>
</div>
<!-- Realtime Interactive Chart Canvas Container -->
<div classname="relative w-full h-[540px] bg-gradient-to-b from-surface-container-low/40 via-surface-container-low/20 to-surface-container/50 rounded-xl p-space-md select-none">
<!-- Live Hover Interactive Dynamic Tooltip -->
<div classname="absolute top-16 left-1/3 z-30 pointer-events-none transform -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl text-left transition-all duration-75" id="chart-tooltip">
<div classname="flex items-center justify-between gap-space-md pb-1 mb-1 border-b border-white/10">
<span classname="font-label-caps text-[10px] text-primary-fixed uppercase tracking-wider">Depth Level: <b classname="font-data-mono text-white text-xs" id="tt-depth">100 m</b></span>
<span classname="font-data-mono text-[10px] text-emerald-300">ΔT: +0.14°C</span>
</div>
<div classname="grid grid-cols-2 gap-x-4 gap-y-1 font-data-mono text-[11px]">
<span classname="text-white/70">P50 Reconst:</span>
<span classname="text-right text-cyan-300 font-semibold" id="tt-p50">23.85 °C</span>
<span classname="text-white/70">ARGO In-Situ:</span>
<span classname="text-right text-amber-300 font-semibold" id="tt-argo">23.71 °C</span>
<span classname="text-white/70">Uncertainty CI:</span>
<span classname="text-right text-white/90" id="tt-ci">[23.20 - 24.45]</span>
</div>
</div>
<!-- SVG Oceanographic Scientific Chart -->
<svg classname="w-full h-full overflow-visible font-data-mono" id="profile-svg" viewbox="0 0 800 500">
<defs>
<lineargradient id="uncertaintyGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#06b6d4" stop-opacity="0.32"></stop>
<stop offset="50%" stop-color="#06b6d4" stop-opacity="0.22"></stop>
<stop offset="100%" stop-color="#0053db" stop-opacity="0.12"></stop>
</lineargradient>
<lineargradient id="thermoclineHatch" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.7"></stop>
<stop offset="100%" stop-color="#bae6fd" stop-opacity="0.2"></stop>
</lineargradient>
</defs>
<!-- Grid Background Lines & Temperature (X-axis) Scale (4°C to 32°C => 800 width, padding 60 to 760) -->
<!-- X scale: 60px = 4°C, 760px = 32°C (25px per °C) -->
<!-- Y scale: 30px = 0m, 460px = 1000m (0.43px per meter) -->
<!-- Thermocline Zone Band Highlight (50m to 160m => Y: 51.5 to 98.8) -->
<rect classname="transition-opacity duration-300" fill="url(#thermoclineHatch)" height="48" width="700" x="60" y="52"></rect>
<text fill="#0284c7" font-size="10" font-weight="600" letter-spacing="0.05em" text-anchor="end" x="750" y="78">MAIN THERMOCLINE ZONE (50–160m)</text>
<!-- Horizontal Depth Grid Lines -->
<!-- 0m -->
<line stroke="#cbd5e1" strokedasharray="2 2" strokewidth="1" x1="60" x2="760" y1="30" y2="30"></line>
<text fill="#64748b" font-size="10" text-anchor="end" x="50" y="34">0m</text>
<!-- MLD Highlight (38m => Y: 46.3) -->
<line stroke="#0284c7" strokedasharray="4 3" strokewidth="1.5" x1="60" x2="760" y1="46" y2="46"></line>
<text fill="#0284c7" font-size="9" font-weight="700" x="68" y="43">MLD = 38.2m</text>
<!-- 100m -->
<line stroke="#e2e8f0" strokewidth="1" x1="60" x2="760" y1="73" y2="73"></line>
<text fill="#64748b" font-size="10" text-anchor="end" x="50" y="77">100m</text>
<!-- 200m -->
<line stroke="#e2e8f0" strokewidth="1" x1="60" x2="760" y1="116" y2="116"></line>
<text fill="#64748b" font-size="10" text-anchor="end" x="50" y="120">200m</text>
<!-- 300m -->
<line stroke="#e2e8f0" strokewidth="1" x1="60" x2="760" y1="159" y2="159"></line>
<text fill="#64748b" font-size="10" text-anchor="end" x="50" y="163">300m</text>
<!-- 500m -->
<line stroke="#e2e8f0" strokewidth="1" x1="60" x2="760" y1="245" y2="245"></line>
<text fill="#64748b" font-size="10" text-anchor="end" x="50" y="249">500m</text>
<!-- 750m -->
<line stroke="#e2e8f0" strokewidth="1" x1="60" x2="760" y1="352" y2="352"></line>
<text fill="#64748b" font-size="10" text-anchor="end" x="50" y="356">750m</text>
<!-- 1000m -->
<line stroke="#cbd5e1" strokedasharray="2 2" strokewidth="1" x1="60" x2="760" y1="460" y2="460"></line>
<text fill="#64748b" font-size="10" text-anchor="end" x="50" y="464">1000m</text>
<!-- Vertical Temperature Grid & X-Axis (4°C to 32°C, step 4°C: 4, 8, 12, 16, 20, 24, 28, 32) -->
<!-- 4C = 60px, 8C = 160px, 12C = 260px, 16C = 360px, 20C = 460px, 24C = 560px, 28C = 660px, 32C = 760px -->
<g stroke="#e2e8f0" strokewidth="1">
<line x1="60" x2="60" y1="30" y2="460"></line>
<line x1="160" x2="160" y1="30" y2="460"></line>
<line x1="260" x2="260" y1="30" y2="460"></line>
<line x1="360" x2="360" y1="30" y2="460"></line>
<line x1="460" x2="460" y1="30" y2="460"></line>
<line x1="560" x2="560" y1="30" y2="460"></line>
<line x1="660" x2="660" y1="30" y2="460"></line>
<line x1="760" x2="760" y1="30" y2="460"></line>
</g>
<!-- Top Temperature Axis Labels -->
<text fill="#475569" font-size="11" font-weight="600" text-anchor="middle" x="60" y="20">4°C</text>
<text fill="#475569" font-size="11" text-anchor="middle" x="160" y="20">8°C</text>
<text fill="#475569" font-size="11" text-anchor="middle" x="260" y="20">12°C</text>
<text fill="#475569" font-size="11" text-anchor="middle" x="360" y="20">16°C</text>
<text fill="#475569" font-size="11" text-anchor="middle" x="460" y="20">20°C</text>
<text fill="#475569" font-size="11" text-anchor="middle" x="560" y="20">24°C</text>
<text fill="#475569" font-size="11" text-anchor="middle" x="660" y="20">28°C</text>
<text fill="#475569" font-size="11" font-weight="600" text-anchor="middle" x="760" y="20">32°C</text>
<!-- TRACE 1: P05–P95 Uncertainty Band Ribbon -->
<path d="M 685,30 
               C 690,34 690,46 684,52
               C 675,58 630,73 570,73
               C 490,95 440,116 385,116
               C 335,137 290,159 255,159
               C 215,202 185,245 160,245
               C 135,300 115,352 104,352
               C 92,410 88,460 84,460
               L 70,460
               C 74,410 80,352 90,352
               C 102,300 120,245 142,245
               C 170,202 210,159 230,159
               C 275,137 325,116 350,116
               C 420,95 500,73 530,73
               C 610,58 650,52 660,52
               C 670,46 672,34 670,30 Z" fill="url(#uncertaintyGradient)" id="trace-band" stroke="#06b6d4" strokedasharray="2 2" strokewidth="0.75"></path>
<!-- TRACE 2: GLORYS Climatological 30-Year Baseline (Smooth Slate) -->
<path d="M 672,30 
               C 672,40 668,52 630,58
               C 560,70 470,95 380,116
               C 300,140 240,159 235,170
               C 180,210 150,245 148,255
               C 120,320 102,380 96,420
               L 76,460" fill="none" id="trace-glorys" stroke="#94a3b8" strokelinecap="round" strokewidth="2"></path>
<!-- TRACE 3: AI Model P50 Reconstruction (Bold Cyan with circle markers) -->
<path d="M 678,30 
               L 676,38
               L 673,46
               L 662,56
               L 556,73
               L 448,95
               L 368,116
               L 302,137
               L 242,159
               L 198,202
               L 151,245
               L 122,298
               L 105,352
               L 91,405
               L 77,460" fill="none" id="trace-p50" stroke="#0891b2" strokelinecap="round" strokewidth="3"></path>
<!-- Markers for P50 -->
<g fill="#0891b2" stroke="#ffffff" strokewidth="1.5">
<circle cx="678" cy="30" r="3.5"></circle>
<circle cx="676" cy="38" r="3.5"></circle>
<circle cx="673" cy="46" r="3.5"></circle>
<circle cx="662" cy="56" r="3.5"></circle>
<circle classname="animate-pulse" cx="556" cy="73" r="4.5"></circle>
<circle cx="448" cy="95" r="3.5"></circle>
<circle cx="368" cy="116" r="3.5"></circle>
<circle cx="302" cy="137" r="3.5"></circle>
<circle cx="242" cy="159" r="3.5"></circle>
<circle cx="198" cy="202" r="3.5"></circle>
<circle cx="151" cy="245" r="3.5"></circle>
<circle cx="122" cy="298" r="3.5"></circle>
<circle cx="105" cy="352" r="3.5"></circle>
<circle cx="91" cy="405" r="3.5"></circle>
<circle cx="77" cy="460" r="3.5"></circle>
</g>
<!-- TRACE 4: ARGO Float In-Situ #2902742 (Golden Amber Diamonds) -->
<g id="trace-argo">
<path d="M 677,30 L 675,38 L 671,46 L 658,56 L 553,73 L 444,95 L 366,116 L 305,137 L 244,159 L 195,202 L 153,245 L 120,298 L 103,352 L 93,405 L 76,460" fill="none" stroke="#d97706" strokedasharray="3 3" strokewidth="1.75"></path>
<!-- Diamond Points -->
<polygon fill="#d97706" points="677,26 681,30 677,34 673,30" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="675,34 679,38 675,42 671,38" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="671,42 675,46 671,50 667,46" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="658,52 662,56 658,60 654,56" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="553,69 557,73 553,77 549,73" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="444,91 448,95 444,99 440,95" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="366,112 370,116 366,120 362,116" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="305,133 309,137 305,141 301,137" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="244,155 248,159 244,163 240,159" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="195,198 199,202 195,206 191,202" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="153,241 157,245 153,249 149,245" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="120,294 124,298 120,302 116,298" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="103,348 107,352 103,356 99,352" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="93,401 97,405 93,409 89,405" stroke="#ffffff" strokewidth="1"></polygon>
<polygon fill="#d97706" points="76,456 80,460 76,464 72,460" stroke="#ffffff" strokewidth="1"></polygon>
</g>
<!-- Scientific Anomaly Callout (Subsurface MHW at 65m) -->
<g>
<circle classname="animate-ping" cx="618" cy="62" fill="#f43f5e" fill-opacity="0.15" r="16"></circle>
<circle cx="618" cy="62" fill="#e11d48" r="5" stroke="#ffffff" strokewidth="1.5"></circle>
<path d="M 622,60 L 660,40 L 740,40" fill="none" stroke="#e11d48" strokedasharray="2 2" strokewidth="1.2"></path>
<rect fill="#ffe4e6" height="15" rx="3" width="105" x="660" y="24"></rect>
<text fill="#9f1239" font-size="8.5" font-weight="700" x="664" y="35">MHW Anomaly: +2.1°C</text>
</g>
<!-- Interactive Hover Guide Crosshair -->
<line id="hover-line-y" opacity="0.8" stroke="#0891b2" strokedasharray="3 3" strokewidth="1" x1="60" x2="760" y1="73" y2="73"></line>
</svg>
<!-- Subtle Gradient Watermark Badge -->
<div classname="absolute bottom-3 right-4 flex items-center gap-1.5 opacity-60">
<span classname="material-symbols-outlined text-[14px] text-primary">analytics</span>
<span classname="font-label-caps text-[9px] text-secondary uppercase">OceanEmbed Physics-Informed Latent Neural Engine</span>
</div>
</div>
<!-- Chart Sub-Caption & Quality Metric -->
<div classname="flex flex-wrap items-center justify-between gap-space-sm pt-space-md text-secondary">
<div classname="flex items-center gap-space-md text-body-sm font-body-sm">
<span classname="flex items-center gap-1"><span classname="w-2 h-2 rounded-full bg-cyan-500"></span>RMSE vs ARGO: <b classname="text-on-surface font-data-mono">0.31 °C</b></span>
<span classname="flex items-center gap-1"><span classname="w-2 h-2 rounded-full bg-emerald-500"></span>Correlation (r): <b classname="text-on-surface font-data-mono">0.994</b></span>
<span classname="flex items-center gap-1"><span classname="w-2 h-2 rounded-full bg-tertiary"></span>Layer Count: <b classname="text-on-surface font-data-mono">15 Standard Levels</b></span>
</div>
<span classname="font-label-caps text-[10px] text-secondary/80">Calibration: 2024.10 Release · High Precision Hydrography</span>
</div>
</div>
<!-- Depth Layer Inspector & Stratification Scrubber (xl:col-span-3) -->
<div classname="xl:col-span-3 flex flex-col gap-space-md">
<!-- Stratification Status Card -->
<div classname="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div classname="flex items-center justify-between mb-space-sm">
<span classname="font-label-caps text-label-caps text-secondary uppercase">Stratification State</span>
<span classname="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">Strong Barrier Layer</span>
</div>
<div classname="flex items-baseline justify-between mb-space-xs">
<span classname="font-title-sm text-title-sm text-on-surface">Brunt-Väisälä (N)</span>
<span classname="font-metric-readout-md text-metric-readout-md text-primary">1.82×10⁻² <span classname="text-xs font-normal text-secondary">s⁻¹</span></span>
</div>
<p classname="font-body-sm text-body-sm text-secondary leading-snug">Highly stable upper ocean pycnocline preventing vertical convective overturn.</p>
</div>
<!-- Vertical Depth Rail Selector -->
<div classname="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-1 flex flex-col justify-between">
<div>
<div classname="flex items-center justify-between mb-space-sm">
<span classname="font-title-sm text-title-sm text-on-surface">Standard Depths</span>
<span classname="font-label-caps text-[10px] text-secondary uppercase">Select Layer</span>
</div>
<!-- Vertical Scrubber Depth Buttons List -->
<div classname="space-y-1 overflow-y-auto max-h-[380px] pr-1">
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="28.68" data-ci="[28.40 - 29.04]" data-d="0" data-p50="28.72">
<span classname="font-data-mono font-medium">0 m (Surface)</span>
<span classname="font-data-mono text-cyan-700 font-semibold">28.72 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="28.60" data-ci="[28.32 - 28.98]" data-d="20" data-p50="28.65">
<span classname="font-data-mono">20 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">28.65 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all bg-sky-50" data-argo="28.45" data-ci="[28.10 - 28.90]" data-d="38" data-p50="28.52">
<span classname="font-data-mono flex items-center gap-1 font-semibold text-sky-800">38 m <span classname="text-[9px] bg-sky-200 px-1 rounded">MLD</span></span>
<span classname="font-data-mono text-sky-800 font-semibold">28.52 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="27.92" data-ci="[27.50 - 28.60]" data-d="50" data-p50="28.08">
<span classname="font-data-mono">50 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">28.08 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all bg-rose-50" data-argo="26.15" data-ci="[25.80 - 27.05]" data-d="65" data-p50="26.40">
<span classname="font-data-mono flex items-center gap-1 text-rose-800 font-semibold">65 m <span classname="text-[9px] bg-rose-200 px-1 rounded">MHW</span></span>
<span classname="font-data-mono text-rose-800 font-semibold">26.40 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="23.71" data-ci="[23.20 - 24.45]" data-d="100" data-p50="23.85">
<span classname="font-data-mono">100 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">23.85 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="19.38" data-ci="[18.90 - 20.12]" data-d="150" data-p50="19.52">
<span classname="font-data-mono">150 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">19.52 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="16.24" data-ci="[15.80 - 16.85]" data-d="200" data-p50="16.32">
<span classname="font-data-mono">200 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">16.32 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="13.75" data-ci="[13.15 - 14.18]" data-d="300" data-p50="13.68">
<span classname="font-data-mono">300 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">13.68 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="10.12" data-ci="[9.60 - 10.45]" data-d="500" data-p50="10.04">
<span classname="font-data-mono">500 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">10.04 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="6.72" data-ci="[6.40 - 7.18]" data-d="750" data-p50="6.80">
<span classname="font-data-mono">750 m</span>
<span classname="font-data-mono text-cyan-700 font-semibold">6.80 °C</span>
</button>
<button classname="depth-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-high text-on-surface text-left text-body-sm font-body-sm transition-all" data-argo="4.64" data-ci="[4.32 - 5.02]" data-d="1000" data-p50="4.68">
<span classname="font-data-mono">1000 m (Bathypelagic)</span>
<span classname="font-data-mono text-cyan-700 font-semibold">4.68 °C</span>
</button>
</div>
</div>
<div classname="mt-space-md pt-space-sm border-t border-surface-container-high flex items-center justify-between">
<span classname="font-label-caps text-[11px] text-secondary">Vertical Resolution:</span>
<span classname="font-data-mono text-data-mono font-semibold text-primary">Adaptive Spline</span>
</div>
</div>
</div>
</div>
<!-- Analytical Cards & Tabular Data Grid (Bento Split) -->
<div classname="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
<!-- Left Card (4 cols): Physical Oceanographic Diagnostics -->
<div classname="lg:col-span-4 flex flex-col gap-space-md">
<div classname="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div classname="flex items-center gap-space-xs text-primary mb-space-xs">
<span classname="material-symbols-outlined text-[20px]">water</span>
<h3 classname="font-headline-md text-headline-md text-on-surface">Physical Diagnostics</h3>
</div>
<p classname="font-body-sm text-body-sm text-secondary mb-space-md">Computed from multi-variable latent embeddings and surface altimetry constraints.</p>
<!-- Metric Tile List -->
<div classname="space-y-space-sm">
<!-- Metric 1 -->
<div classname="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div>
<span classname="font-label-caps text-[10px] text-secondary uppercase block">Mixed Layer Depth (MLD)</span>
<span classname="font-body-sm text-body-sm text-secondary">Criterion: ΔT = 0.2°C ref 10m</span>
</div>
<div classname="text-right">
<span classname="font-metric-readout-md text-metric-readout-md text-on-surface font-semibold">38.2</span>
<span classname="font-body-sm text-body-sm text-secondary ml-0.5">m</span>
</div>
</div>
<!-- Metric 2 -->
<div classname="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div>
<span classname="font-label-caps text-[10px] text-secondary uppercase block">Thermocline Thickness</span>
<span classname="font-body-sm text-body-sm text-secondary">Span: 12°C to 20°C Isotherm</span>
</div>
<div classname="text-right">
<span classname="font-metric-readout-md text-metric-readout-md text-on-surface font-semibold">95.0</span>
<span classname="font-body-sm text-body-sm text-secondary ml-0.5">m</span>
</div>
</div>
<!-- Metric 3 -->
<div classname="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div>
<span classname="font-label-caps text-[10px] text-secondary uppercase block">Ocean Heat Content (0–300m)</span>
<span classname="font-body-sm text-body-sm text-rose-700 font-medium">+0.62 GJ/m² Anomaly</span>
</div>
<div classname="text-right">
<span classname="font-metric-readout-md text-metric-readout-md text-rose-600 font-semibold">7.84</span>
<span classname="font-body-sm text-body-sm text-secondary ml-0.5">GJ/m²</span>
</div>
</div>
<!-- Metric 4 -->
<div classname="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div>
<span classname="font-label-caps text-[10px] text-secondary uppercase block">ARGO Collocation Offset</span>
<span classname="font-body-sm text-body-sm text-secondary">Platform #2902742 (Delayed-Mode)</span>
</div>
<div classname="text-right">
<span classname="font-metric-readout-md text-metric-readout-md text-tertiary font-semibold">22.4</span>
<span classname="font-body-sm text-body-sm text-secondary ml-0.5">km</span>
</div>
</div>
</div>
</div>
<!-- Model Confidence Quality Index -->
<div classname="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div classname="flex items-center justify-between mb-space-xs">
<span classname="font-title-sm text-title-sm text-on-surface">Reconstruction Trust Metric</span>
<span classname="font-data-mono text-data-mono font-bold text-emerald-600">97.8%</span>
</div>
<p classname="font-body-sm text-body-sm text-secondary mb-space-sm">Epistemic uncertainty remains under 0.42°C for all levels down to 400m.</p>
<!-- Segmented Trust Bar -->
<div classname="w-full bg-surface-container-high h-2 rounded-full overflow-hidden flex">
<div classname="bg-emerald-500 h-full w-[80%]"></div>
<div classname="bg-cyan-400 h-full w-[17%]"></div>
<div classname="bg-amber-400 h-full w-[3%]"></div>
</div>
<div classname="flex items-center justify-between font-label-caps text-[9px] text-secondary uppercase mt-1.5">
<span>High Fidelity (0-400m)</span>
<span>Moderate (400-800m)</span>
<span>Abyssal</span>
</div>
</div>
</div>
<!-- Right Table (8 cols): High-Precision Tabular Depth Readout -->
<div classname="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div>
<div classname="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm mb-space-xs">
<div>
<h3 classname="font-headline-md text-headline-md text-on-surface">High-Precision Hydrographic Readout</h3>
<p classname="font-body-sm text-body-sm text-secondary">15 discretized observational depths vs collocated in-situ ARGO profiles.</p>
</div>
<div classname="flex items-center gap-space-xs">
<span classname="font-label-caps text-[10px] text-secondary uppercase">Sort Order:</span>
<span classname="px-2 py-0.5 bg-surface-container-high rounded font-data-mono text-[11px] text-on-surface">Ascending Depth</span>
</div>
</div>
<!-- Table Container -->
<div classname="w-full overflow-x-auto">
<table classname="w-full text-left border-collapse">
<thead>
<tr classname="bg-surface-container-low text-secondary font-label-caps text-[10px] uppercase tracking-wider">
<th classname="py-2.5 px-space-sm rounded-l-lg">Depth (m)</th>
<th classname="py-2.5 px-space-sm text-right">P50 Reconst (°C)</th>
<th classname="py-2.5 px-space-sm text-right">P05 (°C)</th>
<th classname="py-2.5 px-space-sm text-right">P95 (°C)</th>
<th classname="py-2.5 px-space-sm text-right">ARGO Float (°C)</th>
<th classname="py-2.5 px-space-sm text-right">Residual (ΔT)</th>
<th classname="py-2.5 px-space-sm rounded-r-lg text-center">Uncertainty Envelope</th>
</tr>
</thead>
<tbody classname="divide-y divide-surface-container-low font-data-mono text-data-mono">
<!-- Row 1 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-semibold text-on-surface">0 m (SST)</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">28.72</td>
<td classname="py-2 px-space-sm text-right text-secondary">28.40</td>
<td classname="py-2 px-space-sm text-right text-secondary">29.04</td>
<td classname="py-2 px-space-sm text-right text-amber-700">28.68</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.04</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-2 w-16 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">10 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">28.70</td>
<td classname="py-2 px-space-sm text-right text-secondary">28.38</td>
<td classname="py-2 px-space-sm text-right text-secondary">29.02</td>
<td classname="py-2 px-space-sm text-right text-amber-700">28.66</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.04</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-2 w-16 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">20 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">28.65</td>
<td classname="py-2 px-space-sm text-right text-secondary">28.32</td>
<td classname="py-2 px-space-sm text-right text-secondary">28.98</td>
<td classname="py-2 px-space-sm text-right text-amber-700">28.60</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.05</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-3 w-15 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 4 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors bg-sky-50/50">
<td classname="py-2 px-space-sm font-bold text-sky-900 flex items-center gap-1">38 m <span classname="text-[9px] bg-sky-200 px-1 rounded font-normal">MLD</span></td>
<td classname="py-2 px-space-sm text-right text-sky-800 font-bold">28.52</td>
<td classname="py-2 px-space-sm text-right text-secondary">28.10</td>
<td classname="py-2 px-space-sm text-right text-secondary">28.90</td>
<td classname="py-2 px-space-sm text-right text-amber-700 font-medium">28.45</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.07</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-sky-500 h-full ml-3 w-16 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 5 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">50 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">28.08</td>
<td classname="py-2 px-space-sm text-right text-secondary">27.50</td>
<td classname="py-2 px-space-sm text-right text-secondary">28.60</td>
<td classname="py-2 px-space-sm text-right text-amber-700">27.92</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.16</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-4 w-18 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 6 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors bg-rose-50/50">
<td classname="py-2 px-space-sm font-bold text-rose-900 flex items-center gap-1">65 m <span classname="text-[9px] bg-rose-200 px-1 rounded font-normal text-rose-800">MHW</span></td>
<td classname="py-2 px-space-sm text-right text-rose-800 font-bold">26.40</td>
<td classname="py-2 px-space-sm text-right text-secondary">25.80</td>
<td classname="py-2 px-space-sm text-right text-secondary">27.05</td>
<td classname="py-2 px-space-sm text-right text-amber-700 font-medium">26.15</td>
<td classname="py-2 px-space-sm text-right text-rose-700 font-bold">+0.25</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-rose-500 h-full ml-4 w-19 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 7 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">80 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">25.10</td>
<td classname="py-2 px-space-sm text-right text-secondary">24.50</td>
<td classname="py-2 px-space-sm text-right text-secondary">25.75</td>
<td classname="py-2 px-space-sm text-right text-amber-700">24.95</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.15</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-5 w-18 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 8 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">100 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">23.85</td>
<td classname="py-2 px-space-sm text-right text-secondary">23.20</td>
<td classname="py-2 px-space-sm text-right text-secondary">24.45</td>
<td classname="py-2 px-space-sm text-right text-amber-700">23.71</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.14</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-6 w-18 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 9 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">150 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">19.52</td>
<td classname="py-2 px-space-sm text-right text-secondary">18.90</td>
<td classname="py-2 px-space-sm text-right text-secondary">20.12</td>
<td classname="py-2 px-space-sm text-right text-amber-700">19.38</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.14</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-6 w-17 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 10 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">200 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">16.32</td>
<td classname="py-2 px-space-sm text-right text-secondary">15.80</td>
<td classname="py-2 px-space-sm text-right text-secondary">16.85</td>
<td classname="py-2 px-space-sm text-right text-amber-700">16.24</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.08</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-7 w-16 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 11 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">300 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">13.68</td>
<td classname="py-2 px-space-sm text-right text-secondary">13.15</td>
<td classname="py-2 px-space-sm text-right text-secondary">14.18</td>
<td classname="py-2 px-space-sm text-right text-amber-700">13.75</td>
<td classname="py-2 px-space-sm text-right text-cyan-600 font-medium">-0.07</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-7 w-15 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 12 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">400 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">11.45</td>
<td classname="py-2 px-space-sm text-right text-secondary">10.95</td>
<td classname="py-2 px-space-sm text-right text-secondary">11.90</td>
<td classname="py-2 px-space-sm text-right text-amber-700">11.50</td>
<td classname="py-2 px-space-sm text-right text-cyan-600 font-medium">-0.05</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-8 w-14 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 13 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">500 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">10.04</td>
<td classname="py-2 px-space-sm text-right text-secondary">9.60</td>
<td classname="py-2 px-space-sm text-right text-secondary">10.45</td>
<td classname="py-2 px-space-sm text-right text-amber-700">10.12</td>
<td classname="py-2 px-space-sm text-right text-cyan-600 font-medium">-0.08</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-8 w-13 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 14 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">750 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">6.80</td>
<td classname="py-2 px-space-sm text-right text-secondary">6.40</td>
<td classname="py-2 px-space-sm text-right text-secondary">7.18</td>
<td classname="py-2 px-space-sm text-right text-amber-700">6.72</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.08</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-9 w-12 rounded-full"></div>
</div>
</td>
</tr>
<!-- Row 15 -->
<tr classname="hover:bg-surface-container-low/60 transition-colors">
<td classname="py-2 px-space-sm font-medium text-on-surface">1000 m</td>
<td classname="py-2 px-space-sm text-right text-cyan-700 font-medium">4.68</td>
<td classname="py-2 px-space-sm text-right text-secondary">4.32</td>
<td classname="py-2 px-space-sm text-right text-secondary">5.02</td>
<td classname="py-2 px-space-sm text-right text-amber-700">4.64</td>
<td classname="py-2 px-space-sm text-right text-emerald-600 font-medium">+0.04</td>
<td classname="py-2 px-space-sm">
<div classname="w-24 mx-auto bg-surface-container h-2 rounded-full overflow-hidden">
<div classname="bg-cyan-500 h-full ml-10 w-11 rounded-full"></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Pagination / Legend Summary Footer -->
<div classname="mt-space-md pt-space-sm border-t border-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-body-sm font-body-sm text-secondary">
<span classname="flex items-center gap-1.5">
<span classname="material-symbols-outlined text-[16px] text-primary">verified_user</span>
          In-situ match criteria: within 50 km radius &amp; ±12 hours of satellite swath.
        </span>
<span classname="font-data-mono text-[11px] text-on-surface-variant font-medium">Confidence: 95% Quantile</span>
</div>
</div>
</div>
<!-- Scientific Disclaimer Note Footer -->
<div classname="w-full bg-surface-container-low rounded-xl px-space-md py-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm text-secondary">
<div classname="flex items-center gap-space-xs font-body-sm text-body-sm">
<span classname="material-symbols-outlined text-[18px] text-primary">info</span>
<span>Illustrative Demo Dataset SIH26066 — Synthetic validation profiles derived from reanalysis simulations.</span>
</div>
<div classname="flex items-center gap-space-md font-label-caps text-[11px] text-secondary uppercase">
<span>NODC Standard Levels</span>
<span>•</span>
<span>TEOS-10 Thermodynamic EOS</span>
</div>
</div>
<!-- Interactive Logic for Toggles & Hover Scrubber -->

</div></div>
    </>
  );
};

export default VerticalProfiles;
