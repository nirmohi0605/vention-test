import React, { Component } from "react";
import Rating from "./Rating";
import { connect } from 'react-redux';

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
      <div className="card-container">
        {this.state.inCart && <div className="in-cart">Added to Cart</div>}
        <div className="card-img">
          <img src={this.props.imageURL} alt="" />
        </div>
        <h3 className="card-title">{this.props.name}</h3>
        <p>{this.state.inCart}</p>
        <p className="price">{this.props.price}</p>
        <Rating rating={this.props.rating} />
        <button className="cart-button" onClick={this.handleCartToggle}>
          {this.displayCartButtonText()}
        </button>
      </div>
    );
  }
}


export default connect()(Card);
