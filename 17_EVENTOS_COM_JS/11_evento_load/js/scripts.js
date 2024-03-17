// Podemos atrelar um evento quando a pa´gina carrega, pelo evento load
// E antes do usuário fechar a página pelo beforeunload




// window.addEventListener("load", function() {
//   alert("Assine os nossos termos de uso");
// });

window.addEventListener("beforeunload", function(e) {
  event.returnValue = null;
});