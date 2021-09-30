
const info = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `"Hello I'm ${info.nombre} from ${info.campus} campus!"`,
    e : "oO",
    T : "U "
}));
