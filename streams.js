const fs=require("node:fs");

const readablestream = fs.createReadStream("./file.txt",{
    encoding : "utf-8",
    //highWaterMark : 2,
});

const writeablestream = fs.createWriteStream("./file2.txt");

readablestream.on("data",(chunk) => {
    console.log(chunk);
    writeablestream.write(chunk);
});