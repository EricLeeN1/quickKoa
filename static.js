const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();
// 访问静态资源文件
const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)))

app.use(async (ctx) => {
    ctx.body = 'hello world'
})

app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})