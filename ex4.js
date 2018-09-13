/** 
Ex4 - Em um array de tamanho 3, perguntar para o usuário o valor de cada posição do array. 
Depois printar para o usuário se existem números repetidos dentro do array.

*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

let arr = [];

//pede valor de cada posicao do array, armazenando-o na posicao correspondente
arr[0] = prompt('Informe valor da posição 0: ');
arr[1] = prompt('Informe valor da posição 1: ');
arr[2] = prompt('Informe valor da posição 2: ');

console.log("Verificando possíveis repetições...");

if ((arr[0] == arr[1]) || (arr[0] == arr[2]) || (arr[1] == arr[2])){
    console.log("repetição existe");
} else
    console.log("repetição não existe");