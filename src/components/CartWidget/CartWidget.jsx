export const CartWidget = ({ cantidadCarrito }) => {
  return (
    <div>
      <span style={{ color: "#03989e" }}>{cantidadCarrito}</span>
      <i
        className="col fa-solid fa-cart-shopping"
        style={{ color: "#03989e", cursor: "pointer", fontSize: "20px" }}
      />
    </div>
  );
};
