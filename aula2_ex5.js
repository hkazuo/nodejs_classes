/** 
 Ex5: Pegue o exercício 3 e crie um módulo "calc.js". 
 Transforme cada operação (soma, subtração, multiplicação ou divisão) em uma função distinta dentro deste módulo. 
 Importe este novo módulo no fluxo e utilize essas funções.
*/

//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

//importa a lib com as operacoes de calculadora
var calc = require('./aula2_ex3_calc');


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
            resultado = calc.soma(numero_1, numero_2);
            console.log("resultado: ", resultado); 
            break;
        case "-":
            console.log("operação de subtração: ", numero_1, "-", numero_2);
            resultado = calc.subtracao(numero_1, numero_2);
            console.log("resultado: ", resultado);
            break; 
        case "*":
            console.log("operação de multiplicação: ", numero_1, "*", numero_2);
            resultado = calc.multiplicacao(numero_1, numero_2);
            console.log("resultado: ", resultado);
            break; 
        case "/":
            console.log("operação de divisão: ", numero_1, "/", numero_2);
            resultado = calc.divisao(numero_1, numero_2);
            console.log("resultado: ", resultado);
            break; 
    }


    //pede que o usuario informe o primeiro numero para repetir a execucao ou informe que deseja sair
    numero_1 = prompt('"Para fazer outra operação digite um número ou digite "sair" para finalizar o programa: ');

}
while(numero_1 != "sair")




