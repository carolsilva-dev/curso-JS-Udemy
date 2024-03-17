// shift: remove o primeiro elemento de um array
// unshift: adicional um ou mais elementos no inicio do array


let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel');

console.log(carros);
console.log(carros[0]);