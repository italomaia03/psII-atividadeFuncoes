function realizarPotenciacao(base, potencia) {
  return Math.pow(base, potencia);
}

let base = Number(prompt('Informe o valor da base: '));
let potencia = Number(prompt('Informe o valor da potência: '));

console.log(realizarPotenciacao(base, potencia));
