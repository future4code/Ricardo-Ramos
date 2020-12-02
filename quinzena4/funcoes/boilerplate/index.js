// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Exercícios de interpretação de código

// EXERCÍCIO 1
// a. Serão impressos os números 10 e 50, já que é 2 * 5 e 10 * 5.
// b. Não apareceria nada, pois o console.log serve justamente para imprimir os valores no console.

// EXERCÍCIO 2
// a. Os nomes Darvas e Goli, já que o loop roda enquanto o resultado for menor do que 2. Impressos 2 itens da array, ele para de rodar.
// b. Os nomes Amanda e Caio, pelos mesmos motivos citados no item logo acima.

// EXERCÍCIO 3
// RESPOSTA: Se um número a ser especificado na função tiver o resto de divisão igual a 0, será incluído na array, inicialmente vazia, o número multiplicado por ele mesmo. Uma possível alternativa para renomear a arrayFinal seria numeroAoQuadrado.


// Exercícios de escrita de código

// EXERCÍCIO 4

// a. RESPOSTA ABAIXO:
// const nome = "Ricardo"
// const idade = 30
// const cidade = "Botucatu"
// const estudante = "estudante"

// function informacoes() {
//     console.log("Eu sou", nome + ", tenho", idade, "anos, moro em", cidade, "e sou", estudante)
// }

// informacoes()

// b. RESPOSTA ABAIXO:
// let nome = prompt("Digite o seu nome")
// let idade = prompt("Digite a sua idade")
// let cidade = prompt("Digite a cidade onde você mora")
// let estudante = confirm("Você estuda no momento? Selecione OK se sim e CANCELAR se não.")

// Number(idade)

// function informacoes(nome, idade, cidade, estudante) {
//     if(estudante === true) {
//         console.log("Eu sou", nome, ", tenho", idade, "anos, moro em", cidade, "e sou estudante")
//     } else {
//         console.log("Eu sou", nome, ", tenho", idade, "anos, moro em", cidade, "e não sou estudante")
//     }
// }

// informacoes(nome, idade, cidade, estudante)


// EXERCÍCIO 5

// a. RESPOSTA ABAIXO:
// function somarNumeros(num1, num2) {
//     let soma = num1 + num2
//     return soma
// }
// let resultado = somarNumeros(8, 7)
// console.log(resultado)

// b. RESPOSTA ABAIXO:
// function verificarNumeroMaior(num1, num2) {
//     return num1 >= num2
// }

// console.log(verificarNumeroMaior(7, 8))

// c. RESPOSTA ABAIXO:
// const mensagemRepetida = (mensagem) => {
//     for (let i = 0; i < 10; i++) {
//         console.log(mensagem)
//     }
// }

// mensagemRepetida("Bora testar essa repetição aí!")


// EXERCÍCIO 6

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. RESPOSTA ABAIXO:
// function quantidadeElementos(array) {
//     console.log(array.length)
// }
// quantidadeElementos(array)

// b. RESPOSTA ABAIXO:
// function verificarPar(numero) {

//     let par 
//     if(numero%2 === 0) {
//         par = true
//     } else {
//         par = false
//     }
//     return par
// }

// console.log(verificarPar(45))

// c. RESPOSTA ABAIXO:
// function quantidadePares (array) {
//     let numerosPares = 0
//     for(let par of array) {
//         if(par%2 === 0) {
//             numerosPares++
//         }
//     }
//     return numerosPares
// }
// console.log("Há um total de", quantidadePares(array), "números pares")

// d. NÃO CONSEGUI :()