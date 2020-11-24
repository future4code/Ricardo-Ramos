// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Exercícios de interpretação de código

// EXERCÍCIO 1
// Qual o teste que ele realiza? Resposta: Se o resto da divisão por 2 é ou não é igual a 0.
// Para que tipos de números ele imprime no console "Passou no teste"? Resposta: Números inteiros pares.
// Para que tipos de números a mensagem é "Não passou no teste"? Números ímpares e números não inteiros.

// EXERCÍCIO 2
// a. Para que serve o código? Resposta: para imprimir no console o preço de uma fruta especificada na lista.
// b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? Resposta: R$ 2.25
// c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? Resposta: R$ 5, já que passaria a ter o preço default sem o break.

// EXERCÍCIO 3
// a. O que a primeira linha está fazendo? Resposta: gerando um prompt na tela do usuário, que solicita que ele digite um número.
// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? Se o número for 10, aparece que passou no teste, já que o if especifica número maior do que 0. Se for -10, dá apenas uma mensagem de erro, já que não há um else para esse caso e fica somente a variável mensagem dentro do escopo, que não pode ser impressa fora dele já que ela não "existe" no programa de um modo geral por estar apenas dentro de um escopo específico.
// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. Resposta: Erro de que a variável mensagem não foi definida, já que ela não tem um const ou um let principal além do escopo onde ela surgiu.

// Exercícios de escrita de código

// EXERCÍCIO 4
// const idadeUsuario = prompt("Digite sua idade (apenas números) para saber se você pode dirigir")
// Number(idadeUsuario)

// if(idadeUsuario >= 18) {
//   console.log("Você pode dirigir!")
// } else {
//   console.log("Você não pode dirigir.")
// }

// EXERCÍCIO 5
// const turnoEstudo = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino e N para noturno")

// if(turnoEstudo === "M") {
//   console.log("Bom dia!")
// } else if(turnoEstudo === "V") {
//   console.log("Boa tarde!")
// } else if(turnoEstudo === "N") {
//   console.log("Boa noite!")
// } else {
//   console.log("Você não especificou em que turno estuda.")
// }

// EXERCÍCIO 6
// const turnoEstudo = prompt("Em que turno você estuda? Digite M para matutino, V para vespertino e N para noturno")
// let turno
// switch(turnoEstudo) {
//   case "M":
//   turno = console.log("Bom dia!")
//   break
//   case "V":
//     turno = console.log("Boa tarde!")
//   break
//   case "N":
//     turno = console.log("Boa noite!")
//   break
//   default: console.log("Você não especificou em que turno estuda.")
//   break
// }

// EXERCÍCIO 7
// const filme = prompt("Qual gênero de filme você e a pessoa com quem você tem amizade vão assistir?")
// const preco = prompt("Qual é o valor do ingresso (digite apenas números)?")

// if(filme === "Fantasia" && preco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }