# 1、egg 地址 https://jspang.com/article/79#toc1
# 2、目录结构介绍
# 3、Controller控制器的使用（js 逻辑处理的地方）
- Controller 主要使用在三种形式
    - RESTful - 查数据库
    - HTML - 不同的URL 渲染不同的页面
    - 代理服务器 - 代理其他服务器返回
# 4、 Egg.js单元测试介绍
  - 同步单元测试
  - 异步单元测试
# 5、Get请求和参数传递
  - 自由传参数模式 getGirl
  - 严格传参数模式 getGirl2/:name/:age
# 6、POST请求和参数的接收
  - rest clent 插件安装、使用
  - csrf egg自动开启需要关掉
  - 设置post请求 test.http
# 7、Service服务的编写（抽象层，和数据库交互）
  - Controller处理业务js , Service 处理数据交互。
  - 保持业务逻辑的独立性，Service可以被多个Controller调用。
  - 将逻辑和展现分离，更容易编写测试用例。
# 8、View中使用EJS模板引擎 http://127.0.0.1:7001/my
  - 对SEO非常友好，单页应用
  - 中台一次登陆、处处可用的原则、需要服务端渲染
# 9 EJS模板引擎
    - 安装egg-view-ejs
    - egg中插件配置
    - egg中view视图层配置
    - egg中通过路由进行view视图层服务端渲染
# 10 EJS相关语法api的使用
      - <%= 参数 %>
      - EJS循环展示
      - egg中修改默认分隔符把默认%换$, 不咋推荐不语义化
      - ESJ模板引擎中配置和使用静态资源文件
      - 公共代码片段的使用
        - <% include('header.html') %>
        - css\img引用
        - config中前缀更改
# 12 Cookie的增删改查
  - Cookie的配置和加密
    - maxAge 有效时间
    - httpOnly配置
    - 中文设置: encrypt
# 13 Session的相关操作
  - Session增删改查
  - 支持中文配置
  - 选项配置 config.default.js
# 14 Egg.js中间件的编写
  - Egg是对Koa的二次封装
  - middleware 设置中间件
  - 全局使用中间件
  - 指定router中使用中间件
  - 用处比如日志的记录、比如所有页面的Gzip压缩展示、比如全局埋点的使用Egg.js的Extend-application
# 15 Egg.js的扩展Extend-application
  - 注意文件名是固定的 application
  - application 方法扩展和编写
  - application 属性扩展
# 16 Egg.js的扩展Extend-context
  - Context（上下文）的扩展
  - 扩展上下文 http://127.0.0.1:7001/newContext?username=jspang
  - get、post 请求
  - post 请求借助vscode 插件rest clent
# 17 Egg.js的扩展Extend-request
  - Request 对象的扩展
  - 请求头token 扩展
# 18.Egg.js的Extend-response、helper
  - response扩展
  - helper对象扩展
# 19. Egg.js中的定时任务编写
  - 