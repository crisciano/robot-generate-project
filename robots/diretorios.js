let createDir = require('create-dir')

function robot(content){

	var projectName = content.nameProject;
	var subDir = content.structuredDir.src;

	// Object.keys(structuredDir);
	var base = `${ projectName }/${Object.keys(content.structuredDir)}`;

	createDir( `${ base }`);
	console.log(`Created project -> ${base}`);
	subDir.forEach((item) => {
		createDir(`${base}/${item}`);
		console.log(`Created subDir -> ${base}/${item}`);
	})

}

module.exports = robot