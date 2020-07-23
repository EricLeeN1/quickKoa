const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'Hello World';
});

app.listen(3000);
console.log('app is statring at port 3000')