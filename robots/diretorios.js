let createDir = require('create-dir')

async function robot(content){

	var projectName = content.nameProject;
	var subDir = content.structuredDir.src;
	var base = `${ projectName }/${Object.keys(content.structuredDir)}`;

	await createDir(base);
	console.log(`Created project -> ${base}`);
	await subDir.map((item) => {
		createDir(`${base}/${item}`);
		console.log(`Created subDir -> ${base}/${item}`);
	})


}

module.exports = robot