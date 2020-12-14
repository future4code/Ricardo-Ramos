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


// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

// EXERCÍCIO 1

/* Forma 1 — Iterar índices de uma array. Exemplo:

let numeros = [1, 2, 3, 4, 5]

for(numero of numeros) {
    console.log(numero)
} 

Forma 2 — Com a função map(). Exemplo:

let numeros = [1, 2, 3, 4, 5]

let listaNumeros = numeros.map((lista) => {
    return lista
})

console.log(listaNumeros)

Forma 3 — Com a função filter(). Exemplo:

let numeros = [1, 2, 3, 4, 5]

let numerosImpares = numeros.filter((numero) => {
    return numero%2 === 1
})

console.log(numerosImpares) */


// EXERCÍCIO 2

/* a) "booleano1 && booleano2 && !booleano4" tem valor false

b) "(booleano1 && booleano2) || !booleano3" tem valor false

c) "(booleano2 || booleano3) && (booleano4 || booleano1)" tem valor true

d) "!(booleano2 && booleano3) || !(booleano1 && booleano3)" tem valor true

e) "!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)" tem valor true */


// EXERCÍCIO 3

/* O código apresentado não funciona, pois uma variável const não é flexível como a let e precisa de um valor predefinido, além da condicional estar incompleta — apenas incluir um valor na const levaria a um loop infinito. Para completar o código, é possível fazer da seguinte forma:

const quantidadeDeNumerosPares = Number(prompt("Quantos números pares você quer ver (use apenas o teclado numérico)?"))
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
} */


// EXERCÍCIO 4

/* let triangulos = () => {
    let a = Number(prompt("O triângulo é equilátero, isósceles ou escaleno? Digite o primeiro tamanho (apenas números)."))
    let b = Number(prompt("O triângulo é equilátero, isósceles ou escaleno? Digite o segundo tamanho (apenas números)."))
    let c = Number(prompt("O triângulo é equilátero, isósceles ou escaleno? Digite o terceiro e último tamanho (apenas números)."))
    
    if (a === b && b === c) {
      console.log("Triângulo equilátero")
    } else if (a === b || a === c || b === c) {
      console.log("Triângulo isósceles")
    } else {
      console.log("Triângulo escaleno")
    }
  }
  triangulos() */


  // EXERCÍCIO 5

/* const num1 = Number(prompt("Vamos comparar 2 números? Digite o 1º (use teclado numérico)."))
const num2 = Number(prompt("Vamos comparar 2 números? Digite o 1º (use teclado numérico)."))

let maior = 0
let diferenca = 0 


if (num1 > num2) {
    maior = num1
    console.log("O maior é: ", num1)
} else {
    maior = num2
    console.log("O maior é: ", num2)
}

if (num1 % num2 === 0) {
    console.log(num1 + " é divisível por " + num2)
} else {
    console.log(num1 + " não é divisível por " + num2)
}

if (num2 % num1 === 0) {
    console.log(num2 +" é divisível por " + num1)
} else {
    console.log(num2 +" não é divisível por " + num1)
}

diferenca = num1 - num2
if (diferenca < 0) {
    diferenca = diferenca * -1
}
console.log("A diferença entre eles é " + diferenca) */


// EXERCÍCIOS DE FUNÇÕES

// EXERCÍCIO 1



// EXERCÍCIO 2

/* function oiLabenu() {
    return alert("Hello Labenu")
}

oiLabenu()*/


// EXERCÍCIOS DE OBJETOS

// EXERCÍCIO 1

/* Arrays são listas que podem ser usadas para armazenar e/ou guardar múltiplas informações de uma vez. Objetos são conjuntos de dados dentro de uma mesma variável e permitem representar dados mais complexos, como dados atrelados a um determinado usuário de um sistema. */


// EXERCÍCIO 2

/* let criaRetangulo = (lado1, lado2) => {
    return {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1+lado2),
        area: lado1 * lado2
    }
}
console.log(criaRetangulo(Number(prompt("Vamos verificar informações sobre um triângulo? Digite a largura dele (apenas números")), Number(prompt("Vamos verificar informações sobre um triângulo? Digite a largura dele (apenas números")))) */


// EXERCÍCIO 3

/* const filmeFavorito = {
    titulo: 'Clube da Luta',
    ano: 1999,
    diretor: 'David Fincher',
    atrizesEAtores: ["Edward Norton", " Brad Pitt", " Meat Loaf", " Zack Grenier"]
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atrizesEAtores}.`) */


// EXERCÍCIO 4

/* const pessoa = {
    nome: "Fulano",
    idade: 100,
    email: "fulano@fulano.gov",
    endereco: "Rua Sem Nome, 0"
}

function anonimizarPessoa() {
    return {
        nome: "Anônimo",
        idade: 100,
        email: "fulano@fulano.gov",
        endereco: "Rua Sem Nome, 0"
    }
} */


// EXERCÍCIOS DE FUNÇÕES DE ARRAY

// EXERCÍCIO 1

/* let arrayPessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

a) let adultos = arrayPessoas.filter((separarArrays) => {
    return separarArrays.idade >= 20
})

console.log(adultos) */

/* b) let menosDe20Anos = arrayPessoas.filter((separarArrays) => {
    return separarArrays.idade < 20
})

console.log(menosDe20Anos) */


// EXERCÍCIO 2

// const array = [1, 2, 3, 4, 5, 6]

/* a) const multiplicaPor2 = array.map((numero) => {
    return 2 * numero
})

console.log(multiplicaPor2)  */

/* b) const multiplicaPor3 = array.map((numero) => {
    return 3 * numero
})

console.log(multiplicaPor3) */

/* c) const verificaParOuImpar = array.map((numero) => {
    if (numero % 2 === 0) {
        return ` ${numero} é par`
    } else {
        return ` ${numero} é ímpar`
    }
})

console.log(String(verificaParOuImpar)) */


// EXERCÍCIO 3

/* const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
] */

/* a) const entradaPermitida = pessoas.filter((podeOuNao) => {
    return podeOuNao.idade >= 14 && podeOuNao.idade <= 60 && podeOuNao.altura >= 1.5
})

console.log(entradaPermitida) */

/* b) const entradaProibida = pessoas.filter((podeOuNao) => {
    return podeOuNao.idade < 14 || podeOuNao.idade > 60 || podeOuNao.altura < 1.5
})

console.log(entradaProibida) */


// EXERCÍCIO 4

/* const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function enviarMensagem(consultas) {
    let mensagem = consultas.map((dados) => {
        if(dados.cancelada === false) {
            if(dados.genero === "masculino") {
                return `Olá, Sr. ${dados.nome}. Estamos enviando essa mensagem para lembrá-lo da sua consulta no dia  ${dados.dataDaConsulta}. Por favor, acuse o recebimento desse email.`
            } else {
                return `Olá, Sra. ${dados.nome}. Estamos enviando essa mensagem para lembrá-la da sua consulta no dia  ${dados.dataDaConsulta}. Por favor, acuse o recebimento desse email.`
            }
        } else {
            if(dados.genero === "masculino") {
                return `Olá, Sr. ${dados.nome}. Infelizmente, sua consulta marcada para o dia ${dados.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
            } else {
                return `Olá, Sra. ${dados.nome}. Infelizmente, sua consulta marcada para o dia ${dados.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
            }
        }
    })
        return mensagem
}

console.log(enviarMensagem(consultas)) */


// EXERCÍCIO 5

/* const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.map((saldoAtualizado) => {

    for (let i = 0; i < saldoAtualizado.compras.length; i++) {
        saldoAtualizado.saldoTotal -= saldoAtualizado.compras[i]
    } 
 })

 console.log(contas) */