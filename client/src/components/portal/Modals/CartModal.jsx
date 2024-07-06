import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/slices/cartSlice";
import cartModalStyles from "./cartModal.module.css";

function CartModal({ open, onclose }) {
  const productArray = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const removeFromCart = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  if (open) {
    return (
      <div className={cartModalStyles.overlay}>
        <button className={cartModalStyles.closeBtn} onClick={onclose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={cartModalStyles.productContainer}>
          {productArray.map((item) => (
            <div className={cartModalStyles.container}>
              {productArray.length > 0 ? (
                <>
                  {" "}
                  <div className={cartModalStyles.imgContainer}>
                    <img src={item.imageUrl} alt="products image" />
                  </div>
                  <div className={cartModalStyles.other}>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className={cartModalStyles.cartBtn}>
                    <button onClick={() => addToCart(item)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => removeFromCart(item)}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                </>
              ) : undefined}
            </div>
          ))}
          {productArray.length === 0 && (
            <p
              style={{ color: "black", textAlign: "center", fontWeight: "900" }}
            >
              Cart is empty
            </p>
          )}

          {productArray.length > 0 && (
            <p
              className={cartModalStyles.price}
              style={{ color: "black", textAlign: "center", fontWeight: "900" }}
            >
              Total: ${total}
            </p>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CartModal;
