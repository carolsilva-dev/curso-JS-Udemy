// Escreva uma função que retorne um numero aleatório
// O numero maximo retornado deve ser passado via parâmetro
// Dica utilize Math.random()


function numeroAleatorio(num) {
  return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(100));
console.log(numeroAleatorio(50)); 