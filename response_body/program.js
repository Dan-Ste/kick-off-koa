const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

app.use(async(ctx, next) => {
  if (ctx.path === '/json') {
    ctx.body = {
      foo: 'bar'
    }
  } else {
    await next();
  }
});

app.use(async(ctx, next) => {
  if (ctx.path === '/stream') {
    ctx.body = fs.createReadStream(process.argv[3] || 'test.txt');
  } else {
    await next();
  }
});

app.listen(process.argv[2] || 3000);
console.log('listening');
