let createHTML = require('create-html');
let fs = require('fs');
// const upath = require("upath")
var path = require('path');

async function robot(content){
	var projectName = content.nameProject;
	var base = `${projectName}\\${Object.keys(content.structuredDir)}`;

	console.log(content);
	

	async function createPage(){
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
		// await existeBase(base, fileName, html);

		await createFile(fileName, html)
	}
	
	async function createFile(fileName, html){
		console.log(fileName);
		
		await fs.writeFile(`${base}\\${fileName}`, html, (err) =>{
			if(err){ console.log(err); return }
			// console.log(data);
			console.log('success');
		})
	}

	async function existeBase(base, file, content){
		if(!fs.existsSync(base)){ 
			fs.mkdirSync(base, { recursive: true }, (err)=>{
				if(err) console.log(err);
			})
		}
		await createFile(file, content);
	}

	createPage();
	
}


module.exports = robot