// Podemos colocar uma instrução na regex que funciona como um || (or) das condicionais



const reg = /\w+: (Matheus|João|Maria)/; // Nome: nadsuasudi

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));