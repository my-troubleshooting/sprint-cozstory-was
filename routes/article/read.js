  'use strict'

  const { readAll, readOne } = require('../../model')

  module.exports = async function (app, opts) {
    app.get('/', async function (request, reply) {
      const result = await readAll(this.mongo)
      if(result===[]){
      reply
        .code(404)
        .header('content-type', 'application/json')
        .send({error:"Not Found"})
      }
      else{
        reply
        .code(200)
        .header('content-type', 'application/json')
        .send(result)
      }
    })

    app.get('/:id', async function (request, reply) {
      const result = await readOne(this.mongo, request.params.id)
      
      if(result===null){
        reply
        .code(404)
        .header('content-type', 'application/json')
        .send({error:"Not Found"})}
        reply
        .code(200)
        .header('content-type', 'application/json')
        .send(result)
    
      }
    )
  }
