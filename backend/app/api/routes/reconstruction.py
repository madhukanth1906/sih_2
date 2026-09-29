from fastapi import APIRouter
from typing import List, Optional
from pydantic import BaseModel

router = APIRouter()

class ReconstructionRequest(BaseModel):
    lat: float
    lon: float
    date: str
    depths: Optional[List[float]] = [0, 5, 10, 20, 30, 50, 75, 100, 125, 150, 200, 300, 500, 700, 1000]
    model_version: Optional[str] = "v2.4"

@router.post("/")
def reconstruct(req: ReconstructionRequest):
    return {
        "job_id": "RC-DEMO-123",
        "status": "processing",
        "message": "Demo mode: simulated reconstruction job started"
    }

@router.get("/{job_id}")
def get_reconstruction(job_id: str):
    return {
        "job_id": job_id,
        "status": "completed",
        "results": {
            "depths": [0, 5, 10, 20, 30, 50, 75, 100, 125, 150, 200, 300, 500, 700, 1000],
            "p50": [28.5, 28.4, 28.2, 27.8, 27.1, 25.4, 22.1, 19.5, 17.2, 15.1, 13.0, 11.2, 9.5, 7.8, 5.5],
            "p05": [28.0, 27.9, 27.7, 27.3, 26.6, 24.9, 21.6, 19.0, 16.7, 14.6, 12.5, 10.7, 9.0, 7.3, 5.0],
            "p95": [29.0, 28.9, 28.7, 28.3, 27.6, 25.9, 22.6, 20.0, 17.7, 15.6, 13.5, 11.7, 10.0, 8.3, 6.0],
            "is_demo": True
        }
    }
