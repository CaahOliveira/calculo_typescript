"use strict";
var Loja;
(function (Loja) {
    class Produto {
        constructor() {
            this.nome = "";
            this.preco = 0;
        }
        calcularPrecoFinal(imposto) {
            return this.preco + (this.preco * imposto / 100);
        }
    }
    Loja.Produto = Produto;
})(Loja || (Loja = {}));
const calc = document.getElementById("calc");
const campoNome = document.getElementById("campoNome");
const campoPreco = document.getElementById("campoPreco");
const nomeOutput = document.getElementById("nome");
const precoOutput = document.getElementById("preco");
const impostoOutput = document.getElementById("imposto");
if (calc && campoNome && campoPreco && nomeOutput && precoOutput && impostoOutput) {
    calc.addEventListener("click", () => {
        const p = new Loja.Produto();
        p.nome = campoNome.value;
        p.preco = parseFloat(campoPreco.value) || 0;
        nomeOutput.textContent = p.nome;
        precoOutput.textContent = `R$ ${p.preco.toFixed(2)}`;
        impostoOutput.textContent = `R$ ${p.calcularPrecoFinal(10).toFixed(2)}`;
    });
}
else {
    console.error("Erro: Elementos do formulário não encontrados.");
}
