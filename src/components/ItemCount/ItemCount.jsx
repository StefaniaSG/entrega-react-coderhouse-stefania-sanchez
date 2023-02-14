import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ initialValue, stock }) => {
  const [counter, setCounter] = useState(initialValue);

  const add = () => counter < stock && setCounter(counter + 1);
  const substract = () => counter > initialValue && setCounter(counter - 1);

  return (
    <>
      <div className="counter">
        <div className="counter-actions">
          <button className="counter-substract" onClick={() => substract()}>
            -
          </button>
          <h2>{counter}</h2>
          <button className="counter-add" onClick={() => add()}>
            +
          </button>
        </div>
        <button className="counter-button">Add to Cart</button>
      </div>
    </>
  );
};
