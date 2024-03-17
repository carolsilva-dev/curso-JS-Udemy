// Não podemos adicionar propriedades na classe, só via prototype 
// A classe só aceita métodos

class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
}

let labrador = new Cachorro('Labrador', 4, 'Amarelo');

console.log(labrador);