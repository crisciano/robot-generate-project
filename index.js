let readline = require('readline-sync');
let createHTML = require('create-html');

let fs = require('fs')
// let writeFile = require('write');

var question = [
	'quantas paginas? ',
	'qual o titulo da pagina? '
]

function start(){
	const content = {}

	content.nPaginas = setNumeroPaginas();
	content.title = setTitle();

	function setNumeroPaginas(){
		return readline.question(question[0]);
	}

	function setTitle(){
		return readline.question(question[1]);
	}

	function createPage(){
		var html = createHTML({
		  title: content.title,
		  script: 'example.js',
		  scriptAsync: true,
		  css: 'example.css',
		  lang: 'en',
		  dir: 'rtl',
		  head: '<meta name="description" content="example">',
		  body: '<p>example</p>',
		  favicon: 'favicon.png'
		})

		var fileName = 'index.html';
		var stream = fs.createWriteStream(fileName)

		stream.once('open', (fd)=>{
			stream.end(html);
		})
	}

	createPage();
	// console.log(content);
}

start();