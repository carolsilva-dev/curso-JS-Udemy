// Podemos escrever um set que aceita tudo, menos alguns carracteres com o not
// Lembrando que combinações serão aceitas, o negado é apenas se bate com o set


const notab = /[^ab]/; // não vai aceitar nada que tenha: ab

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("asdasfdfsfeeqweqeqwes"));

const az = /[a-z]/;

console.log(nottoaz.test("asd123asdad"));