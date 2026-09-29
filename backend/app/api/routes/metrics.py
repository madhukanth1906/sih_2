from fastapi import APIRouter

router = APIRouter()

@router.get("/metrics")
def get_metrics():
    return {
        "rmse": 0.42,
        "mae": 0.31,
        "bias": 0.05,
        "is_demo": True
    }

@router.get("/version")
def get_version():
    return {"version": "v2.4-EmbedOcean"}
