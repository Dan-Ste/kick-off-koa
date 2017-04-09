const Koa = require('koa');
const app = new Koa();

app.keys = ['secret', 'tatama karaka'];

app.use(async(ctx, next) => {
  let n = ctx.cookies.get('view', {
    signed: true
  }) || 0;

  n++;

  ctx.cookies.set('view', n, {
    signed: true
  });

  ctx.body = `${n} views`;

  await next();
});


app.listen(process.argv[2] || 3000);
