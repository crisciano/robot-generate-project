let fs = require('fs');
let jszip = require('jszip');
let folderZip = require('zip-folder');

async function robot(content){

  
  async function zipContent(){
    var nameProject = content.nameProject;
    await fs.readdir(content.base, (err,data)=>{
      if(err)console.log(err);

      if (data) {
        folderZip(`.\\${content.base}`, `.\\${nameProject}.zip`, 
          (err)=> {
            if(err) console.log(err);
            console.log(`Create zip ->  ${nameProject}.zip`);
        })
      }
    })
  }

  await zipContent();
  

}

module.exports = robot