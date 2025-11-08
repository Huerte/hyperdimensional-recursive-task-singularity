from pydantic import BaseModel

class Product(BaseModel):
    id: int
    msg: str