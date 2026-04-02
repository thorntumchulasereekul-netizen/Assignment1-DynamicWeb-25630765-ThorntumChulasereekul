# shop_crud.py - Database CRUD operations for the shopping cart application
import mysql.connector # Import MySQL Connector to interact with the MySQL database

# --- Database Connection Helper ---
def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="mysql",
        database="shop"
    )

# --- CRUD FUNCTIONS ---

# Get the list of products from the database, crud read
def db_get_products():
    db = get_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    cursor.close()
    db.close()
    return products

# Get the current cart items from the database, crud read
def db_get_cart():
    db = get_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("""
        SELECT cart.id, products.name, products.price, cart.quantity
        FROM cart
        JOIN products ON cart.product_id = products.id
    """)
    items = cursor.fetchall()
    cursor.close()
    db.close()
    return items

# Add a product to the cart by inserting or updating the cart table, crud create
def db_add_to_cart(product_id: int):
    db = get_db()
    cursor = db.cursor(dictionary=True)

    # Check if the product is already in the cart
    cursor.execute("SELECT * FROM cart WHERE product_id=%s", (product_id,))
    existing = cursor.fetchone()

    # If the product is already in the cart, update the quantity. Otherwise, insert a new row.
    if existing:
        cursor.execute(
            "UPDATE cart SET quantity = quantity + 1 WHERE product_id=%s",
            (product_id,)
        )
    else:
        cursor.execute(
            "INSERT INTO cart (product_id, quantity) VALUES (%s, 1)",
            (product_id,)
        )

    # Commit the transaction and close the connection
    db.commit()
    cursor.close()
    db.close()
    return True

# Update the quantity of an item in the cart by updating the cart table, crud update
def db_update_cart(cart_id: int, quantity: int):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "UPDATE cart SET quantity=%s WHERE id=%s",
        (quantity, cart_id)
    )
    db.commit()
    cursor.close()
    db.close()
    return True

# Remove an item from the cart by deleting the row from the cart table, crud delete
def db_delete_cart(cart_id: int):
    db = get_db()
    cursor = db.cursor()
    cursor.execute("DELETE FROM cart WHERE id=%s", (cart_id,))
    db.commit()
    cursor.close()
    db.close()
    return True