import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <>
      <div className="card-container">
        <img className="card-img" src={`../img/${item.img}`} alt="" />
        <div className="card-info">
          <h1>{item.title}</h1>
          <p>{item.author}</p>
          <h2>${item.price}</h2>
          <Link to={`/item/${item.id}`} className="card-link">
            <button className="card-button">Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};
