import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataFromDB } from "../../utils/functions.js";
import { ItemList } from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (idCategory) {
      getDataFromDB("../json/products.json").then((booksList) => {
        const booksListFilter = booksList.filter(
          (f) => f.genre.toLowerCase() === idCategory
        );
        const itemList = ItemList({ booksList: booksListFilter });
        setProducts(itemList);
      });
    } else {
      getDataFromDB("./json/products.json").then((booksList) => {
        const itemList = ItemList({ booksList });
        setProducts(itemList);
      });
    }
  }, [idCategory]);

  return (
    <>
      <div className="prods-container">{products}</div>;
    </>
  );
};
