  'use strict'

  // const { ObjectId } = require('fastify-mongodb')
      const { readAllProducts, readOneProduct, readAllcategoryProduct } = require('../../model')


  module.exports = async function (app, opts) {
      app.get('/', async function (request, reply) {
        const result = await readAllProducts(this.mongo)
      if(result===[]){
          reply
          .code(404)
          .header('content-type', 'application/json; charset=utf-8')
          .send({error:"Not Found"})
      }
        reply
      .code(200)
      .header('content-type','application/json; charset=utf-8', 'content-encoding; gzip')
      .send(result)
      }
      )

      app.get('/:id', async function (request, reply) {
          const result = await readOneProduct(this.mongo,request.params.id)
      
      if(request.params.id!==request.params.id){
        reply
        .code(404)
        .header('Content-type','application/json; charset=utf-8')
        .send({error:"Not Found"})
      }
      else{
        reply
        .code(200)
        .header('content-type','application/json; charset=utf-8', 'content-encoding; gzip')
        .send(result)}
      })
      
    app.get('/?productid', async function (request, reply) {
      const result = await readAllcategoryProduct(this.mongo,request.params.category)
        reply
        .code(200)
        .header('content-type', 'application/json; charset=utf-8', 'content-encoding; gzip')
        .send(request.query.category)
        if(request.query.category==request.params.category){
            reply
            .code(404)
            .header('content-type', 'application/json; charset=utf-8' )
            .send({error:"Not Found"})
        }
  }    
  )
}