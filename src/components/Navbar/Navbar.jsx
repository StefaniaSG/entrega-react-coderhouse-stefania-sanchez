import { CartWidget } from "../CartWidget/CartWidget";
import { Sections } from "./Sections/Sections";
import "./Navbar.css";
import { Logo } from "../Logo/Logo";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="nav-bar">
      <Logo />
      <Sections isNavExpanded={isNavExpanded} />
      <CartWidget />
      <HamburgerMenu
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
    </nav>
  );
};
