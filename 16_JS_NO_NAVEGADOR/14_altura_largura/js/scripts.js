// Com o JS também é possivel verificar propriedades do elemento como altura e e largura 


let elemento = document.querySelector('#titulo-principal');

console.log('largura: ' + elemento.offsetWidth); // considera as bordas
console.log('altura: ' + elemento.offsetHeight);

console.log('largura: ' + elemento.clientWidth); // não considera as bordas
console.log('altura: ' + elemento.clientHeight);