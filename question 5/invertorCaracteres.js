const prompt = require('prompt-sync')() // Usei promt-sync para ler o input do usuário

function invertorCaracteres(promt) {
  // Converter a string em um array de caracteres

  let stringInvertida = ''
  // percorrer array de caracteres do final para o começo
  for (let i = promt.length - 1; i >= 0; i--) {
    stringInvertida += promt[i]
  }
  return stringInvertida
}

// Leitura do input do usuário
const string = prompt('Digite uma texto para inverter: ')

console.log(`Seu texto invertido: ${invertorCaracteres(string)}`)
