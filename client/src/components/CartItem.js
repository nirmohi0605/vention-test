import React from 'react';
import { formatPrice } from '../helpers';

const CartItem = (props) => {
    return (
        <div className="cart-item">
        <img src={props.item.imageURL} alt=""/>
            <span>{props.item.name}</span>
            <span>{formatPrice(props.item.price)}</span>      
        </div>
    )
}

export default CartItem;