const Koa = require('koa')
const bodyParser = require("koa-bodyparser"); // 解析post的参数
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/get', (ctx, next) => {
  ctx.body = ctx.request.query
})

router.post('/post', (ctx, next) => {
  ctx.body = ctx.request.body
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3003)

console.log("server is http://localhost:3003/");
