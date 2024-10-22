function greet(name){
    console.log(`hello ${name}`);
}
function vishwa(greetfn)
{
    const name="vishnu";
    greetfn(name);
}
vishwa(greet);