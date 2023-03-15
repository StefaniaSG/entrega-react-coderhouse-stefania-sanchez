import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import {
  createBuyOrder,
  getProduct,
  updateProduct,
} from "../../utils/functions";
import "./Checkout.css";

export const Checkout = () => {
  const { cart, emptyCart, getTotalPrice } = useCartContext();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, confirmEmail } = data;
    if (email !== confirmEmail) {
      return;
    }
    console.log(data);

    const aux = [...cart];
    const client = data;

    aux.forEach((product) => {
      getProduct(product.id).then((productDB) => {
        productDB.stock -= product.quantity;
        updateProduct(productDB.id, productDB);
      });
    });

    createBuyOrder(client, aux, getTotalPrice(), new Date().toISOString()).then(
      (buyOrder) => {
        toast(
          `Thanks for your purchase, your order ${
            buyOrder.id
          } for a total price of $${new Intl.NumberFormat("de-DE").format(
            getTotalPrice()
          )} was succesful`,
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    );

    emptyCart();
    navigate("/");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-labels">
          <label htmlFor="name">Fullname:</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              pattern: /^[a-zA-Z].*[\s\.]*$/g,
            })}
          />
        </div>
        <div className="form-labels">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
        </div>
        <div className="form-labels">
          <label htmlFor="confirmEmail">Confirm Email:</label>
          <input
            type="email"
            {...register("confirmEmail", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
        </div>
        <div className="form-labels">
          <label htmlFor="dni">DNI:</label>
          <input
            type="number"
            {...register("dni", {
              required: true,
              minLength: 6,
              maxLength: 10,
            })}
          />
        </div>
        <div className="form-labels">
          <label htmlFor="cellphone">Cellphone:</label>
          <input
            type="number"
            {...register("cellphone", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
        </div>
        <div className="form-labels">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            {...register("address", {
              required: true,
              pattern: /^[a-zA-Z0-9\s,'-]*$/,
            })}
          />
        </div>
        <button className="form-button" type="submit">
          Buy now
        </button>
        {errors && (
          <ul className="form-errors">
            {errors.name?.type === "required" && <li>Fullname is required.</li>}
            {errors.email?.type === "required" && <li>Email is required.</li>}
            {errors.confirmEmail}
            {errors.dni?.type === "required" && <li>DNI is required.</li>}
            {errors.cellphone?.type === "required" && (
              <li>Cellphone is required.</li>
            )}
            {errors.address?.type === "required" && (
              <li>Address is required.</li>
            )}
          </ul>
        )}
      </form>
    </>
  );
};
