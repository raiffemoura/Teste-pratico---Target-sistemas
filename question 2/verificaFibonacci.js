const prompt = require('prompt-sync')() // Usei promt-sync para ler o input do usuário

// função para verificar se um número pertence a sequência de Fibonacci

function verificarFibonacci(num) {
  let a = 0
  let b = 1

  while (b < num) {
    let temp = a
    a = b
    b = temp + b
  }
  return b === num || num === 0
}

// Leitura do numero computado pelo usuário
const numero = parseInt(prompt('Digite um número: '))

if (isNaN(numero) || numero < 0) {
  console.log('Por favor, insura um número inteiro positivo.')
} else {
  const pertence = verificarFibonacci(numero)
  console.log(
    pertence
      ? 'O número pertence a sequência de Fibonacci.'
      : 'O número não pertence a sequência de Fibonacci.'
  )
}
