// Quando focamos em um elemento ou saimos dele, podemos também atrelar um evento a esta ação 
// Focus para quando um elemento recebe foco e blur quando ele perde



let input = document.querySelector("#input1");

input.addEventListener("focus", function() {

  console.log("Entrou no input");

});

input.addEventListener("blur", function() {

  console.log("Saiu do input");

});