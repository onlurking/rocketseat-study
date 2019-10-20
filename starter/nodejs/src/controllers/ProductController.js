ProductRepository = require('../repositories/ProductRepository')

async function getProducts(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const products = await ProductRepository.getProducts(page, limit)

  return res.json(products)
}

async function getProductById(req, res) {
  const { id } = req.params
  const product = await ProductRepository.getProductById(id)

  return res.json(product)
}

async function updateProduct(req, res) {
  const { id } = req.params
  const { title, description, url} = req.body

  const product = await ProductRepository.updateProduct(id, {
    title,
    description,
    url
  })

  return res.json(product)
}

async function deleteProduct(req, res) {
  const { id } = req.params
  await ProductRepository.deleteProduct(id)

  return res.send()
}

async function createProduct(req, res) {
  const product = await ProductRepository.createProduct(req.body)
  
  return res.json(product)
}

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct
}
