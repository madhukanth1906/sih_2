from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_profile(lat: float, lon: float, date: str):
    return {
        "lat": lat,
        "lon": lon,
        "date": date,
        "profile": "demo_data"
    }
