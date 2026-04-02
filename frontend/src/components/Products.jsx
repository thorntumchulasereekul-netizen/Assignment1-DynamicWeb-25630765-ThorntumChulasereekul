//Products component that displays the list of products and allows the user to add them to the cart
import airpodsImg from "../assets/airpods.jpg";
import chargerImg from "../assets/charger.jpg";
import headphonesImg from "../assets/headphones.jpg";
import iphoneImg from "../assets/iphone.jpg";
import keyboardImg from "../assets/keyboard.jpg";
import laptopImg from "../assets/laptop.jpg";
import mouseImg from "../assets/mouse.jpg";
import penImg from "../assets/pen.jpg";

//API base URL for the backend
const API_BASE = "http://127.0.0.1:8000";

//Object that maps product names to their corresponding images for display in the products component
const productImages = {
  Laptop: laptopImg,
  Headphones: headphonesImg,
  Keyboard: keyboardImg,
  Mouse: mouseImg,
  Pen: penImg,
  IPhone: iphoneImg,
  Airpods: airpodsImg,
  Charger: chargerImg
};

//Products component that displays the list of products and allows the user to add them to the cart
//crud create
export default function Products({ products, refreshCart }) {
  const addToCart = (id) => {
    fetch(`${API_BASE}/cart`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ product_id: id })
    }).then(refreshCart);
  };

  //return the products component, and display the products with their name, price, and an "Add to Cart" button that calls the addToCart function when clicked
  //crud read
  return (
    <div className="products-section">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={productImages[p.name]} alt={p.name} className="product-img" />

            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="price">AUD ${p.price}</p>

              <button className="add-btn" onClick={() => addToCart(p.id)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}