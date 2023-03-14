function decrementaMostraPares(numero) {
  for (let i = numero; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

let numero = Number(prompt('Informe um número: '));

decrementaMostraPares(numero);
