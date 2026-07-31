/*import { CartSummary } from "../component/CartSummary";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function Cart() {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartItems } = state;
  if (CartItems.length === 0) {
    return (
      <div>
        <h1>Your MegaStore Cart is empty</h1>
        <button onClick={() => navigate("/")}>Go To Home</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div>
          <h1 onClick={() => navigate("/")}>Home &gt;</h1>
          <h2>Cart</h2> 
        </div>
        <h1>YOUR CART</h1>
      </div>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <CartSummary />
      </div>
    </div>
  );
}*/
import CartSummary from "../component/CartSummary";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../component/CartItem";
export default function Cart() {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartItems } = state;

  if (cartItems.length === 0) {
    return (
      <div>
        <h1>Your MegaStore Cart is empty</h1>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div>
          <h1 onClick={() => navigate("/")}>Home &gt;</h1>
          <h2>Cart</h2>
        </div>
        <h1>YOUR CART</h1>
      </div>
      <div>
        <div>
          {cartItems.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
