import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemCart.css";

export const ItemCart = ({ item }) => {
  const { removeFromCart, addToCart } = useCartContext();
  const onAdd = (quantity) => {
    addToCart(item, quantity);
  };

  return (
    <div className="cart-items">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>

      <p className="itemCart-price">
        <span>Price:</span>
        <span>
          <strong>${item.price}</strong>
        </span>
      </p>
      <ItemCount
        initialValue={item.quantity}
        stock={item.stock}
        onAdd={onAdd}
        cartItem={true}
        inCart={true}
      />
      <p className="itemCart-subtotal">
        <span>Subtotal:</span>
        <span>
          <strong>${item.price * item.quantity}</strong>
        </span>
      </p>
      <button
        onClick={() => {
          removeFromCart(item.id);
        }}
        className="itemCart-button"
      >
        <i className="fa-solid fa-trash itemCart-icon"></i>
      </button>
    </div>
  );
};
