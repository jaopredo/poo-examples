// Classe Principal
var Person = /** @class */ (function () {
    function Person(nome, idade) {
        /**
         * Estes atributos estarão presentes em TODAS AS INSTÂNCIAS de classes
         * */
        this.nome = nome;
        this.idade = idade;
    }
    return Person;
}());
var pessoa1 = new Person('João Pedro', 16);
console.log("Oi! Sou ".concat(pessoa1.nome, " e tenho ").concat(pessoa1.idade, " anos!"));
