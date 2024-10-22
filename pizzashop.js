const EventEmitter = require("node:events");

class Pizzashop extends EventEmitter
{
    constructor(){
        super();
        this.ordernumber=0;
    }
    order(size,topping)
    {
        this.ordernumber++;
        this.emit("order", size,topping);
    }
    displayordernumber()
    {
        console.log(`current order number${this.ordernumber}`);
    }
}
module.exports=Pizzashop;