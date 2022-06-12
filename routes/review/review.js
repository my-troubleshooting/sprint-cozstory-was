    'use strict'

    const { readAllreView, readOnereView } = require('../../model')

    module.exports = async function (app, opts) {
      app.get('/', async function (request, reply) {
        const result = await readAllreView(this.mongo)
      if(result===[]){
        reply
        .code(404)
        .header('Content-type','application/json; charset=utf-8')
        .send({error:"Not Found"})
      }
      else{
        reply
          .code(200)
          .header('Content-type','application/json; charset=utf-8')
          .send(result)
      }
    }
    )
    app.get('/review?=productid', async function (request, reply) {
      const result = await readOnereView(this.mongo,request.params.id)
      if(result!==request.params.id){
        reply
        .cdoe(404)
        .header('Content-Type','application/json; charset=utf-8')
        .send({"error":"Not Found"})
      }
      else{
      reply
      .code(200)
      .header('Content-Type','application/json; charset=utf-8')
      .send(result)
      }
    }
    )
    }