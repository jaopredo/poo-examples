var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cliente = /** @class */ (function () {
    function Cliente(type, nome) {
        this.nome = nome;
        this.type = type;
    }
    return Cliente;
}());
var Vendedor = /** @class */ (function (_super) {
    __extends(Vendedor, _super);
    function Vendedor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vendedor.prototype.showType = function () {
        console.log(this.type);
    };
    return Vendedor;
}(Cliente));
/*
    PUBLIC -> Qualquer um pode acessar o atributo
    PROTECTED -> Atributo só fica acessível na classe e subclasses
    PRIVATE -> Atributo fica disponível apenas na classe em si
*/
var c1 = new Cliente('DEFAULT', 'João');
console.log(c1.nome);
var v1 = new Vendedor('VENDEDOR', 'João');
v1.showType();
