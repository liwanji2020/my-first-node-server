// 引入events 模块
var events = require('events')
// 创建 eventEmitter对象
var eventEmitter  = new events.EventEmitter();
events.emitter.listenerCount()
const connectHandler = function connected(){
    console.log("链接成功")
    // 触发 data_received 事件
    eventEmitter.emit('data_received')

}

// connection 事件绑定
eventEmitter.on('connection',connectHandler)

eventEmitter.on('data_received',function(){
    console.log("数据接收成功")
})
console.log(eventEmitter.listeners('connection'))
eventEmitter.emit('connection',['str'])

console.log("progress end")