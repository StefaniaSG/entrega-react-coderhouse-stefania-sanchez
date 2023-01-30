export const CartWidget = ({ cantidadCarrito }) => {
  return (
    <div className="row align-items-center">
      <span className="col" style={{ color: "white" }}>
        {cantidadCarrito}
      </span>
      <i
        className="col fa-solid fa-cart-shopping"
        style={{ color: "white", cursor: "pointer" }}
      />
    </div>
  );
};
