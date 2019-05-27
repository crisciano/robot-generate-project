var dust = require('dustjs-linkedin');
var fs = require('fs')
var pd = require('pretty-data').pd;

const content = require(".././conf/content").content

var languages = content.language;

var eTranslations = [];
var wTranslations = [];
var extensionID = "123";
var data = getDate();

languages.map(language=>{
  eTranslations.push({
    "language": language, 
    "name": `${content.nameProject}`,
    "description": `${content.description}`})
  wTranslations.push({ 
    "language": language, 
    "name": `${content.nameProject}`})
})

console.log(eTranslations);


var pages = [
  {
    "fileName": "teste.html",
    "fileType": "xml",
    "filePath": __dirname +"\\teste.html",
    "fileTemplate": __dirname +"\\template.dust",
    "fileConf": {
        "title": "Famous People", 
        "names" : [{ "name": "Larry" },{ "name": "Curly" },{ "name": "Moe" }]
      }
  },{
    "fileName": "teste.less",
    "fileType": "css",
    "filePath": __dirname +"\\teste.less",
    "fileTemplate": __dirname +"\\exampleLess.dust",
    "fileConf": {}
  },{
    "fileName": "teste.js",
    "fileType": "js",
    "filePath": __dirname +"\\teste.js",
    "fileTemplate": __dirname +"\\exampleScript.dust",
    "fileConf": {}
  },{
    "fileName": "ext.json",
    "fileType": "json",
    "filePath": __dirname +"\\ext.json",
    "fileTemplate": __dirname +"\\exampleExtJson.dust",
    "fileConf": {
      "extensionID" : extensionID,
      "data" : getDate(),
      "eTranslations": eTranslations
    }
  }
]

dust.optimizers.format = function(ctx, node) { return node };

var fileName = 'teste.html';
var fileType = 'xml';
var fileTemplate = __dirname +"\\template.dust";
var fileConf = {
  "title": "Famous People", 
  "names" : [{ "name": "Larry" },{ "name": "Curly" },{ "name": "Moe" }]
}
var filePath = __dirname +"\\"+ fileName;
// createFilePage(fileTemplate, fileType ,fileConf, filePath, fileName)

pages.map( page=>{
  createFilePage(
    page.fileTemplate, 
    page.fileType,
    page.fileConf, 
    page.filePath, 
    page.fileName)
})

function createFilePage(fileTemplate, fileType ,fileConf, filePath, fileName){
  // Read template
  var src = fs.readFileSync(fileTemplate, 'utf8');
  // // Compile the template under the name 'hello'
  var compiled = dust.compile(src, 'hello');
  // Register the template with Dust
  dust.loadSource(compiled);
  // Render the template
  dust.render('hello', fileConf, function(err, out) {
    console.log(out);
    
    fs.writeFile(filePath, prettyData(fileType, out), 'utf8', (err) =>{
      if(err){ console.log(err); return }
      console.log(`Create file -> ${fileName}`);
    })
  });
}

function prettyData(fileType, out){
  if(fileType == 'xml'){ return pd.xml(out) }
  if(fileType == 'css'){ return pd.css(out) }
  if(fileType == 'json'){ return pd.json(out) }
  if(fileType == 'js'){ return out }
}

function getDate(){
  var d = new Date();
  var year = d.getFullYear();
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0'); 

  return `${year}-${month}-${day}`;
}