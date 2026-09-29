from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.routes import health, reconstruction, profiles, heatwaves, analogues, trust, datasets, metrics
import uvicorn

app = FastAPI(title="OceanEmbed API", version="2.4", description="Subsurface Ocean Intelligence Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api/v1", tags=["Health"])
app.include_router(datasets.router, prefix="/api/v1/datasets", tags=["Datasets"])
app.include_router(reconstruction.router, prefix="/api/v1/reconstruct", tags=["Reconstruction"])
app.include_router(profiles.router, prefix="/api/v1/profile", tags=["Profiles"])
app.include_router(heatwaves.router, prefix="/api/v1/heatwaves", tags=["Heatwaves"])
app.include_router(analogues.router, prefix="/api/v1/analogues", tags=["Analogues"])
app.include_router(trust.router, prefix="/api/v1/trust", tags=["Trust"])
app.include_router(metrics.router, prefix="/api/v1/model", tags=["Model"])

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
