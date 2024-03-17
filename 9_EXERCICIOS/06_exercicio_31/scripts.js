/* Crie 2 arrays, um com mais de 2 elementos e outro com menos 
// Faça uma função que verifica o numero de elementos 
Se possuir menos que 5, imprima "Poucos elementos" no console
Se tiver mais, imrpima "Muitos elementos"*/


let nums = [1,2,3,4,5,6];
let nums2 = [1,2,3];

function verificaElementosArray(arr) {
  if(arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

verificaElementosArray(nums);
verificaElementosArray(nums2);