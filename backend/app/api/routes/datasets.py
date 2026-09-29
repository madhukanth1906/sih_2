from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_datasets():
    return {
        "datasets": [
            {"name": "OSTIA", "status": "Active", "variable": "SST"}
        ],
        "is_demo": True
    }

@router.get("/status")
def get_dataset_status():
    return {"status": "all_synced"}
