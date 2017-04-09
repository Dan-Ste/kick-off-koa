const Koa = require('koa');
const session = require('koa-session');
const Router = require('koa-router');
const koaBody = require('koa-body')();
const app = new Koa();
const router = new Router();

const FORM = '<form action="/login" method="POST">\
    <input name="username" type="text" value="username">\
    <input name="password" type="password" placeholder="The password is \'password\'">\
    <button type="submit">Submit</button>\
  </form>';

app.keys = ['secret key 1', 'secret key 2'];

app.use(session(app));

router.get('/', (ctx, next) => {
  if (ctx.session.authenticated) {
    ctx.body = 'hello world';
  } else {
    ctx.status = 401;
  }
});

router.get('/login', (ctx, next) => {
  ctx.body = FORM;
});

router.post('/login', koaBody, (ctx, next) => {
  const body = ctx.request.body;

  if (body.username !== 'username' ||
    body.password !== 'password') ctx.throw('username and passwrod required', 400);

  ctx.session.authenticated = true;
  ctx.redirect('/');
});

router.get('/logout', (ctx, next) => {
  ctx.session.authenticated = false;
  ctx.redirect('/login');
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.argv[2] || 3000);
console.log('app listening');
