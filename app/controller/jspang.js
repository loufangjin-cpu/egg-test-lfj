// 自定义一个控制器
'use strict';

const { Controller } = require('egg');

class JsPanController extends Controller {
  // ejs 模版引擎, 动态数据渲染
  async index() {
    const { ctx, app } = this;
    //获取Session
    const username= ctx.session.username || ''
    // 计时器
    console.log(ctx.session.counter)
    await ctx.render(
      'jspang.html',{
        // nowTime: app.currentTime(),
        nowTime: app.timeProp,
        id:2021,
        name:'小红',
        age: 18,
        username,
        skills:[
          '泰式按摩',
          '精油搓背',
          '水疗SPA'
        ]
      })
  }
  async getGirls() {
    const { ctx } = this;

    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>杨幂，正在向你走来</h1>');
      }, 5000);
    });
  }
 // http://127.0.0.1:7001/getGirl?name=小红&age=20
 // 自由传参模式
  async getGirl(){
    const {ctx} = this;
    const res = await ctx.service.jspang.getGirl('111');
    ctx.body = res
  }
  // 严格传参模式
  // http://127.0.0.1:7001/getGirl2/小红/20
  async getGirl2(){
    const {ctx} = this;
    let name = ctx.params.name
    let age = ctx.params.age
    ctx.body='大哥你好，我是'+name+',今年'+age+'岁.欢迎光临红浪漫!'
  }
  async add(){
    const ctx = this.ctx
    // 设置有效时间maxAge
    // ctx.cookies.set("user","jspang.com", {
    //   // maxAge:1000 * 2,
    //   httpOnly: false
    // })
    ctx.session.username='jspang'
    ctx.cookies.set("user","中文cookie",{
      encrypt:true
    })
    ctx.body = {
      status:200,
      data:'Cookie添加成功'
    }
  }
  async del(){
    const ctx = this.ctx
    ctx.session.username=null
    ctx.cookies.set("user",null)
    ctx.body = {
      status:200,
      data:'Cookie删除成功'
    }
  }
  async editor(){
    const ctx = this.ctx
    //获取Session
    ctx.session.username='session支持中文'
    ctx.cookies.set("user",'bilibili')
    ctx.body = {
      status:200,
      data:'Cookie修改成功'
    }
  }
  async show(){
    const ctx = this.ctx
    // const user=ctx.cookies.get("user")
    // 获取中文加密cookie
    // 获取Session
    const username = ctx.session.username
    const user=ctx.cookies.get("user",{
      encrypt: true
    })
    console.log(user)
    ctx.body = {
      status:200,
      data:'Cookie显示成功'
    }
  }
  // 上下文扩展
  async newContext(){
    const {ctx} = this;
    const params = ctx.params();
    console.log(params)
    ctx.body = 'newContext';
  }
  // request token 扩展
  async newRequest(){
    const { ctx } = this;
    const token = ctx.request.token
    ctx.body = {
      status:200,
      body: token,
    }
  }
  // response 扩展
  async newResponse(){
    const {ctx} = this;
    ctx.response.token='jspang.com'
    ctx.body = 'newRespose'
  }
  // helper 一些工具的扩展
  async helper(){
    const {ctx} = this;
    ctx.response.token='jspang.com'
    const testBase64 = ctx.helper.base64Encode('jspang.com')
    ctx.body = testBase64
  }
}
module.exports = JsPanController;

