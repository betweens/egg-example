module.exports = app => {
  const { router, controller } = app;
  // console.log(controller);
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/add', controller.news.add);
  router.get('/remove', controller.news.remove);
  app.router.post('/form', controller.news.post);
};
