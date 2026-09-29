# OceanEmbed

Scientific ocean intelligence platform for subsurface ocean temperature reconstruction using satellite surface observations and deep learning (SIH26066).

## Architecture

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: FastAPI + Python (PyTorch, NumPy, Xarray, Scikit-Learn)

## Setup and Running

### Frontend

1. Navigate to the `frontend` directory.
2. Ensure dependencies are installed:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
The frontend will be available at `http://localhost:3000`.

### Backend

1. Navigate to the `backend` directory.
2. Activate the virtual environment and install dependencies:
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   pip install fastapi uvicorn pydantic torch numpy pandas xarray scipy scikit-learn netCDF4 zarr dask[complete] python-multipart
   ```
3. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```
The backend API will be available at `http://localhost:8000`.
Swagger documentation is automatically generated at `http://localhost:8000/docs`.

## Demo Mode
The backend API routes currently return mock/demo data for initial frontend integration testing while real model inference integration is developed.
