// O bloco try catch, vai tentar executar um código, caso não consiega ele pode retornar 
// o erro que esse código gerou




// let b = 2;

try {

  let a = 2 + b;

} catch(e) {

  console.log(e);
  //throw new Error(e);

}

console.log('teste');