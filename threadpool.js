const crypto =require("node:crypto");

const start =Date.now();

crypto.pbkdf2Sync("password","salt",100000,512,"sha512");

crypto.pbkdf2Sync("password","salt",100000,512,"sha512");

crypto.pbkdf2Sync("password","salt",100000,512,"sha512");

console.log("hash:",Date.now() -start);

process.env.UV_THREADPOOL_SIZE=5;// this is for increasing the libuv threads execution limits
const max=4;
const start2=Date.now();
for(let i=0;i<max;i++)
{
    crypto.pbkdf2("password","salt",100000,512,"sha512", () => {
        console.log(`hash: ${i+1}`,Date.now() -start2);

    });
    
}