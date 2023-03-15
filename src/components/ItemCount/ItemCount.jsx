import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({
  initialValue,
  stock,
  onAdd,
  cartItem,
  inCart = false,
}) => {
  const [counter, setCounter] = useState(initialValue);

  const add = () => counter < stock && setCounter(counter + 1);
  const substract = () => counter > initialValue && setCounter(counter - 1);

  return (
    <>
      <div className={inCart ? "counter-cart" : "counter"}>
        <div className={inCart ? "counter-cart" : "counter-actions"}>
          <button
            className={inCart ? "counter-cart-substract" : "counter-substract"}
            onClick={() => substract()}
          >
            -
          </button>
          <h2>{counter}</h2>
          <button
            className={inCart ? "counter-cart-add" : "counter-add"}
            onClick={() => add()}
          >
            +
          </button>
        </div>
        <button
          className={inCart ? "counter-cart-button" : "counter-button"}
          onClick={() => onAdd(counter)}
        >
          {cartItem ? "Update" : "Add to Cart"}
        </button>
      </div>
    </>
  );
};
