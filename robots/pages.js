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

		var widget ={
			"availableToAllPages": true,
			"config": {},
			"global": false,
			"globalEnabled": true,
			"i18nresources": "headerLineTop",
			"imports": [],
			"javascript": "script",
			"jsEditable": true,
			"minWidth": 1,
			"source": 101,
			"version": 1,
			"translations" : [
				{
						"language": "en",
						"name": `${content.nameProject}`
				},
				{
						"language": "pt_BR",
						"name": `${content.nameProject}`
				}
			]
		};
		var less = `.headerLineTop {
				background: #fff;
		}`;

		var script =`
			define(
				// Dependencies
				['jquery', 'knockout'],
		
				// Module Implementation
				function($,ko) {
						// We recommend enabling strict checking mode
						'use strict';
		
						return {
								onLoad: function(widget) {
										console.log('Carregando widget base...');
								}
						}
				}
			);
		`;

		// cria o ext.json
		var extFile = 'ext.json';
		var extPath = `${base}\\${extFile}`;
		await createFile(extFile, JSON.stringify(ext), extPath)

		// cria o widget.json
		var widgetFile = 'widget.json';
		var widgetPath = `${base}\\${projectName}\\${widgetFile}`;
		await createFile(widgetFile, JSON.stringify(widget), widgetPath)

		// criar o widget.less
		var lessFile = "widget.less";
		var lessPath = `${base}\\${projectName}\\less\\${lessFile}`;
		await createFile(lessFile, JSON.stringify(less), lessPath)

		// criar o script.js
		var scriptFile = "script.js";
		var scriptPath = `${base}\\${projectName}\\js\\${scriptFile}`;
		await createFile(scriptFile, JSON.stringify(script), scriptPath)
		// criar o display.template.
		
		// var fileName = 'index.html';
		// var filePath = `${base}\\${fileName}`;
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