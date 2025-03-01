"use strict";
var loja;
(function (loja) {
    class Produto {
        constructor() {
            this._nome = "";
            this._preco = 0;
        }
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        calcularPrecoFinal(impostoPercentual) {
            return this._preco + (this._preco * impostoPercentual / 100);
        }
    }
})(loja || (loja = {}));
