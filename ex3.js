/** Ex3 - Usando switch, 
 * pergunte para o usuário qual o range de valores que ele quer saber e printe o correspondente:
    "OK" -> "O range esta entre 0 e 20"
    "Medio" -> "O range esta entre 21 e 40"
    "Alto" -> "O range esta entre 41 e 60"
    "Alerta" -> "O range esta entre 61 e 80"
    "Critico" -> "O range esta entre 81 e 100"

*/


//importa a lib que pega o input do usuario
var prompt = require('prompt-sync')();

//pede range e armazena na variavel de mesmo nome
var range = prompt('Informe range do qual deseja saber valores: ');

//printa o valor
// console.log("=>range: ", range);


switch( range )
{
	case "OK":
		console.log("O range esta entre 0 e 20");
	break;

	case "Medio":
        console.log("O range esta entre 21 e 40");
	break;

	case "Alto":
        console.log("O range esta entre 41 e 60");
	break;
    
    case "Alerta":
        console.log("O range esta entre 61 e 80");
	break;
    
    case "Critico":
        console.log("O range esta entre 81 e 100");
	break;

	default:
		console.log(":-|");
}
