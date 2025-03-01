namespace Loja {
    export class Produto {
        nome: string = "";
        preco: number = 0;

        calcularPrecoFinal(imposto: number): number {
            return this.preco + (this.preco * imposto / 100);
        }
    }
}

const calc = document.getElementById("calc") as HTMLButtonElement;
const campoNome = document.getElementById("campoNome") as HTMLInputElement;
const campoPreco = document.getElementById("campoPreco") as HTMLInputElement;
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
} else {
    console.error("Erro: Elementos do formulário não encontrados.");
}
