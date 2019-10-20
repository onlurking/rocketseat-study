import React, { Component } from 'react';
import './style.css'
import api from '../../services/api'

import { Link } from 'react-router-dom'

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadProducts()
  }

  prevPage = () => {
    const { page } = this.state;

    const pageNumber = page - 1

    this.loadProducts(pageNumber)
  }

  nextPage = () => {
    const {page, productInfo} = this.state;

    if (page === productInfo.pages) return

    const pageNumber = page + 1

    this.loadProducts(pageNumber)

  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)
    const { docs, ...productInfo } = response.data;
    
    this.setState({
      products: docs,
      productInfo,
      page
    })
  }

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product">
        {products.map((product) => (
          <article className="product__item" key="product._id">
            <strong>{product.title}</strong>
            <p className="product__description">{product.description}</p>
            <Link className="product__link" to={`products/${product._id}`}>
              Acessar
            </Link>
          </article>
        ))}

        <div className="action">
            <button disabled={page === 1}
              onClick={this.prevPage}
              className="action__button">
                Previous
            </button>
            <button disabled={page === productInfo.pages}
              onClick={this.nextPage}
              className="action__button">
              Next
            </button>
          </div>
      </div>
    )
  }
}