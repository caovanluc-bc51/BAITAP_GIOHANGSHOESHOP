import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import products from '../../data/products.json'
export default class ShoesStore extends Component {
  state = {
    productDetail: products[0],
  }
  setStateModal = (shoes) => {
    this.setState({
      productDetail: shoes,
    })
    
  }
  render() {
    return (
      <>
        <ProductList  productsData={products}  setStateModal = {this.setStateModal} />
        <Modal  content={this.state.productDetail} />
      </>
    )
  }
}
