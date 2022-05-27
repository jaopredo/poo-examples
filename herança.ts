class Pessoa {
    public nome: string
    public idade: number
    constructor (nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
}


class Cliente extends Pessoa {
    public dinheiro: number = 4000

    comprar(valor) {
        this.dinheiro -= valor
    }
}


const c1: Cliente = new Cliente('João Pedro', 16)

console.log(c1.nome)
c1.comprar(200)
console.log(c1.dinheiro)
