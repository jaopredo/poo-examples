class Cliente {
    protected type: string;
    public nome: string;
    private money: string;

    constructor (type: string, nome: string) {
        this.nome = nome;
        this.type = type;
    }
}

class Vendedor extends Cliente {
    showType() {
        console.log(this.type)
    }
}

/*
    PUBLIC -> Qualquer um pode acessar o atributo
    PROTECTED -> Atributo só fica acessível na classe e subclasses
    PRIVATE -> Atributo fica disponível apenas na classe em si
*/


const c1: Cliente = new Cliente('DEFAULT', 'João')

console.log(c1.nome)

const v1: Vendedor = new Vendedor('VENDEDOR', 'João')
v1.showType()