import React, { Component } from "react";
import ProductItem from "./ProductItem";
export default class ProductList extends Component {
  renderShoeList = () => {
    return this.props.productsData.map((element, index) => {
      return (
        <div key={index} className="col-12 col-md-4 col-sm-4 mb-4">
          <ProductItem
            element={element}
            setStateModal={this.props.setStateModal}
          />
        </div>
      );
    });
  };
  render() {
    return (
        <div className="col-12">
          <h2 className="text-center h2">Shoes Shop</h2>
          <div className="row">{this.renderShoeList()}</div>
        </div>
    );
  }
}
