Aideathon FullStack Project

Folders:
- backend/: FastAPI app (app/ contains code)
- frontend/: React + Vite app

Quick start:
1. Import DB schema:
   mysql -u root -p < backend/app_schema.sql
2. Backend:
   cd backend
   python -m venv venv
   source venv/bin/activate  # Windows: venv\\Scripts\\activate
   pip install -r requirements.txt
   uvicorn app.main:app --reload --port 8000
3. Frontend:
   cd frontend
   npm install
   npm run dev

Default frontend expects backend at http://127.0.0.1:8000
