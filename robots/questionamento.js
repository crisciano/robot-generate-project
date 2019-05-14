let readline = require('readline-sync');

// const question = [
// 	'Nome do projeto? ',
// 	'Quantas paginas? ',
// 	'qual o titulo da pagina? '
// ]

function robot(content){
	var question = content.questions.question;
	content.nameProject = setNameProject();
	content.extensionID = setExtension();
	content.description = setDescription();

	function setNameProject(){
		return readline.question(question[0]);
	}
	
	function setExtension(){
		return readline.question(question[2]);
	}

	function setDescription(){
		return readline.question(question[1]);
	}


}

module.exports = robot