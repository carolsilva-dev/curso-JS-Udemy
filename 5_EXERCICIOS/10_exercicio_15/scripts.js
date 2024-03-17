// Verifique se o nunero é primo
//Um numero primo, um numero maior que zero
//divisivel por si proprio e por 1


let num = 17;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

  if(num % i == 0) {
    divisoes++;
  }

}

if(divisoes == 2) {
  console.log(`O número ${num} é primo`);
} else {
  console.log(`O número ${num} não é primo`);
}