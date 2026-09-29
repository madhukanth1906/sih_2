from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_analogues(lat: float, lon: float):
    return {
        "analogues": [
            {
                "date": "1998-11-20",
                "similarity": 0.92,
                "regime": "El Nino Modoki"
            }
        ],
        "is_demo": True
    }
