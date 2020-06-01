var Hello = require('./hello')
console.log(Hello)
var hello = new Hello()
hello.name = 'liwanji'
hello.sayHello()
hello.setName('liwanji')
hello.sayHello()