const buffer=new Buffer.from("hello");
buffer.write("code");
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());