import mongoose, { Schema } from 'mongoose'

const schemaProduct = new Schema({
 //Nombre del producto
 name: { type: String, required: 1 },
 //Stock inicial del producto
 stock: { type: Number, default: 0 }
})

export default mongoose.model('Products', schemaProduct)