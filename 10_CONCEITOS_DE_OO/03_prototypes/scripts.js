/* Um objeto fallback de outro objeto 
Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procurada no prototype deste objeto
o prototype de um objeto criado do zero é o Object, que tem os métodosnativos da linguagem*/




const pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));