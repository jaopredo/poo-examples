class Pessoa {
    public nome: string
    public idade: number
    public totalP: number

    constructor (nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
        this.totalP = 0
    }

    andar(passos: number) {
        console.log(`Andou ${passos}`)
        this.totalP += passos
    }

    totalPassos() {
        console.log(`Andou ao todo ${this.totalP}`)
    }
}


const p1: Pessoa = new Pessoa('João Pedro', 16)
p1.andar(12)
p1.andar(23)

p1.totalPassos()