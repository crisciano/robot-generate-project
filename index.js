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

function start(){
	
	robots.question(content);
	robots.dir(content);
	robots.pages(content);

}

start();