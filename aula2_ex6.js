/**
 Ex6: Crie um programa que simulará uma agenda de contatos, onde um objeto JSON será usado para armazená-los. 
 As propriedades deste JSON representarão cada letra do alfabeto, 
 sendo que o valor de cada propriedade será um array de objetos JSON contendo nome e telefone. 

	O json deverá possuir o seguinte formato:
	{
		"A": [{
				"nome": "Alice",
				"telefone": "(11)9999-9999"
			},
			{
				"nome": "Arthur",
				"telefone": "(11)9999-9998"
			}
		],
		"N": [{
			"nome": "Nelson",
			"telefone": "(11)9999-9997"
		}],
		"R": [{
			"nome": "Rubens",
			"telefone": "(11)9999-9996"
		}]
	}

    Para pegar a primeira letra do nome em maiúsculo, utilize a função 'charAt()' e 
    a função 'toUpperCase()' que toda string do JavaScript possui:
	Ex:
	var x = 'Rafael Nojiri';
	console.log(x.charAt(0).toUpperCase()); // loga 'R'

	O fluxo que este programa deverá seguir é o seguinte:
	Primeira parte:
	- Perguntar para o usuário um nome e um telefone (em sequência)
	- Salvar o objeto contendo o usuário e o telefone dentro da letra correta do JSON
	- Perguntar se o usuário deseja continuar cadastrando contatos
		- Se o usuário digitar "nao", ir para a "segunda parte"
		- Se o usuário digitar "sim", continue executando a "primeira parte"
	Segunda parte:
	- Perguntar para o usuário um nome de contato cadastrado ou se ele deseja sair.
		- Se ele digitar 'sair', o programa deverá ser finalizado.
		- Se ele digitar qualquer outra coisa...
			- Pesquisar no JSON se o contato existe.
				- Se não existir, dizer para o usuário que o contato não está cadastrado.
				- Se existir, imprimir as informações deste usuário (pode ser o json do contato).
		- Repetir a "segunda parte"

 */


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

console.log("Agenda de contatos")

var agenda = {};
var contato = {};


// agenda["A"] = [];
// agenda["B"] = [];
// contato["nome"] = "Arthur";
// contato["telefone"] = "(11)99999-9999";
// agenda["A"].push(contato);
// console.log(agenda);

// contato = {}
// contato["nome"] = "Alice";
// contato["telefone"] = "(11)91111-1111";
// agenda["A"].push(contato);

flg_cadastra_contato = "sim";

while(flg_cadastra_contato != "não") {

    //pede que o usuario informe o nome de um contato
    nome = prompt('Informe um nome de contato: ');

    inicial = nome.charAt(0).toUpperCase();

    // pede que o usuario informe o telefone do contato
    telefone = prompt('Informe um telefone de contato: ');

    if (!(inicial in agenda)) {
        agenda[inicial] = [];
    }

    // insere dados do contato na agenda
    contato["nome"] = nome;
    contato["telefone"] = telefone;
    console.log("contato: ", contato);
    agenda[inicial].push(contato);
    
    contato = {};
    
    //pede que o usuario informe o nome de um contato
    flg_cadastra_contato = prompt('Deseja continuar com entrada de contatos? (sim/não): ');

}

console.log("agenda", agenda);

contato_a_pesquisar = prompt('Informe nome de contato a pesquisar (ou "sair" para finalizar programa): ');

while (contato_a_pesquisar != "sair") {

    flg_encontrado = false;
    inicial_a_pesquisar = contato_a_pesquisar.charAt(0).toUpperCase();
    // console.log('inicial_a_pesquisar', inicial_a_pesquisar);
    // console.log('agenda[', inicial_a_pesquisar,']', agenda[inicial_a_pesquisar]);
    if (agenda[inicial_a_pesquisar] != []) {
        // console.log('algo foi encontrado');
        for (let contato_item in agenda[inicial_a_pesquisar]) {
            // console.log('contato_item', contato_item)
            if (agenda[inicial_a_pesquisar][contato_item]["nome"] == contato_a_pesquisar ) {
                console.log('Contato encontrado na agenda: ', agenda[inicial_a_pesquisar][contato_item]);
                flg_encontrado = true
            }
        }
    }
    
    if (flg_encontrado == false) {
        console.log('Contato não encontrado na agenda.');
    }
        
    contato_a_pesquisar = prompt('Informe nome de contato a pesquisar (ou "sair" para finalizar programa): ');

    inicial_a_pesquisar = '';
}