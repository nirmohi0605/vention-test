import React, { Component } from "react";
import Rating from "./Rating";
import { connect } from "react-redux";
import { formatPrice } from '../helpers';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inCart: false
    };
  }

  handleCartToggle = () => {
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
            <img src={this.props.imageURL} alt={this.props.name} />
          </div>
          <div className="button-container">
            <button className="cart-button" onClick={this.handleCartToggle}>
              {this.displayCartButtonText()}
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="card-description">
          <p className="card-title">{this.props.name}</p>
          <p className="price">{formatPrice(this.props.price)}</p>
          <Rating rating={this.props.rating} />
        </div>
      </div>
    );
  }
}

export default connect()(Card);
