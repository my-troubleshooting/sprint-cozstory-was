'use strict'

const { deleteOne } = require('../../model')
// const { ObjectId } = require('fastify-mongodb')

module.exports = async function (app, opts) {
  app.delete('/:id', async function (request, reply) {
    const result = await deleteOne(this.mongo, request.params.id)
    

    reply
    .code(204)
    .header('Content-type', 'application/json')
    .send({"value":null,"ok":{}})
  

    reply
    .code(200)
    .header('Content-type', 'application/json')
    .send({
     "value": {},"ok":{}})
  }
   )
  }
   
