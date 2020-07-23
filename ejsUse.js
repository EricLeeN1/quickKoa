const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

// 加载模版引擎

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

app.use(async (ctx) => {
    let title = 'Hello Eric';
    await ctx.render('index', {
        title
    })
})

app.listen(3000, () => {
    console.log('serve is staring at 3000');
})