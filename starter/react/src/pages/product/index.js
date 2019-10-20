import React, { Component } from 'react';
import api from '../../services/api'
import './style.css'

export default class Product extends Component {
  state = {
    product: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const response = await api.get(`/products/${id}`)

    this.setState({product: response.data})
  }

  render() {
    const { product } = this.state

    return (
      <div className="product">
        <h1 className="product__title">{product.title}</h1>
        <p className="product__description">{product.description}</p>

        <p>
          URL: <a className="product__url" href={product.url}> { product.url } </a>
        </p>
      </div>
    )
  }
}