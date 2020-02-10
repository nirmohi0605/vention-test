import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = item => async dispatch => {
  dispatch({ type: ADD_TO_CART, payload: item });
};

export const removeFromCart = item => async dispatch => {
  dispatch({ type: REMOVE_FROM_CART, payload: item });
};
