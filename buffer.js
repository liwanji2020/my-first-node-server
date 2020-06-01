// 创建一个长度为10，且用0填充的Buffer
const buff1 = Buffer.alloc(10)
// 创建一个长度为10，且用0*1填充的Buffer
const buff2 = Buffer.alloc(10, 1);
// 创建一个长度为10，且未初始化的Buffer
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buff3 = Buffer.allocUnsafe(10)

// 创建一个包含[0*1,0*2,0*3]的Buffer
const buff4 = Buffer.from([1,2,3])
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buff5 = Buffer.from('tést');
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buff6 = Buffer.from('tést', 'latin1');


//写入缓冲区
// buff.write(string,offset,length,encoding)
// string 写入的字符串
// offset 开始位置
// length 写入的长度
// encoding 编码方式，默认是 'utf8'
const len1 = buff1.write("wwwcom");
console.log(buff1.toString())
const len2 = buff2.write("wwwcom");
console.log(buff2.toString())
console.log('buff1'+buff1.toString())
const len3 = buff3.write("wwwcom");
console.log(buff3.toString())
const len4 = buff4.write("wwwcom");
console.log(buff4.toString())
const len5 = buff5.write("wwwcom");
console.log(buff5.toString())
const len6 = buff6.write("wwwcom");
console.log(buff6.toString())
console.log("写入字节数 : "+  len1);
console.log("写入字节数 : "+  len2);
console.log("写入字节数 : "+  len3);
console.log("写入字节数 : "+  len4);
console.log("写入字节数 : "+  len5);
console.log("写入字节数 : "+  len6);

// 从缓冲区读取数据
// buff.toString(enconding,start,end)
const bufffer = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  bufffer[i] = i + 97;
}
console.log( bufffer.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( bufffer.toString('ascii',0,5));   // 输出: abcde
console.log( bufffer.toString('utf8',0,5));    // 输出: abcde
console.log( bufffer.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// 将 buffer 转换成 json
const buf = Buffer.from([1, 2, 3, 4, 5]);
const json = JSON.stringify(buf);
// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);
const copy = JSON.parse(json, (key, value) => {
    console.log('key :'+key)
    console.log('value :'+value)
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});
// 输出:
console.log(copy);

// Buffer.concat(list,totalLength) list 为合并的Buffer对象数组
var buffer1 = Buffer.from(('阿西河前端教程'));
var buffer2 = Buffer.from(('www.axihe.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
