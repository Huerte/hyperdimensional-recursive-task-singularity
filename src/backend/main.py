from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models.product import Product

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = [
    Product(id=1, msg="Bala si biemar"),
    Product(id=2, msg="Bala si jonel"),
    Product(id=3, msg="Bala si joseph"),
]

@app.get('/')
def home():
    return tasks

@app.put('/add')
def addTasks(msg: str):
    try :
        newTasks = Product(id=len(tasks)+1, msg=msg)
        tasks.append(newTasks)
        return {'msg': "Item is successfully added"}
    except HTTPException:
        raise HTTPException(status_code=404, detail="Failed to add") 
    

@app.delete('/delete/{index}')
def deleteTasks(index: int):
    if index < 0 or index >= len(tasks):
        raise HTTPException(status_code=404, detail="Item not found")
    
    tasks.pop(index)
    return {'msg': "Item is successfully removed"}