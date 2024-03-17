let y = 10;  // escopo global 

function imprimir() {  // escopo local
  let y = 150;

  console.log(y);
}

imprimir();

console.log(y);


