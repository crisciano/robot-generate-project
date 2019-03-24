let readline = require('readline-sync');

// const question = [
// 	'Nome do projeto? ',
// 	'Quantas paginas? ',
// 	'qual o titulo da pagina? '
// ]

function robot(content){
	var question = content.questions.question;
	content.nameProject = setNameProject();
	content.nPaginas = setNumeroPaginas();
	content.title = setTitle();

	function setNameProject(){
		return readline.question(question[0]);
	}


	function setNumeroPaginas(){
		return readline.question(question[1]);
	}

	function setTitle(){
		return readline.question(question[2]);
	}


}

module.exports = robot