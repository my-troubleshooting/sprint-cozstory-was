'use strict'

const { createOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    const result = await createOne(this.mongo, request.body)
    if(request.body===[]){
    reply
      .code(404)
      .header('Content-type', 'application/json')
      .send({"error":"Not Found"})
    }
    else{
    reply
     .code(201)
     .header('Content-type', 'application/json')
     .send({"id":result.insertedId}) 
    }
    })
  }
