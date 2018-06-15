function sum(a, b) {
    return a + b;
}

export const TESTE = 'TESTE';
export const TESTE1 = 'TESTE1';
export const TESTE2 = 'TESTE2';


import { TESTE, TESTE1, TESTE2 } from './constants';

// named export
// ter vários exports dentro de um 
// msm arquivo
// só pode chamar com o msm nome
// import precisa das chaves { sub }
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const PI = 3.14;

export { mult as multiplicacao, div, PI };

// método principal
// só pode ter um defaut por arquivo
// importar com qq nome
// não precisa utilizar as chaves
export default sum;

