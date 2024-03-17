// Insere um nó antes do nó de referência 
// Precisamos de um elemento pra ser adicionado 
// O elemento que terá outro elemento adicionado antes dele 
// E o elemento adicionado antes dele
// E o elemento pai destes dois 


let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);



