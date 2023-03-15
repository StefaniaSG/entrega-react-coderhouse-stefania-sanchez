import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, emptyCart, getTotalPrice } = useCartContext();

  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <Link className="empty-cart-button" to={"/"}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="full-cart">
          <ItemList booksList={cart} template="ItemCart" />
          <div className="cart-buttons-total">
            <div className="cart-buttons-flex">
              <button
                className="cart-button btn-empty"
                onClick={() => emptyCart()}
              >
                Empty Cart
              </button>
              <Link to={"/"}>
                <button className="cart-button btn-continue">
                  Continue Shopping
                </button>
              </Link>
              <Link to={"/checkout"}>
                <button className="cart-button btn-checkout">Checkout</button>
              </Link>
            </div>
            <p className="cart-total">
              Total:{" "}
              <strong>
                ${new Intl.NumberFormat("de-DE").format(getTotalPrice())}
              </strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
