const fs=require("node:fs");
console.log("one");
const file2=fs.readFileSync("./file.txt");
console.log(file2);// result in hexadecimal form in buffer format
const file=fs.readFileSync("./file.txt","utf-8");
console.log(file);// the data which we return inside the txt file 
console.log("two");
fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data);
    }
});
console.log("third");

fs.writeFileSync("./greet.txt","now we are inserting the more amout of data");

fs.writeFile("./greet.txt","Hello chinduri",{flag:"a"},(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("file written");
    }
});