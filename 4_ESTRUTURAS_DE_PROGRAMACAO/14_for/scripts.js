// For:

//A estrutura de repetição for tem a seguinte sintaxe:

//For(inicialização de uma variável; condição de continuação para o loop; expressão final)


for(let i = 1; i <= 10; i++) {
  console.log(i)
}



 for(let a = 100; a > 0; a--) {
    if(a === 50){
        break;
    }
    console.log(a)
 }


for(let i = 0; i < 100; i = i + 3) {

  console.log(`A soma de i com 2 é: ${i + 2}`);

}