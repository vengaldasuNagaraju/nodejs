// for this code sync code execute first then async code will rn 
console.log("console log 1");
process.nextTick(() => console.log("this is process.next 1"));
console.log("console.log 2");
// output : console log 1 console log 2 this is process.next 1


process.nextTick(()=>console.log("this is process 1"));

process.nextTick(()=>{
    console.log("this is process 2");
    process.nextTick(()=>
    console.log("this is inner tick inside next tick "));
});
process.nextTick(()=>console.log("this is process 3"));

Promise.resolve().then(()=>console.log("this is promise rersolver 1"));
Promise.resolve().then(()=>{
    console.log("this is promise.resolve 2");
    process.nextTick(()=>{
        console.log("this is innernext tick inside promise then block");
    });
Promise.resolve().then(()=>
    console.log("this is promise.resolver 3"));
})