/* Exercícios de interpretação de código

1. O primeiro console.log imprime 10, enquanto o segundo imprime 10 e 5, já que a variável b foi mudada durante o proceddo

2. Vai imprimir o valor 10 três vezes, pois a variável b muda de valor e anula o 20 inicial, sendo igual à c, que é igual à a, que é 10. */

// Exercícios de escrita de código

let nome = ''

let idade = ''

console.log(typeof nome)
console.log(typeof idade)

// Se declarar const em ambas, retorna a mensagem "index.js:9 Uncaught SyntaxError: Missing initializer in const declaration". Pelo que compreendi, parece ter algo a ver com a questão do uso de const para informações que não podem mudar, sendo que não há nem um valor definido para elas, aí apresenta o erro. Se usar let, no entanto, apresenta "undefined" para ambos porque não há um valor definido se não atribuir nada. Se atribuir com aspas, mesmo que vazias, retorna como string, já que tudo o que está dentro de aspas é uma string de texto.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade (somente o número)?")

console.log("Olá", nome, "você tem", idade, "anos")

let perguntaEndereco = "Qual é o seu endereço?"
let endereco = prompt(perguntaEndereco)
console.log(perguntaEndereco, endereco)


let perguntaMusica = "Qual a sua música favorita?"
let musica = prompt(perguntaMusica)
console.log(perguntaMusica, musica)

let perguntaRoupa = "Qual tipo de roupa prefere comprar?"
let roupa = prompt(perguntaRoupa)
console.log(perguntaRoupa, roupa)

let perguntaCurso = "O que você está aprendendo no curso?"
let curso = prompt(perguntaCurso)
console.log(perguntaCurso, curso)

let perguntaTrabalho = "Quanto tempo pretende levar para conseguir um trabalho como dev?"
let trabalho = prompt(perguntaTrabalho)
console.log(perguntaTrabalho, trabalho)


let arrayComidas = ["lasanha", "pizza", "x-bacon com gorgonzola", "churrasco", "brownie"]
console.log("Essas são as minhas comidas preferidas:")
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])

arrayComidas[1] = prompt("Qual a sua comida favorita?")

console.log("Essas são as minhas novas comidas preferidas:")
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])



let perguntasBool = ["2 + 2 é igual a 4?", "HTML é linguagem de programação?", "Estamos vivendo em uma simulação?"]
let respostasBool = [true, false, false]

console.log(perguntasBool[0], respostasBool[0])
console.log(perguntasBool[1], respostasBool[1])
console.log(perguntasBool[2], respostasBool[2])

// aula de 18/11/2020

