import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/functions";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(id).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <div>
      <ItemDetail item={product} />
    </div>
  );
};
