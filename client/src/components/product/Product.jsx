import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import productStyles from "./Product.module.css";

const starArray = new Array(5).fill(null);

function Product() {
  return (
    <div className={productStyles.container}>
      <div className={productStyles.description}>
        <p>product x 3rd generation</p>
        <p>$100</p>
        <p>
          {starArray.map((_star, index) => (
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              className={productStyles.star}
            />
          ))}
        </p>
      </div>
      <div className={productStyles.productImage}>
        <img
          src="https://plus.unsplash.com/premium_photo-1680373109883-47a3617e9acd?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bag image"
        />
      </div>
      <div className={productStyles.productBtn}>
        <button>Add Cart</button>
      </div>
    </div>
  );
}

export default Product;
