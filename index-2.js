const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=> {
  
  await next()
  ctx.response.type = 'text/html' // 生命返回的response类型、进行页面展示

  ctx.body = "<h1>hello world</h1>";
})

app.listen(3003)

console.log("server is http://localhost:3003/");

