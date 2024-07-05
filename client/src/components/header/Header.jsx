import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import headerStyles from "./Header.module.css";

function Header() {
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
        <a href="#signIn" className={headerStyles.navItem}>
          Sign In
        </a>
        <a href="#shop" className={headerStyles.navItem}>
          Shop
        </a>
        <div className={headerStyles.cart}>
          <button>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={headerStyles.cartLogo}
            />
            <span>0</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
