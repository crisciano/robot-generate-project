let createDir = require('create-dir')

async function robot(content){

	var projectName = content.nameProject;
	var subDir = content.structuredDir.widget;
	var language = content.language;
	content.base = projectName;
	// var base = `${ projectName }/${Object.keys(content.structuredDir)}`;
	var base = `${content.base}/${Object.keys(content.structuredDir)}`;

	await createDir(base);
	console.log(`Created project -> ${base}`);
	// pasta com nome do widget
	await createDir(`${base}/${projectName}`);
	// create subdir in widgets
	await subDir.map((item) => {
		createDir(`${base}/${projectName}/${item}`);
		console.log(`Created subDir -> ${base}/${item}`);
	})
	// create language
	await language.map((item)=>{
		createDir(`${base}/${projectName}/locales/${item}`);
		console.log(`Created language -> ${base}/${projectName}/locales/${item}`);
	})


}

module.exports = robot