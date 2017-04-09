const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
  ctx.body = ctx.request.is('application/json')
    ? { message: 'hi!' }
    : 'ok';
})

app.listen(process.argv[2] || 3000);
console.log('listening');
