//Finally é executada independente do reultado do try/catch 
// E pode exixtir com try e catch ou apenas try 


let b = 2;

try {

  let a = 2 + b;

} catch(e) {

  console.log(e);

} finally {

  console.log("Executou");

}

// console.log('teste');