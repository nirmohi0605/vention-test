import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Home extends Component {
 
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container">
        <h3>Home of the flowers</h3>
        { this.props.products.map( product => {
            return (
                <h1>{product.name}</h1>
            )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, { fetchProducts })(Home);
