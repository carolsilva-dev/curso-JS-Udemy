// Podemos definir um conjunto de caracteres para encontrar por regex
// Basta estar entre []
// Com um treço podemos definir um intervalo também



const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 23"));
console.log(reg1.test("Temos o número 60"));

const reg2 = /[0-9]/;

console.log(reg1.test("Temos o número 65448484884848484"));
console.log(reg1.test("Temos o número"));
