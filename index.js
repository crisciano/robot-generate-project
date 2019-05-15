let robots = {
	dir: require('./robots/diretorios.js'),
	question: require('./robots/questionamento.js'),
	confPages: require('./robots/confPages.js'),
	pages: require('./robots/pages.js'),
	zipWidget: require('./robots/zipWidget.js')
}

const content = {
	'structuredDir' : { 
		"widget" : [ 'js', 'less', 'locales', 'templates' ]
	},
	'language': ['en', 'pt_BR'],
	'questions': {
		"question": [
			'Nome do widget? (widgetExample) ',
			'Descrição curta do widget? ',
			'Id gerada para o widget? (extensionID) '
		]
	}
}

async function start(){
	
	robots.question(content);
	await robots.dir(content);
	await robots.confPages(content);
	await robots.pages(content);
	await robots.zipWidget(content);
}

start();