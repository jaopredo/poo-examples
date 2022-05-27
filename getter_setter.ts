class Carro {
    private _modelo: string;

    constructor (modelo: string) {
        this._modelo = modelo;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(modelo: string) {
        if (modelo === 'ferrari') {
            return;
        };
        this._modelo = modelo;
    }
}


const carro: Carro = new Carro('forza');
console.log(carro.modelo)
