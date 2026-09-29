from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_heatwaves():
    return {
        "events": [
            {
                "id": "MHW-AS-01",
                "severity": "Category 3 Strong",
                "start_date": "2024-10-10",
                "duration_days": 14,
                "max_anomaly": 2.8,
                "max_depth": 150
            }
        ],
        "is_demo": True
    }
