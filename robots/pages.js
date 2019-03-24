let createHTML = require('create-html');
let fs = require('fs');

function robot(content){

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
	
}


module.exports = robot