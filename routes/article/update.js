'use strict'

const { updateOne } = require('../../model')
// const { ObjectId } = require('fastify-mongodb')

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
    const result = await updateOne(this.mongo, request.body, )
    //새로운 결과값을 가져왔었는데 내일 생각해보자

    reply
      .code(404)
      .header('content-type', 'application/json')
      .send()
  })
}
