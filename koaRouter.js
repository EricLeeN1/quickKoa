const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
// 父级路由
const router = new Router(
    // {
    //     prefix: '/eric'
    // }
);

let homeRoute = new Router();
homeRoute
    .get('/son1', async (ctx) => {
        ctx.body = 'home son1 pages'
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'home todo pages'
    })


let myRoute = new Router();
myRoute
    .get('/son1', async (ctx) => {
        ctx.body = 'my son1 pages'
    })
    .get('/todo', async (ctx) => {
        ctx.body = 'my todo pages'
    })

router
    .get('/', (ctx, next) => {
        ctx.body = 'Hello Eric';
    })
    .get('/todo', (ctx, next) => {
        ctx.body = "Todo page"
    });


router.use('/home', homeRoute.routes(), homeRoute.allowedMethods())
router.use('/my', myRoute.routes(), myRoute.allowedMethods())
app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
// .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('start at port 3000');
})