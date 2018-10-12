/** 
Ex1: Preencher um array de 0 a 100 e depois perguntar para o usuário um número. 
Procurar no array e printar na tela se achou ou não achou.
*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

// preenche array de 0 a 100

let arr = [];

console.log("Preenchendo array de 0 a 100...");

for(let i=0; i<=100; i++)
{
    arr[i] = i;
    // console.log(arr[i]);
}

console.log("Array preenchido.");


// pede valor

valor_usuario =  prompt("Informe valor: ")

console.log("Verificando se o valor informado está contido no array...");

let flg_found = false;

for(let i=0; i<=100; i++)
{
    // console.log(arr[i]);
    if (arr[i] == valor_usuario) {
        console.log("Achei! ", arr[i]);
        flg_found = true;
        break;
    }
}

if (flg_found == false) {
    console.log("Não achei :-(")
}