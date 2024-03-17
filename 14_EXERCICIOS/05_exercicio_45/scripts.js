// Crie um regex que valide nome de usuario no sistema 
// Aceita letars de a-z, e numeros de 0-9,minimo 3 caracteres e maximo 16


let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("matheus_123"));

console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("11111111111111111111111111111"));
console.log(validarNomeUsuario.test("carol 123"));
console.log(validarNomeUsuario.test("carol_123"));
console.log(validarNomeUsuario.test("Carol 123"));