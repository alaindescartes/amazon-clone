import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";
import productStyles from "./Product.module.css";

const starArray = new Array(5).fill(null);

function Product({ url, name, price, product }) {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  return (
    <div className={productStyles.container}>
      <div className={productStyles.description}>
        <p>{name}</p>
        <p>${price}</p>
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
        <img src={url} alt="bag image" />
      </div>
      <div className={productStyles.productBtn}>
        <button onClick={() => addToCart(product)}>Add Cart</button>
      </div>
    </div>
  );
}

export default Product;
