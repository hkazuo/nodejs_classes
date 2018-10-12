/** 
Ex2: Criar um array de 9 elementos numéricos de 0 a 9, porém com um número da sequência faltando (ex: [0,1,2,3,4,6,7,8,9]). 
Imprimir o número que está faltando no array (usando o exemplo acima, o programa printaria o 5).
*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

// preenche array de 0 a 9, com um numero faltante
let arr = [];

console.log("Preenchendo array de 0 a 9, com um numero faltante...");

//define numero faltante usando aleatoridade implementada com random e floor

let numero_faltante = Math.floor(Math.random() * 10);

console.log("Definindo o número faltante:", numero_faltante);

for(let i=0; i<=9; i++)
{
    if (i != numero_faltante) {
        arr[i] = i;
        // console.log(arr[i]);
    }
    
}

console.log("Procurando o número faltante:", numero_faltante);

for(let i=0; i<=9; i++)
{
    if (arr[i] == undefined) {
        console.log("Numero faltante: ", i);
    }
}


// // pede valor

// valor_usuario =  prompt("Informe valor: ")

// console.log("Verificando se o valor informado está contido no array...");

// flg_found = false;

// for(let i=0; i<=100; i++)
// {
//     // console.log(arr[i]);
//     if (arr[i] == valor_usuario) {
//         console.log("Achei! ", arr[i]);
//         flg_found = true;
//         break;
//     }
// }

// if (flg_found == false) {
//     console.log("Não achei :-(")
// }