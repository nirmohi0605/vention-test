import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import Card from "./Card";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="card-container">
        {this.props.products.map(product => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
    );
  }
}

Home.propTypes = {
  products: PropTypes.array
};
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { fetchProducts })(Home);
