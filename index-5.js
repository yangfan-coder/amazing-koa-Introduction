const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=> {
  ctx.response.status = 200

  if (ctx.request.accepts('json')) {

    ctx.response.type = 'json'
    ctx.response.body = {data:"hello world"}

  } else if (ctx.request.accepts('html')) {

    ctx.response.type = 'html'
    ctx.response.body = "<p>hello world</p>"
  }
  else {
    ctx.response.type = 'text'
    ctx.response.body = "hello world"
  }
})

app.listen(3003)

console.log("server is http://localhost:3003/");

