import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';


const CartItem = (props) => {
    return (
        <div className="cart-item">
        <img src={props.item.imageURL} alt=""/>
            <span>{props.item.name}</span>
            <span className="itemPrice">{formatPrice(props.item.price)}</span>      
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}




export default CartItem;