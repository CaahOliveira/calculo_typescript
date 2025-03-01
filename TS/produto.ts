namespace loja {
    class Produto {
        private _nome: string = "";
        private _preco: number = 0;

        get nome(): string {
            return this._nome;
        }

        set nome(nome: string) {
            this._nome = nome;
        }

        get preco(): number {
            return this._preco;
        }

        set preco(preco: number) {
            this._preco = preco;
        }

        public calcularPrecoFinal(impostoPercentual: number): number {
            return this._preco + (this._preco * impostoPercentual / 100);
        }
    }
}
