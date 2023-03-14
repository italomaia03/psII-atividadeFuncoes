function verificarIdade(idade) {
  if (idade >= 18) {
    console.log('Você pode entrar na autoescola');
  } else {
    console.log('Você não pode entrar na autoescola');
  }
}

let idade = Number(prompt('Informe sua idade: '));

verificarIdade(idade);
