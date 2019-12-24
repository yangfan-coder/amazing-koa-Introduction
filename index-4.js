const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=> {
  if (ctx.request.method === 'POST'){

  } else if (ctx.request.method === 'GET') {

    if (ctx.request.path !== '/') {
      ctx.response.type ='text/html';
      ctx.response.body = '<a href="/">返回</a>'
    }else {
       ctx.response.body = 'hello world'
    }
  }
})

app.listen(3003)

console.log("server is http://localhost:3003/");

