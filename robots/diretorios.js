let createDir = require('create-dir')

const strutureDir = [{ 
	"src" : 
		[ 'img', 'js', 'sass', 'css' ]
}];

function robot(content){

	var projectName = content.nameProject;

	async () => {
		try {
			await createDir( `${ projectName }`);
		await createDir(`${ projectName }/src`);
		} catch(error) {
			console.error(error.message);
		}
	}

	console.log(content);

}

module.exports = robot