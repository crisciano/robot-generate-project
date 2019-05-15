let fs = require('fs');
let folderZip = require('zip-folder');
let rmkdir = require('rimraf');

async function robot(content){

  
  async function zipContent(){
    var nameProject = content.nameProject;
    await fs.readdir(content.base, (err,data)=>{
      if(err)console.log(err);

      if (data) {
        folderZip(`.\\${content.base}`, `.\\${nameProject}.zip`, 
          (err)=> {
            if(err) console.log(err);
            deleteFolder(`.\\${content.base}`);
            console.log(`Create zip ->  ${nameProject}.zip`);
        })
      }
    })
  }

  async function deleteFolder(path){
    await rmkdir(path, ()=>{
      console.log(`Widget folder delete success.`);
    })
  }

  await zipContent();
}

module.exports = robot