'use strict';

const { app } = require('egg-mock/bootstrap');

describe('jspang test', () => {
  // 同步单元测试
  it('jspang index', () => {
    return app
      .httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>自定义JsPanController</h1>');
  });

  // 异步单元测试
  it('jspang getGirls', async () => {
    await app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>杨幂，正在向你走来</h1>');
  });
});
