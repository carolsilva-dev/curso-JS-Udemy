/* só tem um paramentro podemos remover os parenteses dos 
argumentos e return
Se a expressão for pequena, pode ate ser ser feita em uma linha
de codigos */



let consoleTeste = () => {
  console.log("Olá mundo!");
};

consoleTeste();

let soma = (a,b) => {
  return a + b;
};

console.log(soma(10,20));