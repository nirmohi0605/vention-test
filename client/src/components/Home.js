import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import Card from './Card';

class Home extends Component {
 
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="card-container">
        { this.props.products.map( product => {
            return (
                <Card key={product._id} product={product}/>
            )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { fetchProducts })(Home);
