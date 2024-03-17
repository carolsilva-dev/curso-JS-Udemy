// Escreva uma função que recebe o número, e o decremento de 1 em  1 com um loop 
// Além disso imprima somente números pares no console 



function imprimePar(num) {
  for(let i = num; i >= 0; i--) {
    if(i % 2 == 0) {
      console.log(i);
    }
  }
}

imprimePar(15);
imprimePar(83);
imprimePar(48);