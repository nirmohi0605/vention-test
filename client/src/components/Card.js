import React, { Component } from 'react';
import Rating from './Rating';
import { connect } from 'react-redux';
import { formatPrice } from '../helpers';
import { addToCart, removeFromCart } from '../actions/cartActions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inCart: false
    };
  }

  handleCartToggle = () => {
    if(!this.state.inCart) {
      this.props.addToCart(this.props.product);
    } else {
      this.props.removeFromCart(this.props.product);
    }
    this.setState(prevState => ({
      inCart: !prevState.inCart
    }));

  };

  displayCartButtonText = () => {
    return this.state.inCart ? "Remove from Cart" : "Add to Cart";
  };

  render() {
    return (
      <div className="card">
        <div className="card-img-container">
          {this.state.inCart && (
            <div className="cart-status">
              <p className="cart-status-text">In Cart</p>
            </div>
          )}
          <div className="card-img">
            <img src={this.props.product.imageURL} alt={this.props.product.name} />
          </div>
          <div className="button-container">
            <button className="cart-button" onClick={this.handleCartToggle}>
              {this.displayCartButtonText()}
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="card-description">
          <p className="card-title">{this.props.product.name}</p>
          <p className="price">{formatPrice(this.props.product.price)}</p>
          <Rating rating={this.props.product.rating} />
        </div>
      </div>
    );
  }
}


export default connect(null, { addToCart, removeFromCart })(Card);
