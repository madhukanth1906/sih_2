import os

FRONTEND_DIR = "G:/sih_2/frontend/src/pages"

PAGES = {
    "HeatwaveIntelligence": {
        "title": "Marine Heatwave Intelligence",
        "icon": "warning",
        "desc": "Real-time alerting and predictive modeling for subsurface marine heatwave propagation.",
        "badge": "MHW ALERT ACTIVE"
    },
    "HistoricalAnalogues": {
        "title": "Historical Analogues",
        "icon": "history_toggle_off",
        "desc": "Search the 20-year GLORYS12V1 reanalysis dataset for matching thermal profiles and anomalies.",
        "badge": "ARCHIVE SEARCH"
    },
    "ScientificTrust": {
        "title": "Scientific Trust & Validation",
        "icon": "verified",
        "desc": "Transparent reporting of model confidence, Bayesian credible intervals, and physical constraints.",
        "badge": "CALIBRATION"
    },
    "DataSources": {
        "title": "Data Sources & Ingestion",
        "icon": "database",
        "desc": "Live telemetry status for OSTIA SST, SMAP SSS, DUACS SLA, and OSCAR currents.",
        "badge": "TELEMETRY"
    },
    "ModelPerformance": {
        "title": "Model Performance Diagnostics",
        "icon": "speed",
        "desc": "Live RMSE, bias, and inference latency metrics for the Deep Residual Transformer.",
        "badge": "PERFORMANCE"
    },
    "MonitoringMLOps": {
        "title": "Monitoring & MLOps",
        "icon": "monitoring",
        "desc": "Data drift detection, inference logs, and GPU cluster utilization for Node SIH26066.",
        "badge": "SYSTEM STATUS"
    },
    "Settings": {
        "title": "System Settings",
        "icon": "settings",
        "desc": "Configure platform preferences, API keys, and notification thresholds.",
        "badge": "CONFIGURATION"
    }
}

TEMPLATE = """
const {name} = () => {{
  return (
    <div className="w-full px-gutter-desktop py-space-xl">
      <div className="flex flex-col w-full space-y-space-xl">
        {{/* Header */}}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-xs border-b border-outline/20">
          <div className="space-y-space-2xs">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="font-label-caps text-label-caps tracking-widest text-primary font-bold uppercase bg-surface-container px-2 py-0.5 rounded">
                {badge}
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="font-data-mono text-body-sm text-secondary flex items-center gap-space-xs">
                Node SIH26066-INCOIS
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-extrabold flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[36px] text-primary">{icon}</span>
              {title}
            </h1>
            <p className="font-body-md text-body-md text-secondary max-w-3xl">
              {desc}
            </p>
          </div>
        </div>
        
        {{/* Main Content Area */}}
        <div className="bg-surface-container-lowest p-space-2xl rounded-2xl shadow-sm border border-surface-container-high flex flex-col items-center justify-center text-center space-y-space-md min-h-[400px]">
          <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-primary">{icon}</span>
          </div>
          <div className="space-y-space-2xs">
            <h2 className="font-headline-md text-title-sm text-on-surface font-bold">Module Under Construction</h2>
            <p className="font-body-sm text-body-sm text-secondary max-w-md mx-auto">
              The {title} module is currently being integrated with the PyTorch backend. Data pipelines and UI components will be available in the next deployment cycle.
            </p>
          </div>
          <button className="px-space-md py-2 bg-primary-container text-on-primary-container font-title-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all mt-space-sm">
            Refresh Status
          </button>
        </div>
      </div>
    </div>
  );
}};

export default {name};
"""

for page_name, data in PAGES.items():
    file_path = os.path.join(FRONTEND_DIR, f"{page_name}.tsx")
    content = TEMPLATE.format(
        name=page_name,
        title=data["title"],
        icon=data["icon"],
        desc=data["desc"],
        badge=data["badge"]
    )
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Generated {page_name}.tsx")
