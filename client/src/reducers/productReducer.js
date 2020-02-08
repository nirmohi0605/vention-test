import { FETCH_PRODUCTS } from '../actions/actionTypes';

const productReducerDefaultState = {products: []}
export default (state=productReducerDefaultState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS: 
            return {
                ...state, 
                products: action.payload
            }
        default: 
            return state;
    }
}


