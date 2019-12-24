const Koa = require('koa')
const app = new Koa()

app.use(async ctx=> {
  
  ctx.body = "hello world";
})

app.listen(3003)

console.log("server is http://localhost:3003/");

