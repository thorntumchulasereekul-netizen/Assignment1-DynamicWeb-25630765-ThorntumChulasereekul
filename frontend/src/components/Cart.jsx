const API_BASE = "http://127.0.0.1:8000"; //API base URL for the backend

//Cart component that displays the items in the cart and allows the user to update the quantity or remove items
export default function Cart({ cart, refreshCart }) {

  //update the quantity of an item in the cart by sending a PUT request to the backend with the new quantity, and then refresh the cart
  //crud update
  const updateQty = (id, qty) => {
    fetch(`${API_BASE}/cart/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ quantity: Number(qty) })
    }).then(refreshCart);
  };

  //remove an item from the cart by sending a DELETE request to the backend, and then refresh the cart
  //crud delete
  const removeItem = (id) => {
    fetch(`${API_BASE}/cart/${id}`, { method: "DELETE" })
      .then(refreshCart);
  };

  //calculate the total price of the items in the cart by multiplying the price and quantity of each item and summing them up
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  //return the cart component, and display the items in the cart with their name, price, quantity, and total price, and also display the total price of the cart at the bottom
  //crud read
  return (
    <div className="cart-section">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p className="empty-cart">Your cart is empty.</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-card">
          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>AUD ${item.price}</p>
          </div>

          <div className="cart-actions">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQty(item.id, e.target.value)}
            />

            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* --- TOTAL PRICE DISPLAY --- */}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: AUD ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}