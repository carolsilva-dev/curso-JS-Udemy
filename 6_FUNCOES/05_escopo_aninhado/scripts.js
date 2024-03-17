let a = 10; // escopo global

function multiplicar(x,y) { 
  let a = x * y;

  if(a > 10) {

    let a = 2;

    a++;

    console.log(a);

  }

  console.log(a);

}

console.log(a);

multiplicar(3,7);



let b = 5 // escopo global

const Multiplicar = function(n) {
  let b = n * 2;
  console.log(b)  // escopo função 
  if(b == 10) {
    let b = 55;
    console.log(b) // escopo if dentro da função
  }
}

Multiplicar(b);