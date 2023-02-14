import "./Logo.css";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <img className="logo" src={"../img/biblioddity-logo.png"} alt="" />
        </Link>
      </div>
    </>
  );
};
