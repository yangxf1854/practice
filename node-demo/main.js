// const fs = require('fs'); // 引入读取文件模块
// let data = fs.readFileSync('input.txt');
const events = require('events'); // 引入event模块
// 创建eventEmitter对象
const eventEmitter = new events.EventEmitter;

// 创建事件处理程序
const connectHandler = function connected() {
    console.log('连接成功');
    // 触发 data_receive 事件
    eventEmitter.emit('data_receive');
}

// 绑定connection事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定data_receive 事件
eventEmitter.on('data_receive', function(){
    console.log('数据连接成功');
});
// 触发 connection 事件
eventEmitter.emit('connection');
console.log('程序执行完毕');