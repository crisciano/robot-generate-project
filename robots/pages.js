let createHTML = require('create-html');
let fs = require('fs');

async function robot(content){
	var projectName = content.nameProject;

	async function createPage(){
		var fileContent = createHTML({
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

		await content.pages.map( page =>{
			createFile(page.extFile, page.extContent, page.extPath)
		})
	}
	
	async function createFile(fileName, fileContent, filePath){
		await fs.writeFile(filePath, fileContent, 'utf8', (err) =>{
			if(err){ console.log(err); return }
			console.log(`Create file -> ${fileName}`);
		})
	}

	await createPage();
	
}


module.exports = robot