const Koa = require('koa');
const ejs = require('ejs');
const views = require('koa-views');
const app = new Koa();

var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

app.use(async(ctx, next) => {
  await ctx.render('user', {
    user: user
  });

  await next();
});

app.listen(process.argv[2] || 3000);
