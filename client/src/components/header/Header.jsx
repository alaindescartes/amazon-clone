import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartModal from "../portal/Modals/CartModal";
import Portal from "../portal/Portal";
import headerStyles from "./Header.module.css";
import {Link, NavLink} from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.value);
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.brand}>
        <FontAwesomeIcon icon={faShop} className={headerStyles.logoIcon} />
        <span>E-Shop</span>
      </div>
      <div className={headerStyles.searchBar}>
        <button
          className={`${headerStyles.all} ${headerStyles.dropdownTrigger}`}
        >
          <FontAwesomeIcon icon={faBars} />
          <div className={headerStyles.dropdownMenu}>
            <div className={headerStyles.dropdownItem}>Clothing</div>
            <div className={headerStyles.dropdownItem}>Baby</div>
            <div className={headerStyles.dropdownItem}>Shoes</div>
            <div className={headerStyles.dropdownItem}>Sports</div>
          </div>
        </button>
        <input
          type="text"
          name="product-search"
          placeholder="Search products..."
          aria-label="Search products"
        />
        <button aria-label="Search" className={headerStyles.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <nav className={headerStyles.nav}>
        <Link to="#signIn" className={headerStyles.navItem}>
          Sign In
        </Link>
        <NavLink to={"/products"}
                 className={({isActive})=>
                     (isActive ? headerStyles.active:headerStyles.navItem )}>
          Shop
        </NavLink>
        <div className={headerStyles.cart}>
          <button onClick={() => setOpen(!open)}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={headerStyles.cartLogo}
            />
            <span>{cartQuantity}</span>
          </button>
          {open && (
            <Portal>
              <CartModal open={open} onclose={() => setOpen(false)} />
            </Portal>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
