/** 
Modulo do exercicio 5
Calculadora
*/

function funcSoma(numero_1, numero_2)
{
    return Number(numero_1)+Number(numero_2);
}

function funcSubtracao(numero_1, numero_2)
{
    return Number(numero_1)-Number(numero_2);
}

function funcMultiplicacao(numero_1, numero_2)
{
    return Number(numero_1) * Number(numero_2);
}

function funcDivisao(numero_1, numero_2)
{
    return Number(numero_1) / Number(numero_2);
}

module.exports = 

{
	soma: funcSoma,
    subtracao: funcSubtracao,
    multiplicacao: funcMultiplicacao,
	divisao: funcDivisao,
}

