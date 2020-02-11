import React from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';


const Cart = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {props.addedItems.length ? (
          props.addedItems.map(item => <CartItem key={item._id} item={item} />)
        ) : (
          <span className="empty-message"> Your cart is empty </span>
        )}
        <div className="total">
            <span className="totalText">Total</span>
            <span className="totalAmount">{ formatPrice(props.total) }</span>
        </div>
      </div>
    </div>
  );
};


Cart.propTypes = {
    addedItems: PropTypes.array,
    total: PropTypes.number
}

const mapStateToProps = state => {
    return {
        total: state.cart.total
    }
}

export default connect(mapStateToProps)(Cart);
