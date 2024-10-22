const Pizzashop = require('./pizzashop.js');

const pshop=new Pizzashop();

pshop.on("order", (size, topping) => {
console.log(`order received baking a ${size} pizza with ${topping}`);
});

pshop.order("large","chicken");

pshop.displayordernumber();