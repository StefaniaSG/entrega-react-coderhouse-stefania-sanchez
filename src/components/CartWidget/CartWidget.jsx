import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";
export const CartWidget = () => {
  const { getItemQuantity } = useCartContext();

  return (
    <div style={{ position: "relative" }}>
      {getItemQuantity() > 0 && (
        <span className="cart-quantity">{getItemQuantity()}</span>
      )}

      <Link to={"/cart"}>
        <i
          className="col fa-solid fa-cart-shopping"
          style={{
            color: "#03989e",
            cursor: "pointer",
            fontSize: "20px",
          }}
        />
      </Link>
    </div>
  );
};
