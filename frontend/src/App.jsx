import { useEffect, useState } from "react";
import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";

//API base URL for the backend
const API_BASE = "http://localhost:8000";

function App() {
  //Store products and cart in state that can be change
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //useEffect for load the components when the page is loaded, and load the products and cart from the backend
  const loadProducts = () => {
    fetch(`${API_BASE}/products`)
      .then(res => res.json())
      .then(setProducts);
  };

  const loadCart = () => {
    fetch(`${API_BASE}/cart`)
      .then(res => res.json())
      .then(setCart);
  };

  //call the components when the page is loaded
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  /*return the products and cart components, and pass the products and cart as props, 
  and also pass the loadCart function as a prop to refresh the cart when an item is added or removed*/
  return (
    <div className="container">
      <h1>Sydney Tech Shopping Centre</h1>
      <div className="grid">
        <Products products={products} refreshCart={loadCart} />
        <Cart cart={cart} refreshCart={loadCart} />
      </div>
    </div>
  );
}

export default App;