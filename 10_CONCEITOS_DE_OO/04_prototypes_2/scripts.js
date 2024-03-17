/* Qundo criamos um objeto a partir de um outro, o base será o prototype
ele herdara tanto os métodos e propriedades de Object (o prototype do objeto base)*/




const pessoa = {
  maos: 2,
}

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);