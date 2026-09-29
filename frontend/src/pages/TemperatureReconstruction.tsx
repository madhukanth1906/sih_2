const TemperatureReconstruction = () => {
  return (
    <>
      <div classname="w-full px-gutter-desktop py-space-xl"><div classname="flex flex-col w-full space-y-space-xl">
<!-- Header / Stage Telemetry Ribbon -->
<div classname="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-xs">
<div classname="space-y-space-2xs">
<div classname="flex items-center gap-space-sm flex-wrap">
<span classname="font-label-caps text-label-caps tracking-widest text-primary font-bold uppercase bg-surface-container px-2 py-0.5 rounded">
          DEEP NEURAL INFERENCE ENGINE
        </span>
<span classname="w-1 h-1 rounded-full bg-outline-variant"></span>
<span classname="font-data-mono text-body-sm text-secondary flex items-center gap-space-xs">
<span classname="material-symbols-outlined text-[16px] text-primary">memory</span>
          OceanEmbed Transformer-ResNet v2.4
        </span>
</div>
<h1 classname="font-headline-xl text-headline-xl text-on-surface tracking-tight font-extrabold">
        Subsurface Temperature Reconstruction
      </h1>
<p classname="font-body-md text-body-md text-secondary max-w-3xl">
        Deep learning embedding model for multi-depth thermal reconstruction from multi-modal satellite observables across 15 standard oceanographic isobaric levels.
      </p>
</div>
<!-- Mode Badge & Quick Diagnostics -->
<div classname="flex items-center gap-space-sm self-start md:self-auto shrink-0 bg-surface-container-lowest p-space-xs rounded-xl shadow-sm">
<div classname="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container">
<span classname="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
<span classname="font-label-caps text-label-caps text-on-surface font-semibold uppercase tracking-wider">Ready for Inference</span>
</div>
<div classname="hidden xl:flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-low text-secondary">
<span classname="material-symbols-outlined text-[16px]">science</span>
<span classname="font-data-mono text-body-sm">Illustrative Demo Prototype</span>
</div>
</div>
</div>
<!-- Main Split Workstation (5 Col / 7 Col) -->
<div classname="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
<!-- LEFT COLUMN: Configuration & Ingestion Matrix (5 Columns) -->
<div classname="lg:col-span-5 flex flex-col space-y-space-lg">
<!-- Panel 1: Spatiotemporal Coordinates & Presets -->
<div classname="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
<div classname="flex items-center justify-between">
<div classname="flex items-center gap-space-xs">
<span classname="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<h2 classname="font-title-sm text-title-sm text-on-surface font-bold">Target Coordinates &amp; Domain</h2>
</div>
<span classname="font-label-caps text-label-caps text-secondary uppercase bg-surface-container px-2 py-0.5 rounded">
            Stage 1 / Param
          </span>
</div>
<div classname="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div classname="space-y-space-2xs">
<label classname="font-label-caps text-label-caps text-secondary uppercase tracking-wider block">Latitude</label>
<div classname="flex items-center bg-surface-container-low rounded-lg px-space-sm h-9 focus-within:ring-2 focus-within:ring-primary-container/20">
<span classname="font-data-mono text-body-sm text-on-surface font-semibold flex-1">15.4200° N</span>
<span classname="font-label-caps text-[10px] text-outline">LAT</span>
</div>
</div>
<div classname="space-y-space-2xs">
<label classname="font-label-caps text-label-caps text-secondary uppercase tracking-wider block">Longitude</label>
<div classname="flex items-center bg-surface-container-low rounded-lg px-space-sm h-9 focus-within:ring-2 focus-within:ring-primary-container/20">
<span classname="font-data-mono text-body-sm text-on-surface font-semibold flex-1">68.7500° E</span>
<span classname="font-label-caps text-[10px] text-outline">LON</span>
</div>
</div>
</div>
<div classname="space-y-space-2xs">
<label classname="font-label-caps text-label-caps text-secondary uppercase tracking-wider flex items-center justify-between">
<span>Hydrographic Basin Preset</span>
<button classname="text-primary hover:text-surface-tint font-data-mono text-[11px] flex items-center gap-0.5">
<span classname="material-symbols-outlined text-[14px]">map</span> Pinpoint on Map
            </button>
</label>
<div classname="flex items-center justify-between bg-surface-container-low rounded-lg px-space-md h-9 cursor-pointer hover:bg-surface-container transition-colors">
<div classname="flex items-center gap-space-xs min-w-0">
<span classname="w-2 h-2 rounded-full bg-primary"></span>
<span classname="font-body-md text-body-md text-on-surface font-medium truncate">Central Arabian Sea Warm Pool</span>
</div>
<span classname="material-symbols-outlined text-outline text-[18px]">expand_more</span>
</div>
</div>
<div classname="space-y-space-2xs">
<label classname="font-label-caps text-label-caps text-secondary uppercase tracking-wider block">Temporal Timestamp</label>
<div classname="flex items-center justify-between bg-surface-container-low rounded-lg px-space-md h-9">
<div classname="flex items-center gap-space-xs font-data-mono text-body-sm text-on-surface">
<span classname="material-symbols-outlined text-[16px] text-primary">schedule</span>
<span>2024-10-24 · 12:00 UTC</span>
</div>
<span classname="font-label-caps text-[10px] text-primary bg-primary-fixed/40 px-1.5 py-0.5 rounded uppercase font-semibold">T-0 SYNCHRONIZED</span>
</div>
</div>
</div>
<!-- Panel 2: Satellite Observables & Sensor Completeness -->
<div classname="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
<div classname="flex items-center justify-between">
<div classname="flex items-center gap-space-xs">
<span classname="material-symbols-outlined text-primary text-[20px]">sensors</span>
<h2 classname="font-title-sm text-title-sm text-on-surface font-bold">Input Sensor &amp; Satellite Modalities</h2>
</div>
<span classname="font-label-caps text-label-caps text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">
            5 / 5 READY
          </span>
</div>
<!-- Modalities List -->
<div classname="space-y-space-xs">
<!-- SST -->
<div classname="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div classname="flex items-center gap-space-sm min-w-0">
<div classname="w-8 h-8 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
<span classname="material-symbols-outlined text-[18px]">device_thermostat</span>
</div>
<div classname="min-w-0">
<div classname="flex items-center gap-space-xs">
<span classname="font-body-md text-body-md font-semibold text-on-surface">SST (OSTIA 0.05°)</span>
<span classname="font-label-caps text-[10px] bg-emerald-100 text-emerald-800 px-1 rounded">High Quality</span>
</div>
<p classname="font-data-mono text-body-sm text-secondary truncate">Ultra-high res blended infrared/microwave</p>
</div>
</div>
<div classname="flex items-center gap-space-sm text-right shrink-0">
<span classname="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">29.80°C</span>
<span classname="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
</div>
</div>
<!-- SSS -->
<div classname="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div classname="flex items-center gap-space-sm min-w-0">
<div classname="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center text-primary shrink-0">
<span classname="material-symbols-outlined text-[18px]">water</span>
</div>
<div classname="min-w-0">
<div classname="flex items-center gap-space-xs">
<span classname="font-body-md text-body-md font-semibold text-on-surface">SSS (SMAP 0.25°)</span>
<span classname="font-label-caps text-[10px] bg-primary/10 text-primary px-1 rounded">Calibrated</span>
</div>
<p classname="font-data-mono text-body-sm text-secondary truncate">Sea surface salinity microwave radiometry</p>
</div>
</div>
<div classname="flex items-center gap-space-sm text-right shrink-0">
<span classname="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">36.2 PSU</span>
<span classname="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
</div>
</div>
<!-- SSH / SLA -->
<div classname="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div classname="flex items-center gap-space-sm min-w-0">
<div classname="w-8 h-8 rounded-md bg-blue-500/10 flex items-center justify-center text-tertiary shrink-0">
<span classname="material-symbols-outlined text-[18px]">height</span>
</div>
<div classname="min-w-0">
<div classname="flex items-center gap-space-xs">
<span classname="font-body-md text-body-md font-semibold text-on-surface">SSH / SLA (DUACS)</span>
<span classname="font-label-caps text-[10px] bg-emerald-100 text-emerald-800 px-1 rounded">High Quality</span>
</div>
<p classname="font-data-mono text-body-sm text-secondary truncate">Altimetric sea level anomaly altimetry</p>
</div>
</div>
<div classname="flex items-center gap-space-sm text-right shrink-0">
<span classname="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">+0.14 m</span>
<span classname="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
</div>
</div>
<!-- Winds -->
<div classname="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div classname="flex items-center gap-space-sm min-w-0">
<div classname="w-8 h-8 rounded-md bg-slate-500/10 flex items-center justify-center text-secondary shrink-0">
<span classname="material-symbols-outlined text-[18px]">air</span>
</div>
<div classname="min-w-0">
<span classname="font-body-md text-body-md font-semibold text-on-surface">Zonal/Meridional Winds (CCMP)</span>
<p classname="font-data-mono text-body-sm text-secondary truncate">Cross-calibrated multi-platform vector</p>
</div>
</div>
<div classname="flex items-center gap-space-sm text-right shrink-0">
<span classname="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">6.8 m/s</span>
<span classname="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
</div>
</div>
<!-- Surface Currents -->
<div classname="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div classname="flex items-center gap-space-sm min-w-0">
<div classname="w-8 h-8 rounded-md bg-teal-500/10 flex items-center justify-center text-surface-tint shrink-0">
<span classname="material-symbols-outlined text-[18px]">double_arrow</span>
</div>
<div classname="min-w-0">
<span classname="font-body-md text-body-md font-semibold text-on-surface">Geostrophic Surface Currents</span>
<p classname="font-data-mono text-body-sm text-secondary truncate">Derived from SLA &amp; Coriolis force</p>
</div>
</div>
<div classname="flex items-center gap-space-sm text-right shrink-0">
<span classname="font-metric-readout-md text-metric-readout-md text-on-surface font-bold">0.35 m/s <span classname="font-data-mono text-body-sm font-normal text-secondary">E</span></span>
<span classname="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
</div>
</div>
</div>
<!-- Sync Quality Banner -->
<div classname="p-space-sm rounded-lg bg-emerald-500/10 flex items-start gap-space-xs text-emerald-950">
<span classname="material-symbols-outlined text-emerald-700 text-[18px] shrink-0 mt-0.5">verified_user</span>
<div classname="space-y-space-2xs">
<span classname="font-title-sm text-body-sm font-bold text-emerald-900 block leading-tight">Data Quality Synchronized</span>
<p classname="font-body-sm text-body-sm text-emerald-800">
              All 5 surface satellite modalities synchronized within ±6 hours. Spatial re-gridding completed at 0.25° resolution with zero data gaps.
            </p>
</div>
</div>
<!-- Model Architecture & Actions -->
<div classname="pt-space-xs space-y-space-sm">
<div classname="p-space-sm rounded-lg bg-surface-container text-on-surface space-y-space-2xs">
<div classname="flex items-center justify-between">
<span classname="font-label-caps text-label-caps text-secondary uppercase font-semibold">Model Checkpoint</span>
<span classname="font-data-mono text-[10px] text-primary">FP16 ACCELERATED</span>
</div>
<p classname="font-data-mono text-body-sm font-semibold text-on-surface truncate">
              OceanEmbed-v2.4-Weights-FP16
            </p>
<p classname="font-body-sm text-body-sm text-secondary">
              Trained on GLORYS12V1 historical reanalysis (1993–2020) · Latent Dim: 512
            </p>
</div>
<div classname="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
<button classname="flex-1 h-11 px-space-lg bg-primary-container hover:bg-cyan-400 active:scale-[0.99] text-on-primary-container font-headline-md text-title-sm font-bold rounded-lg shadow-[0_4px_16px_rgba(6,182,212,0.35)] transition-all flex items-center justify-center gap-space-xs" id="runInferenceBtn">
<span classname="material-symbols-outlined text-[20px]">bolt</span>
<span>Run Reconstruction</span>
</button>
<button classname="h-11 px-space-md bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-title-sm text-body-md font-semibold rounded-lg transition-colors flex items-center justify-center gap-space-xs">
<span classname="material-symbols-outlined text-[18px]">restart_alt</span>
<span>Reset</span>
</button>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN: Reconstruction Results & Uncertainty Analysis (7 Columns) -->
<div classname="lg:col-span-7 flex flex-col space-y-space-lg">
<!-- Inference Status Banner -->
<div classname="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div classname="flex items-center gap-space-sm">
<div classname="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0">
<span classname="material-symbols-outlined text-[20px]">check_circle</span>
</div>
<div>
<div classname="flex items-center gap-space-xs flex-wrap">
<span classname="font-headline-md text-headline-md font-bold text-on-surface">Inference Complete</span>
<span classname="font-label-caps text-label-caps bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">
                SCIENTIFIC TRUST: PASS
              </span>
</div>
<p classname="font-data-mono text-body-sm text-secondary">
              Latency: <span classname="text-on-surface font-semibold">142ms</span> · PyTorch TensorRT GPU Pipeline · Bayesian P05/P95
            </p>
</div>
</div>
<div classname="flex items-center gap-space-xs self-start sm:self-auto">
<span classname="font-data-mono text-body-sm px-space-sm py-1 rounded bg-surface-container text-on-surface font-medium">
            15 Depths Evaluated
          </span>
</div>
</div>
<!-- Key Diagnostic Metrics Cards Bento -->
<div classname="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
<div classname="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-2xs">
<span classname="font-label-caps text-label-caps text-secondary uppercase block">Observed SST (0m)</span>
<span classname="font-metric-readout-lg text-metric-readout-lg font-bold text-amber-700 block">29.80°C</span>
<span classname="font-data-mono text-body-sm text-secondary">In-situ calibration</span>
</div>
<div classname="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-2xs">
<span classname="font-label-caps text-label-caps text-secondary uppercase block">Thermocline Z20</span>
<span classname="font-metric-readout-lg text-metric-readout-lg font-bold text-primary block">82 m</span>
<span classname="font-data-mono text-body-sm text-secondary">Depth of max gradient</span>
</div>
<div classname="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-2xs">
<span classname="font-label-caps text-label-caps text-secondary uppercase block">100m Median Temp</span>
<span classname="font-metric-readout-lg text-metric-readout-lg font-bold text-primary-fixed-variant block">23.85°C</span>
<span classname="font-data-mono text-body-sm text-secondary">P50 Posterior median</span>
</div>
<div classname="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-2xs">
<span classname="font-label-caps text-label-caps text-secondary uppercase block">Mean Uncertainty</span>
<span classname="font-metric-readout-lg text-metric-readout-lg font-bold text-on-surface block">±0.62°C</span>
<span classname="font-data-mono text-body-sm text-emerald-700 font-medium">P95 - P05 credible band</span>
</div>
</div>
<!-- Reconstruction Depth Table / Matrix -->
<div classname="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md overflow-hidden">
<div classname="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div>
<h3 classname="font-headline-md text-title-sm font-bold text-on-surface">15-Level Subsurface Thermal Profile</h3>
<p classname="font-body-sm text-body-sm text-secondary">
              From epipelagic surface down to bathypelagic 1000m standard hydrographic depth
            </p>
</div>
<div classname="flex items-center gap-space-sm">
<span classname="flex items-center gap-1 font-label-caps text-[10px] text-secondary">
<span classname="w-2.5 h-2.5 rounded bg-amber-500"></span> Satellite
            </span>
<span classname="flex items-center gap-1 font-label-caps text-[10px] text-secondary">
<span classname="w-2.5 h-2.5 rounded bg-primary-container"></span> AI Predicted
            </span>
</div>
</div>
<!-- Dense Tabular Data View -->
<div classname="overflow-x-auto">
<table classname="w-full text-left border-collapse">
<thead>
<tr classname="border-b border-surface-container bg-surface-container-low text-secondary font-label-caps text-[11px] tracking-wider uppercase">
<th classname="py-2.5 px-3">Depth (m)</th>
<th classname="py-2.5 px-3">Type</th>
<th classname="py-2.5 px-3 text-right">P05 Lower</th>
<th classname="py-2.5 px-3 text-right">P50 Median</th>
<th classname="py-2.5 px-3 text-right">P95 Upper</th>
<th classname="py-2.5 px-3 text-center">Uncertainty Range Bar</th>
<th classname="py-2.5 px-3 text-right">Anomaly</th>
</tr>
</thead>
<tbody classname="divide-y divide-surface-container-low font-data-mono text-body-sm">
<!-- 0m -->
<tr classname="bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
<td classname="py-2 px-3 font-bold text-on-surface flex items-center gap-1.5">
<span classname="material-symbols-outlined text-[15px] text-amber-600">water_drop</span>
                  0 m (Surface)
                </td>
<td classname="py-2 px-3">
<span classname="font-label-caps text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold uppercase">OBSERVED SST</span>
</td>
<td classname="py-2 px-3 text-right text-secondary">29.80°C</td>
<td classname="py-2 px-3 text-right font-bold text-amber-800">29.80°C</td>
<td classname="py-2 px-3 text-right text-secondary">29.80°C</td>
<td classname="py-2 px-3 text-center">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-amber-500 w-full"></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.4°C</td>
</tr>
<!-- 5m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">5 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-primary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">29.60°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">29.74°C</td>
<td classname="py-2 px-3 text-right text-secondary">29.85°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-primary-container rounded-full" style={{ width: '25%', marginLeft: '70%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.3°C</td>
</tr>
<!-- 10m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">10 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-primary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">29.50°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">29.68°C</td>
<td classname="py-2 px-3 text-right text-secondary">29.80°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-primary-container rounded-full" style={{ width: '30%', marginLeft: '65%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.3°C</td>
</tr>
<!-- 20m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">20 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-primary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">29.30°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">29.52°C</td>
<td classname="py-2 px-3 text-right text-secondary">29.70°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-primary-container rounded-full" style={{ width: '40%', marginLeft: '55%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.5°C</td>
</tr>
<!-- 30m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">30 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-primary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">28.80°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">29.10°C</td>
<td classname="py-2 px-3 text-right text-secondary">29.35°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-primary-container rounded-full" style={{ width: '55%', marginLeft: '40%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.7°C</td>
</tr>
<!-- 50m (Anomaly highlight) -->
<tr classname="bg-rose-500/5 hover:bg-rose-500/10 transition-colors">
<td classname="py-2 px-3 font-bold text-on-surface flex items-center gap-1">
<span classname="w-1.5 h-1.5 rounded-full bg-error"></span>
                  50 m
                </td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-primary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">27.35°C</td>
<td classname="py-2 px-3 text-right font-bold text-rose-700">27.85°C</td>
<td classname="py-2 px-3 text-right text-secondary">28.30°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-error rounded-full" style={{ width: '65%', marginLeft: '30%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right font-bold text-rose-600">+1.4°C 🔥</td>
</tr>
<!-- 75m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">75 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-primary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">24.70°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">25.40°C</td>
<td classname="py-2 px-3 text-right text-secondary">26.10°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-primary-container rounded-full" style={{ width: '70%', marginLeft: '20%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.9°C</td>
</tr>
<!-- 100m -->
<tr classname="bg-surface-container/50 hover:bg-surface-container transition-colors">
<td classname="py-2 px-3 font-bold text-primary flex items-center gap-1">
<span classname="material-symbols-outlined text-[14px]">anchor</span>
                  100 m
                </td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-primary font-bold">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">23.20°C</td>
<td classname="py-2 px-3 text-right font-bold text-primary">23.85°C</td>
<td classname="py-2 px-3 text-right text-secondary">24.45°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-primary rounded-full" style={{ width: '62%', marginLeft: '25%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.6°C</td>
</tr>
<!-- 125m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">125 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-secondary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">20.90°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">21.60°C</td>
<td classname="py-2 px-3 text-right text-secondary">22.30°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-secondary rounded-full" style={{ width: '70%', marginLeft: '15%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.4°C</td>
</tr>
<!-- 150m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">150 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-secondary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">19.10°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">19.80°C</td>
<td classname="py-2 px-3 text-right text-secondary">20.50°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-secondary rounded-full" style={{ width: '70%', marginLeft: '15%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.2°C</td>
</tr>
<!-- 200m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">200 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-secondary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">16.50°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">17.20°C</td>
<td classname="py-2 px-3 text-right text-secondary">17.90°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-secondary rounded-full" style={{ width: '70%', marginLeft: '15%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">+0.1°C</td>
</tr>
<!-- 300m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">300 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-secondary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">13.50°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">14.10°C</td>
<td classname="py-2 px-3 text-right text-secondary">14.70°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-secondary rounded-full" style={{ width: '60%', marginLeft: '20%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">0.0°C</td>
</tr>
<!-- 500m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">500 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-secondary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">9.90°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">10.40°C</td>
<td classname="py-2 px-3 text-right text-secondary">10.90°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-secondary rounded-full" style={{ width: '50%', marginLeft: '25%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">-0.1°C</td>
</tr>
<!-- 700m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-semibold text-on-surface">700 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-secondary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">7.80°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">8.20°C</td>
<td classname="py-2 px-3 text-right text-secondary">8.60°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-secondary rounded-full" style={{ width: '40%', marginLeft: '30%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">0.0°C</td>
</tr>
<!-- 1000m -->
<tr classname="hover:bg-surface-container-low transition-colors">
<td classname="py-2 px-3 font-bold text-on-surface">1000 m</td>
<td classname="py-2 px-3"><span classname="font-label-caps text-[10px] text-secondary">RECONSTRUCTED</span></td>
<td classname="py-2 px-3 text-right text-secondary">5.80°C</td>
<td classname="py-2 px-3 text-right font-bold text-on-surface">6.10°C</td>
<td classname="py-2 px-3 text-right text-secondary">6.40°C</td>
<td classname="py-2 px-3">
<div classname="w-28 mx-auto h-2 bg-surface-container rounded-full overflow-hidden flex items-center">
<div classname="h-full bg-secondary rounded-full" style={{ width: '30%', marginLeft: '35%' }}></div>
</div>
</td>
<td classname="py-2 px-3 text-right text-secondary">-0.05°C</td>
</tr>
</tbody>
</table>
</div>
<!-- Post-Inference Action Toolbar -->
<div classname="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
<div classname="flex items-center gap-space-xs text-secondary font-data-mono text-body-sm">
<span classname="material-symbols-outlined text-[16px] text-primary">info</span>
<span>Credible interval estimated via Monte Carlo Dropout (N=100 forward passes)</span>
</div>
<div classname="flex items-center gap-space-xs flex-wrap">
<button classname="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-body-sm font-semibold rounded-lg transition-colors flex items-center gap-space-xs">
<span classname="material-symbols-outlined text-[16px]">stacked_line_chart</span>
<span>View Vertical Profile</span>
</button>
<button classname="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-title-sm text-body-sm font-semibold rounded-lg transition-colors flex items-center gap-space-xs">
<span classname="material-symbols-outlined text-[16px]">file_download</span>
<span>Export CSV / NetCDF</span>
</button>
<button classname="h-9 px-space-md bg-primary hover:bg-surface-tint text-on-primary font-title-sm text-body-sm font-semibold rounded-lg transition-colors flex items-center gap-space-xs">
<span classname="material-symbols-outlined text-[16px]">history_toggle_off</span>
<span>Find Analogues</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    </>
  );
};

export default TemperatureReconstruction;
