// Em muitas linguegens temos apossibilidade de instanciar um objeto com new, no JS também


function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function() {
    console.log("AUuuuu");
  }
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();