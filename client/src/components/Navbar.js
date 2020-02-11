import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  toggleCartView = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  };

  render() {
    return (
      <div>
        <div className="navbar">
         <p> <FontAwesomeIcon className="icon" onClick={ this.toggleCartView }  icon={ faShoppingCart } size="2x"/></p>   
        </div>
        <div>
          {this.state.hidden ? null : (
            <div>
            <Cart addedItems={this.props.addedItems}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
    addedItems: PropTypes.array,
    total: PropTypes.number
}


const mapStateToProps = state => ({
  addedItems: state.cart.addedItems,
  total: state.cart.total
});

export default connect(mapStateToProps)(Navbar);
