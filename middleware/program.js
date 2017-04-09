const Koa = require('koa');
const app = new Koa();

app.use(responseTime);
app.use(upperCase);

app.use(async(ctx, next) => {
  await next();

  ctx.body = 'hello koa';
});

async function responseTime(ctx, next) {
  const start = new Date();

  await next();

  ctx.set('X-Response-Time', new Date() - start);
}

async function upperCase(ctx, next) {
  await next();

  if(ctx.body) {
    ctx.body = ctx.body.toUpperCase();
  }
}

app.listen(process.argv[2] || 3000);
