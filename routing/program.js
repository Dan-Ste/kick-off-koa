const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
  console.log(ctx.path);
  if (ctx.path === '/') {
    ctx.body = 'hello koa';
  }
  await next();
});

app.use(async(ctx, next) => {
  if (ctx.path === '/404') {
    ctx.body = 'page not found';
  }
  await next();
});

app.use(async(ctx, next) => {
  if (ctx.path === '/500') {
    ctx.body = 'internal server error';
  }
  await next();
});

const port = process.argv[2];
app.listen(port);
console.log(`listening on port ${port}`);
