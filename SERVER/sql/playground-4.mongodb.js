/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'config';
const collection = 'blog_articles';

// The current database to use.
use(database);

/*
 Navicat Premium Data Transfer

 Source Server         : ZHOUYI
 Source Server Type    : MongoDB
 Source Server Version : 40406
 Source Host           : 114.117.164.181:27017
 Source Schema         : ZHOUYIDB

 Target Server Type    : MongoDB
 Target Server Version : 40406
 File Encoding         : 65001

 Date: 09/08/2023 17:44:46
*/


// ----------------------------
// Collection structure for blog_articles
// ----------------------------
db.getCollection("blog_articles").drop();
db.createCollection("blog_articles");

// ----------------------------
// Documents of blog_articles
// ----------------------------
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f7d797ad53aea60d4fd0"),
    title: "【代码片段】JS对在文档DOM指定位置插入元素",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "在距离所需高度最近的元素前面插入新元素",
    content: "``` js\nconst insertionHeight = 3.78 * 290;\n    const newParagraph = document.createElement('p');\n    newParagraph.style.height=\"50px\";\n    newParagraph.style.backgroundColor=\"red\";\n\n    const container = document.body; // 假设插入元素在文档的顶层元素中\n\n    // 遍历文档中所有的元素\n    let closestElement = container;\n    let distanceToClosest = Math.abs(insertionHeight - closestElement.offsetTop);\n    for (const element of container.getElementsByTagName('*')) {\n        const distance = Math.abs(insertionHeight - element.offsetTop);\n        if (distance < distanceToClosest) {\n            closestElement = element;\n            distanceToClosest = distance;\n        }\n    }\n    // 在距离所需高度最近的元素前面插入新元素\n    closestElement.parentNode.insertBefore(newParagraph, closestElement);\n```",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "随记",
    viewNum: NumberInt("1"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: true,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:20:07.838Z"),
    updatedAt: ISODate("2023-08-09T08:06:47.604Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f7fe97ad53aea60d4fdc"),
    title: "ghelper谷歌浏览器安装，支付宝支付方式",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "我们安装ghelper插件后，发现购买VIP并没有支付宝支付",
    content: "[ghelper官方下载地址](https://ghelper.net/)\n\n[google浏览器下载离线安装包](https://www.google.com/intl/zh-CN/chrome/browser/?standalone=1)\n\n我们安装ghelper插件后，发现购买VIP并没有支付宝支付，如下图\n![image.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=e644e76698d172ab48e161ddd17d7828.png&&mimetype=image/png)\n点击option 可购买会员 。重点来了选择支付网关时，新用户没法选择支付宝支付，不是很方便。经过和老用户的沟通，发现只是隐藏了页面。没有设置权限。将当前浏览器上的网址替换一下后缀 **options.html?/pay/1/alipay** 其中1代表第一个套餐一个月的，以此类推， 点击就进入到了支付宝支付页面。\n\n![image.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=f808c3364f0bc65e1df48aae58686fa8.png&&mimetype=image/png)\n\n3个月的会员是有手机上网的代理权限。\n\n然后扫码支付即可\n\n![image.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=2857482c70c992993bca925f0dbf8d17.png&&mimetype=image/png)\n\n祝上网愉快",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("1"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: true,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:20:46.098Z"),
    updatedAt: ISODate("2023-08-09T02:31:02.643Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f82497ad53aea60d4fe8"),
    title: "Express实现定时发送邮件",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "在开发中我们有时候需要**每隔 一段时间发送一次电子邮件**，或者**在某个特定的时间进行发送邮件**，\n无需手动去操作，基于这样的情况下我们需要用到了定时任务，一般可以写个定时器，来完成相应的需求，在 node.js 中自已实现也非常容易，接下来要介绍的是node-schedule来完成定时任务",
    content: "在开发中我们有时候需要**每隔 一段时间发送一次电子邮件**，或者**在某个特定的时间进行发送邮件**，\n无需手动去操作，基于这样的情况下我们需要用到了定时任务，一般可以写个定时器，来完成相应的需求，在 node.js 中自已实现也非常容易，接下来要介绍的是node-schedule来完成定时任务\n\n#### 用express.js实现 每个星期三中午12点 发送邮件给某个用户\n\n1.安装第三方库 Node Schedule、nodemailer\n\n`npm i -s node-schedule nodemailer`\n\n2.新建一个 TaskScheduler 定时任务类\n\n``` js\n// 引入 node-schedule 模块\nconst schedule = require('node-schedule');\n\n/*\n* TODO:编写 Cron 表达式时，有五个占位符可以使用，分别表示分钟、小时、日期、月份和星期几。\n*      每个占位符可以使用特定的值、值范围、逗号分隔的值列表和通配符等等\n*\n*       * * * * * *\n*       | | | | | |\n*       | | | | | day of week\n*       | | | | month\n*       | | | day of month\n*       | | hour\n*       | minute\n*       second ( optional )\n*\n*      示例 Cron 表达式：\n*           每分钟的第30秒触发： 30 * * * * *\n*           每小时的1分30秒触发 ：30 1 * * * *\n*           每天的凌晨1点1分30秒触发 ：30 1 1 * * *\n*           每月的1日1点1分30秒触发 ：30 1 1 1 * *\n*           每年的1月1日1点1分30秒触发 ：30 1 1 1 1 *\n*           每周1的1点1分30秒触发 ：30 1 1 * * 1\n* */\n\n// 创建一个任务调度器类\nclass TaskScheduler {\n    // 构造函数，接受 cron 表达式和要执行的任务作为参数\n    constructor(cronExpression, task) {\n        // 将传入的 cron 表达式和任务保存为成员变量\n        this.cronExpression = cronExpression;\n        this.task = task;\n        // 初始化 job 为 null\n        this.job = null;\n    }\n\n    // 启动任务\n    start() {\n        // 如果当前没有正在运行的任务，则创建新的任务\n        if (!this.job) {\n            this.job = schedule.scheduleJob(this.cronExpression, this.task);\n            console.log(`定时任务启动： ${this.cronExpression}`);\n        }\n    }\n\n    // 停止任务\n    stop() {\n        // 如果当前有正在运行的任务，则取消任务并将 job 设为 null\n        if (this.job) {\n            this.job.cancel();\n            console.log(`定时任务停止： ${this.cronExpression}`);\n            this.job = null;\n        }\n    }\n}\n\n// 导出任务调度器类\nmodule.exports = TaskScheduler;\n\n```\n3.创建一个发送邮件的方法\n``` js\nconst nodemailer = require(\"nodemailer\");\n/**\n * 邮箱发送\n *\n * @param  {string}  to 对方邮箱\n * @param  {string}  content 发送内容\n */\n\n// 创建Nodemailer传输器 SMTP 或者 其他 运输机制\nlet transporter = nodemailer.createTransport(\n    {\n        service: 'QQ', // 使用内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/\n        port: 465, // SMTP 端口\n        secureConnection: true, // 使用 SSL\n        auth: {\n            user: '1840354092@qq.com', // 发送方邮箱的账号\n            pass: '******', // 邮箱授权密码\n        }\n    }\n);\n\nexports.send = (to, content) => {\n    return new Promise((resolve, reject) => {\n        transporter.sendMail({\n            from: `\"ZY.API\" <1840354092@qq.com>`, // 发送方邮箱的账号\n            to: to, // 邮箱接受者的账号\n            subject: \"Welcome to ZY.API\", // Subject line\n            // text: '\"MG'Blog ?\"', // 文本内容\n            html: `\n        <img src=\"http://www.zhouyi.run:3001/api/v1/files/preview?p=pexels-photo-276452.jpeg&&mimetype=image/jpeg\" alt=\"\"  style=\"height:auto;display:block;\" />\n        <p >??? <a href=\"http://www.zhouyi.run/#/\">ZY.API</a></p>\n        <p style=\"font-weight: bold\">${content}</p>\n        <p ><a style=\"font-size: 18px;font-weight: bolder\" href=\"http://www.zhouyi.run/#/\">确认</a></p>\n        <p style=\"text-indent: 2em;\">祝您工作顺利，心想事成</p>`\n        }, (error, info) => {\n            if (error) {\n                reject(error)\n            }\n            resolve(info)\n        });\n    })\n}\n\n```\n4.创建一个 **每个星期三中午12点 发送邮件**的任务实例并且引入发送邮件的方法\n``` js\nconst TaskScheduler = require('./TaskScheduler')\nconst {send} = require('../../utils/utils.mailer')\n\n\nconst task = async function () {\n    await send('1840354092@qq.com', '每个星期三中午12点 发送邮件')\n    return console.log('允许定时任务每个星期三中午12点 发送邮件...' + new Date().getMinutes() + \"-\" + new Date().getSeconds());\n};\n\n// 创建一个 每个星期三中午12点 发送邮件\nmodule.exports = new TaskScheduler('0 0 12 ? * WED', task);\n\n```\n5.路由使用该定时发送邮件类\n``` js\n/**\n *@author ZY\n *@date 2023/4/10\n *@Description:任务相关的接口\n */\n\nconst express = require('express');\nconst router = express.Router();\nconst SendEmail = require('../../scheduler/task/SendEmail')\n\n/****************************************************************************/\n\n\n/**\n * 开始发送邮件定时任务\n * @route GET /v1/task/startSendEmail\n * @group 定时任务 - 定时任务相关\n * @returns {object} 200 - {\"status\": 1,\"message\": \"登录成功.\",\"data\": {...},\"time\": 1680598858753}\n * @returns {Error}  default - Unexpected error\n */\n\nrouter.get('/startSendEmail', function (req, res) {\n    //用户的定时任务开始\n    SendEmail.start();\n    res.send('用户的定时任务开始!');\n});\n\n/**\n * 停止发送邮件定时任务\n * @route GET /v1/task/stopSendEmail\n * @group 定时任务 - 定时任务相关\n * @returns {object} 200 - {\"status\": 1,\"message\": \"登录成功.\",\"data\": {...},\"time\": 1680598858753}\n * @returns {Error}  default - Unexpected error\n */\n\nrouter.get('/stopSendEmail', function (req, res) {\n    SendEmail.stop();\n    res.send('用户的定时任务开始!');\n});\n\nmodule.exports = router;\n\n```\n6.到这里差不多就可以开始定时任务和停止定时任务了，我这里是设置30秒发一次邮件\n\n![image.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=d37170f4f9c53a151212801e496e48eb.png&&mimetype=image/png)\n![e747763d0a54354115cc9b00fda0f34.jpg](http://zhouyi.run:5222/api/public/admin/getFiles?id=170145f7aca5138d97f2d4e8d5f35b17.jpg&&mimetype=image/jpeg)\n\n✨[狂点这里查看完整项目代码](https://gitee.com/Z568_568/node.mongodb/blob/master/routes/v1/task.js)\n",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("1"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: true,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:21:24.045Z"),
    updatedAt: ISODate("2023-08-09T08:13:01.56Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f84897ad53aea60d4ff4"),
    title: "学习关于JavaScript常用的8大设计模式",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "一些常见的 JavaScript 设计模式示例代码。这些示例代码只是用来说明设计模式的基本思想和实现方式，实际应用中可能需要更多的定制和细节处理。",
    content: "### JavaScript 常用的8大设计模式有\n\n1. **工厂模式**：工厂模式是一种创建对象的模式，可以通过一个共同的接口创建不同类型的对象，隐藏了对象的创建过程。\n2. **单例模式**：单例模式是一种只允许实例化一次的对象模式，可以通过一个全局访问点来访问它。\n3. **建造者模式**：建造者模式是一种创建复杂对象的模式，通过将对象的构建过程分解为多个步骤，逐步构建对象。\n4. **适配器模式**：适配器模式是一种将不兼容的接口转换为兼容接口的模式，通过适配器可以使得不同的对象能够相互协作。\n5. **观察者模式**：观察者模式是一种定义一对多的依赖关系，当一个对象发生改变时，所有依赖于它的对象都会得到通知并自动更新的模式。\n6. **装饰者模式**：装饰者模式是一种在不改变对象自身的基础上，动态地扩展对象的功能的模式，通过装饰器可以给对象添加新的功能。\n7. **策略模式**：策略模式是一种定义一系列算法，并将其封装在独立的策略类中，使得它们可以相互替换的模式，通过策略模式可以动态改变对象的行为。\n8. **命令模式**：命令模式是一种将请求封装成对象，从而使得请求可以被保存、传递、取消、排队或记录的模式，通过命令模式可以将发出请求的对象和执行请求的对象解耦。\n\n#### JavaScript 设计模式的示例代码：\n\n1. 工厂模式：\n\n``` js\n// 定义一个工厂函数\nfunction createPerson(name, age) {\n  const person = {};\n  person.name = name;\n  person.age = age;\n  person.sayName = function() {\n    console.log(this.name);\n  };\n  return person;\n}\n\n// 使用工厂函数创建对象\nconst person1 = createPerson('Alice', 20);\nconst person2 = createPerson('Bob', 30);\n\nperson1.sayName(); // Alice\nperson2.sayName(); // Bob\n\n```\n2. 单例模式:\n\n``` js\n// 定义一个单例对象\nconst logger = {\n  log: function(message) {\n    console.log(message);\n  }\n};\n\n// 使用单例对象记录日志\nlogger.log('This is a log message.');\n\n```\n\n3.建造者模式：\n\n``` js\n// 定义一个建造者类\nclass PersonBuilder {\n  constructor() {\n    this.person = {};\n  }\n  setName(name) {\n    this.person.name = name;\n    return this;\n  }\n  setAge(age) {\n    this.person.age = age;\n    return this;\n  }\n  build() {\n    return this.person;\n  }\n}\n\n// 使用建造者创建对象\nconst personBuilder = new PersonBuilder();\nconst person = personBuilder.setName('Alice').setAge(20).build();\nconsole.log(person); // { name: 'Alice', age: 20 }\n\n```\n\n4. 适配器模式：\n\n``` js\n// 定义一个不兼容的接口\nclass IncompatibleApi {\n  fetchData() {\n    console.log('Fetching data from the incompatible API.');\n  }\n}\n\n// 定义一个适配器类，将不兼容的接口转换为兼容接口\nclass Adapter {\n  constructor(incompatibleApi) {\n    this.incompatibleApi = incompatibleApi;\n  }\n  fetch() {\n    this.incompatibleApi.fetchData();\n  }\n}\n\n// 使用适配器调用兼容接口\nconst incompatibleApi = new IncompatibleApi();\nconst adapter = new Adapter(incompatibleApi);\nadapter.fetch(); // Fetching data from the incompatible API.\n\n```\n5. 观察者模式：\n\n``` js\n// 定义一个主题对象\nclass Subject {\n  constructor() {\n    this.observers = [];\n  }\n  addObserver(observer) {\n    this.observers.push(observer);\n  }\n  removeObserver(observer) {\n    const index = this.observers.indexOf(observer);\n    if (index !== -1) {\n      this.observers.splice(index, 1);\n    }\n  }\n  notify(data) {\n    this.observers.forEach(observer => {\n      observer.update(data);\n    });\n  }\n}\n\n// 定义一个观察者对象\nclass Observer {\n  constructor(name) {\n    this.name = name;\n  }\n  update(data) {\n    console.log(`${this.name} received data: ${data}`);\n  }\n}\n\n// 使用主题对象通知观察者对象\nconst subject = new Subject();\nconst observer1 = new Observer('Alice');\nconst observer2 = new Observer('Bob');\nsubject.addObserver(observer1);\nsubject.addObserver(observer2);\nsubject.notify('Hello world!'); // Alice received data: Hello world! Bob received data: Hello world!\n\n```\n6. 装饰者模式：\n\n``` js\n// 定义一个被装饰的对象\nclass Component {\n  operation() {\n    console.log('Component)\n    }\n}\n// 定义一个装饰器类，增强被装饰的对象\nclass Decorator {\n   constructor(component) {\n      this.component = component;\n   }\noperation() {\n    this.component.operation();\n    console.log('Decorator added new behavior.');\n   }\n}\n\n// 使用装饰器增强被装饰的对象\nconst component = new Component();\nconst decorator = new Decorator(component);\ndecorator.operation(); // Component, Decorator added new behavior.\n\n```\n7. 命令模式\n\n在命令模式中，有四个主要的角色：\n\n1.  **命令（Command）**：封装了请求的所有信息，包括命令的接收者、具体的操作方法等。通常定义一个接口或抽象类，由具体命令类实现。\n2.  **具体命令（Concrete Command）**：实现了命令接口或抽象类，并封装了接收者的操作方法。当接收者需要执行命令时，就调用具体命令的execute()方法。\n3.  **调用者（Invoker）**：负责将命令对象传递给接收者，并在需要时调用命令的execute()方法。调用者不需要知道具体的命令，只需要知道如何调用命令对象。\n4.  **接收者（Receiver）**：具体执行命令的对象。当命令对象的execute()方法被调用时，接收者就会执行相应的操作。\n\n``` js\n// 定义命令接口\nclass Command {\n  execute() {}\n}\n\n// 定义具体命令类\nclass ConcreteCommand extends Command {\n  constructor(receiver) {\n    super();\n    this.receiver = receiver;\n  }\n\n  execute() {\n    this.receiver.action();\n  }\n}\n\n// 定义接收者\nclass Receiver {\n  action() {\n    console.log(\"接收者执行操作。\");\n  }\n}\n\n// 定义调用者\nclass Invoker {\n  setCommand(command) {\n    this.command = command;\n  }\n\n  executeCommand() {\n    this.command.execute();\n  }\n}\n\n// 创建接收者、命令和调用者对象\nconst receiver = new Receiver();\nconst command = new ConcreteCommand(receiver);\nconst invoker = new Invoker();\n\n// 将命令传递给调用者，并执行命令\ninvoker.setCommand(command);\ninvoker.executeCommand(); // 输出：接收者执行操作。\n\n```\n\n以上是一些常见的 JavaScript 设计模式示例代码。这些示例代码只是用来说明设计模式的基本思想和实现方式，实际应用中可能需要更多的定制和细节处理。",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:22:00.484Z"),
    updatedAt: ISODate("2023-08-09T02:22:00.484Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f86797ad53aea60d5000"),
    title: "用CSS一分钟写出打字动画",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "模拟编辑器，或者输入框中文字啪啦啪啦输入的效果",
    content: "![动画.gif](http://zhouyi.run:5222/api/public/admin/getFiles?id=9eeafdbb92e0e7db12aa74cf1f7b10b9.gif&&mimetype=image/gif)\n\n模拟编辑器，或者输入框中文字啪啦啪啦输入的效果\n\n #### HTML很简单，如下：\n``` html\n<p class=\"typing\">没有空白的人生，永远都不会有心灵的宁静和精神的愉悦。</p>\n```\n #### CSS代码：\n``` css\n<style>\n      .typing {\n            width: 26em;\n            white-space: nowrap;\n            border-right: 2px solid transparent;\n            animation: typing 3.5s steps(26, end), blink-caret .75s step-end infinite;\n            overflow: hidden;\n        }\n        /* 打印效果 */\n        @keyframes typing {\n            from { width: 0; }\n            to { width: 26em; }\n        }\n        /* 光标闪啊闪 */\n        @keyframes blink-caret {\n            from, to { box-shadow: 1px 0 0 0 transparent; }\n            50% { box-shadow: 1px 0 0 0; }\n        }\n</style>\n\n```\n",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:22:31.847Z"),
    updatedAt: ISODate("2023-08-09T02:22:31.847Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f88197ad53aea60d500c"),
    title: "开发轻量级REST API样板 基于Node.js、MongoDB 通过Mongoose驱动",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "基于 Node.js、Express.js 和 MongoDB 通过Mongoose驱动进行 REST API 开发的轻量级样板。\n  集成了Swagger UI、JWT、session、发送邮箱验证、日志管理、统一的预定义状态码响应格式等，对于为前端平台构建纯净的Web API非常有用。",
    content: "\n\n# ZY.Node.Mongodb \n\n- [https://gitee.com/Z568_568/node.mongodb.git](https://gitee.com/Z568_568/node.mongodb.git)\n\n- [https://github.com/ZHYI-source/ZY.Node.Mongodb.git](https://github.com/ZHYI-source/ZY.Node.Mongodb.git)\n\n#### 项目介绍\n\n---\n- 基于 Node.js、Express.js 和 MongoDB 通过Mongoose驱动进行 REST API 开发的轻量级样板。\n  集成了Swagger UI、JWT、session、发送邮箱验证、日志管理、统一的预定义状态码响应格式等，对于为前端平台构建纯净的Web API非常有用。\n\n- 该项目我尝试做出轻松维护代码结构的项目样板，因为任何初学者也可以采用该流程并开始构建API。 \n\n- 项目开放，可以提出建议、错误的issues。\n\n\n#### 项目特点\n\n---\n\n- 轻量级Node.js项目提供Restful API\n- 数据库采用 Mongodb, 通过Mongoose驱动。\n- CRUD操作示例\n- 跨域处理\n- 日志管理\n- 具有恰当的状态代码的预定义响应结构\n- 全局错误处理\n- 增加express-validator请求参数校验\n- jwt验证 用户权限中间件分离\n- 基本身份验证（采用bcrypt单向Hash加密算法加密密码进行注册/登录）\n- Token生成和校验请求头的authorization \n- 集成swagger-ui\n- 增加邮件验证码通知\n- session 验证码校验\n- 采用jest 接口单元测试\n\n\n#### 如何获得并运行项目：\n\n---\n\n> 首先确保您系统中安装了[Mongodb](http://www.mongodb.org/)，和[Nodejs](http://nodejs.org/ \"Nodejs\")，一起准备完善之后。按照如下操作。\n> 有的同学启动会报错可能是依赖包的版本问题需要注意\n> 我的环境配置供参考 \n> - Node.js 14.18.1+ \n> - MongoDB 5.1+\n\n**1，clone代码**\n\n >  `git clone https://gitee.com/Z568_568/node.mongodb.git`\n \n**2，安装依赖**\n\n >  `npm install`\n\n**3，启动程序**\n\n >  `开发环境：npm run dev  基于 nodemon 热更新`\n >  `生产环境：npm run start`\n\n**4，启动成功示例**\n\n![项目启动成功](http://zhouyi.run:5222/api/public/admin/getFiles?id=d58e97e65aa5e1996749944d5122c85d.png&&mimetype=image/png)\n\n\n#### 如何增加新的model\n\n---\n只需在 `/models/v1/mapping/` 中创建一个新文件，\n然后在控制器`/controllers/v1/`中创建一个对应新模型的新控制器的并使用。\n\n#### 如何增加新的路由router\n\n---\n只需在 `/routes/v1/` 中创建一个新文件，并且引入它对应的controllers进行使用，routes下面的文件 将被 `mount-routes`插件自动解析并以文件名作为api根路径，\n开发环境下会打印在终端上：\n\n![路由列表](http://zhouyi.run:5222/api/public/admin/getFiles?id=11e4189aa229fb74f9ef115c68b10fc8.png&&mimetype=image/png)\n#### 如何增加新的控制器\n\n---\n只需在 `/controllers/v1/` 中创建一个新文件即可，并且引入相关模型进行使用\n\n\n#### 如何理解内置的登录注册逻辑\n\n```js\n\n/*\n* TODO: 注册登录大概逻辑：\n*       1.用户注册 - 用户信息入库 - 发送验证码 - 校验验证码\n*                                   |\n*                           验证码发送失败、验证码失效或者校验失败 - 重新发送或输入验证码 - 校验验证码\n*   *\n*       2.用户登录 -（账号、密码、验证状态都校验通过）- 发Token\n*                       |\n*                 验证状态不通过 - 重新校验验证码/重发验证码 - 校验验证码 - 发Token\n* */\n\n```\n\n#### 项目结构\n\n---\n\n```sh\n.\n├── app.js                  //入口文件\n├── package.json            //依赖配置文件\n├── .env.development        //开发环境配置\n├── .env.production         //生产环境配置\n├── config                  //项目配置\n│   ├── db.config.js\n│   ├── swagger.config.js\n│   └── ...\n├── controllers             //控制模块（业务处理）\n│   └── v1\n│       ├── UserController.js\n│       └── ...\n├── models                  //模型模块（建表）\n│   └── v1\n│       ├── user.test.js        /模型统一导出\n│       └── mapping\n│           ├──UserModel.js\n│           └── ...\n├── routes                  //路由（配置实际API地址路径）\n│     └── v1\n│         ├── user.test.js\n│         ├── user.js\n│         └── ...\n├── db                      //mongodb数据库连接\n│   ├── user.test.js              \n│   └── ...\n├── middlewares             //中间件\n│   ├── jwt.js\n│   ├── permissions.js\n│   ├── session.js\n│   └── ...\n├── logs                    //日志\n│   ├── info.log\n│   ├── error.log\n│   └── ...\n└── utils                   //辅助工具\n    ├── utils.apiResponse.js\n    ├── utils.mailer.js.js\n    └── ...\n```\n\n#### 关于作者\n\n---\n创建和维护由\n - [@ZY_GITEE](https://gitee.com/Z568_568) \n - [@ZY_GITHUB](https://github.com/ZHYI-source)\n - 想咨询其他或合作请发我邮箱1840354092@qq.com\n - 到我主页留言[http://www.zhouyi.run](http://www.zhouyi.run/#/About)\n - 我的博客站点[http://blog.zhouyi.run](http://blog.zhouyi.run/#/)\n\n#### License\n\n---\n\n[MIT](https://choosealicense.com/licenses/mit/)\n\n```lc\nMIT License\n\nCopyright (c) 2023 周Y\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\n```\n\n\n \n",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("5"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: true,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:22:57.537Z"),
    updatedAt: ISODate("2023-08-09T09:22:27.299Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f89a97ad53aea60d5018"),
    title: "CSS图片水波纹效果",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "CSS图片水波纹效果",
    content: "效果：\n\n![动画.gif](http://zhouyi.run:5222/api/public/admin/getFiles?id=ae6b1db1ed25bc38c266e1449120e87b.gif&&mimetype=image/gif)\n\n\n代码：\n``` js\n    <svg style=\"display: none\">\n      <filter id=\"custom\">\n        <feTurbulence type=\"turbulence\" baseFrequency=\"0.01 0.003\">\n          <animate\n              attributeName=\"baseFrequency\"\n              from=\"0.01 0.003\"\n              to=\"0.01 0.05\"\n              dur=\"8s\"\n              repeatCount=\"indefinite\"\n          ></animate>\n        </feTurbulence>\n        <feDisplacementMap in=\"SourceGraphic\" scale=\"20\"></feDisplacementMap>\n      </filter>\n    </svg>\n    <img height=\"300\" style=\"filter: url(#custom)\" src=\"http://www.zhouyi.run:3001/api/v1/files/preview?p=%E5%A3%81%E7%BA%B8-4.jpg&&mimetype=image/jpeg\">\n```",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:23:22.111Z"),
    updatedAt: ISODate("2023-08-09T02:23:22.111Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f8cf97ad53aea60d5024"),
    title: "【Git报错解决】：OpenSSL SSL_read: Connection was reset，errno 10054",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "OpenSSL SSL_read: Connection was reset，errno 10054",
    content: "![image.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=352f25bd8789265728b8bb1bc3e10c0c.png&amp;&amp;mimetype=image/png)\n\n\n解决办法：\n- `git config --global http.sslVerify \"false\"`\n-  执行完上面那句后重新 进行`git`操作即可",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:24:15.415Z"),
    updatedAt: ISODate("2023-08-09T02:24:15.415Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f8ef97ad53aea60d5030"),
    title: "【即时通讯 Socket.io】vue+express.js+Socket.io简易聊天室",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "[Socket.IO](https://socket.io/zh-CN/docs/v4/) 不是 WebSocket实现。Socket.io库也有用到WebSocket协议，但是对不支持WebSocket的浏览器会回退到HTTP轮询，还提供自动重连，是一个更高级的库。",
    content: "\n![动画.gif](http://zhouyi.run:5222/api/public/admin/getFiles?id=a77d888418c8d43873414547f69ce2b9.gif&&mimetype=image/gif)\n\n### Socket.io介绍\n\n [Socket.IO](https://socket.io/zh-CN/docs/v4/) 不是 WebSocket实现。Socket.io库也有用到WebSocket协议，但是对不支持WebSocket的浏览器会回退到HTTP轮询，还提供自动重连，是一个更高级的库。\n\n### ① Express.js 安装 Socket.io\n> 至少需要 Node.js 10，不再支持旧版本。\n`npm install socket.io`\n\n#### 使用HTTP服务器 初始化 \n> [Socket.IO 实例的 options 配置](https://socket.io/zh-CN/docs/v4/server-options/#)\n\n``` js\nconst { createServer } = require(\"http\");\nconst { Server } = require(\"socket.io\");\n\nconst httpServer = createServer();\nconst io = new Server(httpServer, { /* options */ });\n\nio.on(\"connection\", (socket) => {\n  // ...\n});\n//3002端口作为ws使用 在这里使用app.listen(3002)将不起作用，因为它会创建一个新的 HTTP 服务器。\nhttpServer.listen(3002);  \n```\n\n### ② Vue客户端 安装 Socket.io及配置\n`npm i vue-socket.io -S `            \n`npm i socket.io-client -S`\n\n#### 使用socket.io-client连接\n``` js\n// main.js\nimport Vue from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport store from './store'\nimport VueSocketIO from 'vue-socket.io';\nimport SocketIO from 'socket.io-client'\n\nVue.use(new VueSocketIO({\n  debug: true, // debug调试，生产建议关闭\n  connection: SocketIO('ws://localhost:3002')\n}))\n\nnew Vue({\n  // 这里为全局监听socket事件消息，监听函数这里只写了一点，其实很有很多事件。\n  // 也可以在组件内单独监听\n  sockets: {\n    connecting() {\n      console.log('正在连接')\n    },\n    disconnect() {\n      console.log(\"Socket 断开\");\n    },\n    connect_failed() {\n      cosnole.log('连接失败')\n    },\n    connect() {\n      console.log('socket connected')\n    }\n  },\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n```\n#### 组件内使用\n``` js\n<template>\n  <div class=\"about\">\n    <h1>WEB Sockt.io</h1>\n    <div class=\"main\">\n      <el-row>\n        <el-col :span=\"16\">\n          <el-input id='input' v-model=\"input\"></el-input>\n        </el-col>\n        <el-col :span=\"8\">\n          <el-button type=\"primary\" @click=\"sendMsg\">Send</el-button>\n        </el-col>\n      </el-row>\n      <div id=\"content\"></div>\n    </div>\n  </div>\n</template>\n<script>\n  const ENTER = 0\n  const LEAVE = 1\n  export default {\n    data() {\n      return {\n        input: '',\n        content: '',\n        message: ''\n      }\n    },\n    sockets: {\n      connect() {\n        this.$message({\n          message: '连接成功！！！',\n          type: 'success'\n        })\n      },\n      disconnect() {\n        this.$message({\n          message: '连接断开！！！',\n          type: 'error'\n        })\n      },\n      broadcast_msg(data) {\n        console.log('接收到服务器数据，',data)\n        var content = document.querySelector('#content')\n        var div = document.createElement('div')\n        div.innerText = `${data.msg} ---${data.time}`\n        if (data.type === ENTER) {\n          div.style.color = 'green'\n        } else if (data.type === LEAVE) {\n          div.style.color = 'red'\n        } else {\n          div.style.color = 'blue'\n        }\n        content.appendChild(div)\n      }\n    },\n    methods: {\n      sendMsg() {\n        this.$socket.emit('send_msg', this.input)\n      }\n    },\n   mounted() {\n     this.$socket.open()\n   },\n    destroyed() {\n      console.log('destroyed，')\n    },\n    beforeDestroy() {\n      this.$socket.close()\n    },\n    created() {\n      //连接\n      this.$socket.open()\n      // 查看socket是否连接成功\n      // this.$socket.connected()\n    }\n  }\n</script>\n<style lang=\"scss\" scoped>\n  .about {\n    padding: 20px;\n    .main {\n      width: 500px;\n    }\n    #input {\n      width: 10px;\n    }\n    #content {\n      margin-top: 15px;\n      text-align: left;\n    }\n  }\n</style>\n\n```\n#### Express服务端完整代码\n``` js\n// app.js\nconst http = require('http')\nconst server = http.createServer(app)\nserver.listen(3002) // 这是ws端口和普通接口用的端口是：app.listen(3000)要区分开\nrequire('./utils/utils.socket').listen(server)\n```\n\n``` js\n// utils.socket.js\nconst {Server} = require(\"socket.io\");\nconst chalk = require('chalk')\nexports.listen = function (server) {\n    const io = new Server(server, {\n        cors: {\n            origin: '*'\n        }\n    });\n\n    const ENTER = 0\n    const LEAVE = 1\n    const MESSAGE = 2\n    let count = 0\n    io.on('connection', socket => {\n        console.log(chalk.blue('用户已连接'))\n        count++\n        let user = `用户${count}`\n        io.sockets.emit('broadcast_msg',\n            {\n                type: ENTER,\n                msg: `${user}加入群聊`,\n                time: new Date().toLocaleString()\n            }\n        )\n        socket.on('send_msg', (data) => {\n            console.log(`收到客户端的消息：${data}`)\n            io.sockets.emit('broadcast_msg', {\n                type: MESSAGE,\n                msg: `${user}:${data}`,\n                time: new Date().toLocaleString()\n            })\n        })\n        socket.on('disconnect', () => {\n            console.log(chalk.red('用户已离开'))\n            io.sockets.emit('broadcast_msg', {\n                type: LEAVE,\n                msg: `${user}离开了群聊`,\n                time: new Date().toLocaleString()\n            })\n            count--\n        });\n    });\n    return io.listen(server);\n};\n```\n#### vue客户端启动项目控制台就可以看到连接ws成功\n\n![image.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=e4809d6d5e4227240d9ec5ac705a3bbe.png&&mimetype=image/png)\n\n#### Express服务端启动连接成功信息\n![image.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=6cdd9746e237131eb33c08a4cd40f4b8.png&&mimetype=image/png)",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:24:47.562Z"),
    updatedAt: ISODate("2023-08-09T02:24:47.562Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f90b97ad53aea60d503c"),
    title: "【已解决】Xshell 和 Xftp 打不开？提示更新到最新版？",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "【已解决】Xshell 和 Xftp 打不开？提示更新到最新版？",
    content: "![xshell](https://www.xshell.com/wp-content/uploads/2020/11/xsh_w_h175-2-600x134.png)\n#### Xshell 和 Xftp 提示：\n![1.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=e08d934905a8dbff94547adcfc337ad1.png&&mimetype=image/png)\n#### 解决办法：无需重新下载，跟着下面操作即可\n\n![2.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=d13dc00b98571f52dfc0e0fdc62dc6fa.png&&mimetype=image/png)\n![3.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=7f18276bb65c57257ff471606de29640.png&&mimetype=image/png)\n![4.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=102d3b79fd41d3d1a922f193185dd7a4.png&&mimetype=image/png)\n![5.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=f4d2ab58a6ec1703d4ea62cafe6be9f8.png&&mimetype=image/png)\n![6.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=0b0ab7e98fd99874b1f49e47952907b5.png&&mimetype=image/png)\n![7.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=ddd97ae23e29cc5537db52af2a650ff8.png&&mimetype=image/png)\n![8.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=5c62c1f18992e440afb98ccd6f239c57.png&&mimetype=image/png)\n![9.png](http://zhouyi.run:5222/api/public/admin/getFiles?id=fe03f2d68ea5211156461a1da0f26399.png&&mimetype=image/png)",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:25:15.712Z"),
    updatedAt: ISODate("2023-08-09T02:25:15.712Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f97197ad53aea60d5055"),
    title: "uniapp小程序使用高德地图api实现路线规划",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "路线规划常用于出行路线的提前预览，我们提供4种类型的路线规划，分别为：驾车、步行、公交和骑行，满足各种的出行场景。",
    content: "## 路线规划\n### 简介\n\n路线规划常用于出行路线的提前预览，我们提供4种类型的路线规划，分别为：驾车、步行、公交和骑行，满足各种的出行场景。\n[高德开放平台](https://lbs.amap.com/)\n\n### 本例是驾车路线规划功能和位置选择地图api:chooseLocation \n------------------------------------\n示例：\n<img width=250 src='http://zhouyi.run:5222/api/public/admin/getFiles?id=92ac0beae9681273fa4cbd769075431e.gif&&mimetype=image/gif'>\n\n1、在页面的 js 文件中，实例化 AMapWX 对象，请求进行驾车路线规划。\n\n首先，引入 amap-wx.js 文件（amap-wx.js  从[相关下载](https://lbs.amap.com/api/wx/download)页面下载的 zip 文件解压后得到）。\n``` js\nimport amapFile from \"@/libs/amap-wx.js\";\n```\n然后在 onLoad 实例化 AMapWX 对象\n``` js\nonLoad() {\n\t this.myAmapFunT = new amapFile.AMapWX({\n\t\tkey: 你申请的key\n\t })\n\t},\n```\n最后生成请求进行驾车路线规划数据\n``` js\n/**\n\t\t\t *@author ZY\n\t\t\t *@date 2023/1/9\n\t\t\t *@Description:生成规划路线\n\t\t\t *@param {string} start 开始位置\n\t\t\t *@param {string} end 结束位置\n\t\t\t *@param {number} strategy 10 默认多策略 策略 https://lbs.amap.com/api/webservice/guide/api/direction#driving\n\t\t\t *\n\t\t\t 10，返回结果会躲避拥堵，路程较短，尽量缩短时间，与高德地图的默认策略也就是不进行任何勾选一致\n\t\t\t * 4，躲避拥堵，但是可能会存在绕路的情况，耗时可能较长\n\t\t\t 2，距离优先，仅走距离最短的路线，但是可能存在穿越小路/小区的情况\n\t\t\t */\n\t\t\tgetPlanningRoute(start, end, strategy = 10) {\n\t\t\t\tlet that = this\n\t\t\t\tuni.showLoading({\n\t\t\t\t\ttitle: '加载中'\n\t\t\t\t});\n\t\t\t\tthat.myAmapFunT.getDrivingRoute({\n\t\t\t\t\torigin: start,\n\t\t\t\t\tdestination: end,\n\t\t\t\t\tstrategy: strategy, //备选方案\n\t\t\t\t\tsuccess: function(data) {\n\t\t\t\t\t\t// console.log('所有路径',data)\n\t\t\t\t\t\tif (data.paths && data.paths[0] && data.paths[0].steps) {\n\t\t\t\t\t\t\t// 默认 10 会 对返回多条路径的方案  按照时间短的\n\t\t\t\t\t\t\tlet goodRouter = data.paths.sort((a, b) => {\n\t\t\t\t\t\t\t\treturn a.duration - b.duration\n\t\t\t\t\t\t\t})[0]\n\n\t\t\t\t\t\t\tthat.distance = (goodRouter.distance * 0.001).toFixed(2) + '公里'\n\t\t\t\t\t\t\tthat.duration = '大约' + (goodRouter.duration / 60).toFixed(2) + '分钟'\n\n\t\t\t\t\t\t\tlet steps = goodRouter.steps\n\t\t\t\t\t\t\tlet points = []\n\t\t\t\t\t\t\tfor (var i = 0; i < steps.length; i++) {\n\t\t\t\t\t\t\t\tvar poLen = steps[i].polyline.split(';');\n\t\t\t\t\t\t\t\tfor (var j = 0; j < poLen.length; j++) {\n\t\t\t\t\t\t\t\t\tpoints.push({\n\t\t\t\t\t\t\t\t\t\tlongitude: parseFloat(poLen[j].split(',')[0]),\n\t\t\t\t\t\t\t\t\t\tlatitude: parseFloat(poLen[j].split(',')[1])\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tthat.polyline = [{\n\t\t\t\t\t\t\t\tpoints: points,\n\t\t\t\t\t\t\t\tcolor: strategy === 10 ? '#0ee532' : strategy === 2 ? '#0742d9' :\n\t\t\t\t\t\t\t\t\t'#ee6b06',\n\t\t\t\t\t\t\t\twidth: 8,\n\t\t\t\t\t\t\t}]\n\t\t\t\t\t\t}\n\t\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\t},\n\t\t\t\t\tfail: function(info) { //失败回调\n\t\t\t\t\t\tconsole.log('路线规划失败')\n\t\t\t\t\t\tconsole.log(info)\n\t\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\t\ttitle: '路线规划失败',\n\t\t\t\t\t\t\ticon: 'error'\n\t\t\t\t\t\t});\n\t\t\t\t\t},\n\t\t\t\t})\n\t\t\t},\n```\n2.完整源码组件\n``` js\n<template>\n\t<view class=\"content\">\n\t\t<view class=\"back-button\" @click=\"toBack\">\n\t\t\t<image src=\"http://img.wisdomtaxi.com/toBack.png\" style=\"width: 100%; height: 100%;\"></image>\n\t\t</view>\n\t\t<map class=\"order-map\" :latitude=\"startPoint.latitude\" :longitude=\"startPoint.longitude\" show-location\n\t\t\t:polyline=\"polyline\" @markertap=\"markertap\" :key=\"polyline.length + new Date().getTime()\"\n\t\t\t:markers=\"markers\">\n\t\t\t<cover-view slot=\"callout\">\n\t\t\t\t<block v-for=\"(item,index) in markers\" :key=\"index\">\n\t\t\t\t\t<cover-view class=\"customCallout\" :marker-id=\"item.id\">\n\t\t\t\t\t\t<cover-view class=\"customCalloutContent\">\n\t\t\t\t\t\t\t{{item.title}}\n\t\t\t\t\t\t</cover-view>\n\t\t\t\t\t</cover-view>\n\t\t\t\t</block>\n\t\t\t</cover-view>\n\t\t</map>\n\t\t<view class=\"order-box\">\n\t\t\t<view class=\"search-start\" v-if=\"endPoint.address\">\n\t\t\t\t<view class=\"custom-style\" v-for=\"item in btnList\" :key=\"item.value\"\n\t\t\t\t\t:class=\"{active:flag === item.value}\" @click=\"selectRouteType(item.value)\">\n\t\t\t\t\t{{item.name}}\n\t\t\t\t</view>\n\t\t\t</view>\n\t\t\t<view class=\"search-start\" v-if=\"distance || duration\">\n\t\t\t\t<u-icon name=\"file-text-fill\" color=\"#FFA500\" size=\"17\"></u-icon>\n\t\t\t\t<view class=\"start-name\">\n\t\t\t\t\t距离：{{distance}} 时间：{{duration}}\n\t\t\t\t</view>\n\t\t\t</view>\n\t\t\t<view class=\"search-start\">\n\t\t\t\t<u-icon name=\"map-fill\" color=\"#33a63b\" size=\"17\"></u-icon>\n\t\t\t\t<view class=\"start-name\">\n\t\t\t\t\t您将在 <text style=\"color: #33a63b\">{{startPoint.name | fmtEndAddr}}</text> 上车\n\t\t\t\t</view>\n\t\t\t</view>\n\t\t\t<view class=\"search-start\" v-if=\"endPoint.name\">\n\t\t\t\t<u-icon name=\"map-fill\" color=\"#ee642b\" size=\"17\"></u-icon>\n\t\t\t\t<view class=\"start-name\">\n\t\t\t\t\t{{endPoint.name|fmtEndAddr}}\n\t\t\t\t</view>\n\t\t\t</view>\n\t\t\t<view class=\"search-box\" @click=\"openChooseLocation\">\n\t\t\t\t<u-icon name=\"search\" color=\"#ffa602\" size=\"23\"></u-icon>\n\t\t\t\t<view class=\"search-placeholder\">\n\t\t\t\t\t请选择目的地\n\t\t\t\t</view>\n\t\t\t</view>\n\t\t\t<view v-if=\"endPoint.name\" @click=\"submitToDriver\" class=\"send-btn\">\n\t\t\t\t发送给司机\n\t\t\t</view>\n\t\t</view>\n\t</view>\n</template>\n\n<script>\n\timport uniIcons from \"@/components/uni-icons/uni-icons.vue\";\n\timport amapFile from \"@/libs/amap-wx.js\";\n\texport default {\n\t\tcomponents: {\n\t\t\tuniIcons\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tmarkers: [],\n\t\t\t\ttripInfo: {},\n\t\t\t\tpolyline: [],\n\t\t\t\tstartPoint: {\n\t\t\t\t\tlatitude: 26.56045894387685, //纬度\n\t\t\t\t\tlongitude: 106.68005128661751, //经度\n\t\t\t\t\tname: '',\n\t\t\t\t\taddress: ''\n\t\t\t\t},\n\t\t\t\tendPoint: {},\n\t\t\t\tmyAmapFunT: null,\n\t\t\t\tdistance: 0, //距离\n\t\t\t\tduration: 0, //时间\n\t\t\t\tflag: 10,\n\t\t\t\tbtnList: [{\n\t\t\t\t\t\tname: '推荐',\n\t\t\t\t\t\tvalue: 10\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tname: '躲避拥堵',\n\t\t\t\t\t\tvalue: 4\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tname: '距离短',\n\t\t\t\t\t\tvalue: 2\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\tfilters: {\n\t\t\tfmtEndAddr(val) {\n\t\t\t\tif (val === null || val === '' || val === undefined) {\n\t\t\t\t\treturn '未知地址';\n\t\t\t\t}\n\t\t\t\treturn val;\n\t\t\t},\n\t\t},\n\n\t\tonLoad() {\n\t\t\tthis.myAmapFunT = new amapFile.AMapWX({\n\t\t\t\tkey: 你申请的key\n\t\t\t})\n\t\t\tthis.getCurrentLocation();\n\t\t},\n\t\tmethods: {\n      //返回\n\t\t\ttoBack() {\n\t\t\t\tuni.navigateBack({});\n\t\t\t},\n\t\t\t//获取当前定位\n\t\t\tgetCurrentLocation() {\n\t\t\t\tlet that = this\n\t\t\t\tuni.getLocation({\n\t\t\t\t\ttype: 'gcj02',\n\t\t\t\t\tsuccess: function(res) {\n\t\t\t\t\t\t// console.log('当前：' , res);\n\t\t\t\t\t\t// console.log('当前位置的经度：' + res.longitude);\n\t\t\t\t\t\t// console.log('当前位置的纬度：' + res.latitude);\n\t\t\t\t\t\tthat.startPoint.longitude = res.longitude;\n\t\t\t\t\t\tthat.startPoint.latitude = res.latitude;\n\n\t\t\t\t\t\tthat.getAddress(that.startPoint.longitude + ',' + that.startPoint.latitude)\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t},\n\t\t\t// 解析地址\n\t\t\tgetAddress(loc) {\n\t\t\t\tvar that = this;\n\t\t\t\tvar myAmapFun = this.myAmapFunT\n\t\t\t\tif (loc !== null && loc !== '' && loc !== undefined) {\n\t\t\t\t\tmyAmapFun.getRegeo({\n\t\t\t\t\t\ticonPath: 'http://img.wisdomtaxi.com/amap_icon.png',\n\t\t\t\t\t\twidth: '37.5rpx',\n\t\t\t\t\t\theight: '37.5rpx',\n\t\t\t\t\t\tlocation: loc,\n\t\t\t\t\t\tsuccess: function(data) { //成功回调\n\t\t\t\t\t\t\t// console.log('地址解析',data)\n\t\t\t\t\t\t\tthat.startPoint.name = data[0].name\n\t\t\t\t\t\t\tthat.startPoint.address = data[0].desc\n\n\t\t\t\t\t\t\tthat.initMap()\n\t\t\t\t\t\t},\n\t\t\t\t\t\tfail: function(info) { //失败回调\n\t\t\t\t\t\t\tconsole.log(info)\n\t\t\t\t\t\t},\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t},\n\t\t\t//初始化地图数据\n\t\t\tinitMap() {\n\t\t\t\tthis.markers.push({\n\t\t\t\t\tid: 1,\n\t\t\t\t\tlatitude: this.startPoint.latitude, //纬度\n\t\t\t\t\tlongitude: this.startPoint.longitude, //经度\n\t\t\t\t\ticonPath: '/static/images/home/start.png', //显示的图标\n\t\t\t\t\trotate: 0, // 旋转度数\n\t\t\t\t\twidth: 30, //宽\n\t\t\t\t\theight: 30, //高\n\t\t\t\t\ttitle: this.startPoint.name, //标注点名\n\t\t\t\t\t// alpha: 0.5, //透明度\n\t\t\t\t\tjoinCluster: true,\n\t\t\t\t\tcustomCallout: {\n\t\t\t\t\t\tanchorY: 0,\n\t\t\t\t\t\tanchorX: 0,\n\t\t\t\t\t\tdisplay: \"ALWAYS\",\n\t\t\t\t\t},\n\t\t\t\t}, )\n\n\t\t\t},\n\t\t\t/**\n\t\t\t *@author ZY\n\t\t\t *@date 2023/1/9\n\t\t\t *@Description:选择位置\n\t\t\t *@param {Object} opt https://uniapp.dcloud.net.cn/api/location/location.html\n\t\t\t *\n\t\t\t opt : {\n\t\t\t  latitude\tNumber\t否\t目标地纬度\n\t\t\t  longitude\tNumber\t否\t目标地经度\n\t\t\t }\n\t\t\t */\n\t\t\topenChooseLocation(opt) {\n\t\t\t\tlet that = this\n\t\t\t\tuni.chooseLocation({\n\t\t\t\t\tlatitude: opt?.latitude || that.startPoint.latitude,\n\t\t\t\t\tlongitude: opt?.longitude || that.startPoint.longitude,\n\t\t\t\t\tsuccess: function(res) {\n\t\t\t\t\t\t// console.log(res)\n\t\t\t\t\t\t// console.log('位置名称：' + res.name);\n\t\t\t\t\t\t// console.log('详细地址：' + res.address);\n\t\t\t\t\t\t// console.log('纬度：' + res.latitude);\n\t\t\t\t\t\t// console.log('经度：' + res.longitude);\n\t\t\t\t\t\tif (!res.name) {\n\t\t\t\t\t\t\treturn uni.showToast({\n\t\t\t\t\t\t\t\ttitle: '请重新选择位置',\n\t\t\t\t\t\t\t\ticon: 'none'\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t\t//设置终点\n\t\t\t\t\t\tthat.endPoint = {\n\t\t\t\t\t\t\tlongitude: res.longitude,\n\t\t\t\t\t\t\tlatitude: res.latitude,\n\t\t\t\t\t\t\tname: res.name,\n\t\t\t\t\t\t\taddress: res.address\n\t\t\t\t\t\t}\n\t\t\t\t\t\t//设置终点标记\n\t\t\t\t\t\tthat.markers[1] = {\n\t\t\t\t\t\t\tid: 2,\n\t\t\t\t\t\t\tlatitude: res.latitude, //纬度\n\t\t\t\t\t\t\tlongitude: res.longitude, //经度\n\t\t\t\t\t\t\ticonPath: '/static/images/home/endd.png', //显示的图标\n\t\t\t\t\t\t\trotate: 0, // 旋转度数\n\t\t\t\t\t\t\twidth: 30, //宽\n\t\t\t\t\t\t\theight: 30, //高\n\t\t\t\t\t\t\ttitle: res.name, //标注点名\n\t\t\t\t\t\t\t// alpha: 0.5, //透明度\n\t\t\t\t\t\t\tjoinCluster: true,\n\t\t\t\t\t\t\tcustomCallout: {\n\t\t\t\t\t\t\t\tanchorY: 0,\n\t\t\t\t\t\t\t\tanchorX: 0,\n\t\t\t\t\t\t\t\tdisplay: \"ALWAYS\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tlet start = that.startPoint.longitude + ',' + that.startPoint.latitude\n\t\t\t\t\t\tlet end = res.longitude + ',' + res.latitude\n\t\t\t\t\t\t//每次选取位置完成后都会默认 10 策略\n\t\t\t\t\t\tthat.flag = 10\n\t\t\t\t\t\t//生成规划路线\n\t\t\t\t\t\tthat.getPlanningRoute(start, end, 10)\n\t\t\t\t\t},\n\t\t\t\t\tfail: function(info) { //失败回调\n\t\t\t\t\t\tconsole.log('调取失败')\n\t\t\t\t\t\tconsole.log(info)\n\t\t\t\t\t},\n\n\t\t\t\t})\n\t\t\t},\n\t\t\t// 按钮选择策略\n\t\t\tselectRouteType(idx) {\n\t\t\t\tthis.flag = idx\n\t\t\t\tlet start = this.startPoint.longitude + ',' + this.startPoint.latitude\n\t\t\t\tlet end = this.endPoint.longitude + ',' + this.endPoint.latitude\n\t\t\t\tthis.getPlanningRoute(start, end, idx)\n\t\t\t},\n\t\t\t/**\n\t\t\t *@author ZY\n\t\t\t *@date 2023/1/9\n\t\t\t *@Description:生成规划路线\n\t\t\t *@param {string} start 开始位置\n\t\t\t *@param {string} end 结束位置\n\t\t\t *@param {number} strategy 10 默认多策略 策略 https://lbs.amap.com/api/webservice/guide/api/direction#driving\n\t\t\t *\n\t\t\t 10，返回结果会躲避拥堵，路程较短，尽量缩短时间，与高德地图的默认策略也就是不进行任何勾选一致\n\t\t\t * 4，躲避拥堵，但是可能会存在绕路的情况，耗时可能较长\n\t\t\t 2，距离优先，仅走距离最短的路线，但是可能存在穿越小路/小区的情况\n\t\t\t */\n\t\t\tgetPlanningRoute(start, end, strategy = 10) {\n\t\t\t\tlet that = this\n\t\t\t\tuni.showLoading({\n\t\t\t\t\ttitle: '加载中'\n\t\t\t\t});\n\t\t\t\tthat.myAmapFunT.getDrivingRoute({\n\t\t\t\t\torigin: start,\n\t\t\t\t\tdestination: end,\n\t\t\t\t\tstrategy: strategy, //备选方案\n\t\t\t\t\tsuccess: function(data) {\n\t\t\t\t\t\t// console.log('所有路径',data)\n\t\t\t\t\t\tif (data.paths && data.paths[0] && data.paths[0].steps) {\n\t\t\t\t\t\t\t// 默认 10 会 对返回多条路径的方案  按照时间短的\n\t\t\t\t\t\t\tlet goodRouter = data.paths.sort((a, b) => {\n\t\t\t\t\t\t\t\treturn a.duration - b.duration\n\t\t\t\t\t\t\t})[0]\n\n\t\t\t\t\t\t\tthat.distance = (goodRouter.distance * 0.001).toFixed(2) + '公里'\n\t\t\t\t\t\t\tthat.duration = '大约' + (goodRouter.duration / 60).toFixed(2) + '分钟'\n\n\t\t\t\t\t\t\tlet steps = goodRouter.steps\n\t\t\t\t\t\t\tlet points = []\n\t\t\t\t\t\t\tfor (var i = 0; i < steps.length; i++) {\n\t\t\t\t\t\t\t\tvar poLen = steps[i].polyline.split(';');\n\t\t\t\t\t\t\t\tfor (var j = 0; j < poLen.length; j++) {\n\t\t\t\t\t\t\t\t\tpoints.push({\n\t\t\t\t\t\t\t\t\t\tlongitude: parseFloat(poLen[j].split(',')[0]),\n\t\t\t\t\t\t\t\t\t\tlatitude: parseFloat(poLen[j].split(',')[1])\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tthat.polyline = [{\n\t\t\t\t\t\t\t\tpoints: points,\n\t\t\t\t\t\t\t\tcolor: strategy === 10 ? '#0ee532' : strategy === 2 ? '#0742d9' :\n\t\t\t\t\t\t\t\t\t'#ee6b06',\n\t\t\t\t\t\t\t\twidth: 8,\n\t\t\t\t\t\t\t}]\n\t\t\t\t\t\t}\n\t\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\t},\n\t\t\t\t\tfail: function(info) { //失败回调\n\t\t\t\t\t\tconsole.log('路线规划失败')\n\t\t\t\t\t\tconsole.log(info)\n\t\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\t\ttitle: '路线规划失败',\n\t\t\t\t\t\t\ticon: 'error'\n\t\t\t\t\t\t});\n\t\t\t\t\t},\n\t\t\t\t})\n\t\t\t},\n\t\t\t// 点击标记点\n\t\t\tmarkertap(e) {\n\t\t\t\tlet opt = this.markers.find(el => {\n\t\t\t\t\treturn el.id === e.detail.markerId\n\t\t\t\t})\n\t\t\t\tthis.openChooseLocation(opt)\n\t\t\t},\n\n\t\t\t// 提交给司机\n\t\t\tsubmitToDriver() {\n\t\t\t\tlet p = {}\n\t\t\t\tp.idCard = uni.getStorageSync('driverInfo').idCard || ''\n\t\t\t\tp.startLocation = this.startPoint.longitude + ',' + this.startPoint.latitude\n\t\t\t\tp.startAddr = this.startPoint.name || '未知'\n\t\t\t\tp.endLocation = this.endPoint.longitude + ',' + this.endPoint.latitude\n\t\t\t\tp.endAddr = this.endPoint.name || '未知'\n\t\t\t\tp.plan = this.flag || 10\n\t\t\t\tp.locations = this.polyline[0].points || []\n\t\t\t\tif (!p.idCard) {\n\t\t\t\t\treturn uni.showToast({\n\t\t\t\t\t\ttitle: '司机信息获取失败',\n\t\t\t\t\t\ticon: 'none'\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\tuni.showLoading({\n\t\t\t\t\ttitle: '提交中'\n\t\t\t\t});\n\t\t\t\tlet that = this\n\t\t\t\tthis.request('api_sendDestination', p).then(res => {\n\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: '发送成功'\n\t\t\t\t\t})\n          setTimeout(()=>{\n            that.toBack()\n          },1000)\n\n\t\t\t\t}).catch(err => {\n\t\t\t\t\tconsole.log(err)\n\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ttitle: '发送失败',\n\t\t\t\t\t\ticon: 'error'\n\t\t\t\t\t})\n\t\t\t\t})\n\n\t\t\t}\n\n\t\t},\n\n\t}\n</script>\n<style lang=\"scss\" scoped>\n\t.content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\ttext-align: center;\n\t\talign-content: center;\n\t\tbackground: #f5f5f9;\n\t\theight: 1600rpx;\n\t}\n\n\t.back-button {\n\t\tz-index: 9;\n\t\tposition: fixed;\n\t\ttop: 95rpx;\n\t\tleft: 30rpx;\n\t\theight: 50rpx;\n\t\twidth: 50rpx;\n\t\tborder-radius: 50%;\n\t\tbackground-color: #FFA500;\n\t\t/* box-shadow: 0 9.375rpx 28.125rpx 9.375rpx rgba(106, 66, 0, 0.2); */\n\t}\n\n\t.order-map {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t.order-box {\n\t\tposition: fixed;\n\t\tbottom: 0rpx;\n\t\tleft: 0rpx;\n\t\twidth: 100%;\n\t\t//height: 435rpx;\n\t\ttext-align: left;\n\t\tbackground-color: #FFFFFF;\n\t\tborder-top-right-radius: 10rpx;\n\t\tborder-top-left-radius: 10rpx;\n\t\tbox-sizing: border-box;\n\t\tpadding: 18rpx;\n\t\tpadding-bottom: 80rpx;\n\t\tbox-shadow: 0 9.375rpx 28.125rpx 9.375rpx rgba(106, 66, 0, 0.2);\n\n\t\t.send-btn {\n\t\t\tmargin-top: 30rpx;\n\t\t\twidth: 100%;\n\t\t\tcolor: white;\n\t\t\tbackground-color: #ffa602;\n\t\t\tpadding: 0 24rpx;\n\t\t\tfont-size: 28rpx;\n\t\t\theight: 80rpx;\n\t\t\tline-height: 80rpx;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder-radius: 12rpx;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t/*box-shadow: 0 9.375rpx 28.125rpx 9.375rpx rgba(106, 66, 0, 0.2);*/\n\t\t.search-start {\n\t\t\tfont-size: 30rpx;\n\t\t\tmargin: 18rpx 0;\n\t\t\tpadding-left: 15rpx;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\t\t\talign-items: center;\n\t\t\tbox-sizing: border-box;\n\n\t\t\t.start-name {\n\t\t\t\twidth: 550rpx;\n\t\t\t\tpadding-left: 10rpx;\n\t\t\t\toverflow: hidden;\n\t\t\t\t/*文本不会换行*/\n\t\t\t\twhite-space: nowrap;\n\t\t\t\t/*当文本溢出包含元素时，以省略号表示超出的文本*/\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t}\n\n\t\t\t.custom-style {\n\t\t\t\tmargin-right: 10rpx;\n\t\t\t\tborder-radius: 6rpx;\n\t\t\t\tborder: 1rpx solid #ebedf0;\n\t\t\t\tfont-size: 24rpx;\n\t\t\t\tpadding: 8rpx 24rpx;\n\n\t\t\t\t&:last-child {\n\t\t\t\t\tmargin-right: 0;\n\t\t\t\t}\n\n\t\t\t\t&.active {\n\t\t\t\t\tcolor: #FFFFFF;\n\t\t\t\t\tbackground-color: #ffa602;\n\t\t\t\t\tborder-color: #ffa602;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.search-box {\n\t\t\tbackground-color: #f3f3f3;\n\t\t\tborder-radius: 36rpx;\n\t\t\theight: 80rpx;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\t\t\talign-items: center;\n\t\t\tbox-sizing: border-box;\n\t\t\tpadding: 0 25rpx;\n\n\t\t\t.search-placeholder {\n\t\t\t\tfont-size: 28rpx;\n\t\t\t\tcolor: #bbb9b9;\n\t\t\t\tpadding-left: 15rpx;\n\t\t\t}\n\t\t}\n\t}\n\n\t.addH {\n\t\theight: 420rpx;\n\t\t/*+100*/\n\t}\n\n\t.row {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\n\t.bot {\n\t\tmargin-bottom: 10rpx;\n\t}\n\n\t.license {\n\t\tposition: relative;\n\t\tleft: 30rpx;\n\t\theight: 110rpx;\n\t\tfont-weight: bold;\n\t\tfont-size: 38rpx;\n\t\tline-height: 130rpx;\n\t\tletter-spacing: 1.125rpx;\n\t\t/* border: 0.01rem solid #555555; */\n\t}\n\n\t.time-icon {\n\t\theight: 16rpx;\n\t\twidth: 16rpx;\n\t\tposition: relative;\n\t\tleft: 190rpx;\n\t\ttop: 59rpx;\n\t}\n\n\t.time-text {\n\t\theight: 110rpx;\n\t\tline-height: 130rpx;\n\t\tposition: relative;\n\t\tleft: 200rpx;\n\t\tfont-size: 30rpx;\n\t\tcolor: #666666;\n\t\t/* border: 0.01rem solid #555555; */\n\t}\n\n\t.route-icon {\n\t\theight: 12rpx;\n\t\twidth: 12rpx;\n\t\tposition: relative;\n\t\tleft: 42rpx;\n\t\ttop: 30rpx;\n\t}\n\n\t.route-text {\n\t\theight: 65rpx;\n\t\twidth: 478rpx;\n\t\tline-height: 65rpx;\n\t\tposition: relative;\n\t\tleft: 50rpx;\n\t\tfont-size: 30rpx;\n\t\tcolor: #666666;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\t/* border: 0.01rem solid #555555; */\n\t}\n\n\t.amt-box {\n\t\twidth: calc(100% - 558rpx);\n\t\tmargin-left: 40rpx;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t\t/* border: 1rpx solid #555555; */\n\t}\n\n\t.amt-icon {\n\t\tmargin-top: 5rpx;\n\t\tline-height: 65rpx;\n\t\theight: 20rpx;\n\t\twidth: 20rpx;\n\t}\n\n\t.amt {\n\t\tmargin-left: 10rpx;\n\t\tline-height: 65rpx;\n\n\t\t/*line-height: 80rpx;*/\n\t\tfont-size: 30rpx;\n\t\tcolor: #666666;\n\t}\n\n\t.todo {\n\t\tposition: relative;\n\t\theight: 165rpx;\n\t\twidth: 640rpx;\n\t\tmargin-left: 30rpx;\n\t\tborder-top: 0.375rpx solid #E9EAEC;\n\t}\n\n\t.todo-item {\n\t\theight: 100%;\n\t\twidth: 50%;\n\t\ttext-align: center;\n\t\talign-content: center;\n\t\t/* border: 0.01rem solid #555555; */\n\t}\n\n\t.todo-item>image {\n\t\theight: 60rpx;\n\t\twidth: 60rpx;\n\t\tmargin-top: 30rpx;\n\t}\n\n\t.todo-item>view {\n\t\tcolor: #3F3F3F;\n\t\tfont-size: 30rpx;\n\t\tletter-spacing: 0.375rpx;\n\t\t/* border: 0.01rem solid #555555; */\n\t}\n</style>\n\n<style>\n\t/* *************************************** */\n\t.customCallout {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: #fff;\n\t\tborder: 1px solid #ccc;\n\t\tborder-radius: 30px;\n\t\tpadding: 5px 10px;\n\t}\n\n\t.customCalloutContent {\n\t\tfont-size: 20rpx;\n\t\tword-wrap: break-word;\n\n\t}\n</style>\n\n```",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:26:57.568Z"),
    updatedAt: ISODate("2023-08-09T02:26:57.568Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f99297ad53aea60d5061"),
    title: "sass实现自定义各类型按钮",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "scss完整源码：里面的变量可以直接在scss文件内定义，示例是全局变量",
    content: "#### 1.效果：\n![动画.gif](http://zhouyi.run:5222/api/public/admin/getFiles?id=6a62d6b340daa38198e20afad056115c.gif&&mimetype=image/gif)\n#### 2.使用：\n``` html\n    <div class=\"mg-btn small warning\">warning按钮</div>\n    <div class=\"mg-btn medium success\">success按钮</div>\n    <div class=\"mg-btn warning disabled\">禁用按钮</div>\n```\n#### 3. scss完整源码：里面的变量可以直接在scss文件内定义，示例是全局变量\n``` css\n\n/**\n *@author ZY\n *@date 2023/1/3\n *@Description: 按钮 对html元素直接使用下面相关类名即可\n *TODO:相关类名有\n  |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n  | 必要                  | ( mg-btn )\n  | size     （尺寸）     | ( normal  / medium  / small   / mini )\n  | type     （类型）     | ( primary / success / warning / danger / info / text )\n  | plain    （是否朴素） | ( is-plain )\n  | disabled （禁用）    | ( disabled ) 如果不是button元素将只保留css效果 鼠标的点击事件并不消除\n  | fit      （自适应）  | ( fit )\n  |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|\n*/\n\n/* Button */\n\n/**\n *@Description: 按钮尺寸\n *@param {string} $size String.  // normal / medium / small / mini\n*/\n\n@mixin buttonSize($size) {\n  @if $size == 'medium' {\n    height: 36px;\n    line-height: 16px;\n    padding: 10px 20px;\n    font-size: 14px;\n    border-radius: 4px;\n    & > .mg-icon {\n      line-height: 16px;\n    }\n  } @else if ($size == 'small') {\n    height: 32px;\n    line-height: 14px;\n    padding: 9px 15px;\n    font-size: 12px;\n    border-radius: 3px;\n    & > .mg-icon {\n      line-height: 14px;\n    }\n  } @else if ($size == 'mini') {\n    height: 28px;\n    line-height: 14px;\n    padding: 7px 15px;\n    font-size: 12px;\n    border-radius: 3px;\n    & > .mg-icon {\n      line-height: 14px;\n    }\n  } @else {\n    height: 40px;\n    line-height: 16px;\n    padding: 12px 20px;\n    font-size: 14px;\n    border-radius: 4px;\n    & > .mg-icon {\n      line-height: 16px;\n    }\n  }\n}\n\n/**\n *@Description: 按钮类型\n *@param {string} $theme String.\n*/\n\n@mixin buttonType($theme,$color:#ffffff) {\n  color: $color;\n  background-color: $theme;\n  border-color: $theme;\n\n  &:hover {\n    background: rgba($theme, .9);\n    border-color: rgba($theme, .9);\n    color: $color\n  }\n\n  &::before {\n    background: rgba($theme, 0.1);\n  }\n\n  &::after {\n    border: 1px solid rgba($theme, 0.5);\n  }\n\n\n  &.disabled,\n  &:disabled {\n    cursor: not-allowed;\n    //pointer-events: none;\n    background: rgba($theme, .5);\n    border-color: rgba($theme, .1);\n\n    &:hover {\n      background: rgba($theme, .5);\n      border-color: rgba($theme, .5);\n      color: $color\n    }\n\n    &::before {\n      background: rgba($theme, 0.15);\n      border-color: rgba($theme, .5);\n    }\n\n    &::after {\n      border: 1px solid rgba($theme, 0.1);\n    }\n  }\n}\n\n/**\n *@Description: 朴素按钮类型\n *@param {string} $theme String.\n*/\n@mixin buttonIsPlainType($theme) {\n  color: $theme;\n  background: rgba($theme, .1);\n  border-color: rgba($theme, .2);\n\n  &:hover {\n    background: rgba($theme, .09);\n    border-color: rgba($theme, .3);\n    color: $theme\n  }\n\n  &::before {\n    background: rgba($theme, 0.1);\n  }\n\n  &::after {\n    border: 1px solid rgba($theme, 0.3);\n  }\n\n\n  &.disabled,\n  &:disabled {\n    cursor: not-allowed;\n    color: rgba($theme, .5);\n    border-color: rgba($theme, .1);\n\n    &:hover {\n      border-color: rgba($theme, .2);\n      color: #c0c4cc;\n    }\n\n    &::before {\n      background-color: rgba($theme, .1);\n      border-color: rgba($theme, .2);\n    }\n\n    &::after {\n      border: 1px solid rgba($theme, 0.1);\n    }\n  }\n}\n\n/**\n *@Description: 按钮禁用\n*/\n@mixin buttonDisabled() {\n  color: #c0c4cc;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #fff;\n  border-color: #ebeef5;\n\n  &:hover {\n    background-color: #eee;\n    border-color: #ebeef5;\n    color: #c0c4cc;\n  }\n\n  &::before {\n    background-color: rgba(#eee, .1);\n    border-color: #ebeef5;\n  }\n\n  &::after {\n    border-color: #ebeef5;\n  }\n}\n\n/**\n *@Description: 按钮动画\n*/\n@mixin buttonAnimation() {\n  &::before, &::after {\n    content: '';\n    position: absolute;\n    transition: all 0.3s;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  }\n\n  &::before {\n    opacity: 0;\n    background: rgba($color-primary, 0.1);\n    transform: scale(1.3, 1.3);\n    border-radius: 3px;\n  }\n\n  &:hover::before {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n\n  &::after {\n    transition: all 0.3s;\n    border: 1px solid #dcdfe6;\n    border-radius: 3px;\n  }\n\n  &:hover::after {\n    transform: scale(0, 0);\n    opacity: 0;\n  }\n}\n\n.mg-btn {\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #fff;\n  //border: 1px solid #dcdfe6;\n  border: none;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: .1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  @include buttonSize('normal');\n  @include buttonAnimation();\n\n  &-groups {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    flex: 1; //子元素都有相同的长度\n    & > .mg-btn {\n      margin-right: 8px;\n    }\n  }\n\n  &:hover {\n    color: $color-primary;\n  }\n\n  &:active {\n    background: rgba($color-primary, 0.2);\n  }\n\n  &.disabled,\n  &:disabled {\n    @include buttonDisabled()\n  }\n\n\n  &.fit {\n    width: 100%;\n  }\n\n  &.medium {\n    @include buttonSize('medium');\n  }\n\n  &.small {\n    @include buttonSize('small');\n  }\n\n  &.mini {\n    @include buttonSize('mini');\n\n  }\n\n  &.primary {\n    @include buttonType($color-primary)\n  }\n\n  &.success {\n    @include buttonType($color-success)\n  }\n\n  &.warning {\n    @include buttonType($color-warning)\n  }\n\n  &.danger {\n    @include buttonType($color-danger)\n  }\n\n  &.info {\n    @include buttonType($color-info)\n  }\n\n  &.text {\n    @include buttonType(#fff, #4949b6)\n  }\n\n  //朴素按钮\n  &.is-plain {\n    background: #fff;\n    @include buttonAnimation();\n\n    &.disabled,\n    &:disabled {\n      @include buttonDisabled()\n    }\n\n\n    &.primary {\n      @include buttonIsPlainType($color-primary)\n    }\n\n    &.success {\n      @include buttonIsPlainType($color-success)\n    }\n\n    &.warning {\n      @include buttonIsPlainType($color-warning)\n    }\n\n    &.danger {\n      @include buttonIsPlainType($color-danger)\n    }\n\n    &.info {\n      @include buttonIsPlainType($color-info)\n    }\n\n    &.text {\n      @include buttonType(#fff, #4949b6)\n    }\n  }\n\n\n}\n\n\n\n\n```",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:27:30.373Z"),
    updatedAt: ISODate("2023-08-09T02:27:41.511Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f9b497ad53aea60d5085"),
    title: "新的 CSS 伪类函数 :is() 和 :where()",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "新的 CSS 伪类函数 :is() 和 :where()",
    content: "### :is() 和 :where()\n\n<b>标题中的 `<b> ` 标签进行颜色调整：\n``` css\nh1 > b, h2 > b, h3 > b, h4 > b, h5 > b, h6 > b {\n  color: hotpink;\n}\n```\n现在，我们可以使用 :is() 缩减代码并提高其可读性：\n``` css\n:is(h1,h2,h3,h4,h5,h6) > b {\n  color: hotpink;\n}\n```\n<br> 使用  :where()\n``` css\n:where(h1,h2,h3,h4,h5,h6) > b {\n  color: hotpink;\n}\n\n```\n*** \n\n:is() 和 :where() 组合使用\n``` css\n:is(.dark-theme, .dim-theme) :where(button,a) {\n  color: rebeccapurple;\n}\n:is(h1,h2):where(.hero,.subtitle) {\n  text-transform: uppercase;\n}\n.hero:is(h1,h2,:is(.header,.boldest)) {\n  font-weight: 900;\n}\n```\n\n",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("0"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: true,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:28:04.419Z"),
    updatedAt: ISODate("2023-08-09T02:28:04.419Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f9da97ad53aea60d5091"),
    title: "vue刷新组件的特殊方式",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "vue刷新组件的特殊方式",
    content: "在根组件App.vue中：\n``` js\n<template>\n  <div id=\"app\">\n    <router-view v-if=\"isRouterShow\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'App',\n  provide () {\n    return {\n      reload: this.reload  //把方法传递给下级组件\n    }\n  },\n  data(){\n    return{\n      isRouterShow: true ,//定义一个变量控制v-if\n    }\n  },\n  methods:{\n    async reload () {  //触发显示隐藏\n      this.isRouterShow = false\n      await this.$nextTick()\n      this.isRouterShow = true\n    },\n  }\n}\n```\n在其他页面中 test.vue (内有其他子组件)\n``` js\nexport default {\n   inject: ['reload'], //接收App.vue传递的方法\n   methods: {\n    //刷新test.vue页面内所有组件\n     reloadHandle() {\n       this.reload()  //直接调用\n     },\n}\n```",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("1"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:28:42.631Z"),
    updatedAt: ISODate("2023-08-09T08:01:25.619Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2f9f397ad53aea60d509d"),
    title: "VUE：自定义组件的 v-model",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "VUE：自定义组件的 v-model",
    content: "新建一个组件：BaseCheckbox\n``` html\n<template>\n  <div>\n    <label>\n      <input\n          type=\"checkbox\"\n          v-bind:checked=\"checked\"\n          v-on:change=\"$emit('change', $event.target.checked)\"\n      >\n      黄瓜\n    </label>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \"BaseCheckbox\",\n  //主要代码\n  model: {\n    prop: 'checked',\n    event: 'change'\n  },\n  props: {\n    checked: Boolean\n  },\n}\n</script>\n\n<style scoped>\n\n</style>\n\n```\n在父组件应用组件 BaseCheckbox\n``` js\n<BaseCheckbox v-model=\"tempCheck\"/>\n\n// tempCheck 就和 BaseCheckbox 组件内的 checked 互为响应式字段了\n```",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("2"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:29:07.687Z"),
    updatedAt: ISODate("2023-08-09T08:13:34.095Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d2fa1d97ad53aea60d50a9"),
    title: "在使用IDEA创建springboot项目，有时会出现cannot download ‘https://start.spring.io’:connect timed out问题",
    cover: "https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    abstract: "在使用IDEA创建springboot项目，有时会出现cannot download ‘https://start.spring.io’:connect timed out问题",
    content: ">在使用IDEA创建springboot项目，有时会出现cannot download ‘https://start.spring.io’:connect timed out问题\n\n在网上查阅多种文献博客，也有许多的解决方法，比如\n\n- 进入到IDEA的Settings，依次点击Appearance & Behavior –> System Settings –> HTTP Proxy ,选择Auto-detect proxy settings–> 点击最下面的Check connection,弹出如下输入框，输入地址[https://start.spring.io](http://)点击ok ，再重新创建SpringBoot项目\n\n**但以上方法并不适用于本人**\n\n### 下面介绍另一种方法:\n\n不选择默认的Default，而是适用Custom，输入aliyun的镜像节点：[http://start.aliyun.com](http://)\n\n解决问题！！！\n***\n![Description](https://img-blog.csdnimg.cn/20200703095007153.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDIxNzQwMQ==,size_16,color_FFFFFF,t_70)",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "博客",
    viewNum: NumberInt("3"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: false,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T02:29:49.582Z"),
    updatedAt: ISODate("2023-08-09T07:27:17.779Z")
}]);
db.getCollection("blog_articles").insert([{
    _id: ObjectId("64d35fbbdc6fe2540382c07d"),
    title: "Hi, this is ZHUO YI",
    cover: "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=1600",
    abstract: "Hi, this is Yiyang Sun :wave:Introduction :raised_hands:Student of @UESTC. :school:Major in Software Engineering. :man_technologist:I love open source",
    content: "<div align=center>\n\n<img alin='center' alt=\"ZHUO YI\" src=\"http://www.zhouyi.run:3001/api/v1/files/preview?p=425a82c1dcbc37caa33680de28d2a04.jpg&&mimetype=image/jpeg\" width=100 />\n\n# Hi, this is ZHUO YI  :hand:\n\n \n\nI love coding. :heart:\n\nI love Front End technologys. :heart:\n\n<p>\n\n![HTML5](https://img.shields.io/badge/-HTML5-red?logo=html5&logoColor=white)\n![CSS3](https://img.shields.io/badge/-CSS3-blue?logo=css3&logoColor=white)\n![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white)\n\n</p>\n\n<p>\n\n![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white)\n![Vue](https://img.shields.io/badge/-Vue-34495e?logo=vue.js)\n![React](https://img.shields.io/badge/-React-282c34?logo=react)\n![MiniProgram](https://img.shields.io/badge/-MiniProgram-07c160?logo=wechat&logoColor=white)\n\n</p>\n\n<p>\n\n \n\n## Analysis  :yum:\n\n[![TopLangs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact)](https://github.com/anuraghazra/github-readme-stats)\n  <img  style=\" display:inline-block\" src=\"https://github-readme-stats.vercel.app/api?username=ZHYI-source&bg_color=30,e96443,904e95&title_color=fff&text_color=fff\"\n          alt=\"vuejs\" />\n  <img  style=\"display:inline-block \" width=\"200\"  src=\"https://camo.githubusercontent.com/62da68eb62b1e5f175f7d1f0191dd89a653d7908feb22d37d4a0ab07365d6791/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4d3967624264396e6244724f5475314d71782f67697068792e676966\" style=\"max-width: 100%; display: inline-block;\">\n</p>\n\n</div>\n\n![](https://hit.yhype.me/github/profile?user_id=57290456)",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    category: "随记",
    viewNum: NumberInt("1"),
    likeNum: NumberInt("0"),
    isReship: false,
    recommended: true,
    likeToken: [],
    status: true,
    createdAt: ISODate("2023-08-09T09:43:23.232Z"),
    updatedAt: ISODate("2023-08-09T09:43:40.154Z")
}]);

// ----------------------------
// Collection structure for codes
// ----------------------------
db.getCollection("codes").drop();
db.createCollection("codes");

// ----------------------------
// Documents of codes
// ----------------------------

// ----------------------------
// Collection structure for messages
// ----------------------------
db.getCollection("messages").drop();
db.createCollection("messages");

// ----------------------------
// Documents of messages
// ----------------------------
db.getCollection("messages").insert([{
    _id: ObjectId("64d2faaa97ad53aea60d50e1"),
    content: "这个网页是用hexo框架写的嘛",
    hidden: false,
    user: ObjectId("64d2faaa97ad53aea60d50df"),
    likeNum: NumberInt("0"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-07-12T02:32:10.426Z"),
    updatedAt: ISODate("2023-08-09T02:32:10.426Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2fac797ad53aea60d50eb"),
    content: "网页写的很好！",
    hidden: false,
    user: ObjectId("64d2fac797ad53aea60d50e9"),
    likeNum: NumberInt("12"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-08-04T14:31:09.582Z"),
    updatedAt: ISODate("2023-08-09T02:32:39.582Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2fad797ad53aea60d50f5"),
    content: "好牛",
    hidden: false,
    user: ObjectId("64d2fad797ad53aea60d50f3"),
    likeNum: NumberInt("5"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-08-02T22:26:54.054Z"),
    updatedAt: ISODate("2023-08-09T02:32:55.054Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2fae297ad53aea60d50ff"),
    content: "好优秀啊，我就是和咸鱼！",
    hidden: false,
    user: ObjectId("64d2fae297ad53aea60d50fd"),
    likeNum: NumberInt("0"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-07-19T12:29:12.439Z"),
    updatedAt: ISODate("2023-08-09T02:33:06.439Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2faef97ad53aea60d5109"),
    content: "6666",
    hidden: false,
    user: ObjectId("64d2faef97ad53aea60d5107"),
    likeNum: NumberInt("0"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-07-26T02:33:19.397Z"),
    updatedAt: ISODate("2023-08-09T02:33:19.397Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2fb0697ad53aea60d5113"),
    content: "好好看的网页",
    hidden: false,
    user: ObjectId("64d2fb0697ad53aea60d5111"),
    likeNum: NumberInt("8"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-08-07T11:33:42.839Z"),
    updatedAt: ISODate("2023-08-09T02:33:42.839Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2fb1597ad53aea60d511d"),
    content: "大佬，这个有源码吗",
    hidden: false,
    user: ObjectId("64d2fb1597ad53aea60d511b"),
    likeNum: NumberInt("9"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-06-21T04:33:57.343Z"),
    updatedAt: ISODate("2023-08-09T02:33:57.343Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2fb2d97ad53aea60d5131"),
    content: "你好",
    hidden: false,
    user: ObjectId("64d2fb2d97ad53aea60d512f"),
    likeNum: NumberInt("0"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-06-27T19:37:15.393Z"),
    updatedAt: ISODate("2023-08-09T02:34:21.393Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d2fb3c97ad53aea60d513b"),
    content: "大佬有没有uniapp调用高德地图路径规划完整的gjt源码",
    hidden: false,
    user: ObjectId("64d2fb3c97ad53aea60d5139"),
    likeNum: NumberInt("0"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-05-17T08:29:43.935Z"),
    updatedAt: ISODate("2023-08-09T02:34:36.935Z")
}]);
db.getCollection("messages").insert([{
    _id: ObjectId("64d3496bdc6fe2540382bf0a"),
    content: "ℍ𝕒𝕧𝕖 𝕒 𝕟𝕚𝕔𝕖 𝕕𝕒𝕪 ʚ◡̈⃝ɞ——🏰—🎡—🎢—🎠—💒——♡◡̈揣着一口袋的开心满载而归",
    hidden: false,
    user: ObjectId("64d3496bdc6fe2540382bf08"),
    likeNum: NumberInt("0"),
    opposeNum: NumberInt("0"),
    createdAt: ISODate("2023-08-09T08:08:11.826Z"),
    updatedAt: ISODate("2023-08-09T08:08:11.826Z")
}]);

// ----------------------------
// Collection structure for permissions
// ----------------------------
db.getCollection("permissions").drop();
db.createCollection("permissions");

// ----------------------------
// Documents of permissions
// ----------------------------
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6767b2f517ae48b51de4a"),
    name: "首页",
    key: "index",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T08:08:27.735Z"),
    updatedAt: ISODate("2023-07-18T03:16:59.334Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a676872f517ae48b51de50"),
    name: "系统管理",
    key: "sys",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T08:08:39.65Z"),
    updatedAt: ISODate("2023-07-06T13:26:57.493Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a676942f517ae48b51de56"),
    name: "用户管理",
    key: "sys:users",
    "parent_key": "sys",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T08:08:52.375Z"),
    updatedAt: ISODate("2023-07-07T02:37:51.339Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a676a62f517ae48b51de5c"),
    name: "查询",
    key: "sys:users:list",
    "parent_key": "sys:users",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T08:09:10.271Z"),
    updatedAt: ISODate("2023-07-09T13:53:59.963Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a676b72f517ae48b51de62"),
    name: "增加",
    key: "sys:users:create",
    "parent_key": "sys:users",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T08:09:27.173Z"),
    updatedAt: ISODate("2023-07-06T14:41:34.107Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a676ca2f517ae48b51de68"),
    name: "删除",
    key: "sys:users:delete",
    "parent_key": "sys:users",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T08:09:46.18Z"),
    updatedAt: ISODate("2023-07-06T14:41:40.693Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a676d82f517ae48b51de6e"),
    name: "重置密码",
    key: "sys:users:reset",
    "parent_key": "sys:users",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T08:10:00.965Z"),
    updatedAt: ISODate("2023-07-06T14:41:54.406Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6bce2210858fb6ec32f55"),
    name: "开发工具",
    key: "dev",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T13:08:50.188Z"),
    updatedAt: ISODate("2023-07-06T13:27:34.278Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6ec18bbab6245325057dc"),
    name: "图标列表",
    key: "dev:icon",
    "parent_key": "dev",
    auth: false,
    sortOrder: NumberInt("1"),
    status: true,
    createdAt: ISODate("2023-07-06T16:30:16.901Z"),
    updatedAt: ISODate("2023-07-07T03:22:12.747Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6eca8bbab6245325057ee"),
    name: "查询",
    key: "sys:permissions:list",
    "parent_key": "sys:permissions",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:32:40.326Z"),
    updatedAt: ISODate("2023-07-06T16:32:40.326Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6ecc0bbab6245325057f4"),
    name: "增加",
    key: "sys:permissions:create",
    "parent_key": "sys:permissions",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:33:04.782Z"),
    updatedAt: ISODate("2023-07-06T16:33:04.782Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6ecdebbab6245325057fa"),
    name: "删除",
    key: "sys:permissions:delete",
    "parent_key": "sys:permissions",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:33:34.613Z"),
    updatedAt: ISODate("2023-07-06T16:33:34.613Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6ecffbbab624532505800"),
    name: "修改",
    key: "sys:permissions:update",
    "parent_key": "sys:permissions",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:34:07.219Z"),
    updatedAt: ISODate("2023-07-06T16:34:07.219Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6f171d2fac9dd58d3025c"),
    name: "角色管理",
    key: "sys:roles",
    "parent_key": "sys",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:53:05.026Z"),
    updatedAt: ISODate("2023-07-06T16:53:05.026Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6f171d2fac9dd58d3025d"),
    name: "查询",
    key: "sys:roles:list",
    "parent_key": "sys:roles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:53:05.026Z"),
    updatedAt: ISODate("2023-07-06T16:53:05.026Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6f171d2fac9dd58d3025e"),
    name: "增加",
    key: "sys:roles:create",
    "parent_key": "sys:roles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:53:05.026Z"),
    updatedAt: ISODate("2023-07-06T16:53:05.026Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6f171d2fac9dd58d3025f"),
    name: "删除",
    key: "sys:roles:delete",
    "parent_key": "sys:roles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:53:05.026Z"),
    updatedAt: ISODate("2023-07-06T16:53:05.026Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a6f171d2fac9dd58d30260"),
    name: "更新",
    key: "sys:roles:update",
    "parent_key": "sys:roles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-06T16:53:05.026Z"),
    updatedAt: ISODate("2023-07-06T16:53:05.026Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7799604246540f7286663"),
    name: "权限管理",
    key: "sys:permissions",
    "parent_key": "sys",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T02:33:58.142Z"),
    updatedAt: ISODate("2023-07-07T02:33:58.142Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a77a0104246540f7286681"),
    name: "停用",
    key: "sys:permissions:stop",
    "parent_key": "sys:permissions",
    auth: true,
    sortOrder: null,
    status: true,
    createdAt: ISODate("2023-07-07T02:35:45.3Z"),
    updatedAt: ISODate("2023-07-07T02:35:45.3Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a784d104a94eaa96595abb"),
    name: "代码生成",
    key: "dev:codes",
    "parent_key": "dev",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T03:21:53.616Z"),
    updatedAt: ISODate("2023-07-07T03:21:53.616Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a784d104a94eaa96595abc"),
    name: "查询",
    key: "dev:codes:list",
    "parent_key": "dev:codes",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T03:21:53.616Z"),
    updatedAt: ISODate("2023-07-07T03:21:53.616Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a784d104a94eaa96595abd"),
    name: "创建",
    key: "dev:codes:singleCurdFrontAndBack",
    "parent_key": "dev:codes",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T03:21:53.616Z"),
    updatedAt: ISODate("2023-07-07T05:28:34.029Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a784d104a94eaa96595abe"),
    name: "删除",
    key: "dev:codes:delete",
    "parent_key": "dev:codes",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T03:21:53.617Z"),
    updatedAt: ISODate("2023-07-07T03:21:53.617Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a784d104a94eaa96595abf"),
    name: "批量删除",
    key: "dev:codes:deleteAll",
    "parent_key": "dev:codes",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T03:21:53.617Z"),
    updatedAt: ISODate("2023-07-07T05:28:50.417Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a633f97cdac3cb1bbbcf"),
    name: "页面示例",
    key: "pages",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:44:19.405Z"),
    updatedAt: ISODate("2023-07-07T05:44:19.405Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a67af97cdac3cb1bbbee"),
    name: "组件示例",
    key: "components",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:45:30.168Z"),
    updatedAt: ISODate("2023-07-07T05:45:30.168Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a695f97cdac3cb1bbbf4"),
    name: "图表地图",
    key: "components:echart",
    "parent_key": "components",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:45:57.351Z"),
    updatedAt: ISODate("2023-07-07T05:45:57.351Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a695f97cdac3cb1bbbf5"),
    name: "贵州地图",
    key: "components:echart:guizhouMap",
    "parent_key": "components:echart",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:45:57.351Z"),
    updatedAt: ISODate("2023-07-07T05:46:19.623Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a695f97cdac3cb1bbbf6"),
    name: "中国地图",
    key: "components:echart:chinaMap",
    "parent_key": "components:echart",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:45:57.351Z"),
    updatedAt: ISODate("2023-07-07T05:46:33.902Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a695f97cdac3cb1bbbf7"),
    name: "世界地图",
    key: "components:echart:worldMap",
    "parent_key": "components:echart",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:45:57.351Z"),
    updatedAt: ISODate("2023-07-07T05:46:44.697Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a695f97cdac3cb1bbbf8"),
    name: "折线图",
    key: "components:echart:line",
    "parent_key": "components:echart",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:45:57.352Z"),
    updatedAt: ISODate("2023-07-07T05:46:56.584Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a6e1f97cdac3cb1bbc16"),
    name: "饼图",
    key: "components:echart:pie",
    "parent_key": "components:echart",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:47:13.846Z"),
    updatedAt: ISODate("2023-07-07T05:47:20.216Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7a9dda971facd04696235"),
    name: "综合页面",
    key: "pages:all",
    "parent_key": "pages",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T05:59:57.159Z"),
    updatedAt: ISODate("2023-07-07T05:59:57.159Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7ab9da971facd04696299"),
    name: "富文本",
    key: "components:editor",
    "parent_key": "components",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T06:07:25.737Z"),
    updatedAt: ISODate("2023-07-07T06:07:25.737Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7abb7a971facd0469629f"),
    name: "Tinymce",
    key: "components:editor:Tinymce",
    "parent_key": "components:editor",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T06:07:51.383Z"),
    updatedAt: ISODate("2023-07-07T06:08:04.393Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7abe1a971facd046962ab"),
    name: "Vditor",
    key: "components:editor:Vditor",
    "parent_key": "components:editor",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T06:08:33.975Z"),
    updatedAt: ISODate("2023-07-07T06:08:33.975Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7abefa971facd046962b1"),
    name: "VMdEditor",
    key: "components:editor:VMdEditor",
    "parent_key": "components:editor",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T06:08:47.735Z"),
    updatedAt: ISODate("2023-07-07T06:08:47.735Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7cbe6b85fe16110610cf5"),
    name: "操作日志",
    key: "sys:users_opt_logs",
    "parent_key": "sys",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T08:25:10.645Z"),
    updatedAt: ISODate("2023-07-07T08:25:10.645Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7cbe6b85fe16110610cf6"),
    name: "查询",
    key: "sys:users_opt_logs:list",
    "parent_key": "sys:users_opt_logs",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T08:25:10.645Z"),
    updatedAt: ISODate("2023-07-07T08:25:10.645Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7cbe6b85fe16110610cf7"),
    name: "增加",
    key: "sys:users_opt_logs:create",
    "parent_key": "sys:users_opt_logs",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T08:25:10.645Z"),
    updatedAt: ISODate("2023-07-07T08:25:10.645Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7cbe6b85fe16110610cf8"),
    name: "删除",
    key: "sys:users_opt_logs:delete",
    "parent_key": "sys:users_opt_logs",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T08:25:10.645Z"),
    updatedAt: ISODate("2023-07-07T08:25:10.645Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7cbe6b85fe16110610cf9"),
    name: "更新",
    key: "sys:users_opt_logs:update",
    "parent_key": "sys:users_opt_logs",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T08:25:10.645Z"),
    updatedAt: ISODate("2023-07-07T08:25:10.645Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64a7d30aacc04191a405fb61"),
    name: "批量删除",
    key: "sys:users_opt_logs:deleteAll",
    "parent_key": "sys:users_opt_logs",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    createdAt: ISODate("2023-07-07T08:55:38.696Z"),
    updatedAt: ISODate("2023-07-09T13:57:08.966Z"),
    disabled: false
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64aabc5804fd30a2ac31c2a9"),
    name: "导出",
    key: "sys:users_opt_logs:export",
    "parent_key": "sys:users_opt_logs",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-07-09T13:55:36.412Z"),
    updatedAt: ISODate("2023-07-09T13:55:36.412Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64aabc6b04fd30a2ac31c2b5"),
    name: "导入",
    key: "sys:users_opt_logs:import",
    "parent_key": "sys:users_opt_logs",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-07-09T13:55:55.856Z"),
    updatedAt: ISODate("2023-07-09T13:55:55.856Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64b4c7dad6ac9bf24cecc6d1"),
    name: "资源管理",
    key: "sys:resources",
    "parent_key": "sys",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-07-17T04:47:22.912Z"),
    updatedAt: ISODate("2023-07-17T04:47:22.912Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64b4c7dad6ac9bf24cecc6d2"),
    name: "查询",
    key: "sys:resources:list",
    "parent_key": "sys:resources",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-07-17T04:47:22.913Z"),
    updatedAt: ISODate("2023-07-17T04:47:22.913Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64b4c7dad6ac9bf24cecc6d3"),
    name: "增加",
    key: "sys:resources:create",
    "parent_key": "sys:resources",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-07-17T04:47:22.913Z"),
    updatedAt: ISODate("2023-07-17T04:47:22.913Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64b4c7dad6ac9bf24cecc6d4"),
    name: "删除",
    key: "sys:resources:delete",
    "parent_key": "sys:resources",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-07-17T04:47:22.913Z"),
    updatedAt: ISODate("2023-07-17T04:47:22.913Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64b4c7dad6ac9bf24cecc6d5"),
    name: "更新",
    key: "sys:resources:update",
    "parent_key": "sys:resources",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-07-17T04:47:22.913Z"),
    updatedAt: ISODate("2023-07-17T04:47:22.913Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfada9c3794728bc32ac40"),
    name: "博客管理",
    key: "blog",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:26:49.389Z"),
    updatedAt: ISODate("2023-08-06T14:26:49.389Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfade2c3794728bc32ac4c"),
    name: "博文管理",
    key: "blog:blog_articles",
    "parent_key": "blog",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:27:46.488Z"),
    updatedAt: ISODate("2023-08-06T14:27:46.488Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfade2c3794728bc32ac4d"),
    name: "查询",
    key: "blog:blog_articles:list",
    "parent_key": "blog:blog_articles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:27:46.488Z"),
    updatedAt: ISODate("2023-08-06T14:27:46.488Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfade2c3794728bc32ac4e"),
    name: "增加",
    key: "blog:blog_articles:create",
    "parent_key": "blog:blog_articles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:27:46.489Z"),
    updatedAt: ISODate("2023-08-06T14:27:46.489Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfade2c3794728bc32ac4f"),
    name: "删除",
    key: "blog:blog_articles:delete",
    "parent_key": "blog:blog_articles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:27:46.489Z"),
    updatedAt: ISODate("2023-08-06T14:27:46.489Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfade2c3794728bc32ac50"),
    name: "更新",
    key: "blog:blog_articles:update",
    "parent_key": "blog:blog_articles",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:27:46.489Z"),
    updatedAt: ISODate("2023-08-06T14:27:46.489Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfae09c3794728bc32ac5c"),
    name: "作品管理",
    key: "blog:portfolios",
    "parent_key": "blog",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:28:25.623Z"),
    updatedAt: ISODate("2023-08-06T14:28:25.623Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfae09c3794728bc32ac5d"),
    name: "查询",
    key: "blog:portfolios:list",
    "parent_key": "blog:portfolios",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:28:25.623Z"),
    updatedAt: ISODate("2023-08-06T14:28:25.623Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfae09c3794728bc32ac5e"),
    name: "增加",
    key: "blog:portfolios:create",
    "parent_key": "blog:portfolios",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:28:25.623Z"),
    updatedAt: ISODate("2023-08-06T14:28:25.623Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfae09c3794728bc32ac5f"),
    name: "删除",
    key: "blog:portfolios:delete",
    "parent_key": "blog:portfolios",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:28:25.623Z"),
    updatedAt: ISODate("2023-08-06T14:28:25.623Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64cfae09c3794728bc32ac60"),
    name: "更新",
    key: "blog:portfolios:update",
    "parent_key": "blog:portfolios",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-06T14:28:25.624Z"),
    updatedAt: ISODate("2023-08-06T14:28:25.624Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64d1d19153d1c684a73c8412"),
    name: "留言管理",
    key: "blog:messages",
    "parent_key": "blog",
    auth: false,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-08T05:24:33.901Z"),
    updatedAt: ISODate("2023-08-08T05:24:33.901Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64d1d19153d1c684a73c8413"),
    name: "查询",
    key: "blog:messages:list",
    "parent_key": "blog:messages",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-08T05:24:33.901Z"),
    updatedAt: ISODate("2023-08-08T05:24:33.901Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64d1d19153d1c684a73c8414"),
    name: "增加",
    key: "blog:messages:create",
    "parent_key": "blog:messages",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-08T05:24:33.902Z"),
    updatedAt: ISODate("2023-08-08T05:24:33.902Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64d1d19153d1c684a73c8415"),
    name: "删除",
    key: "blog:messages:delete",
    "parent_key": "blog:messages",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-08T05:24:33.902Z"),
    updatedAt: ISODate("2023-08-08T05:24:33.902Z")
}]);
db.getCollection("permissions").insert([{
    _id: ObjectId("64d1d19153d1c684a73c8416"),
    name: "更新",
    key: "blog:messages:update",
    "parent_key": "blog:messages",
    auth: true,
    sortOrder: NumberInt("0"),
    status: true,
    disabled: false,
    createdAt: ISODate("2023-08-08T05:24:33.902Z"),
    updatedAt: ISODate("2023-08-08T05:24:33.902Z")
}]);

// ----------------------------
// Collection structure for portfolios
// ----------------------------
db.getCollection("portfolios").drop();
db.createCollection("portfolios");

// ----------------------------
// Documents of portfolios
// ----------------------------
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2ef7797ad53aea60d4e7f"),
    title: "ZY.Node.Mongodb",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    abstract: "基于 Node.js、Express.js 和 MongoDB 通过Mongoose驱动进行 REST API 开发的轻量级样板。集成了Swagger UI、JWT、session、发送邮箱验证、日志管理、统一的预定义状态码响应格式等，对于为前端平台构建纯净的Web API非常有用。",
    content: "# ZY.Node.Mongodb \n\n- https://gitee.com/Z568_568/node.mongodb.git\n\n- https://github.com/ZHYI-source/ZY.Node.Mongodb.git\n\n#### 项目介绍\n\n---\n- 基于 Node.js、Express.js 和 MongoDB 通过Mongoose驱动进行 REST API 开发的轻量级样板。\n  集成了Swagger UI、JWT、session、发送邮箱验证、日志管理、统一的预定义状态码响应格式等，对于为前端平台构建纯净的Web API非常有用。\n\n- 该项目我尝试做出轻松维护代码结构的项目样板，因为任何初学者也可以采用该流程并开始构建API。 \n\n- 项目开放，可以提出建议、错误的issues。\n\n\n#### 项目特点\n\n---\n\n- 轻量级Node.js项目提供Restful API\n- 数据库采用 Mongodb, 通过Mongoose驱动。\n- CRUD操作示例\n- 跨域处理\n- 日志管理\n- 具有恰当的状态代码的预定义响应结构\n- 全局错误处理\n- 增加express-validator请求参数校验\n- jwt验证 用户权限中间件分离\n- 基本身份验证（采用bcrypt单向Hash加密算法加密密码进行注册/登录）\n- Token生成和校验请求头的authorization \n- 集成swagger-ui\n- 增加邮件验证码通知\n- session 验证码校验\n- 采用jest 接口单元测试\n- 集成定时任务\n\n\n#### 如何获得并运行项目：\n\n---\n\n> 首先确保您系统中安装了[Mongodb](http://www.mongodb.org/)，和[Nodejs](http://nodejs.org/ \"Nodejs\")，一起准备完善之后。按照如下操作。\n> 有的同学启动会报错可能是依赖包的版本问题需要注意\n> 我的环境配置供参考 \n> - Node.js 14.18.1+ \n> - MongoDB 5.1+\n\n**1，clone代码**\n\n >  `git clone https://gitee.com/Z568_568/node.mongodb.git`\n \n**2，安装依赖**\n\n >  `npm install`\n\n**3，启动程序**\n\n >  `开发环境：npm run dev  基于 nodemon 热更新`\n >  `生产环境：npm run start`\n\n**4，启动成功示例**\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545365431.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545365431.png\" alt=\"1691545365431.png\" width=\"100%\">\n</a>\n\n#### 如何增加新的model\n\n---\n只需在 `/models/v1/mapping/` 中创建一个新文件，\n然后在控制器`/controllers/v1/`中创建一个对应新模型的新控制器的并使用。\n\n#### 如何增加新的路由router\n\n---\n只需在 `/routes/v1/` 中创建一个新文件，并且引入它对应的controllers进行使用，routes下面的文件 将被 `mount-routes`插件自动解析并以文件名作为api根路径，\n开发环境下会打印在终端上：\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545405853.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545405853.png\" alt=\"1691545405853.png\" width=\"100%\">\n</a>\n\n#### 如何增加新的控制器\n\n---\n只需在 `/controllers/v1/` 中创建一个新文件即可，并且引入相关模型进行使用\n\n\n#### 如何理解内置的登录注册逻辑\n\n```js\n\n/*\n* TODO: 注册登录大概逻辑：\n*       1.用户注册 - 用户信息入库 - 发送验证码 - 校验验证码\n*                                   |\n*                           验证码发送失败、验证码失效或者校验失败 - 重新发送或输入验证码 - 校验验证码\n*   *\n*       2.用户登录 -（账号、密码、验证状态都校验通过）- 发Token\n*                       |\n*                 验证状态不通过 - 重新校验验证码/重发验证码 - 校验验证码 - 发Token\n* */\n\n```\n\n#### 项目结构\n\n---\n\n```sh\n.\n├── app.js                  //入口文件\n├── package.json            //依赖配置文件\n├── .env.development        //开发环境配置\n├── .env.production         //生产环境配置\n├── config                  //项目配置\n│   ├── db.config.js\n│   ├── swagger.config.js\n│   └── ...\n├── controllers             //控制模块（业务处理）\n│   └── v1\n│       ├── UserController.js\n│       └── ...\n├── models                  //模型模块（建表）\n│   └── v1\n│       ├── user.test.js        /模型统一导出\n│       └── mapping\n│           ├──UserModel.js\n│           └── ...\n├── routes                  //路由（配置实际API地址路径）\n│     └── v1\n│         ├── user.test.js\n│         ├── user.js\n│         └── ...\n├── db                      //mongodb数据库连接\n│   ├── user.test.js              \n│   └── ...\n├── middlewares             //中间件\n│   ├── jwt.js\n│   ├── permissions.js\n│   ├── session.js\n│   └── ...\n├── logs                    //日志\n│   ├── info.log\n│   ├── error.log\n│   └── ...\n└── utils                   //辅助工具\n    ├── utils.apiResponse.js\n    ├── utils.mailer.js.js\n    └── ...\n```\n\n#### 关于作者\n\n---\n创建和维护由\n - [@ZY_GITEE](https://gitee.com/Z568_568) \n - [@ZY_GITHUB](https://github.com/ZHYI-source)\n - 想咨询其他或合作请发我邮箱1840354092@qq.com\n - 到我主页留言[http://www.zhouyi.run](http://www.zhouyi.run/#/About)\n - 我的博客站点[http://blog.zhouyi.run](http://blog.zhouyi.run/#/)\n\n#### 感谢作者\n如果该项目对你有帮助的话 可以通过扫下面二维码打赏来感谢我的努力和花费的时间来创建这个有用的项目。\n\n<div>\n   <img src=\"public/md/zfb.jpg\" width=\"100\"> \n   <img src=\"public/md/vx.jpg\" width=\"100\"> \n</div>\n\n#### License\n\n---\n\n[MIT](https://choosealicense.com/licenses/mit/)\n\n```lc\nMIT License\n\nCopyright (c) 2023 周Y\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\n```\n\n\n \n",
    sourceUrl: "https://gitee.com/Z568_568/node.mongodb.git",
    demoUrl: "https://gitee.com/Z568_568/node.mongodb.git",
    category: "MongoDB",
    framework: "Node.js、Express.js、MongoDB",
    recommended: true,
    status: true,
    createdAt: ISODate("2023-08-09T01:44:23.703Z"),
    updatedAt: ISODate("2023-08-09T01:44:23.703Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2eff397ad53aea60d4ea3"),
    title: "ZY.Node.Mysql",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    abstract: "基于 Node.js、Express.js 和 Mysql 通过Sequalize 驱动进行 REST API 开发的轻量级样板。集成了Swagger UI、JWT、session、登录token、日志管理、统一的预定义状态码响应格式等，对于为前端平台构建纯净的Web API非常有用。",
    content: "\n \n# 书中枫叶’Express-Mysql-Server\n\n`Express-Mysql-Server` 项目是一套 集成 `express` `sequelize` `swagger-ui` 框架 api 模板，\n\n<!-- PROJECT SHIELDS -->\n\n[![star](https://gitee.com/Z568_568/zy-express-sequelize-mysql/badge/star.svg?theme=dark)](https://gitee.com/Z568_568/zy-express-sequelize-mysql/stargazers)\n[![fork](https://gitee.com/Z568_568/zy-express-sequelize-mysql/badge/fork.svg?theme=dark)](https://gitee.com/Z568_568/zy-express-sequelize-mysql/members)\n\n<!-- PROJECT LOGO -->\n<br />\n\n<p align=\"center\">\n  <a href=\"https://gitee.com/Z568_568/zy-express-sequelize-mysql.git\">\n    <img src=\"https://gitee.com/Z568_568/zy-express-sequelize-mysql/widgets/widget_3.svg\" alt=\"Logo\" width=\"130\" height=\"95\">\n  </a>\n\n\n<h3 align=\"center\">\"Express-Mysql-Server\"</h3>\n  <p align=\"center\">\n    一个 \"开箱即用\" node接口服务模板去快速开始你的项目！\n\n[comment]: <> (    <br />)\n\n[comment]: <> (    <a href=\"https://github.com/shaojintian/Best_README_template\"><strong>探索本项目的文档 »</strong></a>)\n\n[comment]: <> (    <br />)\n\n[comment]: <> (    <br />)\n\n[comment]: <> (    <a href=\"https://github.com/shaojintian/Best_README_template\">查看Demo</a>)\n\n[comment]: <> (    ·)\n\n[comment]: <> (    <a href=\"https://github.com/shaojintian/Best_README_template/issues\">报告Bug</a>)\n\n[comment]: <> (    ·)\n\n[comment]: <> (    <a href=\"https://github.com/shaojintian/Best_README_template/issues\">提出新特性</a>)\n  </p>\n\n\n</p>\n\n\n \n***\n## 目录\n\n- [详细上手指南](#详细上手指南)\n    - [开发前的配置要求](#开发前的配置要求)\n    - [安装步骤](#安装步骤)\n- [文件目录说明](#文件目录说明)\n- [部署](#部署)\n- [使用到的框架](#使用到的框架)\n- [版本控制](#版本控制)\n- [作者](#作者)\n\n***\n### 详细上手指南\n\n###### 开发前的配置要求\n\n```shell\n1. node.js 环境\n2. Express.js 框架\n3. IDEA / WebStorm / VS Code 开发工具\n4. Navicat 可视化数据库\n5. apiPost / postman 接口调试工具\n```\n***\n###### **安装步骤**\n\n1. 克隆本项目代码\n\n```sh\ngit clone https://gitee.com/Z568_568/zy-express-sequelize-mysql.git\n```\n2. 安装依赖\n\n```sh\nnpm install\n```\n3.打开 `Navicat软件` 创建数据库  `mk_db`,运行`sql文件`\n\n4.配置数据库信息 `文件 config/db.config.js`\n\n```sh\nHOST: \"localhost\",\n    USER: \"root\",\n    PASSWORD: \"root\",\n    DB: \"mk_db\",\n    dialect: \"mysql\",\n    pool: {\n        max: 5,\n        min: 0,\n        acquire: 30000,\n        idle: 10000\n    },\n ```\n5. 配置文件上传地址信息 `文件 config/upload.config.js`\n\n```sh\nmodule.exports = {\n    \"baseURL\":\"http://localhost:3001\",\n}\n```\n6.启动项目\n`````sh\nnodemon app.js (热加载)  or  node app.js\n`````\n7.启动成功示例\n```shell\n项目启动成功: http://localhost:3001\n接口文档地址: http://localhost:3001/swagger\n```\n8.测试接口: 打开`postman / apiPost 软件` 输入`获取验证码接口地址`\n<br/>\n<br/>\n**注意：** 测试接口中 `'/api/private/' 开头的接口地址都需要进行token验证，在请求头 header中加入 authorization 并携带 token`\n<br/>\n<br/>\n获取 token 需要在 登录接口进行登录后`用户名：admin  密码：123456` 返回 token\n\n```shell\neg:获取验证码接口 （无需token验证）\n\n GET http://localhost:3001/api/public/v1/captcha \n```\n```shell\n响应结果是 Svg 格式\n**********************\n{\n\t\"data\": {\n\t\t\"codeSvg\": \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"....></svg>\",\n\t\t\"codeText\": \"06PEo3AZTK41g7oA7paQAg==\",\n\t\t\"key\": 1649573015653\n\t},\n\t\"meta\": {\n\t\t\"msg\": \"获取验证码成功\",\n\t\t\"status\": 200\n\t}\n}\n```\n9.上面的步骤都已经成功，你就可以开始 增加模块进行 接口开发 并且加上规范的swagger注解后 自动生成接口文档。快去试试吧\n\n***\n### 文件目录说明\n\n```\nfiletree \n\n├── README.md\n├── cheese.log                日志记录文件\n├── app.js                    入口文件\n├── .env                      环境配置文件\n├── /utils/                   工具方法文件夹\n│  ├── /swagger/              swagger配置文件夹\n│  │  ├── utils.resextra.js   统一响应格式\n│  │  └── utils.loger.js      日志记录配置文件\n│  │  └── ...\n├── /uploads_files/           上传图片存放的文件夹\n│  │  │ \n├── /routes/                  接口路由文件夹\n│  ├── /api/                  api文件夹\n│  │  ├── /private/           存放需要权限token的接口文件夹\n│  │  │  ├── ...    \n│  │  │  │ \n│  │  └── /public/            存放无需token校验的接口\n│  │  │  ├── ...\n│  │  │  │ \n├── /models/                  数据模型和定义\n│  ├── index.js               sequelize 实例 和 模型主入口\n│  ├── ...\n│  │ \n├── /dao/                     数据库查询方法\n│  ├── DAO                    公共数据库查询方法\n│  ├── ...\n├── /controllers/             控制层 处理具体业务\n│  ├── ...\n└──/config/                   数据库等其他配置文件\n│  ├── ...\n└──└──\n \n\n```\n\n### 部署\n\n暂无\n\n### 使用到的框架\n\n- [Express.js](https://expressjs.com/zh-cn/)\n- [Sequelize](https://www.sequelize.com.cn/)\n- [Swagger-ui](http://www.npmdoc.org/swagger-node-expresszhongwenwendangswagger-node-express-jszhongwenjiaochengjiexi.html)\n\n### 版本控制\n\n该项目使用Git进行版本管理。\n\n### 作者\n\n1840354092@qq.com\n\n知乎:芒果快熟  &ensp; qq:1840354092\n\n\n[comment]: <> (### 版权说明)\n\n\n\n \n",
    sourceUrl: "https://gitee.com/Z568_568/zy-express-sequelize-mysql.git",
    demoUrl: "https://gitee.com/Z568_568/zy-express-sequelize-mysql.git",
    category: "Mysql",
    framework: "Node.js、Express.js 和 Mysql",
    recommended: false,
    status: true,
    createdAt: ISODate("2023-08-09T01:46:27.859Z"),
    updatedAt: ISODate("2023-08-09T09:27:14.922Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f1e097ad53aea60d4eb1"),
    title: "个人主页模板ZY-Portofolio",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545619525.png",
    abstract: "基于vue3+js实现个人主页模板ZY-Portofolio",
    content: "\n# zy-portofolio\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545619525.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545619525.png\" alt=\"1691545619525.png\" width=\"100%\">\n</a>\n\n## Project setup\n```\nnpm install\n```\n\n### Compiles and hot-reloads for development\n```\nnpm run serve\n```\n\n### Compiles and minifies for production\n```\nnpm run build\n```\n\n### Lints and fixes files\n```\nnpm run lint\n```\n\n### Customize configuration\nSee [Configuration Reference](https://cli.vuejs.org/config/).\n",
    sourceUrl: "https://gitee.com/Z568_568/zy-portofolio.git",
    demoUrl: "https://gitee.com/Z568_568/zy-portofolio.git",
    category: "个人主页",
    framework: "vue3+js",
    recommended: true,
    status: true,
    createdAt: ISODate("2023-08-09T01:54:40.202Z"),
    updatedAt: ISODate("2023-08-09T02:16:13.879Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f28997ad53aea60d4ec7"),
    title: "个人文件管理+图床管理服务系统",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546113455.png",
    abstract: "🎉轻量级个人文件管理、图床管理服务系统，对文本文件、图片、视频、音频、音乐等各类文件的存储管理，基于node.js、mysql、vue2实现。内置用户登录和其他相关接口可扩展功能",
    content: "# 个人文件管理+图床管理服务系统\n\n#### 项目介绍\n\n---\n🎉开源轻量级个人文件管理、图床管理服务系统，对文本文件、图片、视频、音频、音乐等各类文件的存储管理支持多图上传等功能，基于node.js、mysql、vue2实现。内置用户登录和其他相关接口可扩展功能\n\n[🌍项目源码](https://gitee.com/Z568_568/zy.files.sys.git)\n\n[🌍在线预览demo：http://files.zhouyi.run/#/](http://files.zhouyi.run/#/)\n\n#### 项目截图\n\n---\n![Description](http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546113455.png)\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546169339.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546169339.png\" alt=\"1691546169339.png\" width=\"100%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546174433.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546174433.png\" alt=\"1691546174433.png\" width=\"100%\">\n</a>\n\n#### 安装教程\n\n---\n\n1. clone代码\n\n`git clone https://gitee.com/Z568_568/zy.files.sys.git`\n\n2. client安装启动 **客户端操作口令：amdin**\n\n```js\ncd client\nnpm i\nnpm run serve\n```\n\n3. server安装启动\n\n- 新建数据库 `mg_open`\n- 找到 `server/sql/mg_open.sql` 并且运行sql文件\n- 找到 `server/config/index.js` 配置数据库\n\n```js\ncd server\nnpm i\nnodemon app\n```\n\n4. 测试功能\n\n- 上传文件后会在 server 端  `server/uploads_files/files` 中查看该文件\n\n#### 关于作者\n\n---\n创建和维护由\n\n- [@ZY_GITEE](https://gitee.com/Z568_568)\n- [@ZY_GITHUB](https://github.com/ZHYI-source)\n- 想咨询其他或合作请发我邮箱1840354092@qq.com\n- 到我主页留言 [http://www.zhouyi.run](http://www.zhouyi.run/#/About)\n- 我的博客站点 [http://blog.zhouyi.run](http://blog.zhouyi.run/#/)\n\n#### 感谢作者\n\n如果该项目对你有帮助的话 可以通过扫下面二维码打赏来感谢我的努力和花费的时间来创建这个有用的项目。\n\n<div>\n   <a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546198698.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546198698.png\" alt=\"1691546198698.png\" width=\"100\">\n</a> \n   <a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546208890.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546208890.png\" alt=\"1691546208890.png\" width=\"100\">\n</a>\n</div>\n",
    sourceUrl: "https://gitee.com/Z568_568/zy.files.sys.git",
    demoUrl: "http://files.zhouyi.run",
    category: "文件管理",
    framework: "node.js、mysql、vue2",
    recommended: true,
    status: true,
    createdAt: ISODate("2023-08-09T01:57:29.791Z"),
    updatedAt: ISODate("2023-08-09T02:16:03.719Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f38497ad53aea60d4edf"),
    title: "Vue3-Antd-Plus",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546282594.png",
    abstract: "👍 提供了一个基于最新的技术栈（Vue 3、Vite、Ant Design Vue 3、JavaScript、Pinia、Hooks和vue-router）的完整开发模板，旨在帮助初学者更快地入门并加入团队开发。该模板包含了一系列功能模块，如大屏展示、自定义主题、角色用户、菜单授权、数据权限和系统参数等，并且所有模块都经过了完整的组件封装",
    content: "# ZY·Admin【完整版】 Vue3-Antd-Plus (文档更新中)\n\n<p align=\"center\">\n  <a href=\"https://gitee.com/Z568_568/mango-blog-system.git\">\n    <img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546343361.png\" alt=\"Logo\" width=\"150\" height=\"210\">\n \n  </a>\n\n<h3 align=\"center\">\" 🔥 Vue3-Antd-Plus \"</h3>\n  <p align=\"center\">\n    基于 Vue3 + js 现代化的管理系统【完整版】\n    <br />\n    <a href=\"https://gitee.com/Z568_568/vue3-antd-plus.git\" target=\"_blank\"><strong>探索本项目的源码 »</strong></a>\n    <br />\n\n[comment]: <> (<a href='https://gitee.com/Z568_568/ZY-Admin/stargazers'><img src='https://gitee.com/Z568_568/ZY-Admin/badge/star.svg?theme=dark' alt='star'></img></a>)\n\n[comment]: <> (<a href='https://gitee.com/Z568_568/ZY-Admin/members'><img src='https://gitee.com/Z568_568/ZY-Admin/badge/fork.svg?theme=dark' alt='fork'></img></a>)\n</p>\n</p>\n\nVue3-Antd-Plus是一个现代化的管理系统，提供了一系列功能丰富的组件和工具，帮助开发者快速搭建和开发管理后台应用。\n\n**基于 Vue 3 + JavaScript + Pinia +Vite + Ant Design Vue 构建 管理后台+web前台+Node后端代码一整套**  \n\n 做这个项目主要原因：全网大都是 Vue3 + TypeScript 版本的,so so 决定做一个JavaScript版本的供大家使用\n\n![Description](http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546282594.png)\n\n\n---\n\n\n## 截图(管理后台+web前台)\n![Description](http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546282594.png)\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546382159.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546382159.png\" alt=\"1691546382159.png\" width=\"100%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546404541.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546404541.png\" alt=\"1691546404541.png\" width=\"100%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546426903.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546426903.png\" alt=\"1691546426903.png\" width=\"100%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546440411.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546440411.png\" alt=\"1691546440411.png\" width=\"100%\">\n</a>\n\n### 功能：\n\n*   [x] 前台端- 整体框架已搭建好\n*   [x] 前台端- 接口已经接入\n*   [x] 前台端- axios全局统一错误处理\n*   [x] 管理端- 大屏数据可视化\n*   [x] 管理端- 集成各类富文本编辑器\n*   [x] 管理端- 自定义主题、菜单权限、按钮权限\n*   [x] 管理端- 登录、注册、菜单、tabs顶栏菜单、全局搜索菜单\n*   [x] 管理端- 用户管理、角色管理、权限管理、自定义指令权限判断\n*   [x] 管理端- 用户操作日志项目代码生成器（前后端代码文件）、图标选择器\n*   [x] 管理端- 错误统一处理\n*   [x] 管理端- 表格导入、导出、下载\n*   [x] 管理端- 图片文件音频上传、下载、预览...\n*   [x] 服务端- 项目结构清晰\n*   [x] 服务端- 集成邮件发送、定时器任务、统一响应数据格式\n*   [x] 服务端- JWT验证、接口数据权限验证、角色权限验证\n*   [x] 服务端- express-validator统一的参数验证\n*   [x] 服务端- 接口日志记录、表格解析等等...\n\n\n## 功能特性\n\n- 使用 Vue 3 和 Vite 构建，具备高效的开发体验和优秀的性能表现\n- 集成了 Ant Design Vue 组件库，提供美观的 UI 界面和丰富的组件选项 和主题切换\n- 使用 Vue Router 实现路由管理，支持多层级路由和动态路由\n- 使用 Axios 处理 HTTP 请求，与后端进行数据交互\n- 集成 ECharts 图表库，展示数据统计和可视化效果\n- 使用 Pinia 进行状态管理，提供了一种响应式的数据流方案\n- 集成 Tinymce 富文本编辑器和 Vditor Markdown 编辑器，满足不同的编辑需求\n- 使用 hotkeys-js 提供快捷键支持，增强用户操作体验\n- 使用 Lodash 提供常用工具函数，简化开发流程\n- 集成了测试工具集 @vue/test-utils 和 vitest，方便进行单元测试\n- 更多....\n\n#### 我的其他开源项目\n>[😜博客全栈系统 vue2 + node.js](https://gitee.com/Z568_568/all-blog-sys.git)\n \n>[个人文件管理+图床管理服务系统](https://gitee.com/Z568_568/zy.files.sys.git)\n \n>[node+mysql后端api基础服务模板](https://gitee.com/Z568_568/zy-express-sequelize-mysql)\n\n>[node+mongodb开发REST API 的轻量级样板](https://gitee.com/Z568_568/node.mongodb)\n\n\n## 快速开始\n\n1. 克隆本仓库到本地\n\n   ```\n   https://gitee.com/Z568_568/vue3-antd-plus.git\n   ```\n\n2. admin/client/server安装依赖\n\n   ```\n   npm install\n   ```\n\n3. admin/client/server本地启动\n\n   ```\n   npm run dev\n   ```\n\n4. 打包生产环境\n\n   ```\n   npm run build\n   ```\n## admin添加路由页面\n\n```\n/**\n * 在主框架内显示\n * 路由配置说明\n * {\n      path: '/dir-demo-info',    // 页面地址（唯一）\n      name: 'dir-demo-info',     // 页面名称（唯一）\n      hidden: false,              // 隐藏（不展示在侧边栏菜单）\n      meta: {\n          title: '用户管理',       // 页面标题\n          icon: 'yonghuguanli',  // 页面图标\n          cache: true,          // 页面是否进行缓存 默认true\n          link: false,           // 页面是否是外链 默认false\n          frameSrc: false,       // 页面是否是内嵌 默认false\n          requiresAuth: true,   // 页面是否是需要登录 默认true\n          perms: [               // 页面的操作的权限列表\n              'sys:user:list',   // 查询\n              'sys:user:create', // 增加\n              'sys:user:update', // 更新\n              'sys:user:delete', // 删除\n          ],\n      },\n      component: () => import('@/views/sys/user/dir-user-info.vue'),\n   }\n *\n */\n```\n \n....\n\n\n## 贡献\n\n欢迎对Vue3-Antd-Plus项目的改进和完善，如果您发现任何错误或有任何建议，请随时提交问题和拉取请求。\n\n## 版权\n\nVue3-Antd-Plus是一个开源项目，根据MIT许可证发布。有关更多信息，请参阅LICENSE文件。\n\n\n\n",
    sourceUrl: "https://gitee.com/Z568_568/vue3-antd-plus.git",
    demoUrl: "https://gitee.com/Z568_568/vue3-antd-plus.git",
    category: "后台管理系统、大屏数据可视化",
    framework: "Vue 3、Vite、Ant Design Vue 3、JavaScript、Pinia、Hooks和vue-router",
    recommended: true,
    status: true,
    createdAt: ISODate("2023-08-09T02:01:40.456Z"),
    updatedAt: ISODate("2023-08-09T02:16:08.554Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f43a97ad53aea60d4ef1"),
    title: "个人博客完整版",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546535717.png",
    abstract: "😜博客全栈系统，个人blog+vue2 + node.js + express +sequalize+ mysql+uniapp 包含前端博客展示、后台管理、node后端服务。包括前后台完整基础功能，微信小程序，H5，web前台站点一键置灰，配置新年特效，支持移动端适配,excel数据导入/导出，sql文件已附上，整套博客系统开箱即用,已完成代码生成器，权限模块，菜单管理等等",
    content: "\n\n\n<br />\n\n<p align=\"center\">\n  <a href=\"https://gitee.com/Z568_568/mango-blog-system.git\">\n    <img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546637478.png\" alt=\"Logo\" width=\"100\" height=\"80\">\n  </a>\n \n<h3 align=\"center\">\" 🔥 MG'Blog \"</h3>\n  <p align=\"center\">\n    一个 \"开箱即用\" 个人博客全栈系统项目！\n    <br />\n    <a href=\"https://gitee.com/Z568_568/all-blog-sys\" target=\"_blank\"><strong>探索本项目的源码 »</strong></a>\n    <br />\n    <br />\n    <a href=\"http://blog.zhouyi.run/#/\" target=\"_blank\"> 👀 前台预览</a>\n    ·\n    <a href=\"http://admin.blog.zhouyi.run/#/index\" target=\"_blank\"> 👀 管理端预览</a>\n</p>\n\n</p>\n\n#### 🥯 小程序预览\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546612429.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546612429.png\" alt=\"1691546612429.png\" width = \"400\" height = \"150\">\n</a>\n\n##### 🥯 QQ群：529675917 由于很多小伙伴对项目的启动安装有问题不明白，可以添加QQ群和大家一起交流解决相关问题哈\n\n\n\n#### 🥯 介绍\n\n>  芒果’个人博客系统，包括前后台完整基础功能，小程序，简洁的web前台站点一键配置，响应式；\n>  管理端常用增·查·改页面代码自动生成即可，文章统计归档、数据excel批量导入/导出，sql文件已附上，开箱即用，如果对你有帮助，留个 **star⭐⭐** 再走呗\n- ⭐项目面向前端学习node.js，mysql等后端基础和小程序学习者\n- ⭐有好的建议欢迎交流学习 1840354092@qq.com\n- ⭐项目启动安装有问题可以留言，会及时解答\n\n```\n   前台：Gblog \n   微信小程序：uniApp + uView \n   管理端：d2-admin \n   Node服务端: express + 数据库ORM（sequelize框架）\n```\n<!-- PROJECT SHIELDS -->\n\n[![star](https://gitee.com/Z568_568/all-blog-sys/badge/star.svg?theme=dark)](https://gitee.com/Z568_568/all-blog-sys/stargazers)\n[![fork](https://gitee.com/Z568_568/all-blog-sys/badge/fork.svg?theme=dark)](https://gitee.com/Z568_568/all-blog-sys/members)\n\n<!-- PROJECT LOGO -->\n\n#### 其他可能需要的资源 \n\n>[✨Vue3-Antd-Plus基于Vue3、Vite、JavaScript、管理后台完整开发模板](https://gitee.com/Z568_568/vue3-antd-plus.git)\n\n>[ZY.Hexo.Blog响应式简约清爽款个人博客](https://gitee.com/Z568_568/zy-hexo-blog.git)\n\n>[轻量级个人文件管理、图床管理服务系统](https://gitee.com/Z568_568/zy.files.sys.git)\n\n>[node+mongodb开发REST API 的轻量级样板 ✨推荐](https://gitee.com/Z568_568/node.mongodb)\n\n>[node+mysql后端api基础服务模板](https://gitee.com/Z568_568/zy-express-sequelize-mysql)\n\n\n***\n\n#### 功能列表及更新\n\n- [x] 用户管理\n- [x] 菜单管理\n- [x] 角色管理 ⛷\n- [x] 文章管理\n- [x] 评论管理\n- [x] 代码生成 ⛷\n- [x] 私信邮件回复\n- [x] 微信小程序 ⛷\n- [x] Excel数据导入/导出 ⛷\n- [x] 生成Echart图表 ⛷\n- [x] 访客管理记录\n- [x] 我的世界\n- [x] 🎈博客在线留言（新增）\n- [x] 🎈站点管理（新增配置新年灯笼）\n- [x] 🎈前台归档管理（新调整）\n- [x] ⛏【已修复 2023/04/19】：管理端添加博文不填标签增加失败 \n- [x] ⛏【已修复 2023/04/19】：管理端删除菜单的错误\n- [x] ⛏【已修复 2023/04/19】：服务端博文标签非空处理 \n- [x] ⛏【已修复 2023/04/19】：客户端分类查询不出非推荐文章 \n- [x] ⛏【已增加 2023/04/19】：管理端访客页的地址模糊查询\n- [x] ⛏【已增加 2023/04/19】：客户端文章详情的相关文章 \n- [x] 更多请查看示例链接...\n\n#### 接口文档\n\n> 方式1. <a href=\"https://console-docs.apipost.cn/preview/85df1005c24df829/b25c320b5df19b98\" target=\"_blank\"> 👀 查看在线接口文档</a> \n\n\n> 方式2. 👀 项目启动后 访问 swagger-ui 接口文档\n\n#### 项目安装启动教程\n\n\n> [安装启动视频教程](https://www.bilibili.com/video/BV1wY411d7s6/?share_source=copy_web&vd_source=3f6515a9fd6d4dc4f53ed5b3697eaea4)\n\n\n``` js\n\n1.依赖安装: 微信小程序 mg-mini | 前台client | 管理端admin | 服务端 server -`npm install`\n\n2.启动项目:  前台client- npm run serve \n           前台微信小程序 - HBuilder 编辑器编译-微信小程序运行\n           管理端admin - npm run dev \n           服务端 server - nodemon app （热启动） 或者 node app\n\n3.服务端启动前准备: \n            3.1 建库: mg_db  建表:运行sql文件到 mg_db 加载数据表\n            3.2 在 mg-server/config/db.config.js 配置数据库信息\n            3.3 启动成功示例： \n                    项目启动成功: http://localhost:5222\n                    接口文档地址: http://localhost:5222/swagger\n\n4.管理端登录账号密码 ：\n            4.1 访客：editor  123456   超级管理员：admin  123456\n```\n\n#### 项目截图\n\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546535717.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546535717.png\" alt=\"1691546535717.png\" width=\"100%\">\n</a>",
    sourceUrl: "https://gitee.com/Z568_568/all-blog-sys.git",
    demoUrl: "http://blog.zhouyi.run/#/",
    category: "博客",
    framework: "vue2 + node.js + express +sequalize+ mysql+uniapp",
    recommended: true,
    status: true,
    createdAt: ISODate("2023-08-09T02:04:42.429Z"),
    updatedAt: ISODate("2023-08-09T09:26:40.085Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f55097ad53aea60d4f29"),
    title: "ZY.Hexo.Blog",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546787133.png",
    abstract: "Hexo博客框架搭建响应式、简约清爽款个人博客站点，基于Ocean主题 做了改动,增加了分类、标签、音乐菜单、页脚个人资源和站点运行时间等配置",
    content: "# ZY.Hexo.Blog\n\n#### 介绍\nHexo博客框架搭建响应式、简约清爽款个人博客站点，基于[Ocean主题](https://zhwangart.github.io/2018/11/30/Ocean/) 做了改动,\n增加了分类、标签、音乐菜单、页脚个人资源和站点运行时间等配置\n\n\n[在线预览](http://hexo.blog.zhouyi.run/)\n\n[查看源码](https://gitee.com/Z568_568/zy-hexo-blog.git)\n\n#### 其他可能需要的资源 \n\n>[个人博客全栈系统+express+mysql+vue2+uniapp完整](https://gitee.com/Z568_568/all-blog-sys.git)\n\n>[node+mongodb开发REST API 的轻量级样板 ✨推荐](https://gitee.com/Z568_568/node.mongodb)\n\n>[node+mysql后端api基础服务模板](https://gitee.com/Z568_568/zy-express-sequelize-mysql)\n\n>[轻量级个人文件管理、图床管理服务系统](https://gitee.com/Z568_568/zy.files.sys.git)\n\n#### 截图\n\n \n<div style=\"display: flex\">\n    <a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546834279.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546834279.png\" alt=\"1691546834279.png\" width=\"100%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546858213.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546858213.png\" alt=\"1691546858213.png\" width=\"45%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546880483.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546880483.png\" alt=\"1691546880483.png\" width=\"45%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546892558.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546892558.png\" alt=\"1691546892558.png\" width=\"45%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546902520.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546902520.png\" alt=\"1691546902520.png\" width=\"45%\">\n</a>\n<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546912205.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546912205.png\" alt=\"1691546912205.png\" width=\"45%\">\n</a>\n</div>\n\n\n#### 安装教程\n\n ``` bash\n$ git clone https://gitee.com/Z568_568/zy-hexo-blog.git\n```\n ``` bash\n$ npm i\n$ hexo s\n```\n\n#### 添加文章\n在 `source/_posts/**.md`\n\n``` md\n---\ntitle: Express实现定时发送邮件\ncategories:\n    - 后端\ntags:\n    - 邮件\n    - 定时任务\n    - Express.js\n\nphotos: [\n    [\"http://www.zhouyi.run:3001/api/v1/files/preview?p=alexander-grey-Jv_oD5CuVfw-unsplash.jpg&&mimetype=image/jpeg\"],\n]\n\ntop: ture\n\nexcerpt: 在 node.js 中自已实现也非常容易，接下来要介绍的是node-schedule来完成定时任务\n---\n\n文章内容...\n\n```\n\n#### 部署\n\n 1.部署到Github\n\n[教程传送门](https://juejin.cn/post/7111237168168697886)\n\n 2.个人云服务器部署\n```bash\n$ hexo clean\n$ hexo g\n\n  然后将public文件件中的内容推送至云服务主机  也可以配置一键部署和 1 一样的\n```\n\n",
    sourceUrl: "https://gitee.com/Z568_568/zy-hexo-blog.git",
    demoUrl: "http://hexo.blog.zhouyi.run/",
    category: "Hexo",
    framework: "hexo",
    recommended: false,
    status: true,
    createdAt: ISODate("2023-08-09T02:09:20.462Z"),
    updatedAt: ISODate("2023-08-09T02:09:20.462Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f5aa97ad53aea60d4f35"),
    title: "个人博客 mysql ",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    abstract: "👀👀简单小型的全栈开发个人博客系统,前台展示和后台管理一体化。vue2 + node.js + express + mysql 包含前端博客展示、后台管理、node后端。整套博客系统开箱即用,对elemen-ui二次封装组件非常便利，管理端权限模块还未完成，已完成用户登录，验证码，token验证，文章编辑，修改，查看，发布，评论，分类查询，站点配置，音乐配置等等",
    content: "# zy-all-blog\n\n#### 介绍\n[![star](https://gitee.com/Z568_568/blog/badge/star.svg?theme=dark)](https://gitee.com/Z568_568/blog/stargazers)\n[![fork](https://gitee.com/Z568_568/blog/badge/fork.svg?theme=dark)](https://gitee.com/Z568_568/blog/members)\n\n**v1.0.1 zy-all-blog** 简易博客全栈系统，`vue2 + node.js + express + mysql` 包含前端博客展示、后台管理、node后端。整套博客系统开箱即用,对`elemen-ui`二次封装组件非常便利，管理端权限模块还未完成，已完成用户登录，验证码，token验证，文章编辑，修改，查看，发布，评论，分类查询，站点配置，音乐配置等等，如果对你有用请star,star,star\n##### 相关项目\n>[v1.0.2 mg-blog 升级完整版（后台d2框架 + sequelize（ORM））](https://gitee.com/Z568_568/all-blog-sys)\n> \n> [![star](https://gitee.com/Z568_568/all-blog-sys/badge/star.svg?theme=dark)](https://gitee.com/Z568_568/all-blog-sys/stargazers)\n[![fork](https://gitee.com/Z568_568/all-blog-sys/badge/fork.svg?theme=dark)](https://gitee.com/Z568_568/all-blog-sys/members)\n\n\n>[node+mysql后端api基础服务模板](https://gitee.com/Z568_568/zy-express-sequelize-mysql)\n\n>[node+mongodb开发REST API 的轻量级样板 ✨推荐](https://gitee.com/Z568_568/node.mongodb)\n\n#### 项目目录：\n```\n    v1.0.1 前台：zy-blog-web  （Gblog） \n           管理端: zy-blog-admin （vue-element-admin）\n           Node服务端: zy-blog-server （express + 原生sql） 账号密码：admin 123456\n```\n#### 安装教程\n\n- 项目于以 `yarn / npm`  安装依赖， 若安装 `node-sass` 不行 就下载`yarn` 安装即可\n- `yarn install / npm  install`\n- 启动项目 ： web:`npm run server`  admin:`npm run dev`\n- 数据库文件地址sql:  [all-blog-sys/zy-blog-server/sql/zy-blog.sql](https://gitee.com/Z568_568/blog/tree/master/zy-blog-server/sql)\n- 打开`navicat`建立数据库 `zy-blog`,运行sql文件 \n- 服务端server内的`db.js`文件填写数据库信息，监听 5220端口，启动服务：`nodemon index.js（热加载） / node index.js`\n\n### 预览\n\n1.  [前端web端 ZY-Blog](http://blog.zhouyi.run/#/)\n\n2.  [博客管理端 ZY-admin](http://admin.blog.zhouyi.run/#/index)\n\n",
    sourceUrl: "https://gitee.com/Z568_568/blog.git",
    demoUrl: "http://www.zhouyi.run/#/",
    category: "博客",
    framework: "vue2 + node.js + express + mysql",
    recommended: false,
    status: true,
    createdAt: ISODate("2023-08-09T02:10:50.179Z"),
    updatedAt: ISODate("2023-08-09T02:10:50.179Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f64d97ad53aea60d4f43"),
    title: "maple-react",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691547162485.png",
    abstract: "🍁create-react-app创建的 React 脚手架 前端模板 标准的 React+Redux 分层结构 React-router-v6 最新路由配置 学习React18 hook新知识，采用函数组件构建页面。",
    content: "<a href=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691547162485.png\" target=\"_blank\">\n<img src=\"http://www.zhouyi.run:3089/v1/common/files/preview/img/1691547162485.png\" alt=\"1691547162485.png\" width=\"750\">\n</a>",
    sourceUrl: "https://gitee.com/Z568_568/maple-react.git",
    demoUrl: "http://www.zhouyi.run:5226",
    category: "个人主页",
    framework: "React18",
    recommended: false,
    status: true,
    createdAt: ISODate("2023-08-09T02:13:33.885Z"),
    updatedAt: ISODate("2023-08-09T02:13:33.885Z")
}]);
db.getCollection("portfolios").insert([{
    _id: ObjectId("64d2f6bf97ad53aea60d4f4f"),
    title: "ZY.Crawler",
    cover: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    abstract: "zy-crawler是一个基于Node.js的简单易用的爬虫工具，可以方便地获取指定网页的内容并进行自定义格式化处理。",
    content: "# zy-crawler\n\nzy-crawler是一个基于Node.js的简单易用的爬虫工具，可以方便地获取指定网页的内容并进行自定义格式化处理。\n\n## 安装\n\n使用npm安装 zy-crawler:\n\n```\nnpm install zy-crawler -s\n```\n\n## API文档\n\n`Crawler(options)`\n构造函数，创建一个新的爬虫实例。\n\n- `options`：<Object> 可选参数：\n    - `headers `：<Object> HTTP 请求头，默认为空对象\n    - `timeout `：<Number> 请求超时时间（毫秒），默认为 5000\n    - `proxy `：<String> 代理服务器地址，例如 `http://127.0.0.1:8080`，默认为空字符串 示例代码：\n\n```js\n// 创建爬虫实例\nconst crawler = new Crawler({\n    headers: {\n        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',\n    },\n    timeout: 5000,\n    proxy: '',\n});\n\n\n\n```\n\n`crawler.fetch(url)`\n爬取指定单个网页的内容，并返回解析后的数据。\n\n- `url`：<String> 网页地址 返回值 <Promise> Promise 对象，解析后的数据包括：\n    - `url`：<String> 网页地址\n    - `data`： <Object> Cheerio 实例，解析后的 DOM 对象\n\n示例代码：\n\n```js\n// 爬取单个网页\n(async () => {\n  try {\n    const {url, data} = await crawler.fetch('https://www.jianshu.com/');\n    const $ = data;\n    const result = {};\n    // 获取文章列表\n    const articleList = [];\n    $('.content').each((i, el) => {\n      const $el = $(el);\n      const article = {};\n      article.title = $el.find('.title').text();\n      article.abstract = $el.find('.abstract').text();\n      articleList.push(article);\n    });\n    result.articleList = articleList;\n    console.log(result);\n  } catch (err) {\n    console.error(err);\n  }\n})();\n\n// 成功响应：\n{\n  articleList: [\n    {\n      title: '留白阅读408|《低风险创业》拥有更多秘密，是企业的护城河',\n      abstract: '\\n' +\n              '      2023.02.01 大同 星期三 多云（-3℃/-18℃） （简书日更148天/总日更834天） 作为一个企业，能够把某一项的服务做到极致，变...\\n' +\n              '    '\n    },\n    {\n      title: '植物和它们的孩子',\n      abstract: '\\n' +\n              '      文/肚子 近来女儿有事，茉莉的芭蕾舞学习，便由我和先生作陪。 于珠海大剧院艺术中心学各种特长的孩子们都有家长陪伴，有的几位家长前呼后拥，孩子俨然...\\n' +\n              '    '\n    }\n  ]\n}\n```\n\n`crawler.fetchAll(urls)`\n爬取多个网页的内容，并返回解析后的数据。\n\n- `urls`：<Array> 网页地址数组 返回值 <Promise> Promise 对象，解析后的数据包括：\n    - `url`： <Array> 网页地址数组\n    - `data`：<Array> 包含解析后的数据的数组，每个元素格式同 fetch 方法的返回值\n\n示例代码：\n\n```js\n// 爬取多个网页\n(async () => {\n  try {\n    const {url, data} = await crawler.fetchAll([\n      'https://juejin.cn/',\n      'https://www.jianshu.com/',\n    ]);\n    const result = {};\n    const articleList = [];\n    for (const resultElement of data) {\n      const $ = resultElement.data;\n      if (resultElement.url === 'https://juejin.cn/') {\n        $('.item').each((i, el) => {\n          console.log($(el))\n          const $el = $(el);\n          const article = {};\n          article.title = $el.find('.title').text();\n          article.abstract = $el.find('.description').text();\n          articleList.push(article);\n        });\n      } else {\n        $('.content').each((i, el) => {\n          const $el = $(el);\n          const article = {};\n          article.title = $el.find('.title').text();\n          article.abstract = $el.find('.abstract').text();\n          articleList.push(article);\n        });\n      }\n    }\n    result.articleList = articleList;\n    console.log(result);\n\n  } catch (err) {\n    console.error(err);\n  }\n})();\n```\n\n`自定义格式化处理 format `\n\n`crawler.fetch(url,format)`\n\n使用示例：\n```js\n// 爬取网页并进行数据格式化\n(async () => {\n  try {\n    const result = await crawler.fetch('https://www.baidu.com', ($, response) => {\n      const title = $('title').text();\n      const statusCode = response.statusCode;\n      return { title, statusCode };\n    });\n    console.log(result);\n  } catch (err) {\n    console.error(err);\n  }\n})();\n```\n\n\n### 完整示例\n\n```js\nconst Crawler = require('zy-crawler');\n\n// 创建爬虫实例\nconst crawler = new Crawler({\n    headers: {\n        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',\n    },\n    timeout: 5000,\n    proxy: '',\n});\n\n// 爬取单个网页\n(async () => {\n    try {\n        const result = await crawler.fetch('https://www.example.com');\n        console.log(result);\n    } catch (err) {\n        console.error(err);\n    }\n})();\n\n// 爬取多个网页\n(async () => {\n    try {\n        const result = await crawler.fetchAll([\n            'https://www.example.com/page1',\n            'https://www.example.com/page2',\n            'https://www.example.com/page3',\n        ]);\n        console.log(result);\n    } catch (err) {\n        console.error(err);\n    }\n})();\n\n\n```\n\n#### 自定义格式化处理\n\n默认情况下，本插件会返回 cheerio 对象，即可以直接进行 jQuery 风格的 DOM 操作。\n\n如果需要对返回结果进行自定义格式化处理，可以在调用 fetch 或 fetchAll 方法时传入一个格式化函数，例如：\n\n```js\nconst Crawler = require('zy-crawler');\n\nconst crawler = new Crawler();\n\n// 定义格式化函数\nconst format = ($, response) => {\n    const title = $('title').text();\n    const content = $('#content').text();\n    const url = response.request.href;\n\n    return {title, content, url};\n};\n\n// 爬取单个网页并进行格式化处理\n(async () => {\n    try {\n        const result = await crawler.fetch('https://www.example.com', format);\n        console.log(result);\n    } catch (err) {\n        console.error(err);\n    }\n})();\n\n// 爬取多个网页并进行格式化处理\n(async () => {\n    try {\n        const result = await crawler.fetchAll([\n            'https://www.example.com/page1',\n            'https://www.example.com/page2',\n            'https://www.example.com/page3',\n        ], format);\n        console.log(result);\n    } catch (err) {\n        console.error(err);\n    }\n})();\n\n```\n\n### 贡献\n\n欢迎对zy-crawler进行贡献！如果你发现了任何问题或者有任何想法或建议，请通过以下方式联系我：\n\n- 在[Gitee](https://gitee.com/Z568_568/ZY.Crawler.git) 上提出问题或请求。\n- 提交一个Pull Request来改进代码。\n- 通过电子邮件（[1840354092@qq.com](1840354092@qq.com)）联系。\n\n请注意，在提交Pull Request之前，请确保你的代码与我们的代码库保持同步，并且你的代码通过了我们的测试，并且符合我们的代码质量和风格要求。\n\n### 许可证\n\nzy-crawler是根据MIT许可证开源的。详情请参阅LICENSE文件。\n\n### 鸣谢\n\n我们感谢以下开源软件项目：\n\n- Node.js\n- Cheerio\n- request-promise\n\n",
    sourceUrl: "https://github.com/ZHYI-source/ZY.Crawler.git",
    demoUrl: "https://github.com/ZHYI-source/ZY.Crawler.git",
    category: "爬虫",
    framework: "Node.js",
    recommended: false,
    status: true,
    createdAt: ISODate("2023-08-09T02:15:27.881Z"),
    updatedAt: ISODate("2023-08-09T02:15:27.881Z")
}]);

// ----------------------------
// Collection structure for replies
// ----------------------------
db.getCollection("replies").drop();
db.createCollection("replies");

// ----------------------------
// Documents of replies
// ----------------------------
db.getCollection("replies").insert([{
    _id: ObjectId("64d2fcc897ad53aea60d518c"),
    message: ObjectId("64d2fb0697ad53aea60d5113"),
    user: ObjectId("64aabf3d28f413f08d51cc00"),
    toUser: ObjectId("64d2fb0697ad53aea60d5111"),
    content: "😄谢谢",
    createdAt: ISODate("2023-08-09T02:41:12.223Z"),
    updatedAt: ISODate("2023-08-09T02:41:12.223Z")
}]);

// ----------------------------
// Collection structure for resources
// ----------------------------
db.getCollection("resources").drop();
db.createCollection("resources");

// ----------------------------
// Documents of resources
// ----------------------------
db.getCollection("resources").insert([{
    _id: ObjectId("64d2ec7397ad53aea60d4d43"),
    srcName: "1691544691885.jpg",
    srcType: "image/jpeg",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691544691885.jpg",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691544691885.jpg",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691544691885.jpg",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "27.21 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:31:31.888Z"),
    updatedAt: ISODate("2023-08-09T01:31:31.888Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2ec8197ad53aea60d4d57"),
    srcName: "1691544705996.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691544705996.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691544705996.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691544705996.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "26.70 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:31:45.998Z"),
    updatedAt: ISODate("2023-08-09T01:31:45.998Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2eed397ad53aea60d4e75"),
    srcName: "1691545299360.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691545299360.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691545299360.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "310.38 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:41:39.368Z"),
    updatedAt: ISODate("2023-08-09T01:41:39.368Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2ef1597ad53aea60d4e77"),
    srcName: "1691545365431.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545365431.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691545365431.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691545365431.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "200.10 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:42:45.436Z"),
    updatedAt: ISODate("2023-08-09T01:42:45.436Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2ef3d97ad53aea60d4e79"),
    srcName: "1691545405853.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545405853.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691545405853.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691545405853.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "298.05 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:43:25.86Z"),
    updatedAt: ISODate("2023-08-09T01:43:25.86Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f01397ad53aea60d4eab"),
    srcName: "1691545619525.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545619525.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691545619525.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691545619525.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "437.98 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:46:59.543Z"),
    updatedAt: ISODate("2023-08-09T01:46:59.543Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f20197ad53aea60d4eb9"),
    srcName: "1691546113455.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546113455.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546113455.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546113455.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "117.94 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:55:13.459Z"),
    updatedAt: ISODate("2023-08-09T01:55:13.459Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f23997ad53aea60d4ebb"),
    srcName: "1691546169339.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546169339.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546169339.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546169339.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "120.42 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:56:09.343Z"),
    updatedAt: ISODate("2023-08-09T01:56:09.343Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f23e97ad53aea60d4ebd"),
    srcName: "1691546174433.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546174433.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546174433.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546174433.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "114.83 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:56:14.437Z"),
    updatedAt: ISODate("2023-08-09T01:56:14.437Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f25697ad53aea60d4ebf"),
    srcName: "1691546198698.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546198698.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546198698.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546198698.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "179.37 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:56:38.704Z"),
    updatedAt: ISODate("2023-08-09T01:56:38.704Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f26097ad53aea60d4ec1"),
    srcName: "1691546208890.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546208890.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546208890.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546208890.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "162.67 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:56:48.895Z"),
    updatedAt: ISODate("2023-08-09T01:56:48.895Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f2ab97ad53aea60d4ecf"),
    srcName: "1691546282594.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546282594.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546282594.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546282594.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "1.17 MB",
    status: true,
    createdAt: ISODate("2023-08-09T01:58:03.711Z"),
    updatedAt: ISODate("2023-08-09T01:58:03.711Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f2e797ad53aea60d4ed1"),
    srcName: "1691546343361.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546343361.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546343361.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546343361.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "73.75 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:59:03.364Z"),
    updatedAt: ISODate("2023-08-09T01:59:03.364Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f30e97ad53aea60d4ed3"),
    srcName: "1691546382159.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546382159.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546382159.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546382159.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "171.37 KB",
    status: true,
    createdAt: ISODate("2023-08-09T01:59:42.164Z"),
    updatedAt: ISODate("2023-08-09T01:59:42.164Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f32497ad53aea60d4ed5"),
    srcName: "1691546404541.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546404541.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546404541.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546404541.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "252.43 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:00:04.549Z"),
    updatedAt: ISODate("2023-08-09T02:00:04.549Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f33a97ad53aea60d4ed7"),
    srcName: "1691546426903.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546426903.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546426903.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546426903.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "166.93 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:00:26.912Z"),
    updatedAt: ISODate("2023-08-09T02:00:26.912Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f34897ad53aea60d4ed9"),
    srcName: "1691546440411.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546440411.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546440411.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546440411.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "128.41 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:00:40.415Z"),
    updatedAt: ISODate("2023-08-09T02:00:40.415Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f3a897ad53aea60d4ee7"),
    srcName: "1691546535717.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546535717.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546535717.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546535717.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "1.17 MB",
    status: true,
    createdAt: ISODate("2023-08-09T02:02:16.801Z"),
    updatedAt: ISODate("2023-08-09T02:02:16.801Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f3f497ad53aea60d4ee9"),
    srcName: "1691546612429.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546612429.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546612429.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546612429.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "217.17 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:03:32.436Z"),
    updatedAt: ISODate("2023-08-09T02:03:32.436Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f40d97ad53aea60d4eeb"),
    srcName: "1691546637478.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546637478.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546637478.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546637478.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "14.06 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:03:57.479Z"),
    updatedAt: ISODate("2023-08-09T02:03:57.479Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f4a397ad53aea60d4f17"),
    srcName: "1691546787133.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546787133.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546787133.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546787133.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "496.46 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:06:27.159Z"),
    updatedAt: ISODate("2023-08-09T02:06:27.159Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f4d297ad53aea60d4f19"),
    srcName: "1691546834279.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546834279.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546834279.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546834279.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "496.46 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:07:14.29Z"),
    updatedAt: ISODate("2023-08-09T02:07:14.29Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f4ec97ad53aea60d4f1b"),
    srcName: "1691546858213.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546858213.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546858213.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546858213.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "1.82 MB",
    status: true,
    createdAt: ISODate("2023-08-09T02:07:40.329Z"),
    updatedAt: ISODate("2023-08-09T02:07:40.329Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f50097ad53aea60d4f1d"),
    srcName: "1691546880483.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546880483.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546880483.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546880483.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "102.02 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:08:00.486Z"),
    updatedAt: ISODate("2023-08-09T02:08:00.486Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f50c97ad53aea60d4f1f"),
    srcName: "1691546892558.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546892558.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546892558.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546892558.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "116.11 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:08:12.561Z"),
    updatedAt: ISODate("2023-08-09T02:08:12.561Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f51797ad53aea60d4f21"),
    srcName: "1691546902520.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546902520.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546902520.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546902520.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "1.02 MB",
    status: true,
    createdAt: ISODate("2023-08-09T02:08:23.384Z"),
    updatedAt: ISODate("2023-08-09T02:08:23.384Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f52197ad53aea60d4f23"),
    srcName: "1691546912205.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546912205.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691546912205.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691546912205.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "1.31 MB",
    status: true,
    createdAt: ISODate("2023-08-09T02:08:33.596Z"),
    updatedAt: ISODate("2023-08-09T02:08:33.596Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2f61a97ad53aea60d4f3d"),
    srcName: "1691547162485.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691547162485.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691547162485.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691547162485.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "616.26 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:12:42.516Z"),
    updatedAt: ISODate("2023-08-09T02:12:42.516Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d2fd0397ad53aea60d51a7"),
    srcName: "1691548931529.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691548931529.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691548931529.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "18.30 KB",
    status: true,
    createdAt: ISODate("2023-08-09T02:42:11.531Z"),
    updatedAt: ISODate("2023-08-09T02:42:11.531Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d3455197ad53aea60d53e1"),
    srcName: "1691567436630.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691567436630.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691567436630.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691567436630.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "3.62 MB",
    status: true,
    createdAt: ISODate("2023-08-09T07:50:41.866Z"),
    updatedAt: ISODate("2023-08-09T07:50:41.866Z")
}]);
db.getCollection("resources").insert([{
    _id: ObjectId("64d356c3dc6fe2540382bf87"),
    srcName: "1691571900783.png",
    srcType: "image/png",
    previewPath: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691571900783.png",
    downloadPath: "http://www.zhouyi.run:3089/v1/common/files/download/img/1691571900783.png",
    deletePath: "http://www.zhouyi.run:3089/v1/common/files/delete/img/1691571900783.png",
    userId: ObjectId("64aabf3d28f413f08d51cc00"),
    srcSize: "4.33 MB",
    status: true,
    createdAt: ISODate("2023-08-09T09:05:07.157Z"),
    updatedAt: ISODate("2023-08-09T09:05:07.157Z")
}]);

// ----------------------------
// Collection structure for roles
// ----------------------------
db.getCollection("roles").drop();
db.createCollection("roles");
db.getCollection("roles").createIndex({
    roleName: NumberInt("1")
}, {
    name: "roleName_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of roles
// ----------------------------
db.getCollection("roles").insert([{
    _id: ObjectId("64a423816f4197cfc70375e3"),
    roleName: "超级管理员",
    roleAuth: "SUPER-ADMIN",
    perms: [
        "*"
    ],
    remark: "拥有所有权限",
    status: true,
    createdAt: ISODate("2023-07-04T13:49:53.993Z"),
    updatedAt: ISODate("2023-07-04T13:50:42.566Z")
}]);
db.getCollection("roles").insert([{
    _id: ObjectId("64a426a56f4197cfc70375f6"),
    roleName: "普通管理员",
    roleAuth: "NORMALL-ADMIN",
    perms: [
        "index",
        "sys:users:list",
        "sys:roles:list",
        "sys:permissions:list"
    ],
    remark: "拥有部分权限",
    status: true,
    createdAt: ISODate("2023-07-04T14:03:17.858Z"),
    updatedAt: ISODate("2023-07-06T16:53:42.888Z")
}]);
db.getCollection("roles").insert([{
    _id: ObjectId("64a6e9c04ef9906878daeced"),
    roleName: "开发人员",
    roleAuth: "DEV-ADMIN",
    perms: [
        "index",
        "dev",
        "dev:codes",
        "dev:codes:delete",
        "dev:icon",
        "dev:codes:list",
        "dev:codes:singleCurdFrontAndBack",
        "dev:codes:deleteAll",
        "sys:resources",
        "sys:resources:list",
        "sys:resources:create",
        "sys:resources:delete",
        "sys:resources:update"
    ],
    remark: "开发人员",
    status: true,
    createdAt: ISODate("2023-07-06T16:20:16.785Z"),
    updatedAt: ISODate("2023-07-17T04:48:00.257Z")
}]);
db.getCollection("roles").insert([{
    _id: ObjectId("64a7aa20a971facd04696242"),
    roleName: "访客",
    roleAuth: "VISITOR-ADMIN",
    perms: [
        "index",
        "components:echart:chinaMap",
        "components:echart:worldMap",
        "components:echart:line",
        "components:echart:pie",
        "pages",
        "pages:all",
        "dev:icon",
        "dev:codes:list",
        "components:editor",
        "components:editor:Tinymce",
        "components:editor:Vditor",
        "components:editor:VMdEditor",
        "components",
        "components:echart",
        "components:echart:guizhouMap",
        "sys:permissions:list",
        "blog:blog_articles:list",
        "blog:portfolios:list",
        "blog:messages:list",
        "blog:messages:delete"
    ],
    remark: "一般访客，更多的是有查看权限",
    status: true,
    createdAt: ISODate("2023-07-07T06:01:04.121Z"),
    updatedAt: ISODate("2023-08-08T05:25:44.071Z")
}]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([{
    _id: ObjectId("64a7aab3a971facd0469625d"),
    avatar: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691544705996.png",
    username: "visitor",
    nickname: "亡命之徒",
    password: "$2a$10$d0MQyKMyvNcX8whJsF7O0OLqulGKo3GE0hS/WqoGFKpU.dmFRIHFO",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    createdAt: ISODate("2023-07-07T06:03:31.69Z"),
    updatedAt: ISODate("2023-08-09T01:31:47.362Z"),
    type: "admin"
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64aabf3d28f413f08d51cc00"),
    avatar: "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png",
    username: "admin",
    nickname: "ZY·Admin",
    password: "$2a$10$hdgL5ydnB8oLLcrgwjXdouAaZV/by32gWPOBiMl3wwFEzSVmdTvtG",
    roleId: ObjectId("64a423816f4197cfc70375e3"),
    status: true,
    createdAt: ISODate("2023-07-09T14:07:57.766Z"),
    updatedAt: ISODate("2023-08-09T02:42:13.178Z"),
    type: "admin",
    email: "1840354092@qq.com",
    address: "贵州省贵阳市 电信",
    userIp: "111.121.40.63",
    platform: "Chrome.v115",
    website: "http://www.zhouyi.run"
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2ed6497ad53aea60d4da9"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1840355092@qq.com&s=100",
    username: "1840355092@qq.com",
    nickname: "书中枫叶",
    password: "$2a$10$cfUs0kHiRQdYXMPAxCmmh.iLf4k81bx2nYB9lYEWoYM4Ti09jMReW",
    email: "1840355092@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T01:35:32.186Z"),
    updatedAt: ISODate("2023-08-09T01:35:32.186Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2faaa97ad53aea60d50df"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=12136@qq.com&s=100",
    username: "12136@qq.com",
    nickname: "匿名",
    password: "$2a$10$auMXgSyACW32qIEW6pTExe4FZGo.LJD3xwfa6KXNLhm.mYbTAbLti",
    email: "12136@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:32:10.407Z"),
    updatedAt: ISODate("2023-08-09T02:32:10.407Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fac797ad53aea60d50e9"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=2565088230@qq.com&s=100",
    username: "2565088230@qq.com",
    nickname: "匿名",
    password: "$2a$10$pZ/aem5M1YGzz1Rm0IJBg.1VvHah14VMu2lZjFco1MXZPgbDhHtpi",
    email: "2565088230@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:32:39.579Z"),
    updatedAt: ISODate("2023-08-09T02:32:39.579Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fad797ad53aea60d50f3"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1056900215@qq.com&s=100",
    username: "1056900215@qq.com",
    nickname: "匿名",
    password: "$2a$10$KzzwiIx/Dl9Oyk20i/9nt.FxpFfCg0Kvn2x7YcKpu38jCree.spAS",
    email: "1056900215@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:32:55.051Z"),
    updatedAt: ISODate("2023-08-09T02:32:55.051Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fae297ad53aea60d50fd"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1820595586@qq.com&s=100",
    username: "1820595586@qq.com",
    nickname: "匿名",
    password: "$2a$10$dRqHh/cXHsVlkARTfpZagOV5/f1mkf8zDprGnJyhEUsE.bmOb2sEu",
    email: "1820595586@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:33:06.437Z"),
    updatedAt: ISODate("2023-08-09T02:33:06.437Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2faef97ad53aea60d5107"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=123456789@qq.com&s=100",
    username: "123456789@qq.com",
    nickname: "匿名",
    password: "$2a$10$WUuFIEFJiOHgJWLM/O3Wuu/2qRZ0IbMTSNanrlcfNmRoRNxMdCOFa",
    email: "123456789@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:33:19.395Z"),
    updatedAt: ISODate("2023-08-09T02:33:19.395Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fb0697ad53aea60d5111"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=2105118267@qq.com&s=100",
    username: "2105118267@qq.com",
    nickname: "匿名",
    password: "$2a$10$Xd6xS1NPvLAHPNgTJWWvx.kXmFajle7FeOaBPt5KvgG2BUsyVW72q",
    email: "2105118267@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:33:42.837Z"),
    updatedAt: ISODate("2023-08-09T02:33:42.837Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fb1597ad53aea60d511b"),
    avatar: "https://gravatar.kuibu.net/avatar/5c04c6164bbf04f3e6bcbd01dfd00e03?s=100",
    username: "thunder_fxl@163.com",
    nickname: "匿名",
    password: "$2a$10$tAxWTXrrvH6qbyHsPvWRE.8uwwGl2/Hd6lHb8kZYk3mGYrO4yWnry",
    email: "thunder_fxl@163.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:33:57.341Z"),
    updatedAt: ISODate("2023-08-09T02:33:57.341Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fb2697ad53aea60d5125"),
    avatar: "https://gravatar.kuibu.net/avatar/0b3cb75294205b165a06a715d81ca380?s=100",
    username: "1317499207@qq.comcom",
    nickname: "匿名",
    password: "$2a$10$ncW9zdxo3yCGwh6jzQsclOOpIYOWFwJKt5uh05mlKSJtjm3I2vOIi",
    email: "1317499207@qq.comcom",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:34:14.125Z"),
    updatedAt: ISODate("2023-08-09T02:34:14.125Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fb2d97ad53aea60d512f"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1317499207@qq.com&s=100",
    username: "1317499207@qq.com",
    nickname: "匿名",
    password: "$2a$10$YnaiideAFOsSvBlOPSO9..5S.XrxVsnMCxFLleNUbQZUtpGC32nhu",
    email: "1317499207@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:34:21.391Z"),
    updatedAt: ISODate("2023-08-09T02:34:21.391Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d2fb3c97ad53aea60d5139"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=152485@qq.com&s=100",
    username: "152485@qq.com",
    nickname: "匿名",
    password: "$2a$10$RvxebdFR54cMlZ1SeS7JIOz/wVlOQWKiZmCuR.SD.sI6jkevJQbXe",
    email: "152485@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "Chrome.v115",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T02:34:36.933Z"),
    updatedAt: ISODate("2023-08-09T02:34:36.933Z")
}]);
db.getCollection("users").insert([{
    _id: ObjectId("64d3496bdc6fe2540382bf08"),
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1840328094@qq.com&s=100",
    username: "1840328094@qq.com",
    nickname: "晚安",
    password: "$2a$10$dDP8ldw20OY/dhf4bTCL3u1bp3NA4UlaKWGEjnGRTsAWNeeZ9N8XO",
    email: "1840328094@qq.com",
    roleId: ObjectId("64a7aa20a971facd04696242"),
    status: true,
    type: "user",
    website: "",
    platform: "WeChat.v8",
    userIp: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    createdAt: ISODate("2023-08-09T08:08:11.823Z"),
    updatedAt: ISODate("2023-08-09T08:08:11.823Z")
}]);

// ----------------------------
// Collection structure for users_opt_logs
// ----------------------------
db.getCollection("users_opt_logs").drop();
db.createCollection("users_opt_logs");

// ----------------------------
// Documents of users_opt_logs
// ----------------------------
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec3997ad53aea60d4d25"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T01:30:33.383Z"),
    updatedAt: ISODate("2023-08-09T01:30:33.383Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec5597ad53aea60d4d2d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "资源管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/resources/list",
    createdAt: ISODate("2023-08-09T01:31:01.218Z"),
    updatedAt: ISODate("2023-08-09T01:31:01.218Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec5697ad53aea60d4d33"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/权限管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/permissions/list",
    createdAt: ISODate("2023-08-09T01:31:02.615Z"),
    updatedAt: ISODate("2023-08-09T01:31:02.615Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec6297ad53aea60d4d39"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:31:14.853Z"),
    updatedAt: ISODate("2023-08-09T01:31:14.853Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec6597ad53aea60d4d3f"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/角色管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/roles/list",
    createdAt: ISODate("2023-08-09T01:31:17.523Z"),
    updatedAt: ISODate("2023-08-09T01:31:17.523Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec7697ad53aea60d4d47"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/update",
    createdAt: ISODate("2023-08-09T01:31:34.223Z"),
    updatedAt: ISODate("2023-08-09T01:31:34.223Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec7697ad53aea60d4d4d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:31:34.4Z"),
    updatedAt: ISODate("2023-08-09T01:31:34.4Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec7897ad53aea60d4d53"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/角色管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/roles/list",
    createdAt: ISODate("2023-08-09T01:31:36.478Z"),
    updatedAt: ISODate("2023-08-09T01:31:36.478Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec8397ad53aea60d4d5b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/update",
    createdAt: ISODate("2023-08-09T01:31:47.358Z"),
    updatedAt: ISODate("2023-08-09T01:31:47.358Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec8397ad53aea60d4d61"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:31:47.538Z"),
    updatedAt: ISODate("2023-08-09T01:31:47.538Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec8d97ad53aea60d4d67"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:31:57.403Z"),
    updatedAt: ISODate("2023-08-09T01:31:57.403Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec8f97ad53aea60d4d6d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:31:59.182Z"),
    updatedAt: ISODate("2023-08-09T01:31:59.182Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ec9197ad53aea60d4d73"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:32:01.974Z"),
    updatedAt: ISODate("2023-08-09T01:32:01.974Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ecce97ad53aea60d4d79"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:33:02.448Z"),
    updatedAt: ISODate("2023-08-09T01:33:02.448Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ecd897ad53aea60d4d7f"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/角色管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/roles/list",
    createdAt: ISODate("2023-08-09T01:33:12.561Z"),
    updatedAt: ISODate("2023-08-09T01:33:12.561Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ecdf97ad53aea60d4d85"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:33:19.87Z"),
    updatedAt: ISODate("2023-08-09T01:33:19.87Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ecf497ad53aea60d4d8b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/角色管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/roles/list",
    createdAt: ISODate("2023-08-09T01:33:40.043Z"),
    updatedAt: ISODate("2023-08-09T01:33:40.043Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ecfb97ad53aea60d4d91"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:33:47.985Z"),
    updatedAt: ISODate("2023-08-09T01:33:47.985Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ed1d97ad53aea60d4d98"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/create",
    createdAt: ISODate("2023-08-09T01:34:21.468Z"),
    updatedAt: ISODate("2023-08-09T01:34:21.468Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ed1d97ad53aea60d4d9e"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:34:21.642Z"),
    updatedAt: ISODate("2023-08-09T01:34:21.642Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ed2297ad53aea60d4da3"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T01:34:26.917Z"),
    updatedAt: ISODate("2023-08-09T01:34:26.917Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ed6497ad53aea60d4dad"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T01:35:32.391Z"),
    updatedAt: ISODate("2023-08-09T01:35:32.391Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ed8997ad53aea60d4db2"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言回复",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/reply",
    createdAt: ISODate("2023-08-09T01:36:09.935Z"),
    updatedAt: ISODate("2023-08-09T01:36:09.935Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ed8a97ad53aea60d4db7"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T01:36:10.098Z"),
    updatedAt: ISODate("2023-08-09T01:36:10.098Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ed9297ad53aea60d4dbe"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:36:18.566Z"),
    updatedAt: ISODate("2023-08-09T01:36:18.566Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2eda297ad53aea60d4dc3"),
    operator: "admin",
    operatorId: "-",
    module: "登录",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/auth/login",
    createdAt: ISODate("2023-08-09T01:36:34.09Z"),
    updatedAt: ISODate("2023-08-09T01:36:34.09Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2eda897ad53aea60d4dca"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T01:36:40.932Z"),
    updatedAt: ISODate("2023-08-09T01:36:40.932Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edaa97ad53aea60d4dd0"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:36:42.53Z"),
    updatedAt: ISODate("2023-08-09T01:36:42.53Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edac97ad53aea60d4dd6"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:36:44.799Z"),
    updatedAt: ISODate("2023-08-09T01:36:44.799Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edad97ad53aea60d4ddd"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:36:45.633Z"),
    updatedAt: ISODate("2023-08-09T01:36:45.633Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edb097ad53aea60d4de3"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/delete",
    createdAt: ISODate("2023-08-09T01:36:48.214Z"),
    updatedAt: ISODate("2023-08-09T01:36:48.214Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edb097ad53aea60d4de8"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:36:48.378Z"),
    updatedAt: ISODate("2023-08-09T01:36:48.378Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edb297ad53aea60d4dee"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/delete",
    createdAt: ISODate("2023-08-09T01:36:50.09Z"),
    updatedAt: ISODate("2023-08-09T01:36:50.09Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edb297ad53aea60d4df3"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:36:50.257Z"),
    updatedAt: ISODate("2023-08-09T01:36:50.257Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edb897ad53aea60d4df9"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:36:56.08Z"),
    updatedAt: ISODate("2023-08-09T01:36:56.08Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edb997ad53aea60d4dff"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "资源管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/resources/list",
    createdAt: ISODate("2023-08-09T01:36:57.25Z"),
    updatedAt: ISODate("2023-08-09T01:36:57.25Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ede197ad53aea60d4e0f"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:37:37.369Z"),
    updatedAt: ISODate("2023-08-09T01:37:37.369Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ede897ad53aea60d4e15"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:37:44.862Z"),
    updatedAt: ISODate("2023-08-09T01:37:44.862Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ede997ad53aea60d4e1b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:37:45.978Z"),
    updatedAt: ISODate("2023-08-09T01:37:45.978Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edf697ad53aea60d4e21"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T01:37:58.937Z"),
    updatedAt: ISODate("2023-08-09T01:37:58.937Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2edfa97ad53aea60d4e27"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:38:02.902Z"),
    updatedAt: ISODate("2023-08-09T01:38:02.902Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee1d97ad53aea60d4e30"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T01:38:37.443Z"),
    updatedAt: ISODate("2023-08-09T01:38:37.443Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee1f97ad53aea60d4e36"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:38:39.184Z"),
    updatedAt: ISODate("2023-08-09T01:38:39.184Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2197ad53aea60d4e3d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T01:38:41.333Z"),
    updatedAt: ISODate("2023-08-09T01:38:41.333Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2297ad53aea60d4e43"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:38:42.918Z"),
    updatedAt: ISODate("2023-08-09T01:38:42.918Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2697ad53aea60d4e4a"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/delete",
    createdAt: ISODate("2023-08-09T01:38:46.299Z"),
    updatedAt: ISODate("2023-08-09T01:38:46.299Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2697ad53aea60d4e50"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:38:46.467Z"),
    updatedAt: ISODate("2023-08-09T01:38:46.467Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2897ad53aea60d4e57"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/delete",
    createdAt: ISODate("2023-08-09T01:38:48.54Z"),
    updatedAt: ISODate("2023-08-09T01:38:48.54Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2897ad53aea60d4e5d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:38:48.702Z"),
    updatedAt: ISODate("2023-08-09T01:38:48.702Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2a97ad53aea60d4e64"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T01:38:50.587Z"),
    updatedAt: ISODate("2023-08-09T01:38:50.587Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee2e97ad53aea60d4e6b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T01:38:54.834Z"),
    updatedAt: ISODate("2023-08-09T01:38:54.834Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ee3097ad53aea60d4e71"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:38:56.22Z"),
    updatedAt: ISODate("2023-08-09T01:38:56.22Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ef7797ad53aea60d4e7d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T01:44:23.7Z"),
    updatedAt: ISODate("2023-08-09T01:44:23.7Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ef7797ad53aea60d4e83"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:44:23.916Z"),
    updatedAt: ISODate("2023-08-09T01:44:23.916Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ef7c97ad53aea60d4e89"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/delete",
    createdAt: ISODate("2023-08-09T01:44:28.824Z"),
    updatedAt: ISODate("2023-08-09T01:44:28.824Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2ef7c97ad53aea60d4e8e"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:44:28.996Z"),
    updatedAt: ISODate("2023-08-09T01:44:28.996Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2efab97ad53aea60d4e92"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T01:45:15.43Z"),
    updatedAt: ISODate("2023-08-09T01:45:15.43Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2efab97ad53aea60d4e94"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T01:45:15.433Z"),
    updatedAt: ISODate("2023-08-09T01:45:15.433Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2efab97ad53aea60d4e9b"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T01:45:15.449Z"),
    updatedAt: ISODate("2023-08-09T01:45:15.449Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2eff397ad53aea60d4ea1"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T01:46:27.857Z"),
    updatedAt: ISODate("2023-08-09T01:46:27.857Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2eff497ad53aea60d4ea7"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:46:28.05Z"),
    updatedAt: ISODate("2023-08-09T01:46:28.05Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f1e097ad53aea60d4eaf"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T01:54:40.199Z"),
    updatedAt: ISODate("2023-08-09T01:54:40.199Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f1e097ad53aea60d4eb5"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:54:40.409Z"),
    updatedAt: ISODate("2023-08-09T01:54:40.409Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f28997ad53aea60d4ec5"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T01:57:29.789Z"),
    updatedAt: ISODate("2023-08-09T01:57:29.789Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f28a97ad53aea60d4ecb"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T01:57:30.032Z"),
    updatedAt: ISODate("2023-08-09T01:57:30.032Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f38497ad53aea60d4edd"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T02:01:40.453Z"),
    updatedAt: ISODate("2023-08-09T02:01:40.453Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f38497ad53aea60d4ee3"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:01:40.671Z"),
    updatedAt: ISODate("2023-08-09T02:01:40.671Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f43a97ad53aea60d4eef"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T02:04:42.424Z"),
    updatedAt: ISODate("2023-08-09T02:04:42.424Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f43a97ad53aea60d4ef5"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:04:42.665Z"),
    updatedAt: ISODate("2023-08-09T02:04:42.665Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f44597ad53aea60d4ef9"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:04:53.324Z"),
    updatedAt: ISODate("2023-08-09T02:04:53.324Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f44597ad53aea60d4efe"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:04:53.33Z"),
    updatedAt: ISODate("2023-08-09T02:04:53.33Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f44597ad53aea60d4f02"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:04:53.349Z"),
    updatedAt: ISODate("2023-08-09T02:04:53.349Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f45597ad53aea60d4f06"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:05:09.609Z"),
    updatedAt: ISODate("2023-08-09T02:05:09.609Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f45e97ad53aea60d4f0a"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:05:18.249Z"),
    updatedAt: ISODate("2023-08-09T02:05:18.249Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f45e97ad53aea60d4f0c"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:05:18.25Z"),
    updatedAt: ISODate("2023-08-09T02:05:18.25Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f45e97ad53aea60d4f0e"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:05:18.252Z"),
    updatedAt: ISODate("2023-08-09T02:05:18.252Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f55097ad53aea60d4f27"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T02:09:20.46Z"),
    updatedAt: ISODate("2023-08-09T02:09:20.46Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f55097ad53aea60d4f2d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:09:20.673Z"),
    updatedAt: ISODate("2023-08-09T02:09:20.673Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f5aa97ad53aea60d4f33"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T02:10:50.176Z"),
    updatedAt: ISODate("2023-08-09T02:10:50.176Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f5aa97ad53aea60d4f39"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:10:50.403Z"),
    updatedAt: ISODate("2023-08-09T02:10:50.403Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f64d97ad53aea60d4f41"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T02:13:33.876Z"),
    updatedAt: ISODate("2023-08-09T02:13:33.876Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f64e97ad53aea60d4f47"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:13:34.1Z"),
    updatedAt: ISODate("2023-08-09T02:13:34.1Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6bf97ad53aea60d4f4d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/create",
    createdAt: ISODate("2023-08-09T02:15:27.879Z"),
    updatedAt: ISODate("2023-08-09T02:15:27.879Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6c097ad53aea60d4f53"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:15:28.134Z"),
    updatedAt: ISODate("2023-08-09T02:15:28.134Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6d697ad53aea60d4f59"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:15:50.46Z"),
    updatedAt: ISODate("2023-08-09T02:15:50.46Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6e397ad53aea60d4f5f"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/update",
    createdAt: ISODate("2023-08-09T02:16:03.716Z"),
    updatedAt: ISODate("2023-08-09T02:16:03.716Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6e497ad53aea60d4f65"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:16:04.018Z"),
    updatedAt: ISODate("2023-08-09T02:16:04.018Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6e897ad53aea60d4f6b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/update",
    createdAt: ISODate("2023-08-09T02:16:08.549Z"),
    updatedAt: ISODate("2023-08-09T02:16:08.549Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6e897ad53aea60d4f71"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:16:08.779Z"),
    updatedAt: ISODate("2023-08-09T02:16:08.779Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6ed97ad53aea60d4f77"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/update",
    createdAt: ISODate("2023-08-09T02:16:13.876Z"),
    updatedAt: ISODate("2023-08-09T02:16:13.876Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f6ee97ad53aea60d4f7d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/list",
    createdAt: ISODate("2023-08-09T02:16:14.105Z"),
    updatedAt: ISODate("2023-08-09T02:16:14.105Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f70097ad53aea60d4f81"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:16:32.757Z"),
    updatedAt: ISODate("2023-08-09T02:16:32.757Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f70097ad53aea60d4f86"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:16:32.766Z"),
    updatedAt: ISODate("2023-08-09T02:16:32.766Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f70097ad53aea60d4f88"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:16:32.769Z"),
    updatedAt: ISODate("2023-08-09T02:16:32.769Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f71097ad53aea60d4f8e"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:16:48.554Z"),
    updatedAt: ISODate("2023-08-09T02:16:48.554Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f73a97ad53aea60d4f92"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:17:30.371Z"),
    updatedAt: ISODate("2023-08-09T02:17:30.371Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f73a97ad53aea60d4f97"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:17:30.38Z"),
    updatedAt: ISODate("2023-08-09T02:17:30.38Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f73a97ad53aea60d4f9b"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:17:30.392Z"),
    updatedAt: ISODate("2023-08-09T02:17:30.392Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79397ad53aea60d4fa1"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:18:59.07Z"),
    updatedAt: ISODate("2023-08-09T02:18:59.07Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79697ad53aea60d4fa7"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/delete",
    createdAt: ISODate("2023-08-09T02:19:02.838Z"),
    updatedAt: ISODate("2023-08-09T02:19:02.838Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79697ad53aea60d4fac"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:19:02.999Z"),
    updatedAt: ISODate("2023-08-09T02:19:02.999Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79897ad53aea60d4fb2"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/delete",
    createdAt: ISODate("2023-08-09T02:19:04.624Z"),
    updatedAt: ISODate("2023-08-09T02:19:04.624Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79897ad53aea60d4fb7"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:19:04.82Z"),
    updatedAt: ISODate("2023-08-09T02:19:04.82Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79d97ad53aea60d4fbf"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:19:09.541Z"),
    updatedAt: ISODate("2023-08-09T02:19:09.541Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79d97ad53aea60d4fc3"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/delete",
    createdAt: ISODate("2023-08-09T02:19:09.635Z"),
    updatedAt: ISODate("2023-08-09T02:19:09.635Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f79d97ad53aea60d4fc8"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:19:09.811Z"),
    updatedAt: ISODate("2023-08-09T02:19:09.811Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f7d797ad53aea60d4fce"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:20:07.835Z"),
    updatedAt: ISODate("2023-08-09T02:20:07.835Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f7d897ad53aea60d4fd4"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:20:08.028Z"),
    updatedAt: ISODate("2023-08-09T02:20:08.028Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f7fe97ad53aea60d4fda"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:20:46.095Z"),
    updatedAt: ISODate("2023-08-09T02:20:46.095Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f7fe97ad53aea60d4fe0"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:20:46.308Z"),
    updatedAt: ISODate("2023-08-09T02:20:46.308Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f82497ad53aea60d4fe6"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:21:24.043Z"),
    updatedAt: ISODate("2023-08-09T02:21:24.043Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f82497ad53aea60d4fec"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:21:24.252Z"),
    updatedAt: ISODate("2023-08-09T02:21:24.252Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f84897ad53aea60d4ff2"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:22:00.482Z"),
    updatedAt: ISODate("2023-08-09T02:22:00.482Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f84897ad53aea60d4ff8"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:22:00.688Z"),
    updatedAt: ISODate("2023-08-09T02:22:00.688Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f86797ad53aea60d4ffe"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:22:31.844Z"),
    updatedAt: ISODate("2023-08-09T02:22:31.844Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f86897ad53aea60d5004"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:22:32.059Z"),
    updatedAt: ISODate("2023-08-09T02:22:32.059Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f88197ad53aea60d500a"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:22:57.534Z"),
    updatedAt: ISODate("2023-08-09T02:22:57.534Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f88197ad53aea60d5010"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:22:57.752Z"),
    updatedAt: ISODate("2023-08-09T02:22:57.752Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f89a97ad53aea60d5016"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:23:22.109Z"),
    updatedAt: ISODate("2023-08-09T02:23:22.109Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f89a97ad53aea60d501c"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:23:22.35Z"),
    updatedAt: ISODate("2023-08-09T02:23:22.35Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f8cf97ad53aea60d5022"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:24:15.413Z"),
    updatedAt: ISODate("2023-08-09T02:24:15.413Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f8cf97ad53aea60d5028"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:24:15.641Z"),
    updatedAt: ISODate("2023-08-09T02:24:15.641Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f8ef97ad53aea60d502e"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:24:47.558Z"),
    updatedAt: ISODate("2023-08-09T02:24:47.558Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f8ef97ad53aea60d5034"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:24:47.793Z"),
    updatedAt: ISODate("2023-08-09T02:24:47.793Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f90b97ad53aea60d503a"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:25:15.709Z"),
    updatedAt: ISODate("2023-08-09T02:25:15.709Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f90b97ad53aea60d5040"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:25:15.931Z"),
    updatedAt: ISODate("2023-08-09T02:25:15.931Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f92797ad53aea60d5044"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:25:43.721Z"),
    updatedAt: ISODate("2023-08-09T02:25:43.721Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f92797ad53aea60d5046"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:25:43.724Z"),
    updatedAt: ISODate("2023-08-09T02:25:43.724Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f92797ad53aea60d504d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:25:43.739Z"),
    updatedAt: ISODate("2023-08-09T02:25:43.739Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f97197ad53aea60d5053"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:26:57.566Z"),
    updatedAt: ISODate("2023-08-09T02:26:57.566Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f97197ad53aea60d5059"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:26:57.821Z"),
    updatedAt: ISODate("2023-08-09T02:26:57.821Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f99297ad53aea60d505f"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:27:30.371Z"),
    updatedAt: ISODate("2023-08-09T02:27:30.371Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f99297ad53aea60d5065"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:27:30.61Z"),
    updatedAt: ISODate("2023-08-09T02:27:30.61Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f99897ad53aea60d506b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/update",
    createdAt: ISODate("2023-08-09T02:27:36.784Z"),
    updatedAt: ISODate("2023-08-09T02:27:36.784Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f99997ad53aea60d5071"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:27:37.009Z"),
    updatedAt: ISODate("2023-08-09T02:27:37.009Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f99d97ad53aea60d5077"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/update",
    createdAt: ISODate("2023-08-09T02:27:41.504Z"),
    updatedAt: ISODate("2023-08-09T02:27:41.504Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f99d97ad53aea60d507d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:27:41.73Z"),
    updatedAt: ISODate("2023-08-09T02:27:41.73Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f9b497ad53aea60d5083"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:28:04.415Z"),
    updatedAt: ISODate("2023-08-09T02:28:04.415Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f9b497ad53aea60d5089"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:28:04.649Z"),
    updatedAt: ISODate("2023-08-09T02:28:04.649Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f9da97ad53aea60d508f"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:28:42.629Z"),
    updatedAt: ISODate("2023-08-09T02:28:42.629Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f9da97ad53aea60d5095"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:28:42.886Z"),
    updatedAt: ISODate("2023-08-09T02:28:42.886Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f9f397ad53aea60d509b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:29:07.684Z"),
    updatedAt: ISODate("2023-08-09T02:29:07.684Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2f9f397ad53aea60d50a1"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:29:07.939Z"),
    updatedAt: ISODate("2023-08-09T02:29:07.939Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa1d97ad53aea60d50a7"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T02:29:49.575Z"),
    updatedAt: ISODate("2023-08-09T02:29:49.575Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa1d97ad53aea60d50ad"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:29:49.813Z"),
    updatedAt: ISODate("2023-08-09T02:29:49.813Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa2197ad53aea60d50b3"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:29:53.242Z"),
    updatedAt: ISODate("2023-08-09T02:29:53.242Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa2597ad53aea60d50b9"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:29:57.402Z"),
    updatedAt: ISODate("2023-08-09T02:29:57.402Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa2797ad53aea60d50bf"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T02:29:59.13Z"),
    updatedAt: ISODate("2023-08-09T02:29:59.13Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa2b97ad53aea60d50c3"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:30:03.917Z"),
    updatedAt: ISODate("2023-08-09T02:30:03.917Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa5797ad53aea60d50c9"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T02:30:47.791Z"),
    updatedAt: ISODate("2023-08-09T02:30:47.791Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa6697ad53aea60d50cd"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T02:31:02.636Z"),
    updatedAt: ISODate("2023-08-09T02:31:02.636Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa6697ad53aea60d50cf"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T02:31:02.637Z"),
    updatedAt: ISODate("2023-08-09T02:31:02.637Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa7797ad53aea60d50d5"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:31:19.424Z"),
    updatedAt: ISODate("2023-08-09T02:31:19.424Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fa7e97ad53aea60d50d9"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:31:26.091Z"),
    updatedAt: ISODate("2023-08-09T02:31:26.091Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2faaa97ad53aea60d50e3"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:32:10.588Z"),
    updatedAt: ISODate("2023-08-09T02:32:10.588Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fac797ad53aea60d50ed"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:32:39.858Z"),
    updatedAt: ISODate("2023-08-09T02:32:39.858Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fad797ad53aea60d50f7"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:32:55.214Z"),
    updatedAt: ISODate("2023-08-09T02:32:55.214Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fae297ad53aea60d5101"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:33:06.601Z"),
    updatedAt: ISODate("2023-08-09T02:33:06.601Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2faef97ad53aea60d510b"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:33:19.612Z"),
    updatedAt: ISODate("2023-08-09T02:33:19.612Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb0697ad53aea60d5115"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:33:42.995Z"),
    updatedAt: ISODate("2023-08-09T02:33:42.995Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb1597ad53aea60d511f"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:33:57.501Z"),
    updatedAt: ISODate("2023-08-09T02:33:57.501Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb2697ad53aea60d5129"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:34:14.289Z"),
    updatedAt: ISODate("2023-08-09T02:34:14.289Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb2d97ad53aea60d5133"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:34:21.678Z"),
    updatedAt: ISODate("2023-08-09T02:34:21.678Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb3d97ad53aea60d513d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:34:37.102Z"),
    updatedAt: ISODate("2023-08-09T02:34:37.102Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb5197ad53aea60d5144"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T02:34:57.582Z"),
    updatedAt: ISODate("2023-08-09T02:34:57.582Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb5997ad53aea60d514b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/删除",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/delete",
    createdAt: ISODate("2023-08-09T02:35:05.05Z"),
    updatedAt: ISODate("2023-08-09T02:35:05.05Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb5997ad53aea60d5151"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T02:35:05.22Z"),
    updatedAt: ISODate("2023-08-09T02:35:05.22Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb6d97ad53aea60d5156"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:35:25.382Z"),
    updatedAt: ISODate("2023-08-09T02:35:25.382Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb6d97ad53aea60d5158"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:35:25.384Z"),
    updatedAt: ISODate("2023-08-09T02:35:25.384Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fb6d97ad53aea60d515f"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:35:25.396Z"),
    updatedAt: ISODate("2023-08-09T02:35:25.396Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fc0a97ad53aea60d5163"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:38:02.36Z"),
    updatedAt: ISODate("2023-08-09T02:38:02.36Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fc0a97ad53aea60d5168"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:38:02.374Z"),
    updatedAt: ISODate("2023-08-09T02:38:02.374Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fc0a97ad53aea60d516c"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:38:02.381Z"),
    updatedAt: ISODate("2023-08-09T02:38:02.381Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fc9197ad53aea60d5170"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T02:40:17.494Z"),
    updatedAt: ISODate("2023-08-09T02:40:17.494Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fc9197ad53aea60d5174"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:40:17.498Z"),
    updatedAt: ISODate("2023-08-09T02:40:17.498Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fc9197ad53aea60d5179"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T02:40:17.51Z"),
    updatedAt: ISODate("2023-08-09T02:40:17.51Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fca497ad53aea60d517d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:40:36.206Z"),
    updatedAt: ISODate("2023-08-09T02:40:36.206Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fcb097ad53aea60d5184"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T02:40:48.423Z"),
    updatedAt: ISODate("2023-08-09T02:40:48.423Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fcc897ad53aea60d5189"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言回复",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/reply",
    createdAt: ISODate("2023-08-09T02:41:12.219Z"),
    updatedAt: ISODate("2023-08-09T02:41:12.219Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fcc897ad53aea60d5190"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "留言/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/list",
    createdAt: ISODate("2023-08-09T02:41:12.389Z"),
    updatedAt: ISODate("2023-08-09T02:41:12.389Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fcd297ad53aea60d5197"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T02:41:22.979Z"),
    updatedAt: ISODate("2023-08-09T02:41:22.979Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fcd597ad53aea60d519d"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T02:41:25.162Z"),
    updatedAt: ISODate("2023-08-09T02:41:25.162Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fcd697ad53aea60d51a3"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/角色管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/roles/list",
    createdAt: ISODate("2023-08-09T02:41:26.562Z"),
    updatedAt: ISODate("2023-08-09T02:41:26.562Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fd0597ad53aea60d51ab"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/update",
    createdAt: ISODate("2023-08-09T02:42:13.174Z"),
    updatedAt: ISODate("2023-08-09T02:42:13.174Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fd0597ad53aea60d51b1"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "系统管理/用户管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/users/list",
    createdAt: ISODate("2023-08-09T02:42:13.362Z"),
    updatedAt: ISODate("2023-08-09T02:42:13.362Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d2fd0997ad53aea60d51b5"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T02:42:17.261Z"),
    updatedAt: ISODate("2023-08-09T02:42:17.261Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d33a6897ad53aea60d538a"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T07:04:08.161Z"),
    updatedAt: ISODate("2023-08-09T07:04:08.161Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d33a7397ad53aea60d538e"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T07:04:19.788Z"),
    updatedAt: ISODate("2023-08-09T07:04:19.788Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d33a7397ad53aea60d5393"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T07:04:19.804Z"),
    updatedAt: ISODate("2023-08-09T07:04:19.804Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d33a7497ad53aea60d5397"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T07:04:20.019Z"),
    updatedAt: ISODate("2023-08-09T07:04:20.019Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d33f5297ad53aea60d539d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T07:25:06.861Z"),
    updatedAt: ISODate("2023-08-09T07:25:06.861Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d33fd597ad53aea60d53a3"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T07:27:17.775Z"),
    updatedAt: ISODate("2023-08-09T07:27:17.775Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344a797ad53aea60d53a7"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T07:47:51.666Z"),
    updatedAt: ISODate("2023-08-09T07:47:51.666Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344a797ad53aea60d53a9"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T07:47:51.67Z"),
    updatedAt: ISODate("2023-08-09T07:47:51.67Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344a797ad53aea60d53b0"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T07:47:51.698Z"),
    updatedAt: ISODate("2023-08-09T07:47:51.698Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344e197ad53aea60d53b4"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T07:48:49.781Z"),
    updatedAt: ISODate("2023-08-09T07:48:49.781Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344ee97ad53aea60d53b8"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T07:49:02.195Z"),
    updatedAt: ISODate("2023-08-09T07:49:02.195Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344ee97ad53aea60d53bd"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T07:49:02.252Z"),
    updatedAt: ISODate("2023-08-09T07:49:02.252Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344ee97ad53aea60d53c1"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T07:49:02.336Z"),
    updatedAt: ISODate("2023-08-09T07:49:02.336Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344f097ad53aea60d53c5"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T07:49:04.351Z"),
    updatedAt: ISODate("2023-08-09T07:49:04.351Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344f897ad53aea60d53c9"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T07:49:12.943Z"),
    updatedAt: ISODate("2023-08-09T07:49:12.943Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344f897ad53aea60d53cd"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T07:49:12.955Z"),
    updatedAt: ISODate("2023-08-09T07:49:12.955Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344f897ad53aea60d53cf"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T07:49:12.956Z"),
    updatedAt: ISODate("2023-08-09T07:49:12.956Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d344fa97ad53aea60d53d6"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "113.65.228.27",
    address: "广东省广州市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T07:49:14.794Z"),
    updatedAt: ISODate("2023-08-09T07:49:14.794Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3454697ad53aea60d53dd"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/list",
    createdAt: ISODate("2023-08-09T07:50:30.943Z"),
    updatedAt: ISODate("2023-08-09T07:50:30.943Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3474fdc6fe2540382be70"),
    operator: "admin",
    operatorId: "-",
    module: "登录",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/sys/auth/login",
    createdAt: ISODate("2023-08-09T07:59:11.114Z"),
    updatedAt: ISODate("2023-08-09T07:59:11.114Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34771dc6fe2540382be82"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T07:59:45.99Z"),
    updatedAt: ISODate("2023-08-09T07:59:45.99Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34771dc6fe2540382be84"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T07:59:45.994Z"),
    updatedAt: ISODate("2023-08-09T07:59:45.994Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34771dc6fe2540382be86"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T07:59:45.996Z"),
    updatedAt: ISODate("2023-08-09T07:59:45.996Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34788dc6fe2540382be8f"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:00:08.106Z"),
    updatedAt: ISODate("2023-08-09T08:00:08.106Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34788dc6fe2540382be91"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:00:08.108Z"),
    updatedAt: ISODate("2023-08-09T08:00:08.108Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34788dc6fe2540382be98"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:00:08.209Z"),
    updatedAt: ISODate("2023-08-09T08:00:08.209Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3479ddc6fe2540382be9c"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:00:29.486Z"),
    updatedAt: ISODate("2023-08-09T08:00:29.486Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347aadc6fe2540382bea0"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:00:42.307Z"),
    updatedAt: ISODate("2023-08-09T08:00:42.307Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347addc6fe2540382bea6"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:00:45.955Z"),
    updatedAt: ISODate("2023-08-09T08:00:45.955Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347c8dc6fe2540382beaa"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:01:12.077Z"),
    updatedAt: ISODate("2023-08-09T08:01:12.077Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347d5dc6fe2540382beb0"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:01:25.614Z"),
    updatedAt: ISODate("2023-08-09T08:01:25.614Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347e4dc6fe2540382beb4"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:01:40.62Z"),
    updatedAt: ISODate("2023-08-09T08:01:40.62Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347e7dc6fe2540382beb8"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:01:43.691Z"),
    updatedAt: ISODate("2023-08-09T08:01:43.691Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347fbdc6fe2540382bebd"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:02:03.345Z"),
    updatedAt: ISODate("2023-08-09T08:02:03.345Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347fbdc6fe2540382bec2"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:02:03.351Z"),
    updatedAt: ISODate("2023-08-09T08:02:03.351Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d347fbdc6fe2540382bec4"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:02:03.354Z"),
    updatedAt: ISODate("2023-08-09T08:02:03.354Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34824dc6fe2540382beca"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:02:44.336Z"),
    updatedAt: ISODate("2023-08-09T08:02:44.336Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34824dc6fe2540382bece"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:02:44.34Z"),
    updatedAt: ISODate("2023-08-09T08:02:44.34Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34824dc6fe2540382bed3"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:02:44.356Z"),
    updatedAt: ISODate("2023-08-09T08:02:44.356Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d348d8dc6fe2540382bed7"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:05:44.295Z"),
    updatedAt: ISODate("2023-08-09T08:05:44.295Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d348d8dc6fe2540382bedb"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:05:44.304Z"),
    updatedAt: ISODate("2023-08-09T08:05:44.304Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d348d8dc6fe2540382bedf"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:05:44.308Z"),
    updatedAt: ISODate("2023-08-09T08:05:44.308Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d348fddc6fe2540382bee4"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:06:21.445Z"),
    updatedAt: ISODate("2023-08-09T08:06:21.445Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3490adc6fe2540382bee8"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:06:34.937Z"),
    updatedAt: ISODate("2023-08-09T08:06:34.937Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34911dc6fe2540382beec"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:06:41.239Z"),
    updatedAt: ISODate("2023-08-09T08:06:41.239Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34915dc6fe2540382bef0"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:06:45.87Z"),
    updatedAt: ISODate("2023-08-09T08:06:45.87Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34917dc6fe2540382bef6"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:06:47.599Z"),
    updatedAt: ISODate("2023-08-09T08:06:47.599Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3493adc6fe2540382befa"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:07:22.004Z"),
    updatedAt: ISODate("2023-08-09T08:07:22.004Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3493adc6fe2540382beff"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:07:22.023Z"),
    updatedAt: ISODate("2023-08-09T08:07:22.023Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3493adc6fe2540382bf01"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:07:22.026Z"),
    updatedAt: ISODate("2023-08-09T08:07:22.026Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3496cdc6fe2540382bf0c"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:08:12.082Z"),
    updatedAt: ISODate("2023-08-09T08:08:12.082Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34985dc6fe2540382bf11"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:08:37.283Z"),
    updatedAt: ISODate("2023-08-09T08:08:37.283Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34a4bdc6fe2540382bf1b"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:11:55.177Z"),
    updatedAt: ISODate("2023-08-09T08:11:55.177Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34a4bdc6fe2540382bf1f"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:11:55.184Z"),
    updatedAt: ISODate("2023-08-09T08:11:55.184Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34a4bdc6fe2540382bf23"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:11:55.223Z"),
    updatedAt: ISODate("2023-08-09T08:11:55.223Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34a8ddc6fe2540382bf2a"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:13:01.546Z"),
    updatedAt: ISODate("2023-08-09T08:13:01.546Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34aaddc6fe2540382bf2e"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:13:33.759Z"),
    updatedAt: ISODate("2023-08-09T08:13:33.759Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34aaedc6fe2540382bf32"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:13:34.091Z"),
    updatedAt: ISODate("2023-08-09T08:13:34.091Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34aeddc6fe2540382bf36"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:14:37.768Z"),
    updatedAt: ISODate("2023-08-09T08:14:37.768Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34aeddc6fe2540382bf3d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:14:37.781Z"),
    updatedAt: ISODate("2023-08-09T08:14:37.781Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34aeddc6fe2540382bf3b"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:14:37.78Z"),
    updatedAt: ISODate("2023-08-09T08:14:37.78Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34af3dc6fe2540382bf45"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:14:43.413Z"),
    updatedAt: ISODate("2023-08-09T08:14:43.413Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34baedc6fe2540382bf4d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "104.225.235.226",
    address: "美国加利福尼亚洛杉矶",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:17:50.281Z"),
    updatedAt: ISODate("2023-08-09T08:17:50.281Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34baedc6fe2540382bf51"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "104.225.235.226",
    address: "美国加利福尼亚洛杉矶",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:17:50.346Z"),
    updatedAt: ISODate("2023-08-09T08:17:50.346Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34baedc6fe2540382bf53"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "104.225.235.226",
    address: "美国加利福尼亚洛杉矶",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:17:50.348Z"),
    updatedAt: ISODate("2023-08-09T08:17:50.348Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d34ca2dc6fe2540382bf5c"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T08:21:54.119Z"),
    updatedAt: ISODate("2023-08-09T08:21:54.119Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3550ddc6fe2540382bf60"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:57:49.523Z"),
    updatedAt: ISODate("2023-08-09T08:57:49.523Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3550ddc6fe2540382bf64"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:57:49.532Z"),
    updatedAt: ISODate("2023-08-09T08:57:49.532Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3550ddc6fe2540382bf68"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:57:49.542Z"),
    updatedAt: ISODate("2023-08-09T08:57:49.542Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3557edc6fe2540382bf6d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T08:59:42.057Z"),
    updatedAt: ISODate("2023-08-09T08:59:42.057Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3557edc6fe2540382bf71"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T08:59:42.071Z"),
    updatedAt: ISODate("2023-08-09T08:59:42.071Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d3557edc6fe2540382bf75"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T08:59:42.157Z"),
    updatedAt: ISODate("2023-08-09T08:59:42.157Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d355b2dc6fe2540382bf7a"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:00:34.943Z"),
    updatedAt: ISODate("2023-08-09T09:00:34.943Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d355b2dc6fe2540382bf7e"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:00:34.966Z"),
    updatedAt: ISODate("2023-08-09T09:00:34.966Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d355b2dc6fe2540382bf82"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:00:34.971Z"),
    updatedAt: ISODate("2023-08-09T09:00:34.971Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ab5dc6fe2540382bf90"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T09:21:57.562Z"),
    updatedAt: ISODate("2023-08-09T09:21:57.562Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ab8dc6fe2540382bf94"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:22:00.798Z"),
    updatedAt: ISODate("2023-08-09T09:22:00.798Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ab8dc6fe2540382bf99"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:22:00.803Z"),
    updatedAt: ISODate("2023-08-09T09:22:00.803Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ab8dc6fe2540382bf9b"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:22:00.805Z"),
    updatedAt: ISODate("2023-08-09T09:22:00.805Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35abddc6fe2540382bfa1"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:22:05.144Z"),
    updatedAt: ISODate("2023-08-09T09:22:05.144Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35abddc6fe2540382bfa3"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:22:05.146Z"),
    updatedAt: ISODate("2023-08-09T09:22:05.146Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35abddc6fe2540382bfa5"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:22:05.147Z"),
    updatedAt: ISODate("2023-08-09T09:22:05.147Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ad3dc6fe2540382bfb0"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T09:22:27.285Z"),
    updatedAt: ISODate("2023-08-09T09:22:27.285Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ae0dc6fe2540382bfb4"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:22:40.593Z"),
    updatedAt: ISODate("2023-08-09T09:22:40.593Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35b09dc6fe2540382bfb8"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:23:21.041Z"),
    updatedAt: ISODate("2023-08-09T09:23:21.041Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35bd0dc6fe2540382bfc7"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/update",
    createdAt: ISODate("2023-08-09T09:26:40.077Z"),
    updatedAt: ISODate("2023-08-09T09:26:40.077Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35bf2dc6fe2540382bfd9"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "作品集/更新",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/update",
    createdAt: ISODate("2023-08-09T09:27:14.918Z"),
    updatedAt: ISODate("2023-08-09T09:27:14.918Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35bf7dc6fe2540382bfe1"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:27:19.801Z"),
    updatedAt: ISODate("2023-08-09T09:27:19.801Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35bf7dc6fe2540382bfe6"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:27:19.822Z"),
    updatedAt: ISODate("2023-08-09T09:27:19.822Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35bf7dc6fe2540382bfea"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:27:19.837Z"),
    updatedAt: ISODate("2023-08-09T09:27:19.837Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ccadc6fe2540382bfee"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:30:50.984Z"),
    updatedAt: ISODate("2023-08-09T09:30:50.984Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ccbdc6fe2540382bff2"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:30:51.027Z"),
    updatedAt: ISODate("2023-08-09T09:30:51.027Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35ccbdc6fe2540382bff6"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "WeChat.v8",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:30:51.031Z"),
    updatedAt: ISODate("2023-08-09T09:30:51.031Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35d50dc6fe2540382c03d"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:33:04.405Z"),
    updatedAt: ISODate("2023-08-09T09:33:04.405Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35d5edc6fe2540382c042"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:33:18.602Z"),
    updatedAt: ISODate("2023-08-09T09:33:18.602Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35d5edc6fe2540382c044"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:33:18.604Z"),
    updatedAt: ISODate("2023-08-09T09:33:18.604Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35d5edc6fe2540382c04a"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:33:18.61Z"),
    updatedAt: ISODate("2023-08-09T09:33:18.61Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35d74dc6fe2540382c04f"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:33:40.844Z"),
    updatedAt: ISODate("2023-08-09T09:33:40.844Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35d74dc6fe2540382c051"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:33:40.846Z"),
    updatedAt: ISODate("2023-08-09T09:33:40.846Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35d74dc6fe2540382c057"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:33:40.86Z"),
    updatedAt: ISODate("2023-08-09T09:33:40.86Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35e60dc6fe2540382c06c"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:37:36.849Z"),
    updatedAt: ISODate("2023-08-09T09:37:36.849Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35e60dc6fe2540382c071"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:37:36.858Z"),
    updatedAt: ISODate("2023-08-09T09:37:36.858Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35e60dc6fe2540382c075"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:37:36.872Z"),
    updatedAt: ISODate("2023-08-09T09:37:36.872Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35fbbdc6fe2540382c07b"),
    operator: "ZY·Admin",
    operatorId: "64aabf3d28f413f08d51cc00",
    module: "博文管理/创建",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/create",
    createdAt: ISODate("2023-08-09T09:43:23.228Z"),
    updatedAt: ISODate("2023-08-09T09:43:23.228Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35fc2dc6fe2540382c083"),
    operator: "未知",
    operatorId: "-",
    module: "前台/作品集",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/portfolios/client/list",
    createdAt: ISODate("2023-08-09T09:43:30.171Z"),
    updatedAt: ISODate("2023-08-09T09:43:30.171Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35fc2dc6fe2540382c087"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:43:30.184Z"),
    updatedAt: ISODate("2023-08-09T09:43:30.184Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35fc2dc6fe2540382c08b"),
    operator: "未知",
    operatorId: "-",
    module: "前台/留言列表",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/messages/client/list",
    createdAt: ISODate("2023-08-09T09:43:30.224Z"),
    updatedAt: ISODate("2023-08-09T09:43:30.224Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35fccdc6fe2540382c092"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/详情",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/detail",
    createdAt: ISODate("2023-08-09T09:43:40.149Z"),
    updatedAt: ISODate("2023-08-09T09:43:40.149Z")
}]);
db.getCollection("users_opt_logs").insert([{
    _id: ObjectId("64d35feedc6fe2540382c096"),
    operator: "未知",
    operatorId: "-",
    module: "前台/博文列表/查询",
    platform: "Chrome.v115",
    operatorIP: "111.121.40.63",
    address: "贵州省贵阳市 电信",
    content: "/v1/blog/blog_articles/client/list",
    createdAt: ISODate("2023-08-09T09:44:14.123Z"),
    updatedAt: ISODate("2023-08-09T09:44:14.123Z")
}]);
