/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1673145049541_2337';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // CSRF安全策略
  config.security = {
    csrf :{
      enable:false,
    }
  }
  // 配置需要转换成els的文件后缀
  config.view = {
    mapping : {
      ".html":"ejs"
    }
  };

  config.ejs={
    // delimiter: "$"
  }
  config.static = {
    // 静态资源前缀更改
    // prefix:"/assets/"
  }
  config.session = {
    key :"PANG_SESS",   // 设置Key的默认值
    httpOnly:false,      // 设置服务端操作
    // maxAge:1000 * 2 ,   // 设置最大有效时间
    renew: true,        // 页面有访问动作自动刷新session
  }
  return {
    ...config,
    ...userConfig,
  };
};
