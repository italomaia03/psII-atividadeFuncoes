function verificarTipoDado(dado) {
  return typeof dado;
}

let dado1 = 8;
let dado2 = true;
let dado3 = 'dado';

console.log(verificarTipoDado(dado1));
console.log(verificarTipoDado(dado2));
console.log(verificarTipoDado(dado3));
