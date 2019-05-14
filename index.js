let robots = {
	dir: require('./robots/diretorios.js'),
	question: require('./robots/questionamento.js'),
	pages: require('./robots/pages.js')
}

const content = {
	'structuredDir' : { 
		"src" : [ 'img', 'js', 'sass', 'css' ]
	},
	'questions': {
		"question": [
			'Nome do projeto? ',
			'Quantas paginas? ',
			'qual o titulo da pagina? '
		]
	}
}

async function start(){
	
	robots.question(content);
	await robots.dir(content);
	setTimeout(() => {
		robots.pages(content);
		
	}, 500);

}

start();