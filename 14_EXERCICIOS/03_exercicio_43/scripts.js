// Crie uma expressão que aceite a seguinte expressão "Marca: nomedaMarca"
// Onde nome da marca pode variar para Nike, Adidas, Pumas, Asics


const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: asd"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("123132"));
console.log(validaMarca.test("Marca: Puma"));