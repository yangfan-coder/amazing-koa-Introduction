const Koa = require('koa')
const compose = require("koa-compose");
const app = new Koa()


async function func1(ctx, next) {
let stime = new Date().getTime()
  await next()
  let etime = new Date().getTime()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>相应的时间</h1>'
  console.log(`请求的地址： ${ctx.path}, 相应时间：${etime - stime}ms`)
}

async function func2(ctx, next) {
  console.log('开始中间层')
  await next()
  console.log('结束中间层')
}
const all = compose([func1, func2])

app.use(all)

app.listen(3003)

console.log("server is http://localhost:3003/");
