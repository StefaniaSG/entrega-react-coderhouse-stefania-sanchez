import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Checkout = () => {
  let navigate = useNavigate();
  const dataForm = useRef();
  const consultForm = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Thank you for your purchase!");
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={consultForm} ref={dataForm}>
        <div>
          <label htmlFor="name">Fullname:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input type="number" name="dni" />
        </div>
        <div>
          <label htmlFor="cellphone">Cellphone:</label>
          <input type="number" name="cellphone" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" />
        </div>
        <button type="submit">Buy now</button>
      </form>
    </div>
  );
};
