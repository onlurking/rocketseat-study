Product = require('../models/Product')

async function getProducts(page = 1, limit = 10) {
  const products = await Product.paginate({}, { 
    page,
    limit
  })

  return products
}

async function getProductById(id) {
  const product = await Product.findById(id)

  return product
}

async function updateProduct(id, product_obj) {
    const product = await Product.findByIdAndUpdate(id, product_obj, { 
      new: true
    })

    return product
}

async function deleteProduct(id) {
  await Product.findByIdAndRemove(id)
  return
}

async function createProduct(product_obj) {
  const product = await Product.create(product_obj)

  return product
}

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct
}
