// Podemos pré-determinar um valor para um argumento




function potencia(base, exp=2) {
  return Math.pow(base, exp);
}

console.log(potencia(2));

console.log(potencia(2,2));

console.log(potencia(2,3));