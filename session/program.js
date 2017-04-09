const Koa = require('koa');
const app = new Koa();
const session = require('koa-session');

app.keys = ['some secret key', 'and another one'];

app.use(session(app));

app.use(async(ctx, next) => {
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = `${n} views`;

  await next();
});

app.listen(process.argv[2] || 3000);
