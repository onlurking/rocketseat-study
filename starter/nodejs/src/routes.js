const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.getProducts)
routes.get('/products/:id', ProductController.getProductById)
routes.put('/products/:id', ProductController.updateProduct)
routes.post('/products', ProductController.createProduct)
routes.delete('/products/:id', ProductController.deleteProduct)

module.exports = routes
