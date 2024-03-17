// Faz com uqe o dígito anterior seja opcional

const padrao = /Abacax?i/; // letra x opcional na palavra

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));