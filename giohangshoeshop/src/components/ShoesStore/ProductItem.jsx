import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.element.image} alt='' />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.name}</h4>
          <p className="card-text">{this.props.element.price}$</p>
          <button onClick={() => this.props.setStateModal(this.props.element)} id="cart"
          data-toggle="modal"
          data-target="#shoesDetailPopup" className="bg-dark text-white"
          >
            Add to Card <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
      </div>
    );
  }
}
