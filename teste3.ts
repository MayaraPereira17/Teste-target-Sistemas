// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const faturamentosMensais = [
    { dia: 1, valor: 0 },
    { dia: 2, valor: 200 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 500 },
    { dia: 5, valor: 100 },
    { dia: 6, valor: 0 },
    { dia: 7, valor: 0 },
    { dia: 8, valor: 300 },
    { dia: 9, valor: 400 },
 
  ];
  
  function calcularFaturamento(faturamento: { dia: number; valor: number }[]) {

    const diasValidos = faturamento.filter((item) => item.valor > 0);
  
    if (diasValidos.length === 0) {
      console.log("Não há dias válidos com faturamento.");
      return;
    }
  
  
    const menorFaturamento = Math.min(...diasValidos.map((item) => item.valor));
    const maiorFaturamento = Math.max(...diasValidos.map((item) => item.valor));
  
 
    const somaFaturamento = diasValidos.reduce((soma, item) => soma + item.valor, 0);
    const mediaMensal = somaFaturamento / diasValidos.length;
  
    const diasAcimaMedia = diasValidos.filter((item) => item.valor > mediaMensal).length;
  
    console.log("Menor valor de faturamento:", menorFaturamento);
    console.log("Maior valor de faturamento:", maiorFaturamento);
    console.log("Número de dias com faturamento acima da média:", diasAcimaMedia);
  }
  
  calcularFaturamento(faturamentosMensais);
  