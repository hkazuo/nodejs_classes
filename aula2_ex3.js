/** 
Ex3: Criar um fluxo que simule uma calculadora, que deve seguir o seguinte processo:
	- Perguntar para o usuário um número
	- Perguntar para o usuário uma operação: soma, subtração, multiplicação ou divisão ( +, -, * ou / )
	- Perguntar para o usuário outro número
	- Fazer a conta e exibir na tela (ex: 10 * 5, o programa deve exibir 50)
	- Exibir para o usuário: "Para fazer outra operação digite um número ou digite "sair" para finalizar o programa)
		- Se o usuário digitar "sair", finalize o programa
		- Caso o usuário digitar outra coisa (não precisa validar se o valor digitado é um número), repita todos os passos novamente

*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

console.log('Programa calculadora');

//inicializacoes
var numero_1 = 0;
var operacao = '';
var numero_2 = 0;
var resultado = '';

//pede que o usuario informe um numero
numero_1 = prompt('Informe o primeiro numero da operação: ');

do
    {

    //pede que o usuario informe a operacao
    operacao = prompt('Informe a operacao desejada usando um dos símbolos entre parênteses ( +, -, * ou / ): ');

    //pede que o usuario informe um numero
    numero_2 = prompt('Informe o segundo número da operação: ');
   
    switch(operacao)
    {
        case "+":
            console.log("operação de soma: ", numero_1, "+", numero_2);
            resultado = Number(numero_1)+Number(numero_2);
            console.log("resultado: ", resultado); 
            break;
        case "-":
            console.log("operação de subtração: ", numero_1, "-", numero_2);
            resultado = Number(numero_1)-Number(numero_2);
            console.log("resultado: ", resultado);
            break; 
        case "*":
            console.log("operação de multiplicação: ", numero_1, "*", numero_2);
            resultado = Number(numero_1) * Number(numero_2);
            console.log("resultado: ", resultado);
            break; 
        case "/":
            console.log("operação de divisão: ", numero_1, "/", numero_2);
            resultado = Number(numero_1) / Number(numero_2);
            console.log("resultado: ", resultado);
            break; 
    }


    //pede que o usuario informe o primeiro numero para repetir a execucao ou informe que deseja sair
    numero_1 = prompt('"Para fazer outra operação digite um número ou digite "sair" para finalizar o programa: ');

}
while(numero_1 != "sair")
