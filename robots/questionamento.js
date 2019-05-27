let readline = require('readline-sync');
let Prompt = require('prompt-checkbox');
let inquirer = require('inquirer');

// const question = [
// 	'Nome do projeto? ',
// 	'Quantas paginas? ',
// 	'qual o titulo da pagina? '
// ]

async function robot(content){
	var question = content.questions.question;
	// content.teste = await setTeste();
	content.nameProject = setNameProject();
	content.extensionID = setExtension();
	content.description = setDescription();

	
	// await setTeste();

	function setNameProject(){
		return readline.question(question[0]);
	}
	
	function setExtension(){
		return readline.question(question[2]);
	}

	function setDescription(){
		return readline.question(question[1]);
	}

	function setTeste(){
		console.log('checkbox');

		var questions = [
			{
				name: 'lag',
				type: 'input',
				message: question[3]
			}
		];

		inquirer.prompt(questions)
			.then(answers=> console.log(answers))
		
		// var prompt = new Prompt({
		// 	name: 'lag',
		// 	message: question[3],
		// 	choices: content.languageDefault
		// });
		 
		// // promises
		// prompt.run()
		// 	.then(function(answers) {
		// 		console.log(answers)
		// 	})
		// 	.catch(function(err) {
		// 		console.log(err)
		// 	})
		 
		// // async
		// prompt.ask(function(answers) {
		// 	console.log(answers)
		// });
	}

}

module.exports = robot