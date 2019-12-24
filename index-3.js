const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=> {
  ctx.response.body = {
    url: ctx.request.url,
    query: ctx.request.query,
    querystring: ctx.request.querystring
  }
})

app.listen(3003)

console.log("server is http://localhost:3003/");

