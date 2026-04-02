# shop_api.py - FastAPI backend for the shopping cart application
from fastapi import FastAPI # Import FastAPI framework
from fastapi.middleware.cors import CORSMiddleware # Import CORS middleware to handle cross-origin requests
from pydantic import BaseModel # Import BaseModel from Pydantic for data validation and serialization

# Import CRUD functions
from shop_crud import (
    db_get_products,
    db_get_cart,
    db_add_to_cart,
    db_update_cart,
    db_delete_cart
)

# Initialize FastAPI app
app = FastAPI(title="Shopping Cart API")

# CORS setup (same as your todo tutorial)
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

# Add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models ---
class CartCreate(BaseModel):
    product_id: int

class CartUpdate(BaseModel):
    quantity: int


# --- ROUTES ---
# Get the list of products, crud read
@app.get("/products")
def get_products():
    return db_get_products()

# Get the current cart items, crud read
@app.get("/cart")
def get_cart():
    return db_get_cart()

# Add a product to the cart by sending a POST request with the product ID, crud create
@app.post("/cart")
def add_cart(item: CartCreate):
    db_add_to_cart(item.product_id)
    return {"status": "added"}

# Update the quantity of an item in the cart by sending a PUT request with the new quantity, crud update
@app.put("/cart/{cart_id}")
def update_cart(cart_id: int, body: CartUpdate):
    db_update_cart(cart_id, body.quantity)
    return {"status": "updated"}

# Remove an item from the cart by sending a DELETE request with the cart item ID, crud delete
@app.delete("/cart/{cart_id}")
def delete_cart(cart_id: int):
    db_delete_cart(cart_id)
    return {"status": "deleted"}