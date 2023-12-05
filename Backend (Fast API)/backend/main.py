from fastapi import FastAPI
from fastapi import Depends
from sqlalchemy.orm import Session
from backend.configdb import SessionLocal, Base
from backend.schema import PelangganSchema, PemesananSchema
import backend.routers.crud as crud
from backend.routers.routes import router
from .routers import routes, crud, auth, user
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Menambahkan router yang telah dibuat sebelumnya
app.include_router(user.router)
app.include_router(auth.router)
app.include_router(routes.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Inisialisasi database
Base.metadata.create_all(bind=crud.engine)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000)