// Podemos também mudar as propriedades de estilo dos elementos do HTML com o JS
// Acessando a propriedade style podemos fazer as modificações 
// O estilo émanipulado direto na tag, ou seja, substitui o do CSS (na maioria das vezes)


let elemento = document.querySelector('#titulo-principal');

setTimeout(function() {
  elemento.style.color = 'red';
  elemento.style.backgroundColor = 'yellow';
  elemento.style.width = '400px';
}, 1000);
