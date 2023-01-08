'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter()
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/jspam', controller.home.jspam);
  router.get('/testGetGirl', controller.home.testGetGirl);
  router.get('/my', counter, controller.jspang.index);
  router.get('/getGirls', controller.jspang.getGirls);
  router.get('/getGirl', controller.jspang.getGirl);
  router.get('/getGirl2/:name/:age', controller.jspang.getGirl2);
  router.post('/add', controller.jspang.add);
  router.post('/del', controller.jspang.del);
  router.post('/editor', controller.jspang.editor);
  router.post('/show', controller.jspang.show);
  router.get('/newContext',controller.jspang.newContext);
  // post 请求借助vscode 插件rest clent
  // router.post('/newContext',controller.jspang.newContext);
  router.post("/newRequest", controller.jspang.newRequest);
  router.get('/newResponse',controller.jspang.newResponse);
  router.get('/helper',controller.jspang.helper);
};
