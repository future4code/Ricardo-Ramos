// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

/* O que faz: Solicita que o usuário digite o valor da cotação do dólar no dia e converte 100 dólares de acordo com o valor da cotação em reais.

Como faz: A função conversorDeMoeda tem parâmetro valorEmDolar e, dentro dela, há uma variável chamada "cotacao" com prompt para informar valor da cotação em dólar, que é transformado em número. O retorno é o parâmetro da função multiplicado pela cotação digitada pelo usuário para chegar ao valor em R$. Depois, fora da função, a variável "meuDinheiro" tem a função com o parâmetro definido em 100 e um console.log que imprime o resultado.

Qual será o valor impresso no console: Hoje, 13/12/2020, a cotação do dólar é R$5,07. O valor impresso, portanto, é de R$ 507. */


// EXERCÍCIO 2

/* O que faz: Apresenta uma função que calcula rendimentos em diversos tipos de investimento.

Como faz: A função "investeDinheiro" tem os parâmetros "tipoDeInvestimento" e "valor". Dentro dela, na variável "valorAposInvestimento", há um switch case com o primeiro parâmetro da função, que tem a variável "valorAposInvestimento" como o resultado da multiplicação do segundo parâmetro pelo valor específico que cada tipo de investimento rende, além de um default que retorna um erro se for informado um tipo de investimento que não está especificado no switch case. Fora do switch, há um return, que traz de volta a variável "valorAposInvestimento" como resultado. Saindo da função, há 2 variáveis novas: "novoMontante", que chama a função para imprimir o valor após investir em ações, e "segundoMontante", que chama a função com um investimento que não está no switch, "tesouro direto".

Qual será o valor impresso no console: 165 na variável novoMontante e erro "TIPO DE INVESTIMENTO INFORMADO INCORRETO" na variável "segundoMontante". */


