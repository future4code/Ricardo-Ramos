// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Exercícios de interpretação de código

/* 1.
a. Resultado é false, pois bool1 e bool2 são opostos
b. Resultado é false, já que mesmo que o bool3 seja o contrário do bool2, ainda há o bool2 em si a considerar e ele é false, diferentemente dos outros dois.
c. Resultado é true, pois o ponto de exclamação é "não" à variável resultado, que é false e, logo, ele se torna true. Além disso, há um "ou" representado por || com ambas as variáveis sendo true.
d. O typeof é boolean, já que o resultado é true ou false.

2.
a. undefined, pois não foi definido um valor
b. null, pois é o valor que foi definido
c. 11, pois considera os 11 valores declarados na array C
d. 3, pois solicita o valor que está na posição 0 da array
e. mostra a array com os 11 valores especificados, mas muda o segundo valor pra 19, já que [i+1], considerando que o i tem valor 0, representa a posição 1 da array
f. 9, pois [i+6] é 0+6, ou seja, a variável valor apresenta a posição 6 da array, que tem o número 9 */





// Exercícios de escrita de código (estão comentados para não interferirem uns nos outros ao testar no console)

// 1.
// let idadeUsuario = prompt("Digite a sua idade (usando apenas números)")
// let idadeAmizade = prompt("Digite a idade da pessoa com quem você tem mais amizade (usando apenas números)")

// Number(idadeUsuario)
// Number(idadeAmizade)

// let comparaIdade = ((idadeUsuario > idadeAmizade) && true)

// console.log("Sua idade é maior do que a do seu melhor amigo?", comparaIdade)

// let idadeDiferenca = idadeUsuario - idadeAmizade
// Number(idadeDiferenca)

// console.log("A diferença de idade entre vocês é", idadeDiferenca)


// 2.
let insiraNumeroPar = prompt("Insira um número par (se não for inteiro, use ponto em vez de vírgula)")
Number(insiraNumeroPar)

console.log("O resto da divisão deste número por 2 é", insiraNumeroPar%2)

// Usando números pares, o resto é sempre 0, ou seja, a divisão dá certinho. Usando um número impar inteiro, o resto é 1, embora seja possível dividir por números "quebrados" usando ponto em vez de vírgula - caso contrário, dá erro ao exibir o resultado, dizendo que é NaN