const Koa = require('koa');
const app = new Koa();
const port = process.argv[2];

app.use(function* () {
  this.body = 'hello koa';
});

app.listen(port);
