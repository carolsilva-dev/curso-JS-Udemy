// Crie um objeto que vai simular um endereço de um cliente 
// Propriedades: Rua, Bairro, cidade e estado
// No construtor o endereço ja deve ser definido por completo 
// Crie métodos para atualizar todas as propriedades 


class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }

}

let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC");

console.log(endereco);

endereco.novaRua = "Rua dos Pardais";

console.log(endereco);

endereco.novaCidade = "São Paulo";

console.log(endereco);