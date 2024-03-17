// Eventos de tecla ( key event)

// Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown
// Podemos reakizar ações nestes eventos também 
// Keyup e keydown



window.addEventListener("keydown", function(e) {

  if(e.key == 'q') {
    console.log("Apertou a letra q");
  }

});

window.addEventListener("keyup", function(e) {

  if(e.key == "Enter") {
    console.log("Soltou o enter");
  }

});