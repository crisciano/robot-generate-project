let robots = {
	welcome: require('./robots/welcome.js'),
	dir: require('./robots/diretorios.js'),
	question: require('./robots/questionamento.js'),
	confPages: require('./robots/confPages.js'),
	pages: require('./robots/pages.js'),
	zipWidget: require('./robots/zipWidget.js')
}

const content = require("./conf/content").content

async function start(){
	robots.welcome();
	await robots.question(content);
	await robots.dir(content);
	await robots.confPages(content);
	await robots.pages(content);
	await robots.zipWidget(content);
}

start();