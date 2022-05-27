// Classe Principal
class Person {
    public nome: string;
    public idade: number;
    constructor (nome: string, idade: number) {
        /**
         * Estes atributos estarão presentes em TODAS AS INSTÂNCIAS de classes
         * */
        this.nome = nome;
        this.idade = idade;
    }
}


const pessoa1: Person = new Person('João Pedro', 16);

console.log(`Oi! Sou ${pessoa1.nome} e tenho ${pessoa1.idade} anos!`)

