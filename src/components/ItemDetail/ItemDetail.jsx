import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    addToCart(item, quantity);
  };

  return (
    <>
      <div className="detail-container">
        <img className="detail-img" src={item.img} alt="" />

        <div className="detail-info">
          <h1>{item.title}</h1>
          <p className="detail-text">
            <strong>Author: </strong>
            {item.author}
          </p>
          <p className="detail-text">
            <strong>Genre: </strong>
            {item.genre}
          </p>
          <p className="detail-text">
            <strong>Pages: </strong> {item.pages}
          </p>
          <p className="detail-text">
            <strong>Stock: </strong> {item.stock}
          </p>
          <p className="detail-price">${item.price}</p>

          <ItemCount initialValue={1} stock={item.stock} onAdd={onAdd} />
          <Link to={"/cart"} className="goToCart-button">
            Go to cart
          </Link>
        </div>
      </div>
    </>
  );
};
