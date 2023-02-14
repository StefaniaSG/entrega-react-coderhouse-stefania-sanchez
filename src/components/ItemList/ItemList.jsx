import { Item } from "../Item/Item";

export const ItemList = ({ booksList }) => {
  return (
    <>
      {booksList.map((book) => (
        <Item item={book} key={book.id} />
      ))}
    </>
  );
};
