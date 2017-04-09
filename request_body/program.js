const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body')();
const app = new Koa();
const router = new Router();

router.post('/', koaBody, (ctx, next) => {
  const reqBody = ctx.request.body;

  if (!reqBody.name) ctx.throw('name required', 400);

  ctx.body = reqBody.name.toUpperCase();
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.argv[2] || 3000);
console.log('server listening');
