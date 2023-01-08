'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi-world-2';
  }
  async jspam() {
    const { ctx } = this;
    ctx.body = '添加一个js块';
  }
  // http://127.0.0.1:7001/testGetGirl?id=2000
  // service 和 controller 连用
  async testGetGirl(){
    const ctx = this.ctx;
    let id = ctx.query.id
    const res = await ctx.service.jspang.getGirl(id)
    ctx.body=res;
  }
}

module.exports = HomeController;
