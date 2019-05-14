let createHTML = require('create-html');
let fs = require('fs');
// const upath = require("upath")
var path = require('path');

async function robot(content){
	var projectName = content.nameProject;
	var base = `${projectName}\\${Object.keys(content.structuredDir)}`;

	console.log(content);

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

		var ext = {
			"extensionID": `${content.extensionID}`,
			"developerID": "crisciano.botelho",
			"createdBy"  : "Compasso",
			"version"    : 1,
			"timeCreated": "2019-05-02",
			"translations": [
				{
					"language": "en",
					"name": `${content.nameProject}`,
					"description": `${content.description}`
				},
				{
					"language": "pt_BR",
					"name":  `${content.nameProject}`,
					"description": `${content.description}`
				}
			]
		};
		var fileteste = 'ext.json'
		
		var fileName = 'index.html';
		
		// await existeBase(base, fileName, html);
		var filePath = `${base}\\${fileName}`;

		var pathteste = `${base}\\${fileteste}`;
		
		await createFile(fileteste, JSON.stringify(ext), pathteste)

		// await createFile(fileName, fileContent, filePath)
	}
	
	async function createFile(fileName, fileContent, filePath){
		console.log(fileName);
		
		await fs.writeFile(filePath, fileContent, (err) =>{
			if(err){ console.log(err); return }
			// console.log(data);
			console.log('success');
		})
	}

	createPage();
	
}


module.exports = robot