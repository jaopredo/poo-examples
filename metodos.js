var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.totalP = 0;
    }
    Pessoa.prototype.andar = function (passos) {
        console.log("Andou ".concat(passos));
        this.totalP += passos;
    };
    Pessoa.prototype.totalPassos = function () {
        console.log("Andou ao todo ".concat(this.totalP));
    };
    return Pessoa;
}());
var p1 = new Pessoa('João Pedro', 16);
p1.andar(12);
p1.andar(23);
p1.totalPassos();
