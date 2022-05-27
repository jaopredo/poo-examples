var Carro = /** @class */ (function () {
    function Carro(modelo) {
        this._modelo = modelo;
    }
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            if (modelo === 'ferrari') {
                return;
            }
            ;
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
var carro = new Carro('forza');
console.log(carro.modelo);
