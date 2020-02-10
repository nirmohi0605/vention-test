import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const cartReducerDefaultState = {
  addedItems: [],
  total: 0
};

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedItems: [...state.addedItems, action.payload],
        total: state.total + action.payload.price
      };

    case REMOVE_FROM_CART:
      const filteredState = state.addedItems.filter(item => {
        return item._id !== action.payload._id;
      });
      return {
        ...state,
        addedItems: filteredState,
        total: state.total - action.payload.price
      };
    default:
      return state;
  }
};

export default cartReducer;
