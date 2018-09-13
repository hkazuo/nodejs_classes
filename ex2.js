/** Ex2 - Usando if, pergunte para o usuário um valor 
 * e depois verifique se esse valor está entre os seguintes ranges e printar a mensagem correspondente:
    Entre 0 e 20 -> "OK"
    Entre 21 e 40 -> "Medio"
    Entre 41 e 60 -> "Alto"
    Entre 61 e 80 -> "Alerta"
    Entre 81 e 100 -> "Critico"

*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

//pede valor e armazena na variavel de mesmo nome
var valor = prompt('Informe valor: ');

//printa o valor
// console.log("=>valor: ", valor);

if (valor >= 0 && valor <= 20) {
    console.log("OK");
} else if (valor >= 21 && valor <= 40) {
    console.log("Medio")
} else if (valor >= 41 && valor <= 60) {
    console.log("Alto")
} else if (valor >= 61 && valor <= 80) {
    console.log("Alerta")
} else if (valor >= 81 && valor <= 100) {
    console.log("Critico")
} else {
	console.log(":-|");
 }
