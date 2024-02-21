import { Button, Spinner } from "react-bootstrap";
import { TProduct } from "@customTypes/product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  addToCart,
  itemQuantityAvailabilityCheckingSelector,
} from "@store/cart/cartSlice";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";
const { product, productImg, maximumNotice } = styles;

const Product = ({ id, img, title, price, max }: TProduct) => {
  const dispatch = useAppDispatch();
  const { quantityReachedToMax, currentRemainingQuantity } = useAppSelector(
    (state) => {
      return itemQuantityAvailabilityCheckingSelector(
        state.cart.items[id],
        max
      );
    }
  );

  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (!isBtnDisabled) return;

    const debounced = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounced);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{`${price} EGP`}</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "You reached to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        onClick={addToCartHandler}
        variant="info"
        style={{ color: "white" }}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> <p>Loading ...</p>
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
