//Quando ha a necessidade de varios ifs, podemos utilizar o switch/case
// Para sair de uma case podemos utilizar o brea
//Podemos inserir uma expressão default, para caso nehum valor for correspondido;


let nome = "Matheus";

switch(nome) {
  case "Matheus":
    console.log("O Nome é Matheus");
    break;
  case "João":
    console.log("O nome é João");
    break;
  default:
    console.log("O nome não foi encontrado");
    break;
}

// if(nome == "Matheus") {
//   console.log("O Nome é Matheus");
// } else {
//   console.log("O nome não foi encontrado");
// }