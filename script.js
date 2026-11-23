// Escreva um programa que receba um número inteiro \(N\) do usuário e exiba os primeiros \(N\) números da Sequência de Fibonacci.
// A sequência começa com 0 e 1, e cada termo seguinte é a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, 13...).

let quantidade = +prompt("Quantidade de somas?");
let anterior = 0;
let atual = 1;
let proximo;

for (let i = 0; i < quantidade; i++) {
  console.log(anterior);
  proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}

