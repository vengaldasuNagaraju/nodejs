const path=require("node:path");

console.log(__filename);

console.log(__dirname);

console.log(path.basename(__dirname));

console.log(path.basename(__filename));

console.log(path.extname(__dirname));

console.log(path.extname(__dirname));

console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));

console.log(path.join("str1","str2","str3"));

console.log(path.join("/str1","str2","str3"));

console.log(path.join("/str1","//str2","str3"));

console.log(path.join("/str1","//str2","../str3"));

console.log(path.resolve("str1","str2","str3"));

console.log(path.resolve("/str1","str2","str3"));

console.log(path.resolve("/str1","//str2","str3"));

console.log(path.resolve("/str1","//str2","../str3"));

