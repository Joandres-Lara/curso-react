import mongoose, { Schema } from 'mongoose'

const schemaClients = new Schema({
 name: { type: String, required: 1 },
 lastname1: { type: String, required: 1 },
 lastname2: { type: String, required: 1 },
 direction: { type: String, required: 1 },
 kind: { type: Boolean, required: 1 },
 mail: String,
 phone: Number,
 age: Number
})

export default mongoose.model('Clients', schemaClients)