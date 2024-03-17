// Podemos atrelar evento ao scroll da tela também, pelo evento scroll 
// Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição X



window.addEventListener("scroll", function(e) {

  if(window.pageYOffset > 1000) {
    console.log("Ativou");
  }

});