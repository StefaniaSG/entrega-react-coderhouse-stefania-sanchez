import { Item } from "../Item/Item";
import { ItemCart } from "../ItemCart/ItemCart";

export const ItemList = ({ booksList, template }) => {
  return (
    <>
      {template === "ItemCart"
        ? booksList.map((book) => <ItemCart item={book} key={book.id} />)
        : booksList.map((book) => <Item item={book} key={book.id} />)}
    </>
  );
};
