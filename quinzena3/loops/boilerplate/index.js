// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Exercícios de interpretação de código

// EXERCÍCIO 1
// RESPOSTA: O código está fazendo iterações com a variável i, somando em loop enquanto ela for menor do que 5. Quando ela chega a 4, acontece a soma 4+6 e chega ao valor 10, que é impresso no console.

//EXERCÍCIO 2
// RESPOSTA:
// a. Serão impressos todos os números maiores do que 18 (19, 21, 23, 25, 27 e 30).
// b. RESPOSTA LOGO ABAIXO:

/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
   for (let numero of lista) {
      console.log(numero)
 	} */

// Exercícios de escrita de código

// EXERCÍCIO 3 - TODOS FORAM FEITOS COM BASE NA CONSTANTE ABAIXO, POR ISSO ELA NÃO FOI REPETIDA AO LONGO DOS EXERCÍCIOS
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

/* RESPOSTA DA LETRA A
for (let numero of array) {
    console.log(numero)
} */

/* RESPOSTA DA LETRA B
for (let numero of array) {
    console.log(numero/10)
} */

/* RESPOSTA DA LETRA C
for (let numero of array) {
    if(numero%2 === 0) {
        console.log(numero)
    }
} */

/* RESPOSTA DA LETRA D
let stringArray = []
for (let i = 0; i < array.length; i++) {
    stringArray.push("O elemento do index " + i + " é" + " " + array[i])
    console.log(stringArray[i])
}  */

/* RESPOSTA DA LETRA E
let valorMaximo = 129
let valorMinimo = 22

for (let i = 0; i < array.length; i++) {
    if(array[i] > valorMaximo) {
        valorMaximo = array[i]
        console.log("O valor máximo é " + valorMaximo)
    } else if(array[i] < valorMinimo) {
        valorMinimo = array[i]
        console.log("O menor valor é " + valorMinimo)
    }
} */