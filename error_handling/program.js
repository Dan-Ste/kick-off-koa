const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
  try {
    await next();
  } catch(e) {
    ctx.status = 500;
    ctx.body = 'internal server error';
  }
});

app.use(async(ctx, next) => {
  if (ctx.path === '/error') throw new Error('ooops');

  ctx.body = 'OK';
  await next();
});

app.listen(process.argv[2] || 3000);
