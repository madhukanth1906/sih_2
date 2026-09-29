from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_trust(lat: float, lon: float):
    return {
        "status": "PASS",
        "confidence": 88.6,
        "reason": "High density of ARGO observations in vicinity",
        "is_demo": True
    }
