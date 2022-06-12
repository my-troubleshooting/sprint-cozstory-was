'use strict'
 const { deleteOneMylist, readAllProducts, readOneProduct } = require('../../model')
//  const { ObjectId } = require('fastify-mongodb')

 module.exports = async function (app,opts) {
     app.delete('/:id', async function(request,reply){
         const result= await deleteOneMylist(this.mongo, request.params.id)
         const queryresult = request.query.productid
        

         reply
          .code(200)
          .header('content-type','application/json; charset=utf-8')
          .send({queryresult,value:result.value, ok:result.ok})
     })
 }