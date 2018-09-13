/** Ex1 - Usando if, perguntar para um usuário um threshold e depois um valor. 
Verificar se o valor é maior que o threshold, se sim, printar na tela "Abrir IM".
*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

//pede threshold e armazena na variavel de mesmo nome
var threshold = parseInt(prompt('Informe threshold: '));

//printa o valor
// console.log("=>threshold: ", threshold);

//pede valor e armazena na variavel de mesmo nome
var valor = parseInt(prompt('Informe valor: '));

//printa o valor
// console.log("=>valor: ", valor);

if (valor > threshold) {
	console.log("Abrir IM");
 } else {
	console.log("Não faz nada");
 }
