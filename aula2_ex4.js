/** 
Ex4: Fazer um programa que peça para o usuário digitar uma lista de palavras e depois perguntar quantas vezes uma palavra se repete dentro dessa lista. O programa deverá fazer dois fluxos:
	Primeira parte:
	- Perguntar para o usuário uma palavra
	- Salvar a palavra em um array
	- Continuar perguntando até o usuário digitar "sair":
		- Se o usuário digitar "sair", ir para a "segunda parte"
		- Se o usuário digitar outra coisa, continue executando a "primeira parte"
	Segunda parte:
	- Perguntar para o usuário uma palavra a ser buscada
	- Exibir quantas vezes essa palavra se repete na lista de palavras
*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

//definicoes iniciais
var arr_palavra = []
var palavra = ''
var i = 0

console.log("Inclusão de palavra(s) em lista, seguida de busca na lista")
while (palavra!="sair")
    {

    //pede que o usuario informe uma palavra
    palavra = prompt('Informe uma palavra para incluir na lista(ou "sair" para iniciar busca): ');    
    arr_palavra[i] = palavra;
    i = i + 1;

    }
console.log("Número de palavras armazenadas: ", i+1)
palavra_buscada = prompt('Informe uma palavra a ser buscada: ');

var j = 0
var n_achadas = 0
while (j<=i) {
    if (arr_palavra[j] == palavra_buscada) {
        n_achadas = n_achadas + 1
    }
    j = j+1
}

console.log("Número de vezes que a palavra buscada se repete na lista de palavras: ", n_achadas)