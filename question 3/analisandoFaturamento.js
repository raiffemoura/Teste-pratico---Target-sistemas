const fs = require('fs')

function analisandoFaturamento(faturamento_diario) {
  // extrair
  const valores = faturamento_diario
    .filter((dia) => dia.valor > 0)
    .map((dia) => dia.valor)

  // calcular maior e menor valor
  const menorValor = Math.min(...valores)
  const maiorValor = Math.max(...valores)

  // calcular media mensal
  const total = valores.reduce((acc, valor) => acc + valor, 0)
  const mediaMensal = total / valores.length

  // contar quantidade de dias com faturamento superior a media mensal
  const diasAcimaMedia = valores.filter((valor) => valor > mediaMensal).length

  console.log(`Menor valor: ${menorValor}`)
  console.log(`Maior valor: ${maiorValor}`)
  console.log(`Média mensal: ${mediaMensal}`)
  console.log(`Dias com faturamento superior a média mensal: ${diasAcimaMedia}`)
}

//ler aquivo JSON
fs.readFile('./faturamento.json', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  try {
    const faturamento = JSON.parse(data)
    analisandoFaturamento(faturamento)
  } catch (err) {
    console.error(err)
  }
})
