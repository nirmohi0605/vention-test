import { FETCH_PRODUCTS } from "./actionTypes";
import axios from "axios";

export const fetchProducts = () => async dispatch => {
  const res = await axios.get("/api/flowers");

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
