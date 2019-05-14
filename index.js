let robots = {
	dir: require('./robots/diretorios.js'),
	question: require('./robots/questionamento.js'),
	pages: require('./robots/pages.js')
}

const content = {
	'structuredDir' : { 
		"widget" : [ 'js', 'less', 'locales', 'templates' ]
	},
	'language': ['en', 'pt-BR'],
	'questions': {
		"question": [
			'Nome do widget? (widgetExample) ',
			'Descrição curta do widget? ',
			'Id gerada para o widget? (extensionID) '
		]
	},
	'pages': [
		{ 'dir': '', 'page': 'ext.json'},
		{ 'dir': '', 'page': 'widget.json'},
		{ 'dir': '', 'page': 'script.js'},
		{ 'dir': '', 'page': 'widget.less'},
	]
}

async function start(){
	
	robots.question(content);
	await robots.dir(content);
	await robots.pages(content);

}

start();