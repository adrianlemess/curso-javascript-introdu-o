let teste: string = 'Olá Mundo';
const helloWorld = (param1: string, param2: number): Array<string> => {
    return [`${param2}`, param1]
}
abstract class Animal implements IAnimal, IPessoa {
    public nome?: string;
    public tipo: string;
    public peso: string;
    public idade: number;

    constructor(
        { ...animal, ...pessoa }: <IAnimal, IPessoa> ) {
        this.nome = argumentos.nome;
        this.tipo = argumentos.tipo
    }

    static info() {
    }
    abstract teste(): Array<string>;

    get Nome() {
    }
    set Nome() {
    }
}
interface IAnimal {
    nome?: string;
    tipo: string;
}

interface IPessoa {
    idade?: number;
    peso: string;

    teste(param1: number): any;
}
class Cachorro extends Animal { };

