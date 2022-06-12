  const { ObjectId } = require('fastify-mongodb')

  module.exports = {
    readAll: async (mongo) => {
      const collection = mongo.db.collection(process.env.COLLECTION_NAME)
      const result = await collection.find({}).toArray()
      return result
    },
    readOne: async (mongo, id) => {
      const collection = mongo.db.collection(process.env.COLLECTION_NAME)
      const result = await collection.findOne({
        _id: ObjectId(id)
      })
      return result
    },
    createOne: async (mongo, body) => {
      const collection = mongo.db.collection(process.env.COLLECTION_NAME)

      const result = await collection.insertOne(body)
      return result
    },
    updateOne: async (mongo, id, body) => {
      const collection = mongo.db.collection(process.env.COLLECTION_NAME)

      const result = await collection.findOneAndUpdate({
        _id: ObjectId(id)
      }, {
        $set: body
      })
      return result
    },
    deleteOne: async (mongo, id) => {
      const collection = mongo.db.collection(process.env.COLLECTION_NAME)

      const result = await collection.findOneAndDelete({
        _id: ObjectId(id)
      })
      return result
    },
    readAllProducts: async (mongo) => {
      const collection = mongo.db.collection("cozstory")
      const result = await collection.find({}).toArray()
      return result
      
    },
    readOneProduct: async (mongo, id) => {
      const collection = mongo.db.collection(process.env.COLLECTION_NAME)
      const result = await collection.findOne({
        _id: ObjectId(id)
      })
      return result
    },
    readAllcategoryProduct: async (mongo, category) => {
      const collection = mongo.db.collection(process.env.COLLECTION_NAME)
      const result = await collection.findAll({
        category: ObjectId(category)
      }).toArray()
      return result
    },
    readAllreView: async (mongo) => {
      const collection = mongo.db.collection("review")
      const result = await collection.find({}).toArray()
      return result
      
    },
    readOnereView: async (mongo, id) => {
      const collection = mongo.db.collection("review")
      const result = await collection.findOne({
        _id: ObjectId(id)
      })
      return result
    },
    createOneNewProduct: async (mongo, body) => {
      const collection= mongo.db.collection("products")
      const result = await collection.insertOne(body)
      return result
    },
    deleteOneMylist: async (mongo, id) => {
      const collection = mongo.db.collection("mylist")
      const result = await collection.findOneAndDelete({
        _id: ObjectId(id)
      })
      return result
    }
  }
  
