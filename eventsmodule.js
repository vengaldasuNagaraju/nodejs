const eventemitter = require("node:events");

const emitter=new eventemitter() //instatntiate a class to create a emitter object

// we use on method to register to listner
emitter.on("order-pizza",(size,flavour)=>{
    console.log(`order recieved ! baking a${size} pizza with ${flavour}`);
})

emitter.on("order-pizza",(size)=>{
    if(size === "large")
    {
        console.log('serving complimentry drink');
    }
})
console.log("it will execute first");
emitter.emit("order-pizza","large","chicken")// to emit on event we use emit
