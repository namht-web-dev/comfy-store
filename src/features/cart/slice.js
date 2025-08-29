import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  orderTotal: 0,
  tax: 0,
  shipping: 0,
};

const getInitialStateStorage = () => {
  return JSON.parse(localStorage.getItem("cartState")) || initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialStateStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find(
        (cartItem) => cartItem.cartID === product.cartID
      );
      if (item) item.amount += product.amount;
      else state.cartItems.push(product);
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to the cart!");
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const item = state.cartItems.find(
        (cartItem) => cartItem.cartID === cartID
      );
      state.cartTotal -= item.amount * item.price;
      state.numItemsInCart -= item.amount;
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );

      cartSlice.caseReducers.calculateTotals(state);
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find(
        (cartItem) => cartItem.cartID === cartID
      );

      state.cartTotal += item.price * (amount - item.amount);
      state.numItemsInCart += amount - item.amount;
      item.amount += amount - item.amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    clearAllItems: () => {
      localStorage.setItem("cartState", JSON.stringify(initialState));
      return initialState;
    },
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.cartTotal + state.tax;
      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearAllItems } =
  cartSlice.actions;

export default cartSlice.reducer;
