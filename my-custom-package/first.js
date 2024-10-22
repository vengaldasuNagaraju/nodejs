const uppercase = require("upper-case").upperCase;
function greet(name){
    console.log(uppercase(`hello ${name} , welcome to codeteam`));
}
greet("nagaraju");
module.exports =greet;