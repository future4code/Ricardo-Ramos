// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

/* O que faz: Solicita que o usuário digite o valor da cotação do dólar no dia e converte 100 dólares de acordo com o valor da cotação em reais.

Como faz: A função conversorDeMoeda tem parâmetro valorEmDolar e, dentro dela, há uma variável chamada "cotacao" com prompt para informar valor da cotação em dólar, que é transformado em número. O retorno é o parâmetro da função multiplicado pela cotação digitada pelo usuário para chegar ao valor em R$. Depois, fora da função, a variável "meuDinheiro" tem a função com o parâmetro definido em 100 e um console.log que imprime o resultado.

Qual será o valor impresso no console: Hoje, 13/12/2020, a cotação do dólar é R$5,07. O valor impresso, portanto, é de R$ 507. */


// EXERCÍCIO 2

/* O que faz: Apresenta uma função que calcula rendimentos em diversos tipos de investimento.

Como faz: A função "investeDinheiro" tem os parâmetros "tipoDeInvestimento" e "valor". Dentro dela, na variável "valorAposInvestimento", há um switch case com o primeiro parâmetro da função, que tem a variável "valorAposInvestimento" como o resultado da multiplicação do segundo parâmetro pelo valor específico que cada tipo de investimento rende, além de um default que retorna um erro se for informado um tipo de investimento que não está especificado no switch case. Fora do switch, há um return, que traz de volta a variável "valorAposInvestimento" como resultado. Saindo da função, há 2 variáveis novas: "novoMontante", que chama a função para imprimir o valor após investir em ações, e "segundoMontante", que chama a função com um investimento que não está no switch, "tesouro direto".

Qual será o valor impresso no console: 165 na variável novoMontante e erro "TIPO DE INVESTIMENTO INFORMADO INCORRETO" na variável "segundoMontante". */


// EXERCÍCIO 3

/* O que faz: Imprime quantidades de números em 3 arrays, sendo uma inicial, já definida, e outras 2 que começam vazias e, após o programa rodar, terão 2 grupos diferentes de números — uma terá ímpares; a outra, pares.

Como faz: Há 3 variáveis, sendo a primeira, "numeros", a que conta com a array de base do código. As outras duas, "array1" e "array2" começam vazias para retornarem no fim do código, respectivamente, números pares e números ímpares. No for of que vem em seguida, é definida uma variável "numero", para analisar o índice na variável "numeros" por meio de loop. Se os números forem pares, entram na array da variável "array1", caso contrário, na array da variável [array2]. No final, há 3 console.log, que imprimem quantos números há na array "números", na array de números pares e também na de ímpares.

Qual será o valor impresso no console: "Quantidade total de números 14", "6" e "8". */


// EXERCÍCIO 4

/* O que faz: Imprime o menor e o maior número da array.

Como faz: A array da variável "numeros" é analisada em loop a partir de um for of, com 2 outras variáveis para realizar as condicionais dentro do programa: "numero1", com valor inicial Infinity, e "numero2", com valor inicial 0. No for of, é declarada também a variável "numero", com 2 condicionais IF: uma para encontrar o número menor, outra para o maior. No primeiro IF, se "numero" for menor do que "numero1", a variável "numero" passa a ter o mesmo valor do que "numero1". Isso é possível por causa do Infinity de "numero1", que possibilita percorrer a array em busca do menor possível, já que qualquer número é menor do que "infinito". A lógica oposta é aplicada no segundo IF para encontrar o maior, já que qualquer número é maior do que 0, o que permite buscar o maior número possível.

Qual será o valor impresso no console: "-10" e "1590" */