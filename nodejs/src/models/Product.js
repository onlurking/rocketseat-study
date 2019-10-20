const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  url: { type: String, required: true},
  createdAt: { type: Date, default: Date.now }
})

productSchema.plugin(mongoosePaginate)

const Product = mongoose.model('Product', productSchema)

module.exports = Product
