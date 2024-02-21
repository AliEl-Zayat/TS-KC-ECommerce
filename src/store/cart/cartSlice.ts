import {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
} from "@store/cart/selectors";
import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  items: { [key: string]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (id in state.items) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
};

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
