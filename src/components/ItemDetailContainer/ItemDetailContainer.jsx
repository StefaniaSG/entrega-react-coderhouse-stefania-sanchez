import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataFromDB } from "../../utils/functions";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getDataFromDB("../json/products.json").then((books) => {
      const item = books.find((item) => item.id === parseInt(id));
      setProduct(item);
    });
  }, []);

  return (
    <div>
      <ItemDetail item={product} />
    </div>
  );
};
