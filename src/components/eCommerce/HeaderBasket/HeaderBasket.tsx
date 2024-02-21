import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector, clearCart } from "@store/cart/cartSlice";
import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

const HeaderBasket = () => {
  const dispatch = useAppDispatch();
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  const onCartClickHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className={basketContainer} onClick={onCartClickHandler}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
