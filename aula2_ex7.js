/**
 Ex7: Crie uma função recursiva que percorra todos os elementos de um JSON qualquer 
 que só possua texto como propriedade de seus nós internos 
 e imprima todas as propriedades que forem do tipo 'string'. 
 Para isso utilize o operador nativo 'typeof' que verifica o tipo de uma variável:
	
	Ex:
	var x = 'teste';
	if(typeof x == 'string') console.log('isso é uma string');

	Fluxo do programa:
	- Pedir para o usuário inserir uma string JSON qualquer (utilize o site https://jsonformatter.org/json-minify para transformar um JSON formatado em uma linha de string)
	- Transformar o JSON do usuário em objeto usando a função: JSON.parse(texto)
		Ex:
		var obj = JSON.parse('{"message": "hello world!"}');
		console.log(obj);
	- Percorrer o JSON e buscar por propriedades que forem string.
		- Se for string, imprimir o texto.
		- Se for objeto, continuar com o processo de busca.

	Exemplo para o input: 
		{"teste":{"a":{"texto1":"bla1","texto2":"bla2"},"b":{"texto1":"bla3","texto2":"bla4"}},"in1":{"in2":{"in3":{"texto":"lalala1","in4":{"in5":{"texto":"lalala2"}}}}}}

	Saída:
		bla1
		bla2
		bla3
		bla4
		lalala1
		lalala2
 */



function getStringFromJson(jsonObject) {

	for (let item in jsonObject) {
		// console.log('item', item);
		// console.log('item obj', obj[item]);
		// console.log('item obj type', typeof jsonObject[item]);
		if (typeof jsonObject[item] == 'string') {
			console.log('string encontrada: ', jsonObject[item]);
		}
		else if (typeof jsonObject[item] == 'object' && typeof jsonObject[item] != 'null') {
		// 	console.log('jsonObject[item]: ', jsonObject[item], "- bora analisar esse objeto");
			getStringFromJson(jsonObject[item]);
		}
		else console.log('Verifique propriedade do elemento json: ', item, jsonObject[item]);		
		
	}
}

 //importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

console.log("Procura strings dentro de string JSON")

var string_json = {};

//pede que o usuario informe a string JSON
string_json = prompt('Informe uma string JSON: ');

console.log("String json", string_json)

var obj = JSON.parse(string_json);

console.log("Objeto json:", obj);

console.log("Saída: ")
getStringFromJson(obj);

