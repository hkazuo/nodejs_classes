/**
 Ex8: Usando função como parâmetro de outra função, crie uma única função 
 chamada "funcImpl" em um módulo externo que consiga utilizar as funções definidas 
 no programa abaixo (a saída do programa deve fazer sentido):

 */

const {funcImpl} = require('./modulo-ex8');
const prompt = require('prompt-sync')();

function soma(valor1, valor2) { 
	return Number(valor1) + Number(valor2); 
}

function subtracao(valor1, valor2) { 
	return Number(valor1) - Number(valor2); 
}

function multiplicacao(valor1, valor2) { 
	return valor1 * valor2; 
}

function divisao(valor1, valor2) { 
	return valor1 / valor2; 
}

let valor1 = prompt('insira o primeiro valor: \n');
let valor2 = prompt('insira o segundo valor: \n');

console.log('a soma de ' + valor1 + ' + ' + valor2 + ' = ' + funcImpl(valor1, valor2, soma));
console.log('a subtração de ' + valor1 + ' - ' + valor2 + ' = ' + funcImpl(valor1, valor2, subtracao));
console.log('a multiplicação de ' + valor1 + ' * ' + valor2 + ' = ' + funcImpl(valor1, valor2, multiplicacao));
console.log('a divisão de ' + valor1 + ' / ' + valor2 + ' = ' + funcImpl(valor1, valor2, divisao));
