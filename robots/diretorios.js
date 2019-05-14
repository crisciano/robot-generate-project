let createDir = require('create-dir')

function robot(content){

	var projectName = content.nameProject;
	var subDir = content.structuredDir.src;
	var base = `${ projectName }/${Object.keys(content.structuredDir)}`;

	// return new Promise( (resolve, reject)=> {

	// })
	createDir(base);
	console.log(`Created project -> ${base}`);
	subDir.map((item) => {
		createDir(`${base}/${item}`);
		console.log(`Created subDir -> ${base}/${item}`);
	})


}

module.exports = robot