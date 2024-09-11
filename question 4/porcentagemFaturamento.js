const faturamentos = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'Outros', valor: 19849.53 },
]

function porcentagemFaturamento(faturamentos) {
  // calcular total do faturamento
  const total = faturamentos
    .map((faturamento) => faturamento.valor)
    .reduce((acc, faturamentos) => acc + faturamentos, 0)

  // calcular e exibir porcentagem de cada estado
  faturamentos.forEach((faturamento) => {
    const porcentagem = (faturamento.valor / total) * 100

    console.log(
      `${faturamento.estado}: ${porcentagem.toFixed(2).replace('.', ',')}%`
    )
  })
}

porcentagemFaturamento(faturamentos)
