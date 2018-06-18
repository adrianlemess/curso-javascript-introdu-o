
interface IPessoa {
    nome: string;
}

class Pessoa {
    private nome: [string];

    get Nome(): [string] {
        return this.nome;
    }

    set Nome(valor: [string]) {
        this.nome = valor;
    }
    public teste() {

    }

    private teste2() {

    }
}

const pessoa = new Pessoa();

pessoa.Nome = 'Adrian';