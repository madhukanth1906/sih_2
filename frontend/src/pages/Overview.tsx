const Overview = () => {
  return (
    <>
      <div className="w-full px-gutter-desktop py-space-xl"><div className="flex flex-col w-full">

<div className="mb-space-lg rounded-xl bg-surface-container-low p-space-md shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="flex h-2.5 w-2.5 items-center justify-center">
<span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
</span>
<span className="font-label-caps text-label-caps uppercase text-primary font-bold">TELEMETRY BENCHMARK NODE SIH26066</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Equatorial &amp; Northern Indian Ocean Assimilation Core (OSTIA-DUACS Coupled)</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-data-mono text-[11px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-semibold">STATUS: PROD-SYNCHRONIZED</span>
<span className="font-data-mono text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded font-semibold">CYCLE: 06:00 UTC</span>
</div>
</div>
</div>

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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md mb-space-xl">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-outline mb-space-sm">
<span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">Temporal Cycle</span>
<span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
</div>
<div>
<div className="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">24 Oct · 06:00</div>
<p className="font-data-mono text-[11px] text-on-surface-variant mt-1 flex items-center gap-1">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          OSTIA/DUACS Sync (2h ago)
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-[11px] font-data-mono text-outline">
<span>Latency: -120m</span>
<span className="text-primary font-medium">Live Stream</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-outline mb-space-sm">
<span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">Basin Coverage</span>
<span className="material-symbols-outlined text-[18px] text-primary">grid_view</span>
</div>
<div>
<div className="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">99.42%</div>
<p className="font-data-mono text-[11px] text-on-surface-variant mt-1 truncate">
          30°S–30°N, 40°E–110°E
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-[11px] font-data-mono text-outline">
<span>Res: 0.25° × 0.25°</span>
<span className="text-emerald-700 font-semibold">14,240 Pixels</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-outline mb-space-sm">
<span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">In-Situ Collocation</span>
<span className="material-symbols-outlined text-[18px] text-primary">sensors</span>
</div>
<div>
<div className="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">1,428 Floats</div>
<p className="font-data-mono text-[11px] text-on-surface-variant mt-1">
          Active ARGO &amp; INCOIS moorings
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-[11px] font-data-mono text-outline">
<span>98 BGC Sensors</span>
<span className="text-primary font-medium">99.1% Fidelity</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-outline mb-space-sm">
<span className="font-label-caps text-label-caps uppercase text-error font-semibold">Subsurface MHWs</span>
<span className="material-symbols-outlined text-[18px] text-error">local_fire_department</span>
</div>
<div>
<div className="font-metric-readout-md text-metric-readout-md text-error font-bold">4 Extreme Events</div>
<p className="font-data-mono text-[11px] text-on-surface-variant mt-1">
          2 Cat-3 (Arabian Sea Thermocline)
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-[11px] font-data-mono text-outline">
<span className="text-error font-semibold">+2.8°C Anomaly</span>
<span className="bg-error-container text-on-error-container px-1 rounded text-[10px] font-bold">HIGH RISK</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-outline mb-space-sm">
<span className="font-label-caps text-label-caps uppercase text-secondary font-semibold">ML Inference Kernel</span>
<span className="material-symbols-outlined text-[18px] text-primary">neurology</span>
</div>
<div>
<div className="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">v2.4-EmbedOcean</div>
<p className="font-data-mono text-[11px] text-on-surface-variant mt-1">
          15 Stratified Depth Layers
        </p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-[11px] font-data-mono text-outline">
<span>Med: 184ms / col</span>
<span className="text-emerald-700 font-semibold">Pass: 99.8%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-xl">

<div className="xl:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">

<div className="bg-surface-container-low px-space-md py-space-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-caps text-[11px] font-bold tracking-wider transition-colors" type="button">
            SST (SURFACE)
          </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-caps text-[11px] font-semibold tracking-wider transition-colors" type="button">
            SALINITY (SSS)
          </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-caps text-[11px] font-semibold tracking-wider transition-colors" type="button">
            HEIGHT (SLA)
          </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-caps text-[11px] font-semibold tracking-wider transition-colors" type="button">
            CURRENTS (OSCAR)
          </button>
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-caps text-[11px] font-bold tracking-wider shadow-sm flex items-center gap-1" type="button">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping"></span>
            RECONSTRUCTED (100M)
          </button>
<button className="px-2.5 py-1 rounded bg-error/10 hover:bg-error/20 text-error font-label-caps text-[11px] font-semibold tracking-wider transition-colors" type="button">
            MHW ANOMALY
          </button>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">layers</span>
</button>
<button className="p-1 rounded bg-surface-container text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">fullscreen</span>
</button>
</div>
</div>

<div className="relative w-full h-[480px] bg-[#071326] overflow-hidden flex flex-col justify-between p-space-md select-none">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-85" preserveAspectRatio="none" viewBox="0 0 900 480">
<defs>
<radialGradient cx="45%" cy="40%" id="oceanGlow" r="65%">
<stop offset="0%" stopColor="#0b2c4d" stopOpacity="0.8"></stop>
<stop offset="50%" stopColor="#061c36" stopOpacity="0.9"></stop>
<stop offset="100%" stopColor="#030b17" stopOpacity="1"></stop>
</radialGradient>

<radialGradient cx="30%" cy="35%" id="mhwCore1" r="28%">
<stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.6"></stop>
<stop offset="45%" stopColor="#d97706" stopOpacity="0.35"></stop>
<stop offset="85%" stopColor="#06b6d4" stopOpacity="0.05"></stop>
<stop offset="100%" stopColor="#06b6d4" stopOpacity="0"></stop>
</radialGradient>
<radialGradient cx="72%" cy="45%" id="mhwCore2" r="22%">
<stop offset="0%" stopColor="#f43f5e" stopOpacity="0.5"></stop>
<stop offset="60%" stopColor="#0284c7" stopOpacity="0.1"></stop>
<stop offset="100%" stopColor="#0284c7" stopOpacity="0"></stop>
</radialGradient>
<pattern height="40" id="gridPattern" patternUnits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" strokeOpacity="0.4" strokeWidth="0.5"></path>
</pattern>
</defs>

<rect fill="url(#oceanGlow)" height="480" width="900"></rect>
<rect fill="url(#gridPattern)" height="480" width="900"></rect>

<circle cx="280" cy="180" fill="url(#mhwCore1)" r="140"></circle>
<circle cx="640" cy="220" fill="url(#mhwCore2)" r="110"></circle>

<path d="M -20,240 C 140,220 220,130 310,160 C 400,190 490,280 620,240 C 720,200 820,230 920,180" fill="none" stroke="#00f0ff" strokeOpacity="0.45" strokeDasharray="4 2" strokeWidth="1.2"></path>
<path d="M -20,280 C 150,260 240,170 330,200 C 430,230 520,320 640,280 C 740,240 830,270 920,220" fill="none" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="0.8"></path>
<path d="M -20,320 C 160,300 260,210 350,240 C 450,270 540,360 660,320 C 760,280 840,310 920,260" fill="none" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="0.6"></path>

<path d="M 280,0 L 290,40 L 320,80 L 345,130 L 380,185 L 400,230 L 415,245 L 430,200 L 460,140 L 510,90 L 560,70 L 590,0 Z" fill="#132a4a" fillOpacity="0.8" stroke="#334e68" strokeWidth="1.5"></path>
<path d="M 0,110 L 40,130 L 80,170 L 110,240 L 130,290 L 90,360 L 50,420 L 0,440 Z" fill="#132a4a" fillOpacity="0.8" stroke="#334e68" strokeWidth="1.5"></path>
<path d="M 720,80 L 760,110 L 790,170 L 810,260 L 840,330 L 890,390 L 900,400 L 900,0 L 710,0 Z" fill="#132a4a" fillOpacity="0.8" stroke="#334e68" strokeWidth="1.5"></path>

<path d="M 435,260 C 445,260 450,280 440,295 C 430,295 425,275 435,260 Z" fill="#132a4a" stroke="#334e68" strokeWidth="1"></path>

<g>
<circle className="animate-pulse" cx="230" cy="190" fill="#4cd7f6" r="3.5"></circle>
<circle cx="230" cy="190" fill="none" r="8" stroke="#4cd7f6" strokeOpacity="0.6" strokeWidth="0.75"></circle>
<circle cx="270" cy="240" fill="#4cd7f6" r="3"></circle>
<circle cx="310" cy="290" fill="#4cd7f6" r="3"></circle>
<circle cx="210" cy="310" fill="#4cd7f6" r="3"></circle>
<circle cx="180" cy="220" fill="#4cd7f6" r="3"></circle>
<circle cx="340" cy="210" fill="#4cd7f6" r="3"></circle>

<circle cx="510" cy="200" fill="#4cd7f6" r="3.5"></circle>
<circle cx="510" cy="200" fill="none" r="8" stroke="#4cd7f6" strokeOpacity="0.6" strokeWidth="0.75"></circle>
<circle cx="550" cy="230" fill="#4cd7f6" r="3"></circle>
<circle cx="480" cy="260" fill="#4cd7f6" r="3"></circle>
<circle cx="530" cy="290" fill="#4cd7f6" r="3"></circle>
<circle cx="580" cy="270" fill="#4cd7f6" r="3"></circle>
<circle cx="620" cy="220" fill="#4cd7f6" r="3"></circle>

<circle cx="380" cy="360" fill="#facc15" r="4"></circle>
<circle cx="440" cy="360" fill="#facc15" r="4"></circle>
<circle cx="500" cy="360" fill="#facc15" r="4"></circle>
<circle cx="560" cy="360" fill="#facc15" r="4"></circle>
<line stroke="#facc15" strokeOpacity="0.4" strokeDasharray="2 4" strokeWidth="1" x1="360" x2="580" y1="360" y2="360"></line>
</g>

<polygon fill="#ba1a1a" fillOpacity="0.12" points="210,140 320,130 350,210 240,240" stroke="#f43f5e" strokeDasharray="5 3" strokeWidth="1.5"></polygon>
<text fill="#ffdad6" fontFamily="JetBrains Mono" fontSize="10" fontWeight="600" letterSpacing="0.05em" x="225" y="132">MHW-AS-01 [CAT 3 STRONG]</text>

<path d="M 240,320 L 255,315 M 255,315 L 248,313 M 255,315 L 250,320" stroke="#4cd7f6" strokeOpacity="0.7" strokeWidth="1"></path>
<path d="M 280,310 L 295,307 M 295,307 L 288,305 M 295,307 L 290,312" stroke="#4cd7f6" strokeOpacity="0.7" strokeWidth="1"></path>
<path d="M 320,315 L 335,316 M 335,316 L 328,312 M 335,316 L 329,320" stroke="#4cd7f6" strokeOpacity="0.7" strokeWidth="1"></path>
<path d="M 470,300 L 485,310 M 485,310 L 480,303 M 485,310 L 477,308" stroke="#4cd7f6" strokeOpacity="0.7" strokeWidth="1"></path>
</svg>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm bg-[#091e38]/85 backdrop-blur-md px-space-md py-space-xs rounded-xl shadow-lg">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-primary-fixed">vertical_align_bottom</span>
<div className="flex flex-col">
<span className="font-label-caps text-[10px] text-primary-fixed uppercase tracking-wider">Subsurface Target Depth</span>
<span className="font-data-mono text-[12px] text-white font-bold">100m (Thermocline Core)</span>
</div>
</div>

<div className="flex items-center gap-1 bg-[#040e1c] p-0.5 rounded-lg">
<button className="px-2 py-0.5 rounded font-data-mono text-[11px] text-inverse-on-surface/60 hover:text-white">0m</button>
<button className="px-2 py-0.5 rounded font-data-mono text-[11px] text-inverse-on-surface/60 hover:text-white">50m</button>
<button className="px-2.5 py-0.5 rounded bg-primary font-data-mono text-[11px] text-on-primary font-bold shadow-sm">100m</button>
<button className="px-2 py-0.5 rounded font-data-mono text-[11px] text-inverse-on-surface/60 hover:text-white">200m</button>
<button className="px-2 py-0.5 rounded font-data-mono text-[11px] text-inverse-on-surface/60 hover:text-white">500m</button>
<button className="px-2 py-0.5 rounded font-data-mono text-[11px] text-inverse-on-surface/60 hover:text-white">1000m</button>
</div>
<div className="hidden sm:flex items-center gap-2 text-primary-fixed font-data-mono text-[11px]">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
<span>Uncertainty: ±0.38°C</span>
</div>
</div>

<div className="absolute left-[34%] top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full border-2 border-primary-fixed/80 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
<div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div>
</div>
<div className="mt-2 bg-[#061930]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl text-left whitespace-nowrap">
<div className="font-data-mono text-[11px] text-primary-fixed font-bold">STATION: ARGO-2902781</div>
<div className="font-data-mono text-[11px] text-white">Lat 12.45°N, Lon 68.20°E</div>
<div className="font-data-mono text-[11px] text-emerald-400 font-semibold">T(100m): 24.8°C (Anom: +2.4°C)</div>
</div>
</div>

<div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm bg-[#061930]/80 backdrop-blur-md px-space-md py-space-xs rounded-xl">
<div className="flex items-center gap-space-md font-data-mono text-[11px] text-inverse-on-surface/80">
<span>Projection: Mercator Cylindrical</span>
<span className="text-outline">•</span>
<span>Center: 10.0°N, 75.0°E</span>
<span className="text-outline">•</span>
<span className="text-primary-fixed">RAMA Arrays: Synced (4 Active)</span>
</div>

<div className="flex items-center gap-2">
<span className="font-data-mono text-[10px] text-inverse-on-surface/70">16°C</span>
<div className="w-28 h-2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-400 via-amber-400 to-rose-600"></div>
<span className="font-data-mono text-[10px] text-inverse-on-surface/70">31°C</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between flex-1">
<div className="flex items-center justify-between pb-space-xs">
<div>
<h3 className="font-title-sm text-title-sm text-on-surface font-bold">Vertical Thermal Profile</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">ARGO 2902781 vs. AI Reconstructed</p>
</div>
<span className="font-data-mono text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold uppercase">Depth-T</span>
</div>

<div className="relative w-full h-44 bg-surface-container-low rounded-lg p-2 my-space-xs">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 240 140">

<line stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="0.75" x1="40" x2="230" y1="20" y2="20"></line>
<line stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="0.75" x1="40" x2="230" y1="50" y2="50"></line>
<line stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="0.75" x1="40" x2="230" y1="80" y2="80"></line>
<line stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="0.75" x1="40" x2="230" y1="120" y2="120"></line>

<rect fill="#06b6d4" fillOpacity="0.12" height="38" width="190" x="40" y="32"></rect>
<text fill="#00687a" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" x="135" y="44">THERMOCLINE LAYER (40-120m)</text>

<text fill="#64748b" fontFamily="JetBrains Mono" fontSize="9" x="5" y="22">0m</text>
<text fill="#64748b" fontFamily="JetBrains Mono" fontSize="9" x="5" y="52">100m</text>
<text fill="#64748b" fontFamily="JetBrains Mono" fontSize="9" x="5" y="82">300m</text>
<text fill="#64748b" fontFamily="JetBrains Mono" fontSize="9" x="5" y="124">1000m</text>

<path d="M 210,15 C 205,35 150,55 105,80 C 80,100 65,115 58,130" fill="none" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1.5"></path>

<path d="M 215,15 C 213,32 170,52 118,78 C 88,98 72,118 64,130" fill="none" stroke="#0284c7" strokeWidth="2"></path>

<path d="M 214,15 C 211,33 166,54 116,79 C 87,99 71,118 63,130" fill="none" stroke="#00687a" strokeDasharray="4 2" strokeWidth="1.8"></path>

<circle cx="168" cy="52" fill="#ba1a1a" r="4"></circle>
<text fill="#ba1a1a" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" x="178" y="55">24.8°C</text>
</svg>
</div>
<div className="flex items-center justify-between text-[11px] font-data-mono text-outline">
<span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-[#0284c7]"></span>ARGO Truth</span>
<span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-[#00687a]"></span>OceanEmbed v2.4</span>
<span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-slate-400"></span>WOA23 Clim</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between pb-space-xs">
<div>
<h3 className="font-title-sm text-title-sm text-on-surface font-bold">30-Day Heat Content Anomaly</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Upper 700m Integrated Energy</p>
</div>
<span className="material-symbols-outlined text-[20px] text-tertiary">trending_up</span>
</div>
<div className="flex items-baseline gap-space-sm my-space-xs">
<span className="font-metric-readout-lg text-metric-readout-lg text-on-surface font-extrabold">+0.42</span>
<span className="font-title-sm text-title-sm text-tertiary font-bold">GJ/m²</span>
<span className="font-label-caps text-[11px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-bold">+18.4% above 1993-2020 base</span>
</div>

<div className="w-full h-16 bg-surface-container-low rounded-lg p-1.5">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 45">
<defs>
<linearGradient id="heatGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#0053db" stopOpacity="0.3"></stop>
<stop offset="100%" stopColor="#0053db" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M 0,35 Q 25,32 50,30 T 100,26 T 150,15 T 200,8 L 200,45 L 0,45 Z" fill="url(#heatGrad)"></path>
<path d="M 0,35 Q 25,32 50,30 T 100,26 T 150,15 T 200,8" fill="none" stroke="#0053db" strokeWidth="2"></path>
<circle cx="200" cy="8" fill="#0053db" r="3"></circle>
</svg>
</div>
<div className="flex items-center justify-between text-[11px] font-data-mono text-outline mt-space-xs">
<span>25 Sep 2024</span>
<span className="text-tertiary font-medium">Accumulating Thermocline Stress</span>
<span>Today</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Recent Subsurface Reconstructions</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time inference queue across target coordinates and ARGO matchings</p>
</div>
<button className="font-data-mono text-[11px] bg-surface-container px-2.5 py-1 rounded text-primary font-semibold hover:bg-surface-container-high transition-colors">
          View All Logs (248)
        </button>
</div>

<div className="overflow-x-auto w-full">
<table className="w-full text-left font-data-mono text-[12px] border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary text-[11px] uppercase tracking-wider font-semibold">
<th className="py-2.5 px-3 rounded-l-lg">Job / ID</th>
<th className="py-2.5 px-2">Basin Coordinates</th>
<th className="py-2.5 px-2">Timestamp</th>
<th className="py-2.5 px-2">Depth Range</th>
<th className="py-2.5 px-2">Latency</th>
<th className="py-2.5 px-2">Trust Flag</th>
<th className="py-2.5 px-3 rounded-r-lg text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-2 px-3 font-semibold text-primary">#RC-99201</td>
<td className="py-2 px-2 text-on-surface">14.20°N, 64.50°E (AS)</td>
<td className="py-2 px-2 text-on-surface-variant">05:48:12 UTC</td>
<td className="py-2 px-2 text-on-surface">0 – 1000m</td>
<td className="py-2 px-2 text-on-surface">178ms</td>
<td className="py-2 px-2">
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>PASS
                </span>
</td>
<td className="py-2 px-3 text-right">
<button className="text-primary hover:text-surface-tint font-semibold text-[11px]">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-2 px-3 font-semibold text-primary">#RC-99200</td>
<td className="py-2 px-2 text-on-surface">08.15°N, 88.30°E (BoB)</td>
<td className="py-2 px-2 text-on-surface-variant">05:46:50 UTC</td>
<td className="py-2 px-2 text-on-surface">0 – 750m</td>
<td className="py-2 px-2 text-on-surface">164ms</td>
<td className="py-2 px-2">
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>PASS
                </span>
</td>
<td className="py-2 px-3 text-right">
<button className="text-primary hover:text-surface-tint font-semibold text-[11px]">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-2 px-3 font-semibold text-primary">#RC-99198</td>
<td className="py-2 px-2 text-on-surface">01.00°S, 80.50°E (Eq)</td>
<td className="py-2 px-2 text-on-surface-variant">05:41:22 UTC</td>
<td className="py-2 px-2 text-on-surface">0 – 1200m</td>
<td className="py-2 px-2 text-on-surface">195ms</td>
<td className="py-2 px-2">
<span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>CAUTION
                </span>
</td>
<td className="py-2 px-3 text-right">
<button className="text-primary hover:text-surface-tint font-semibold text-[11px]">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-2 px-3 font-semibold text-primary">#RC-99195</td>
<td className="py-2 px-2 text-on-surface">21.80°N, 68.90°E (Guj)</td>
<td className="py-2 px-2 text-on-surface-variant">05:39:10 UTC</td>
<td className="py-2 px-2 text-on-surface">0 – 500m</td>
<td className="py-2 px-2 text-on-surface">142ms</td>
<td className="py-2 px-2">
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>PASS
                </span>
</td>
<td className="py-2 px-3 text-right">
<button className="text-primary hover:text-surface-tint font-semibold text-[11px]">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-2 px-3 font-semibold text-primary">#RC-99192</td>
<td className="py-2 px-2 text-on-surface">12.10°N, 93.40°E (And)</td>
<td className="py-2 px-2 text-on-surface-variant">05:32:04 UTC</td>
<td className="py-2 px-2 text-on-surface">0 – 1000m</td>
<td className="py-2 px-2 text-on-surface">188ms</td>
<td className="py-2 px-2">
<span className="inline-flex items-center gap-1 bg-rose-50 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>OOD/BATHY
                </span>
</td>
<td className="py-2 px-3 text-right">
<button className="text-primary hover:text-surface-tint font-semibold text-[11px]">Inspect</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-[11px] font-data-mono text-outline">
<span>Inference Engine: Transformer Attention + GNN Spatial Prior</span>
<span>SIH Node Validation: True</span>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<h3 className="font-title-sm text-title-sm text-on-surface font-bold">Scientific Trust Matrix</h3>
<span className="font-data-mono text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">88.6% High Conf</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
          Ensemble variance &amp; physical thermodynamic consistency score across active grid cells.
        </p>

<div className="w-full h-3 rounded-full bg-surface-container-high flex overflow-hidden mb-space-sm">
<div className="bg-primary h-full" style={{ width: '88.6%' }} title="Reliable: 88.6%"></div>
<div className="bg-amber-400 h-full" style={{ width: '9.8%' }} title="Caution (Missing Winds): 9.8%"></div>
<div className="bg-rose-500 h-full" style={{ width: '1.6%' }} title="Extreme Bathymetry: 1.6%"></div>
</div>
<div className="grid grid-cols-3 gap-space-xs font-data-mono text-[11px]">
<div className="p-2 rounded bg-surface-container-low">
<span className="text-outline block text-[10px]">HIGH CONF</span>
<span className="font-bold text-primary">88.6%</span>
<span className="text-on-surface-variant block text-[9px]">Calibrated</span>
</div>
<div className="p-2 rounded bg-surface-container-low">
<span className="text-outline block text-[10px]">CAUTION</span>
<span className="font-bold text-amber-700">9.8%</span>
<span className="text-on-surface-variant block text-[9px]">Wind delayed</span>
</div>
<div className="p-2 rounded bg-surface-container-low">
<span className="text-outline block text-[10px]">OOD FLAG</span>
<span className="font-bold text-rose-700">1.6%</span>
<span className="text-on-surface-variant block text-[9px]">Steep ridge</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex-1 flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[18px]">warning</span>
<h3 className="font-title-sm text-title-sm text-on-surface font-bold">Subsurface Heatwave Alerts</h3>
</div>
<span className="font-data-mono text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold uppercase">2 ACTIVE CRITICAL</span>
</div>
<div className="space-y-space-xs">

<div className="p-space-sm rounded-lg bg-surface-container-low border-l-4 border-rose-500">
<div className="flex items-center justify-between">
<span className="font-data-mono text-[11px] font-bold text-rose-700">MHW-AS-01 • Arabian Sea Central</span>
<span className="font-label-caps text-[10px] bg-rose-100 text-rose-800 font-bold px-1.5 py-0.2 rounded">CATEGORY 3 STRONG</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface mt-1">
              Thermal anomaly peak of <strong className="text-rose-700">+2.8°C at 75m depth</strong> (Thermocline displacement). Ongoing for 14 continuous days.
            </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low border-l-4 border-amber-500">
<div className="flex items-center justify-between">
<span className="font-data-mono text-[11px] font-bold text-amber-800">MHW-BOB-04 • South Bay of Bengal</span>
<span className="font-label-caps text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">CATEGORY 2 MODERATE</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface mt-1">
              Freshwater barrier layer trapping heat: <strong className="text-amber-800">+1.9°C anomaly at 50m</strong>. Duration: 6 days.
            </p>
</div>
</div>
<div className="mt-space-xs flex items-center justify-between font-data-mono text-[10px] text-outline">
<span>Criterion: Hobday et al. (90th percentile)</span>
<button className="text-primary hover:underline font-semibold">Heatwave Intel Module →</button>
</div>
</div>
</div>
</div>

<div className="mt-space-lg bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-space-md pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary">cloud_sync</span>
<span className="font-label-caps text-label-caps text-secondary uppercase font-bold tracking-wider">Multi-Satellite &amp; In-Situ Ingestion Pipeline</span>
</div>
<span className="font-data-mono text-[11px] text-outline">Next Copernicus Sync in 52 mins</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-space-sm mt-space-xs">
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<div className="flex flex-col">
<span className="font-data-mono text-[11px] font-bold text-on-surface">OSTIA SST</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">L4 0.05° Foundation</span>
</div>
<span className="font-data-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">FRESH (2h)</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<div className="flex flex-col">
<span className="font-data-mono text-[11px] font-bold text-on-surface">SMAP / SSS</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">JPL Salinity V5.0</span>
</div>
<span className="font-data-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">FRESH (4h)</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<div className="flex flex-col">
<span className="font-data-mono text-[11px] font-bold text-on-surface">DUACS SLA</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">Altimeter Sea Level</span>
</div>
<span className="font-data-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">FRESH (3h)</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<div className="flex flex-col">
<span className="font-data-mono text-[11px] font-bold text-on-surface">CCMP Winds</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">V3.1 Scatterometer</span>
</div>
<span className="font-data-mono text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-bold">DELAYED (8h)</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<div className="flex flex-col">
<span className="font-data-mono text-[11px] font-bold text-on-surface">ARGO In-Situ</span>
<span className="font-data-mono text-[10px] text-on-surface-variant">GDAC Collocation</span>
</div>
<span className="font-data-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">SYNCED</span>
</div>
</div>
</div>
</div></div>
    </>
  );
};

export default Overview;
