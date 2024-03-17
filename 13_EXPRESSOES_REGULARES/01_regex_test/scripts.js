// O que são expressões regulares ou (regex)

// Uma forma de encontrar padrões em uma string 
// Por exemplo: validar se só tem números 
// Em vez de criarmos funções complexas, podemos encontrar dados em texto, por meio das expressões regulares
// Também chamadas de regex


            // Criando uma expressão regular 

// As expressões regulares no JS são um tipo de objeto 
// Podemos instancia-lo de duas formas 
// New RegExp e /.../;


// Verificando padões com regex

// Depois da definição do padrão por meio da regex 
// Utilizamos o método test() para verificar se o padrão é retornado 
// Com isso vamos receber de resposta true ou false


const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

let text = 'Tem bola na cesta';

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("3423442323434quadrado2342323424332"));