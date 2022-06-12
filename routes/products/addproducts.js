'use strict'

const { createOneNewProduct } = require('../../model')
// const { ObjectId } = require('fastify-mongodb')

module.exports = async function (app, opts){
    app.post('/', async function(request, reply){
        const result= await createOneNewProduct(this.mongo, request.body)
        console.log(request.body)
        reply
         .code(201)
         .header('Content-Type', 'application/json; charset=utf-8')
         .send({id: result.insertedId.toString()})
    })
}