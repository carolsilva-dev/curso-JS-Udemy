// Quando um + está após alguma, expressão, este elemento pode se repetir mais de uma vez


const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("asdasdas"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("1511231231233123121323123121238"));